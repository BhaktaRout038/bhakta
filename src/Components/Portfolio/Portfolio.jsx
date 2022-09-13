import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Slidebar from '../../img/nm.png'
import Ecommerce from '../../img/ind1.PNG'
import HOC from '../../img/mus.jpg'
import MusicApp from '../../img/res.jpg'
import gym from '../../img/gym.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
const Portfolio = () => {  
    
  
    {/* for swipe we have to install swiper library i.e. yarn add swiper */}
  return(
    <div className="portfolio" id='Portfolio'>
    {/* Heading*/}
    <span>Recent Projects</span>
    <span> My Portfolio</span>

        {/* slider*/}
   <Swiper
       
       modules={[Pagination]}       
       slidesPerView={3}
       pagination={{clickable: true}}     
    
       spaceBetween={30}
      
       grabCursor={true}
       className='portfolio-slider'
   
      >
          

          <SwiperSlide>
       <a href="#" target={'_blank'} >
        <img src={Ecommerce} alt='' /> </a>
        <p>I am a software engineer &  also builds personal website and podcasts about productivity, academics, and personal development. my site has a clean, simple design that utilizes with style quite reminiscent of Notion. </p>
  
       
       </SwiperSlide>

       <SwiperSlide>
       <a href="#" target={'_blank'} >
        <img src={MusicApp} alt='' />
       </a>
       <p>A great restaurant website design is not just beautiful, but effective. Have a look at our list of 50 amazing  food menu. Hire us to design yours! </p>
       </SwiperSlide>


       <SwiperSlide>
       <a href="#" target={'_blank'} >
        <img src={Slidebar} alt='' />
       </a>
       <p>A dedicated portfolio website is your own personal corner of the internet where you can provide more information on who you are and the context ... </p>
       </SwiperSlide>

       <SwiperSlide>
       <a href="#" target={'_blank'} >
        <img src={HOC} alt='' />
       </a>
       <p>Having a professional online portfolio website shows people that you mean business. Join thousands of musicians and create a beautiful portfolio instantly. </p>
       </SwiperSlide>

       <SwiperSlide>
       <a href="#" target={'_blank'} >
        <img src={gym} alt='' />
       </a>
       <p>It is clean and modern design #PSD template for onepage #gym and #fitness centers website</p>
       </SwiperSlide>

       
       

      </Swiper>

    </div>
  )
}

export default Portfolio