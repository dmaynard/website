---
date: 2021-10-06
title: "Adding a wasm/rust module to a Vue App"
template: post
teaser: "Adding a WASm/Rust npm module to a Vue Application"
thumbnail: "../thumbnails/logo-pc-gaming.png"
slug: wasmrust
categories:
  - coding
  - development
tags:
  - Rust
  - Vue
  - Chaotic Attractor
---

### Old Dog, New Tricks

![](../thumbnails/Chaos1.png)

## Background

I have been coding for more than 50 years. I am retired now, but still enjoy learning. However at my age, 74, I have found that learning something and remembering it are two different things. This becomes a problem when I have several simultaneous projects that I am working on. Coming back to a project after a week away I often have trouble remembering exactly where I was and what I was last doing. To solve this problem I have decided to blog the development process of this project. I am currently working a project to add a Rust based implementation of a Chaotic Attractor to my existing Vue based, single page ES6 screen saver/ visual benchmark. My hope is that it will aid me in the development process. It will be an added bonus is it also helps some other developers working on similar problems.

## Motivation

Why Rust? Rust is a statically-typed programming language designed for performance and safety, especially safe concurrency and memory management. I know that the world's software infrastructure is riddled with security vulnerabilities waiting to be discovered and exploited. A language can and should help developer to write safe code. Rust does. I was also excited to learn that Rust can compile to [Web Assembly Language](webassembly.org) which means it can run in any modern browser.
![Modern Browsers](../thumbnails/ModernBrowsers.png)

Why a chaotic attractor? I have already written a JavaScript (ECMA Script 6) single page application, , which servers as one kind of visual performance benchmark, [chaotic attractor screen saver](https://chaotic.netlify.com). I am very curious how the performance of Web Assembly will compare to ES6 in the various modern browsers? I don't know. This it was motivates me to create this project.

## Initial Conditions

After familiarizing myself with the concepts and syntax of the Rust language I worked through the excellent [Rust and WebAssembly](https://rustwasm.github.io/docs/book/) online book. I went through the entire tutorial and created some new Rust functions and even packaged the Rust module and an npm package. The finished product is a single page ES6 application that implements Conway's Game of Life by calling a Rust implementation module. The [ES6 source code](https://github.com/dmaynard/jslife) and the [Rust Code](https://github.com/dmaynard/wasm-game-of-life/settings) are both public repositories on github. The ES6 version of the screen saver, performance benchmark single page application can be run [here](https://chaotic.netlify.app/)

## Strategy

The main purpose of this exercise is to compare the performance of rust/wasm to that of the Javascript, ES6, code. Most of the code in the single page Vue application is framework and UI code, and application code controlling the generation of the chaotic attractors. Only a small portion of the code actually actually iterates the points to generate the pictures. This the code whose performance I want to compare ES6 and WASM/Rust. So my first step was to separate the ES6 iterator code into a [separate ES6 Module.](https://github.com/dmaynard/attractor-iterator/tree/master)

## Communication

To establish that I can successfully call a wasm/rust module from ES6 and vice-versa I first tried the simple example in the tutorial above. This exports a single function greet which in turn calls a function is ES6.

```
mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rust-wasm-attractor!");
}

```

Running the command

```
wasm-pack build --scope davidsmaynard
```

creates a npm package of the code

```
ls pkg
README.md                        rust_wasm_attractor_bg.js
package.json                     rust_wasm_attractor_bg.wasm
rust_wasm_attractor.d.ts         rust_wasm_attractor_bg.wasm.d.ts
rust_wasm_attractor.js
```

I found I can add this dependency to the app by adding the following in the package.json file of the Vue app

```
 "dependencies": {
    .
    .
    .
    "wasm_attractor_iterator": "file:../rust/rust-wasm-attractor/pkg"
  },
```

However when I try to import this function

```
import { greet } from "wasm_attractor_iterator";
```

I get the follow error

```
yarn build
 ERROR  Failed to compile with 1 error

 error  in ./node_modules/wasm_attractor_iterator/rust_wasm_attractor_bg.wasm

WebAssembly module is included in initial chunk.
This is not allowed, because WebAssembly download and compilation must happen asynchronous.
```

Why? I don't know. Is it because this is a local File reference? Lets try publishing the @davidsmaynard/rust-wasm-attractor to npm and then changing the dependency to be

```

```

I hate it when I have to open a black box. Webpack is a black box to me. I give it a canned incantation that I don;t understand and it does some kind of magic to the code to make E6 work for me in the browser. Well I will try the simple things first. Google leads to some suggestions. Lets try the easy ones first. I added the following webpack.config.js file to the root level of my project:

```
module.exports = {
  //...
  experiments: {
    syncWebAssembly: true,
    }
};
```

no change. So next I tried changing the file to be

```
module.exports = {
  //...
  experiments: {
    asyncWebAssembly: true,
  },
};
```

still no change. Now my spidey senses are tingling. Is this file really even read by the anyone in the build process? Lets find out.

```
module.exports = {
  //...
  foobar
};
```

still the same output so this file is never read and has no affect on the build.
sigh. Back to Google "Vue webpack config". Reading the Vue documentation I discover that Vue wraps the webpack configuration process and to modify it you must add something like the following to a vue.config.js file:

```
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    externals: {
      experiments: {
        asyncWebAssembly: true,
      },
    },
  },
};
```

Alas this doesn't fix the problem and I still get the same error message "WebAssembly module is included in initial chunk. This is not allowed, because WebAssembly download and compilation must happen asynchronous. Googling Vue Wasm Rust gives several different strategies for including Rust code in View. The simplest solution seems to be to load the rust module when the Vue component is mounted. I am using the wasm-pack tool which packages the rust code to look like an npm package. So I add the following line to my dependencies in the package.json file:

```
"dependencies": {
   .
   .
   .
    "@davidsmaynard/rust-wasm-attractor": "^0.1.0"
  },
```

and add properties to my Vue component to store the module. In ChaosCanvas.vue I added:

```
data() {
    return {
      .
      .
      .
      wasmPromise: null,
      wasm: null,

    };
```

and I also add:

```
mounted() {
    this.wasmPromise = import("@davidsmaynard/rust-wasm-attractor")
      .then((wasm) => {
        this.wasm = wasm;
      })
      .catch((err) => alert("Failed to load wasm module" + err));
  },
```

run

```
yarn
yarn build
```

Eureka it compiles. Lets test it by adding some code to the pauseAnimation function

```
 pauseAnimation() {
      // window.greet();
      this.paused = true;
      this.wasm ? this.wasm.greet() : alert(" wasm Module not loaded");
    },
```

run

```
yarn serve
```

to test. Eureka. We now have two way communication between a Vue component and a rust/wasm module. Pretty cool. During development it will be easier to load the wasm module from the local file system so we don't have to upload the package to npm every time we make a change to the rust code.
