import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://twitter.com/" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://instagram.com" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <div className="button">
        <a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>
          Contact Us
        </a>
    </div>
    <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
    <p className="copyright">
     Hosted proudly on{' '}
      <a href="https://pages.github.com/">GitHub Pages</a>
    </p>
  </footer>
)

Footer.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Footer
