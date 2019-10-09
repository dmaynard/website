import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'


import videos from '../../data/videos'
import react from '../../content/thumbnails/react.png'
import vue from '../../content/thumbnails/darwormslogo-300x300.png'
import js from '../../content/thumbnails/js.png'
import UserInfo from '../components/UserInfo'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Retired Software Engineer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div>
              <h1>{`David S Maynard: My Blog`}</h1>

              <p>
              I entered the University of California at Berkeley as a physics major in 1965. In 1968 U.C. Berkeley established a Computer Science Department in the College of Letters and Science. I graduated with a Bachelor of Arts in Computer Science in 1969.   I worked at Stanford Research Institue in Doug Engelbart's group which pioneered using the computer to augment human intelligence SRI was the second node on the ARPA network.  I worked at Xerox Palo Alto Research center which pioneered the graphical user interface, and local area networks.  I joined the personal computer revolution in 1982 by purchasing an Atari 800 home computer with 48KB of memory and a 5.25" floppy drive with a storage capacity of 88KB.  Using the Atari as a FORTH language development system, I wrote a abstract strategy game based on a Martin Gardner column from Scientific American Magazine.  Electronic Arts published the game, Worms?, and hired me and my good friend from Xerox, Steve Hayes, as the first two software engineers at Electronic Arts. At Electronic Arts we helped bring about the computer entertainment revolution.  After EA I worked at Silicon Graphics, advancing the 3D computer revolution. Later, at Google, I helped advance the mobile revolution by managing the Google Maps for Mobile Application on the Blackberry platform.  At Box Inc., I helped advance the cloud revolution by managing their mobile applications. In 2017 I was the first person to ever retire from Box Inc.
              </p>
              <p>I am writing this blog to record some of my memories of watching, and participating in, these multiple computer revolutions. I will also use this blog to document my continuing journey of learning software systems, and languages. I will blog about  creating software art in retirement. I will document my experiments in self publishing software on the web. My first two retirement projects are reproducing the software game, "Worms?", as a single page JavaScript Application, <a target="_blank" href="https://www.darworms.com/"> Darworms.</a> and creating this blog using <a target="_blank" href="https://www.gatsbyjs.org/"> Gatsby.</a>
              </p>
              <p> Note: Although you will not find any ads in this blog, I can not say the same for the external links.  I only include external links that I have found useful, entertaining or informative. I am not responsible for the content of any external links.
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/dsmaynard"
                    data-size="large"
                    data-show-count="true"
                    data-show-screen-name="false"
                  >
                    Follow @dsmaynard
                  </a>
                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/dmaynard"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @dmaynard on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing  simple postEdges={latestPostEdges} />
          </section>

          {/* <section className="section"> */}
          {/*   <h2>Most Popular</h2> */}
          {/*   <PostListing simple postEdges={popularPostEdges} /> */}
          {/* </section> */}

          <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Videos</h2>
            <SimpleListing simple data={videos} />
          </section>



          <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              <blockquote className="quotation">
                <p>
                  {`“Now, I've never met Mr. Maynard, but after playing Worms? for about 20 hours, I can tell you that he has probably the most original, refreshing, and seriously weird imagination of any video game designer today.”`}
                </p>
                <cite>— William Micheal Brown - Electronic Fun Magazine</cite>
              </blockquote>

              <blockquote className="quotation">
                <p>
                  {`“Worms? is one of the most fascinating games I've played in a long time. It's so different from anything else that it quickly captivated me. Worms? tournaments became popular among the staff of COMPUTE!. ”`}
                </p>
                <cite>— Greg Keizer Assistant Editor COMPUTE magazine</cite>
              </blockquote>
              <p> </p>
              <blockquote className="quotation">
                <p>
                  {`Worms? is intellectually stimulating, beautiful to watch and soothing to hear. The entire gaming experience is transcendental, the patterns are hypnotic. Worms? is vastly different from any other computer game I've ever seen. This is the most original piece of recreational software I have ever seen.`}
                </p>
                <cite>— Tom Benford **RUN** May 1984 magazine</cite>
              </blockquote>
              <blockquote className="quotation">
                <p>
                  {`“.. (Worms?) is a skill game, that is unique, engaging, and delightful. The game holds a lasting and nearly hypnotic fascination. There is something compelling about the intricacies of pattern - from the fugues of Bach to the mosaics of the Alhambra - that makes humans rejoice. The game Worms? combines harmonies of patterns in an extremely original and diverting way, and is good for hours of experimentation. Then challenge the world!”`}
                </p>
                <cite>— John Anderson **Creative Computing**, September 1983</cite>
              </blockquote>
            </div>
          </section>
        </div>
        <UserInfo config={config} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            teaser
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
