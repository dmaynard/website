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

I have been coding for more than 50 years. I am retired now, but still enjoy learning. However at my age, 74, I have found that learning something and remembering it are two different things. This becomes a problem when I have several simultaneous projects that I am working on. Coming back to a project after a week away I often have trouble remembering exactly where I was and what I was last doing. To solve this problem I have decided to blog the development process of this project. I am currently working a project to add a Rust based implementation of a Chaotic Attactor to my existing Vue based, single page ES6 screen saver/ visual benchmark. My hope is that it will aid me in the development process. It will be an added bonus is it also helps some other developers working on similar problems.

## Motivation

Why Rust? Rust is a statically-typed programming language designed for performance and safety, especially safe concurrency and memory management. I know that the world's software infrastructure is riddled with security vulnerabilities waiting to be discovered and exploited. A language can and should help developer to write safe code. Rust does. I was also excited to learn that Rust can compile to [Web Assembly Language](webassembly.org) which means it can run in any modern browser.
![Modern Browsers](../thumbnails/ModernBrowsers.png)

Why a chaotic attractor? I have already written a JavaScript (ECMA Script 6) single page application, , which servers as one kind of visual performance benchmark, [chaotic attracor screen saver](https://chaotic.netlify.com). I am very curious how the performance of Web Assembly will compare to ES6 in the various modern browsers? I don't know. This it was motivates me to create this project.

## Initial Conditions

After familiarizing myself with the concepts and syntax of the Rust language I worked through the excellent [Rust and WebAssembly](https://rustwasm.github.io/docs/book/) online book. I went through the entire tutorial and created some new Rust functions and even packaged the Rust module and an npm package. The finished product is a single page ES6 application that implements Conway's Game of Life by calling a Rust implementtion module. The [ES6 source code](https://github.com/dmaynard/jslife) and the [Rust Code](https://github.com/dmaynard/wasm-game-of-life/settings) are both public repositories on github.

## Strategy

## Communication
