import React, { Component } from "react";
// import { Link } from 'gatsby'
// import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>
          I write about recollections of my career in Silicon Valley, and on my
          continuing journey of learning new software languages, frameworks, and
          deployment{" "}
        </p>

        <p>You can also contact me via email or find me around the web.</p>
        <ul>
          <li>
            <strong>Email</strong>:{" "}
            <a href="mailto:davidsmaynard@gmail.com">davidsmaynard@gmail.com</a>
          </li>
          <li>
            <strong>GitHub</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dmaynard"
            >
              dmaynard
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/dsmaynard"
            >
              dsmaynard
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/davidsmaynard/"
            >
              David S Maynard
            </a>
          </li>
        </ul>
      </>
    );
  }
}
