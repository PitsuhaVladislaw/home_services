import './Header.css'

import Worker1 from '../../assets/img/work 1.png' 
import Worker2 from '../../assets/img/work 2.png' 
import Rect1 from '../../assets/img/Rectangle 1.png'
import Rect2 from '../../assets/img/Rectangle 2.png'
import ButtonPage from '../ButtonPage'

import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {BiSolidCalendarCheck} from 'react-icons/bi'
import {HiOutlineBadgeCheck} from 'react-icons/hi'

function Header() {
    return(
        <header>
            <section className='side1'>
                <img src={Worker1} alt="Worker1" id='work1' />
                <img src={Rect1} alt="rectangle1" />
            </section>
            <section className='centerSide'>
                <article className='contentInfa'>
                    <article>
                        <div>
                            <h4>Maintenances</h4>
                            <h4 className='pointText'>.</h4>
                            <h4>Repairs</h4>
                            <h4 className='pointText'>.</h4>
                            <h4>Improvements</h4>
                        </div>
                        <h1>Need improvement or repair your home? we can help!</h1>
                        <div style={{gap: '41px'}}>
                            <div>
                                <AiOutlineCheck className='markCheck' />
                                <h2>Free  Quotes</h2>
                            </div>
                            <div>
                                <AiOutlineCheck className='markCheck' />
                                <h2>100%  Commitment-Free </h2>
                            </div>
                        </div>
                    </article>
                    <ButtonPage />
                </article>
                <article className='higlightMenu'>
                    <div style={{border: 'none'}} className="linkBox">
                        <div><HiOutlineBadgeCheck className='imgMark' /></div>
                        <h3>Satisfaction Guarantee</h3>
                    </div>
                    <div className="linkBox">
                        <div><AiOutlineClockCircle className='imgMark' /></div>
                        <h3>24H Availability</h3>
                    </div>
                    <div className="linkBox">
                        <div><BiMap className='imgMark' /></div>
                        <h3>Local US Professional</h3>
                    </div>
                    <div className="linkBox">
                        <div><BiSolidCalendarCheck className='imgMark' /></div>
                        <h3>Flexible Appointments</h3>
                    </div>
                </article>
            </section>
            <section className='side2'>
                <img src={Worker2} alt="Worker2" id='work2' />
                <img src={Rect2} alt="rectangle2" />
            </section>
        </header>
    )
}

export default Header