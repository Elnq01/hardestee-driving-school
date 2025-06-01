"use client"

import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import TutorsStyle from './tutors.module.css';
import { charcoalGray2, offWhite2, primary, primaryHardDark, primaryLight, primaryLightDark } from '@/colors/colors';
import CustomDesign from '../UI/customDesign';
import CustomBtn2 from '../UI/custombtn2';
import Image from 'next/image';
import ImgSrc from '../../../public/tutor 1.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import HeaderDesign from '../UI/headerDesign';


const ourServices = [
    {
        id:0,
        title:"Get License",
        description:'MY ride was sweet like butter'
    },
    {
        id:1,
        title:"Instructor Training",
        description:'MY ride was sweet like butter'
    },
    {
        id:2,
        title:"Traffic Guidelines",
        description:'MY ride was sweet like butter'
    }, 
    {
        id:3,
        title:"Learn Driving",
        description:'MY ride was sweet like butter'
    },
    {
        id:4,
        title:"Video courses",
        description:'MY ride was sweet like butter'
    }
]

export default function Tutors(){
  return (
    <Row className={TutorsStyle.container}>
        {/* <h5 className={TutorsStyle.H5} style={{color:primary}}>Our Best Instructor</h5> */}
        <HeaderDesign text1="Our" text2="Tutors"/>
        {/* <CustomDesign /> */}
        <h2 className={TutorsStyle.H2} >Meet Our Qualified Instructor</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        // navigation={true}
        pagination={true}
        // mousewheel={true}
        // keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        
      >

        {ourServices.map(service => <SwiperSlide key={service.id} 
        style={{paddingBottom:'70px'}}>

            <Col className={TutorsStyle.tutorCard} md={3} xl={3} xxl={3}>
                <Image src={ImgSrc} alt="Img Bkg" 
                    style={{width:'100%', height:'100%', borderRadius:'10px'}} />
                <div 
                    style={{
                        position:'absolute', 
                        background:charcoalGray2,
                        // background:primaryLightDark,
                        width:'100%',
                        height:'100%',
                        bottom:'-20px',
                        right:'-20px',
                        zIndex:'-100',
                        clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 15% 115%, 0 85%)",
                        borderBottomRightRadius:'10px'
                        }}>
                            <div style={{
                                border:`1px solid ${offWhite2}`,
                                height:'10px',
                                width:'10px', 
                                position:'absolute', 
                                bottom:'10px',
                                right:'20px',
                                // transform:'skewX(30deg)',
                                }}>
                            </div>
                            <div style={{
                                background:offWhite2,
                                height:'10px',
                                width:'10px', 
                                position:'absolute', 
                                bottom:'10px',
                                right:'40px',                                
                                // transform:'skewX(30deg)',

                                }}>
                            </div>
                            {/* <div style={{
                                border:`1px solid ${offWhite2}`,
                                height:'10px',
                                width:'10px', 
                                position:'absolute', 
                                bottom:'10px',
                                // transform:'skewX(30deg)',
                                right:'60px',
                                }}>
                            </div> */}
                        </div>
                <div style={{
                    background:primaryLight, 
                    // background:offWhite2, 
                    position:'absolute', 
                    bottom:'50px',
                    left:'30px',
                    textAlign:'center',
                    padding:'5px',
                    borderRadius:'2px'
                    }}>
                        <h4>Alvert Tine</h4>
                        <p style={{color:primary}}>Instructor</p>
                </div>

                <div style={{
                    background:offWhite2, 
                    position:'absolute', 
                    top:'40px',
                    right:'10px',
                    padding:'5px',
                    display:'flex',
                    flexDirection:'column',
                    rowGap:'15px',
                    borderRadius:'5px'
                    }}>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                </div>
            </Col>

        </SwiperSlide>)}


      </Swiper>

      </Row>
  );
}
