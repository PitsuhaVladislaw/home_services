import './HowWorks.css'

import CheckMark from '../../assets/icon/checkmark.png'
import Worker from '../../assets/img/worker.png'
import Background from '../../assets/img/backWorker.png'

function HowWorks() {
    return(
        <section>
            <article className='works_image'>
                <img className='backwork' src={Background} alt="background" />
                <img className='checkMark' src={CheckMark} alt="icon" />
                <img className='chWorker' src={Worker} alt="worker" />
            </article>
            <article className='works_content'>
                <h1>How HomePro works?</h1>
                <div className='stepByStep'>
                    <div className="stepBlock">
                        <h2>1.</h2>
                        <h5>Call us anytime 24/7</h5>
                        <p>You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime</p>
                    </div>
                    <div className="stepBlock">
                        <h2>2.</h2>
                        <h5>Schedule Service</h5>
                        <p>After connecting your call, our home care experts will answer your questions and provide flexible appointment times</p>
                    </div>
                    <div className="stepBlock">
                        <h2>3.</h2>
                        <h5>Your request is complated</h5>
                        <p>Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default HowWorks