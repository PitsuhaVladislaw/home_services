import './BlogCard.css'

const BlogCard = (props) => {
    let today = '';
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(month > 1 && month < 10) {
        today = `${day}:0${month}:${year}`;
    } else {
        today = `${day}:${month}:${year}`;
    }

    return(
        <div className='blog-card'>
            <img src={props.img} alt="img-card" />
            <div className='text-card'>
                <p>{today}</p>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
            <div className='categorie-card'>
                <div><p>{props.tag1}</p></div>
                <div><p>{props.tag2}</p></div>
                <div><p>{props.tag3}</p></div>
            </div>
        </div>
    )
}

export default BlogCard