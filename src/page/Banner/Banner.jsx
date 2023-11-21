import './Banner.css'

import {AiOutlineCheck} from 'react-icons/ai'

import House1 from '../../assets/img/Home1.png'
import House2 from '../../assets/img/Home2.png'
import Employee from '../../assets/img/employee.png'
import Screen from '../../assets/img/screen.png'
import Camera from '../../assets/img/camera.png'
import Cube from '../../assets/icon/Logo.png'
import ButtonPage from '../../components/ButtonPage'

function Banner() {
    return(
        <section className='banner'>
            <article className='cont-ban'>
                <div className='text-ban'>
                    <h1>Already to improve or repair your home? Let’s Talk! </h1>
                    <div className='feat-ban'>
                        <div>
                            <AiOutlineCheck className='markCheck' />
                            <h5>Free  Quotes</h5>
                        </div>
                        <div>
                            <AiOutlineCheck className='markCheck' />
                            <h5>100%  Commitment-Free</h5>
                        </div>
                    </div>
                </div>
                <ButtonPage />
            </article>
            <article className='image-ban'>
                <div className='employee-ban'>
                    <img src={Employee} className='emloyee' alt="Employee" />
                    <img src={Screen} className='screen' alt="screen" />
                    <img src={Camera} className='camera' alt="camera" />
                    <img src={Cube} className='cube' alt="Cube" />
                </div>
                <div className='house-ban'>
                    <img src={House1} className='house1-ban' alt="house1" />
                    <img src={House2} className='house2-ban' alt="house2" />
                </div>
            </article>
        </section>
    )
}

export default Banner