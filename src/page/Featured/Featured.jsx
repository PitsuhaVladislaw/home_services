import './Featured.css'
import SetFeatures from '../../components/SetFeatures'

import LogoFeat1 from '../../assets/icon/features/Ic_Guarantee-Filled.png'
import LogoFeat2 from '../../assets/icon/logofeat2.png'
import LogoFeat3 from '../../assets/icon/logofeat3.png'
import LogoFeat4 from '../../assets/icon/logofeat4.png'
import LogoFeat5 from '../../assets/icon/logofeat5.png'
import LogoFeat6 from '../../assets/icon/logofeat6.png'
import DecorRight from '../../assets/img/Decor-right.png'
import DecorLeft from '../../assets/img/Decor-left.png'

function Featured() {
    return(
        <section className='featured'>
            <article className='feat-cont'>
                <img className='der-right' src={DecorRight} alt="Decoration" />
                <img className='der-left' src={DecorLeft} alt="Decoration" />
                <header className='feat-header'>
                    <h1>Fast, Friendly, and Satisfaction Guarantee</h1>
                    <h5>No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.</h5>
                </header>
                <main className='feat-main '>
                    <div className="feat-main_rows">
                        <SetFeatures
                            image={LogoFeat1}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                        <SetFeatures
                            image={LogoFeat4}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                    </div>
                    <div className="feat-main_rows">
                        <SetFeatures
                            image={LogoFeat2}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                        <SetFeatures
                            image={LogoFeat5}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                    </div>
                    <div className="feat-main_rows">
                        <SetFeatures
                            image={LogoFeat3}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                        <SetFeatures
                            image={LogoFeat6}
                            name="Satisfaction Guarantee"
                            text="you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results"
                        />
                    </div>
                </main>
            </article>
        </section>
    )
}

export default Featured