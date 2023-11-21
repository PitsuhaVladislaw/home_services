function SetFeatures(props) {
    return(
        <div className='card-feature'>
            <img src={props.image} alt="logo" />
            <div className='card-feat_text'>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default SetFeatures