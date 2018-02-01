/**
 * Created by Allen on 18/2/1.
 */

import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPostTemplate from '../templates/blog-post'

class Main extends React.Component {

    render() {

        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    <section>
                        <header className="name">
                            <h1>Allen DK</h1>
                        </header>
                    </section>
                    <section id="one">
                        <header className="major">
                            <h2>A junior Game Developer, who's keen to create a virtual new world.<br/>Also a senior Gamer.</h2>
                        </header>
                    </section>
                    <section id="two">
                        {/*<BlogPostTemplate/>*/}
                        <ul className="actions">
                            <li><Link to="/" className="button">Back</Link></li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main;

export const pageQuery = graphql`
    query ProfilePageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`