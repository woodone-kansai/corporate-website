import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const BlogPost = ({ data }) => {
  const { title, body, eyeCatchImage, tags } = data.contentfulProperty;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={eyeCatchImage.file.url} />
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default BlogPost;
export const pageQuery = graphql`
  query($case: String!) {
    contentfulProperty(case: { eq: $case }) {
      id
      case
      title
      eyeCatchImage {
        file {
          url
        }
      }
      body {
        body
      }
    }
  }
`;