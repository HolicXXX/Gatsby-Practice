import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Blog from '../components/Blog'

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this, 'props.data.post');
        const title = get(post, 'frontmatter.title');
        const site = get(this, 'props.data.site');
        const siteTitle = get(site, 'siteMetadata.title');

        return (
            <div>
                <Helmet title={`${title} | ${siteTitle}`} />
                <Blog data={post} site={site} summary={false}/>
            </div>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
