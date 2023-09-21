import './Review.css'

const Review = () => {
    return(
        <section className='review'>
            <h1>Here our original reviews from trusted platform</h1>
            <article className='pagenation'>
                <div className="active"></div>
                <div className="closed"></div>
                <div className="closed"></div>
                <div className="closed"></div>
            </article>
        </section>
    )
}

export default Review