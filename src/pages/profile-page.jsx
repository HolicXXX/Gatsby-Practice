/**
 * Created by Allen on 18/2/1.
 */

import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPostTemplate from '../templates/blog-post'
import devicon from 'devicon-2.2'
import unity from '../assets/images/icons/unity.svg'
import egret from '../assets/images/icons/egret.svg'
import  cocos from '../assets/images/icons/cocos.svg'

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
                    <section id="one">
                        <header className="name">
                            <h1 className="animated zoomIn">Allen DK</h1>
                        </header>
                        <header className="major">
                            <h2 className="animated flipInX">A junior Game Developer, who's keen to create a virtual new world.<br/>Also a senior Gamer.</h2>
                        </header>
                    </section>
                    <section id="two">
                        <header className="skills">
                            <div className="animated zoomIn">Languages & Frameworks</div>
                        </header>
                        <ul className="icons">
                            <li id="skills" className="animated flipInX"><span className="devicon-csharp-plain colored"/></li>
                            <li id="skills" className="animated flipInY"><span className="devicon-cplusplus-plain colored"/></li>
                            <li id="skills" className="animated flipInX"><span className="devicon-git-plain colored"/></li>
                            <li id="skills" className="animated flipInY"><span className="devicon-github-plain colored"/></li>
                            <li id="skills" className="animated flipInX"><span className="devicon-javascript-plain colored"/></li>
                            <li id="skills" className="animated flipInY"><span className="devicon-html5-plain colored"/></li>
                            <li id="skills" className="animated flipInX"><span className="devicon-python-plain colored"/></li>
                            <li id="skills" className="animated flipInY"><span className="devicon-react-original colored"/></li>
                            <li id="skills" className="animated flipInX"><span className="devicon-typescript-plain colored"/></li>
                        </ul>
                    </section>
                    <section id="three">
                        <header className="engines">
                            <div className="animated zoomIn">Engines</div>
                            <ul className="icons">
                                <li id="engines" className="animated flipInX"><img src={unity} alt="Unity3D" width={80} height={80}/></li>
                                <li id="engines" className="animated flipInX"><img src={egret} alt="Egret" width={80} height={80}/></li>
                                <li id="engines" className="animated flipInX"><img src={cocos} alt="Cocos2Dx" width={80} height={100}/></li>
                            </ul>
                        </header>
                    </section>
                    <section id="four">
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