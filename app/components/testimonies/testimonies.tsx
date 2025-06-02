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
import { primary} from '@/colors/colors';
import ImgSrc from '../../../public/carousel 1.png';
import TestimonyRating from './rating';
import Image from 'next/image';

const ourServices = [
    {
        id:0,
        title:"Get License",
        description:'My ride was sweet like butter'
    },
    {
        id:1,
        title:"Instructor Training",
        description:'My ride was sweet like butter'
    },
    {
        id:2,
        title:"Traffic Guidelines",
        description:'My ride was sweet like butter'
    }, 
    {
        id:3,
        title:"Learn Driving",
        description:'My ride was sweet like butter'
    },
    {
        id:4,
        title:"Video courses",
        description:'My ride was sweet like butter'
    }
]

export default function Tutors(){
  return (
    <Row className={TestimoniesStyle.container}>
        <div style={{position:'absolute', width:'100%', height:'100%', background:'rgba(255,255,255,0.5)'}}></div>
        <div style={{marginLeft:'50px', zIndex:'100', marginTop:'90px'}}>    
            {/* <HeaderDesign text1="Our" text2="Testimonies"/> */}
            {/* <CustomDesign /> */}
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
        // mousewheel={true}
        // keyboard={true}
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
                    <Image 
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={ImgSrc.src} 
                        alt='avatar testimony' />
                </div>
                <div>
                    <TestimonyRating value={5} />
                    <h6>Solomon Kane</h6>
                    <p>GRAPHIC DESIGNER</p>
                    <p 
                        style={{
                            fontStyle:'italic', 
                            fontWeight:'bold', 
                            fontSize:'18px',
                            // color:offWhite2
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



