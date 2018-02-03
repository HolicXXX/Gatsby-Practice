/**
 * Created by Allen on 18/2/3.
 */

import React from 'react'
import get from 'lodash/get'
import Link from  'gatsby-link'

export default class Blog extends React.Component {
    render() {
        const {data, site, summary} = this.props;
        const title = get(data, 'frontmatter.title');
        const path = get(data, 'frontmatter.path');
        const date = get(data, 'frontmatter.date');
        const desc = get(data, 'frontmatter.description');
        const html = get(data, 'html');

        const showSummary = () => (
            <div className="blogSummary">
                <Link className="animated zoomIn" to={path}>
                    <p className="blogTitle">{title}</p>
                    <p className="blogDate">{date}</p>
                    <p className="blogDesc">{desc}</p>
                </Link>
            </div>
        );

        const showFull = () => (
            <div className="blogContent">
                <div className="animated flipInX" id="blogHeader">
                    <p className="blogTitle">{title}</p>
                    <p className="blogDate">{date}</p>
                    <p className="blogDesc">{desc}</p>
                </div>
                <div className="animated bounceInRight">
                    <div className="mdContent" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        );

        return (
            <div>
                {summary ? showSummary() : showFull()}
            </div>
        );
    }
}
