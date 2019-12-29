import React from 'react'
import PropTypes from 'prop-types'
import logo from "../images/logo.png"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon" >
                <img src={logo} alt="" style={{width: '50px', height: '70px',  paddingTop:'15px'}} />
            </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Anant Ehsaas Foundation</h1>
                <p>&lt;Insert quick description here&gt;</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Vision</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
