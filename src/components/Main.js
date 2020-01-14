import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Vision</h2>
          <p>
            Anant-Ehsaas Foundation is a collective of dedicated individuals and
            organizations who believe that salvation of our future generations
            lies in:
          </p>
            <ul>
              <li>
                reforming the education system ensuring the spiritual, emotional
                and physical development of individuals and achieving
                academic excellence in line with the global standards of social,
                scientific and artistic disciplines
              </li>
              <li>
                ensuring access to physical and mental healthcare to all,
                counseling and preservation of family units and spreading
                awareness about medical care, leading the way to a more compassionate and
                healthy society.               </li>
              <li>
                valuing the gifts of Nature and Nation by preserving our
                cultural, linguistic and natural heritage by working towards a
                sustainable, technologically sound and Eco-positive way of
                living.
              </li>
              <li>
                ensuring justice, healthcare and economic upliftment of the
                underprivileged and disenfranchised in society, thereby raising
                the society’s consciousness to the values of empathy, unity and
                diversity.
              </li>
              <li>
                propagating a paradigm of working with each other instead of
                competing with each other through skill development and sharing
                initiatives, setting up co-operatives and worker managed SME’s, 
                building an economy driven by local units independent of market
                tribulations and individuals free from economic bondage.
                
              </li>
              <li>
                advocacy and policy interventions at the legislative, executive,
                judicial and journalistic pillars of society to achieve the
                educational, environmental, societal and economic reforms sought
                to be achieved by the Anant-Ehsaas Foundation.
                
              </li>
            </ul>
          <p>
            The people working with and towards the ideals of AEF believe that
            it is not the joy of attainment that drives humanity, rather it is
            the essence of service to humanity that redeems us all in the end.
            The message of AEF is boundless yet simple, 'Service is Joy'.
          </p>
          <p>
            By the way, check out our <a href="#work">projects</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>&lt;Insert description here&gt;</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>&lt;Insert description here&gt;</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Us</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
