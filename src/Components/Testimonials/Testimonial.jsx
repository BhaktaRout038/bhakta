import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/pc.jpg';
import profilePic2 from '../../img/xy.jpg';
import profilePic3 from '../../img/kl.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
const Testimonial = () => {
   const clients = [
           {
        img: profilePic1,
        review:
        "I came to him with a rough concept, he went off and did his thing delivering a polished product in under a week! Will definitely be working together again in the future.",
         
          
          
          },
       

          {
            img: profilePic2,
            review:
            "Excellent developer! He did everything I asked and went above and beyond. Anything he didn't know, he quickly researched and found a resolution immediately.  Completely committed to finishing the task within the timeline. I'm upset I hadn't found him sooner but will definitely be using again going forward! ",
           
             
              
              
          },

          {
                img: profilePic3,
                review:
                " He has done an awesome job with our website. The updates and changes look great! He's always right on top of any requests we have and gets them done promptly.",
                
                 
                  
                  
          },

          {
                    img: profilePic4,
                    review:
                    "He has a great understanding of some front-end development. He delivered quality work within an agreed budget.",
                     
                      
                      
          },

    
   ]


  return (
    <div className="t-wrapper" id='Testimonials'>

        <div className="t-heading">
        <span>Client's </span>
        <span>Feedback</span>
       

        {/* blur effect*/}

        <div className=" t-blur1" style={{background: "var(--purple)"}}></div>
        <div className=" t-blur1" style={{background: " skyblue"}}></div>
        </div>
          {/* slider*/}
       <Swiper
       
        modules={[Pagination]}       
       slidesPerView={1}
       pagination={{clickable: true}}
       >
           {clients.map((client,index) => {

             return(
                <SwiperSlide key={index}>
                   <div className='testimonial'>
                   <img src={client.img} alt=''/>
                    <span>{client.review}</span>

                   </div>
                    

                </SwiperSlide>
             )




           })}


           

       </Swiper>

    </div>
  )
}

export default Testimonial