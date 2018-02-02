import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://github.com/HolicXXX" className="image avatar"><img src={avatar} alt="Avatar" /></a>
                    <h1><strong>Allen DK</strong></h1>
                    <abbr>A game developer</abbr><br/>
                    <abbr>And a Gamer</abbr>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
