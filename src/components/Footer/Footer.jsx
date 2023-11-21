import './Footer.css'

import Logo from '../../../src/assets/icon/Mark.png'
import LogoText from '../../../src/assets/icon/HomePro.png'

import Link1 from '../../../src/assets/icon/links/link-1.png'
import Link2 from '../../../src/assets/icon/links/link-2.png'
import Link3 from '../../../src/assets/icon/links/link-3.png'
import Link4 from '../../../src/assets/icon/links/link-4.png'
import Link5 from '../../../src/assets/icon/links/link-5.png'

function Footer() {
    return(
        <footer>
            <header>
                <article>
                    <h4>Stay Connected with Our Newsletter</h4>
                    <p>Subscribe to our newsletter to get more news, promo, or news services</p>
                </article>
                <form name='inputBox'>
                    <input type="text" name="textBox" id="textBox" placeholder='Enter email address' />
                    <button><p>Subscribe</p></button>
                </form>
            </header>
            <main>
                <article className='logo_fot'>
                    <a href="/home_services">
                        <div className='logo_fot_text'>
                            <img src={Logo} alt="logo" />
                            <img src={LogoText} alt="text-logo" />
                        </div>
                    </a>
                    <p>Home Pro is your premier destination for top-notch smart home service and repair. </p>
                    <div className='logo-links_fot'>
                        <a href="https://www.youtube.com/"><img src={Link1} alt="link 1" /></a>
                        <a href="https://www.instagram.com/"><img src={Link2} alt="link 2" /></a>
                        <a href="https://www.facebook.com/"><img src={Link3} alt="link 3" /></a>
                        <a href="https://twitter.com/"><img src={Link4} alt="link 4" /></a>
                        <a href="https://mail.google.com/"><img src={Link5} alt="link 5" /></a>
                    </div>
                </article>
                <article className='fot_list'>
                    <div>
                        <h5>Company</h5>
                        <div>
                            <a href="/home_services/"><h6>About us</h6></a>
                            <a href="/home_services/services"><h6>Services</h6></a>
                            <a href="/home_services/blog"><h6>Our Blog</h6></a>
                            <a href="/home_services/contact"><h6>Contact</h6></a>
                        </div>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <div>
                            <a href="https://www.example.com/terms"><h6>Terms</h6></a>
                            <a href="https://www.example.com/privacy"><h6>Privacy</h6></a>
                            <a href="https://www.example.com/cookies"><h6>Cookies</h6></a>
                            <a href="https://www.example.com/license"><h6>License</h6></a>
                        </div>
                    </div>
                </article>
            </main>
            <footer>
                <p>©2023 HomePro . All rights reserved</p>
            </footer>
        </footer>
    )
}

export default Footer