/**
 * Created by Allen on 18/2/3.
 */

import React from 'react'
import Link from 'gatsby-link'

export default class Navi extends React.Component {
    render() {
        return (
            <div id="navigator">
                <ul className="animated bounceInLeft" id="naviList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog-page/">Blog</Link></li>
                    <li><Link to="/profile-page/">Profile</Link></li>
                </ul>
            </div>
        );
    }
}
