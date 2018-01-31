import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/Allen_D_K" target="_blank" className="icon fa-twitter fa-2x"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/HolicXXX" target="_blank" className="icon fa-github fa-2x"><span className="label">Github</span></a></li>
                        {/*<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>*/}
                        <li><a href="mailto:allendk@foxmail.com" className="icon fa-envelope-o fa-2x"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Allen DK</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
