import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Avatar1 from '../assets/icon/avatar-detail1.png'
import Avatar2 from '../assets/icon/avatar-detail2.png'
import Avatar3 from '../assets/icon/avatar-detail3.png'
import Avatar4 from '../assets/icon/avatar-detail4.png'
import LogoCust from '../assets/img/logo-detail.png'
import '../page/Review/Review.css'

import {AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CommentCarousel = () => {
    const slides = [
        {
            comLogo: LogoCust,
            comText: "Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.",
            avaLogo: Avatar1,
            nameLogo: "Kende Attila"
        },
        {
            comLogo: LogoCust,
            comText: "HomePro is a great company! I ordered their services for apartment renovation and I was very satisfied. A team of professionals, high-quality work, and reasonable prices. Highly recommended!",
            avaLogo: Avatar2,
            nameLogo: "Sebastian Schmidt"
        },
        {
            comLogo: LogoCust,
            comText: "HomePro is a reliable company for solving household problems. I contacted them with a plumbing issue and they promptly resolved it. Professional approach and excellent service. I recommend them to everyone!",
            avaLogo: Avatar3,
            nameLogo: "Ethan Johnson"
        },
        {
            comLogo: LogoCust,
            comText: "I'm very happy with my collaboration with HomePro. I ordered furniture for my home from them and received excellent service. Fast delivery, quality products, and friendly staff. I will definitely use their services again!",
            avaLogo: Avatar4,
            nameLogo: "Isabella López"
        }
    ]

    return (
        <Carousel>
            {slides.map((comment, index) => (
                <div className='card_cont' key={index}>
                    <div className='card_cont-logo'>
                        <img src={comment.comLogo} alt="logo" />
                    </div>
                    <div className='card_cont-text'>
                        <p>{comment.comText}</p>
                        <div className='card-cont-text-prof'>
                            <img src={comment.avaLogo} alt="avatar" />
                            <div className='text-prof-detail'>
                                <h6>{comment.nameLogo}</h6>
                                <div>
                                    <AiFillStar className='img-det' />,
                                    <AiFillStar className='img-det' />,
                                    <AiFillStar className='img-det' />,
                                    <AiFillStar className='img-det' />,
                                    <AiOutlineStar style={{color: '#E3E6F0'}} className='img-det' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CommentCarousel