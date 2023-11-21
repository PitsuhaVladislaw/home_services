import './OurServices.css'
import ServiceCard from './ServiceCard/ServiceCard'

import card1 from './icon/card-1.png';
import card2 from './icon/card-2.png';
import card3 from './icon/card-3.png';
import card4 from './icon/card-4.png';
import card5 from './icon/card-5.png';
import card6 from './icon/card-6.png';
import card7 from './icon/card-7.png';

const OurServices = () => {
    return(
        <section>
            <article className='content'>
                <header>
                    <h1>Our Services</h1>
                    <p>You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!</p>
                </header>
                <main>
                    <ServiceCard 
                        img={card1}
                        head="Plumbing services"
                        text="Drain pipe leaking, pipe clogged, replace the pipe line"
                    />
                    <ServiceCard 
                        img={card2}
                        head="Roofing repair"
                        text="Roof leaks, tile replacement, roof cleaning and maintenance"
                    />
                    <ServiceCard 
                        img={card3}
                        head="Mold Removal"
                        text="Removing and cleaning mildew, Restoration and Prevention"
                    />
                    <ServiceCard 
                        img={card4}
                        head="Tree Trimming"
                        text="Trimming and cleaning, Deadwood removal, Tree shaping"
                    />
                    <ServiceCard 
                        img={card5}
                        head="Appliance Repair"
                        text="repair of washing machines, refrigerators, Air conditioner, etc"
                    />
                    <ServiceCard 
                        img={card6}
                        head="Bathroom Remodeling"
                        text="Design and Consulting, installation, Repairing, tile repair"
                    />
                    <ServiceCard 
                        img={card7}
                        head="Locksmith"
                        text="Lock Installation and Repair, Duplication, Lock Rekeying"
                    />
                    <article>
                        <div>
                            <h5>More service?</h5>
                            <p>You can tell us what you need and we can help! </p>
                        </div>
                        <button>Call Us Now</button>
                    </article>
                </main>
            </article>
        </section>
    )
}

export default OurServices;