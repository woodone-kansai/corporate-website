import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image'
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const properties = data.allContentfulProperty.edges;
  const placeholderImage = data.placeholderImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="home">
        <h1>Hello There</h1>
        <p>Welcome my awesome blog</p>
        <div>
          <div
            style={{
              maxWidth: `300px`,
              margin: "0 auto 1.45rem"
            }}
          >
            <Img fluid={placeholderImage} />
          </div>
        </div>
        {properties.map(({ node: property }) => (
          <Link to={`/blogpost/${property.case}`} key={property.id}>
            <Img fluid={property.eyeCatchImage.fluid} />
            <p>{`CASE${property.case}`}</p>
            <h3>{property.title}</h3>
          </Link>
        ))}
        <Link to="/blogposts/">View all posts</Link>
      </div>
    </Layout>
  )
};
export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allContentfulProperty(limit: 1000) {
      edges {
        node {
          id
          case
          title
          body {
            body
          }
          eyeCatchImage {
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
