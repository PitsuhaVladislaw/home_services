import './ProfServises.css'

import LogoWorker from "../../assets/img/Worker's job.png"
import check from '../../assets/icon/Ic_24-Check.png'

const ProfServises = () => {
    return(
        <section>
            <article className='contentBlock'>
                <div className='title'>
                    <h1>Professional for your home services</h1>
                    <p>You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services</p>
                </div>
                <div className='services'>
                    <section>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Repair and Installation</h4>
                        </div>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Maintenance</h4>
                        </div>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Home Security Services</h4>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Plumbing</h4>
                        </div>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Budget-friendly</h4>
                        </div>
                        <div>
                            <img src={check} alt="icon" />
                            <h4>Eco-friendly solutions</h4>
                        </div>
                    </section>
                </div>
                <button className='note'>
                    <p>
                        We already 24 hours fast services to help you. <br /> You can contact us at <span>(888) 617-5894</span>
                    </p>
                </button>
            </article>
            <img src={LogoWorker} alt="workers" />
        </section>
    )
}

export default ProfServises;