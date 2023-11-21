import './FAQ.css'
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function FAQ() {
    return(
        <section className='faq'>
            <article className='desc-faq'>
                <h1>Frequently Asked Questions</h1>
                <div>
                    <h5>Still need help?</h5>
                    <a href="none">
                        <h6>Get Help Now</h6>
                    </a>
                </div>
            </article>
            <article className='cont-faq'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0" className='block-accor'>
                        <Accordion.Header className='h-accor'>What is HomePro?</Accordion.Header>
                        <Accordion.Body className='text-accor'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='block-accor'>
                        <Accordion.Header className='h-accor'>Are the service providers on HomePro reliable and qualified?</Accordion.Header>
                        <Accordion.Body className='text-accor'>
                            HomePro checks the qualifications of service providers, including their professional skills and
                            certifications. This helps to ensure that you are working with qualified specialists.
                            HomePro also provides reviews and ratings from previous clients. You can review the feedback and
                            ratings of service providers to get an idea of their reliability and quality of work.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='block-accor'>
                        <Accordion.Header className='h-accor'>What if I have an issue or complaint about a service provider?</Accordion.Header>
                        <Accordion.Body className='text-accor'>
                            HomePro has a customer support service that is ready to assist you with any questions or issues related
                            to the service provider. You can reach out to them via phone, email, or online chat. 
                            HomePro provides the option to leave a review about the service provider after the completion of
                            the service. If you have any problems or complaints, you can share them in the review. This will help other users and HomePro to better understand your experience and take appropriate actions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='block-accor'>
                        <Accordion.Header className='h-accor'>How are payments handled on HomePro?</Accordion.Header>
                        <Accordion.Body className='text-accor'>
                            You can use your credit or debit card to make purchases on HomePro. 
                            We accept most popular cards, including Visa, Mastercard, and American Express
                            HomePro also supports various electronic payment systems such as PayPal, Apple Pay, and Google Pay.
                            You can link your account with one of these systems and use them for payment.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='block-accor'>
                        <Accordion.Header className='h-accor'>How do I leave a review for a service provider?</Accordion.Header>
                        <Accordion.Body className='text-accor'>
                            Determine the platform or website where you accessed the service. It could be a specific website, an app, 
                            or a social media platform. Locate the profile or page of the service provider you want to review. This could be through a search function or 
                            by navigating through the platform's categories or listings. 
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </article>
        </section>
    )
}

export default FAQ