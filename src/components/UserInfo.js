import React, { Component } from 'react'
import dsm from '../../content/images/dsmheadshot50x63.png'
// import patreon from '../../content/thumbnails/patreon.png'
// import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={dsm} alt="David S Maynard" />
            </div>
            <div>
              <p>
                {`I am David S Maynard retired computer scientist/artist and life-long learner`}
              </p>
              {/*  Kofi and patreon buttons 
              <div className="flex">
                <a
                  href="https://ko-fi.com/davidsmaynard0797"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/davidsmaynard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Patreon
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
