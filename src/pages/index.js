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
              From graduation, with a Computer Science Degree from U.C. Berkeley in 1969, through my recent retirement from Box Inc. with stops at SRI, Xerox PARC, Electronic Arts, SGI, and Google I have watched
                <a target="_blank" href="https://a16z.com/2011/08/20/why-software-is-eating-the-world/"> software eating the world.</a>
              </p>
              <p>I am writing this blog to record some of my memories of watching, and participating in, multiple computer revolutions, from the first the human/computer interfaces, to local area networking, to the birth of the GUI, to the personal computer, to computer gaming, to 3D, to internet based mobile maps, to mobile interfaces to cloud based services. I will also use this blog to document my continuing journey of learning software systems and frameworks and creation of software art in retirement. My first two retirement projects are reproducing a software game I wrote that Electronic Arts published in 1983, "Worms?", as a single page JavaScript Application, and creating this blog using <a target="_blank" href="https://www.gatsbyjs.org/"> Gatsby.</a>
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
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

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
              <blockquote className="quotation">
                <p>
                  {`“This is the most original piece of recreational software I have ever seen.”`}
                </p>
                <cite>— Tom Benford **RUN** May 1984 magazine</cite>
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
