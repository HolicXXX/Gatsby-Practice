import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import LazyLoad from 'react-lazyload';

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentLightbox: 0,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentLightbox: index,
            currentImage: 0,
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
    gotoImage (index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images[this.state.currentLightbox].fulls.length - 1) return;

        this.gotoNext();
    }
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <LazyLoad key={i}>
                    <article className="12u 12u$(xsmall) work-item">
                        <a
                            className="image fit thumb"
                            href={obj.src}
                            onClick={(e) => this.openLightbox(i, e)}
                        >
                            <img src={obj.thumbnail} />
                        </a>

                        <h3>{obj.caption}</h3>
                        <p>{obj.description}</p>
                        {obj.page ? <p><a href={obj.page}>Page</a></p> : <p>No Page Url</p>}
                        {obj.project ? <p><a href={obj.project}>Project</a></p> : <p>No Project Url</p>}
                    </article>
                </LazyLoad>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    getImages(obj) {
        return obj.fulls.map(v => {
            return {
                src: v,
                thumbnail: obj.thumbnail,
                caption: obj.caption,
                description: obj.description
            }
        });
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.getImages(this.props.images[this.state.currentLightbox])}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;