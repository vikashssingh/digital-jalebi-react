import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './footer.css'

const Footer = () => {
  return (
    <div className="footer p-4" style={{background:'#081c3f', color:'#fff'}}>
      <div className="row d-flex container">
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>About Us</h6>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Why Us</li>
            <li>Press Us</li>
            <li>Shree Nakoda Creation</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>For Sellers</h6>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Why Us</li>
            <li>Press Us</li>
            <li>Shree Nakoda Creation</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>Shop</h6>
          <a href="#" style={{color:'#fff'}}>shop.sarafabazar.in</a>
        </div>
        <div className="col-md-3">
          <img src="https://cdn.shopify.com/s/files/1/0374/8279/1051/files/DOWNLOAD_APP_1_922a3fae-f00b-468b-a2b7-e1def9e68bcc.png?v=1626424023" height={180} alt="Download App" />
        </div>
      </div>
      <div className="row d-flex container">
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>Contact Us</h6>
          <ul>
            <li><FontAwesomeIcon icon={faHome} />  715, Jewel World, Kalbadevi Road, Mumbai- 400 002</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> contact@sarafabazar.in</li>
            <li><FontAwesomeIcon icon={faPhone} />  76683-77540</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>Signup for Newsletter</h6>
          <ul>
            <li>
              <input type="email" placeholder="email@example.com" />
            </li> 
            <li style={{color:'#7e7c7c'}}>
              <input type="checkbox" /> I agree to the <span style={{color:'#d3a664'}}>terms of Service</span>
            </li> 
          </ul>
        </div>
      </div>
      <div className="row d-flex container">
        <div className="col-md-3">
          <h6 style={{color:'#d3a664'}}>Follow Us On</h6>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/sarafabazar.in"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://www.instagram.com/sarafabazar.in/"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.linkedin.com/company/sarafabazar/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href="https://www.youtube.com/channel/UC03Lc9INLfY4DqeaxOwvxig"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
