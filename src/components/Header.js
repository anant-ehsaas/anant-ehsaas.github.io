import React from 'react'
import PropTypes from 'prop-types'
import logo from "../images/AADI-AEF-LOGO_2308x1258.png"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="button-box">
            <span className="inner" >
            <a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>
                <img src={logo} alt="" style={{width: '553px', height: '302px'}} />
            </a>
            </span>
        </div>

        <div className="content">
            <div className="inner">
                <p>I slept and dreamt that life was joy. I awoke and saw that life was service.</p>
                <p>I acted and behold, service was joy.</p>
                <p className="align-right">-Rabindranath Tagore</p>
            </div>
        </div>

        {/* <nav> */}
            {/* <ul> */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Vision</a></li> */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li> */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Us</a></li> */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Us</a></li> */}
            {/* </ul> */}
        {/* </nav> */}
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
