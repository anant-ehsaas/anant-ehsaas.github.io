import React from 'react'
import PropTypes from 'prop-types'
import logo from "../images/aef_logo_with_text_553x302.png"

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
                {/* <h1>Anant Ehsaas Foundation</h1> */}
                <p>Service is Joy</p>
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
