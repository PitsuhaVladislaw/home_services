import './ServiceCard.css'

const ServiceCard = (props) => {

    return(
        <div className='cartochka'>
            <img src={props.img} alt="icon" />
            <div>
                <h3>{props.head}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ServiceCard;