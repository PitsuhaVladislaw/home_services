import './Blog.css'

import iconBlog from '../../../assets/icon/IC_chevron-right.png'
import BlogCard from '../../../components/BlogCard/BlogCard'
import cardBl1 from '../../../assets/img/card-1.png'
import cardBl2 from '../../../assets/img/card-2.png'
import cardBl3 from '../../../assets/img/card-3.png'

const Blog = () => {
    return(
        <section className='blog-blc'>
            <article className='head-blog'>
                <h2>Explore Insights in Our Blog</h2>
                <p>Find lots of insights and information on our blog. Explore, learn, and get inspired today.</p>
            </article>
            <article className='cards-blog'>
                <BlogCard  
                    img={cardBl1} 
                    name="Understanding Smart Home Systems & Maintenance"
                    desc="Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!"
                />
                <BlogCard  
                    img={cardBl2} 
                    name="The Ultimate Guide to Home Repairs and Renovations"
                    desc="Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!"
                />
                <BlogCard  
                    img={cardBl3} 
                    name="Painting Techniques for a Kitchen Refresh"
                    desc="Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions, we provide step-by-step solutions to help you restore the seamless functionality of your smart home system. Gain expert insights, practical tips, and insider advice to keep your home automation running smoothly. Don't let technical glitches hinder your smart home experience - empower yourself with the knowledge to resolve issues and enjoy the convenience of your connected home. Visit our blog now and become a troubleshooting pro!"
                />
            </article>
            <article className='btn-blog'>
                <h6>View More</h6>
                <img src={iconBlog} alt="icon" />
            </article>
        </section>
    )
}

export default Blog