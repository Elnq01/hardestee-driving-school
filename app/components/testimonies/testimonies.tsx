"use client"

import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import TestimoniesStyle from './testimonies.module.css';
import { charcoalGray1, offWhite2 } from '@/colors/colors';
// import ImgSrc from '../../../public/carousel 1.png';
import TestimonyRating from './rating';
// import Image from 'next/image';
import TestImg from './testImg';

const ourServices = [
    {
        id:0,
        name:'Solomon kane',
        title:"Polic Officer",
        description:'I was really nervous at first, but the instructors were patient and encouraging. Now I drive with confidence every day.'
    },
    {
        id:1,
        name:'Reymond Uche',
        title:"IT Developer",
        description:'he school guided me step by step until I got my driver’s license. The whole process was smooth and stress-free'
    },
    {
        id:2,
        name:'Taiwo Oludipo',
        title:"Trader",
        description:'I preferred learning with automatic cars. The lessons were smooth, and I picked it up faster than I expected.'
    }, 
    {
        id:3,
        title:"Banker",
        name:'Ken Master',
        description:'Driving on the highway used to scare me. Thanks to the training, I can now handle long trips with confidence.'
    },
    {
        id:4,
        name:'Ben Mark',
        title:"Pilot",
        description:'As a new resident, I needed to adjust to local driving rules. This school made the transition easy and stress-free.'
    }
]

export default function Tutors(){
  return (
    <Row className={TestimoniesStyle.container}>
        <div 
            style={{position:'absolute', width:'100%', height:'100%', background:'rgba(255,255,255,0.5)'}}>
        </div>
        <div style={{paddingLeft:'50px', zIndex:'100', marginTop:'90px'}}>    
            {/* <HeaderDesign text1="Our" text2="Testimonies"/>  */}
            <h2 className={TestimoniesStyle.H2} >What Saying Students Feedback</h2>
        </div>
      <Swiper

        style={{marginBottom:'70px'}}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        // navigation={true}
        slidesPerView={4}
        // spaceBetween={30}
        pagination={true}
        breakpoints={{
            1000:{
                slidesPerView:4
            },
            800:{
                slidesPerView:3
            },

            500:{
                slidesPerView:2
            },

            100:{
                slidesPerView:1
            }
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        
      >

        {ourServices.map(service => <SwiperSlide key={service.id} 
        style={{paddingBottom:'10px'}}>
            <Col md={3} lg={3} xl={3} xxl={3} 
                style={{
                    display:'flex', 
                    flexDirection:'column', 
                    textAlign:'center', 
                    justifyContent:'center', 
                    alignItems:'center',
                    // background:'red',
                    width:'100%',
                    }}>
                <div style={{padding:'50px 80px'}}>
                    <TestImg title={service.name} />
                </div>
                <div>
                    <TestimonyRating value={5} />
                    <h6>{service.name}</h6>
                    <p style={{color:offWhite2, fontWeight:'bolder'}}>{service.title.toUpperCase()}</p>
                    <p 
                        style={{
                            fontStyle:'italic', 
                            fontWeight:'bold', 
                            fontSize:'18px',
                            color:charcoalGray1
                            }}>
                        &quot;{service.description}&quot;
                    </p>
                </div>

            </Col>
        </SwiperSlide>)}


      </Swiper>

      </Row>
  );
}



