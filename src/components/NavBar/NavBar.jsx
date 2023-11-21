import './NavBar.css'

import Home from '../../assets/icon/navbar/HomePro.png'
import Logo from '../../assets/icon/navbar/Mark.png'

function NavBar() {
    return(
        <nav>
            <a href="/home_services">
                <div className='logo_bar'>
                    <img src={Logo} alt="pic" />
                    <img src={Home} alt="logo" />
                </div>
            </a>
            <div className='menu_bar'>
                <a href="/home_services"><h4>About Us</h4></a>
                <a href="/home_services/services"><h4>Services</h4></a>
                <a href="/home_services/blog"><h4>Our Blog</h4></a>
                <a href="/home_services/contact"><h4>Contact </h4></a>
            </div>
            <div className='serv_bar'>
                <div></div>
                <p>24 Hour Services</p>
            </div>
        </nav>
    )
}

export default NavBar