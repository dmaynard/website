import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">

        <a href="https://patreon.com/davidsmaynard" target="_blank" rel="noopener noreferrer">
          Patreon
        </a>
        <a href="https://twitter.com/dsmaynard" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/dmaynard" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a
          href="https://github.com/dmaynard/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}
