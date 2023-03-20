import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Divya's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>
            {node.frontmatter.title} - {node.frontmatter.date}
          </h2>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter__date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
