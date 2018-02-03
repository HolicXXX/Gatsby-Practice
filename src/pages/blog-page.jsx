/**
 * Created by Allen on 18/2/3.
 */

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash'
import Blog from '../components/Blog'

export default class BlogPage extends React.Component {
    render() {
        const site = get(this, 'props.data.site');
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;
        const posts = this.props.data.remark.posts;
        const list = posts.map((data, i) => (<Blog key={i} data={data.post} site={site} summary={true}/>));
        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div className="blogSummaryContent">
                    <h1 id="blogPageTitle">Blog</h1>
                    {list}
                </div>
            </div>
        );
    }
}

export const pageQuery = graphql`
    query BlogPageQuery {
        site {
            siteMetadata {
                title
                description
                url: siteUrl
                author
            }
        }
        remark: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            posts: edges {
                post: node {
                html
                frontmatter {
                    title
                    description
                    path
                    date(formatString: "YYYY/MM/DD")
                    }
                }
            }
        }
    }
`
