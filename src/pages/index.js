import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/thumb_screambird.jpg'
import thumb02 from '../assets/images/thumbs/thumb_fruitsquad.jpeg'

import full01 from '../assets/images/fulls/full_screambird.png'
import full02 from '../assets/images/fulls/full_fruitsquad.png'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Scream Bird', description: 'My first game in my first job.', page: 'https://itunes.apple.com/cn/app/%E5%B0%96%E5%8F%AB%E9%B8%9F-%E5%85%A8%E6%96%B0%E5%A3%B0%E6%8E%A7%E6%B8%B8%E6%88%8F/id1211127073?mt=8', project: 'https://github.com/HolicXXX/ScreamBird'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Fruit Squad', description: 'Previous Cocos-2dx project.', page: null, project: 'https://github.com/HolicXXX/FruitSquad'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <Link to="/blog-page/">Blog</Link>

                <div id="main">
                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, page, project }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            page,
                            project
                        }))} />

                        <ul className="actions">
                            <li><Link to="/profile-page/" className="button">View Profile</Link></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        BeiJing.<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-qq"><span className="label">QQ</span></h3>
                                        775264487
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:allendk@foxmail.com">allendk@foxmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
                url: siteUrl
                author
            }
        }
    }
`