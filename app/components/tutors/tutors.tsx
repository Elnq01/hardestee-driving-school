"use client"

import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import TutorsStyle from './tutors.module.css';
import { offWhite2, primary } from '@/colors/colors';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import HeaderDesign from '../UI/headerDesign';
import TutorImg from './tutorImg';


const ourTutors = [
    {
        id:0,
        title:"Instructor",
        name:'Adewale Joshua'
    },
    {
        id:1,
        title:"Senior Instructor",
        name:'Olawale Gbenga'
    },
    {
        id:2,
        title:"Instructor",
        name:'Bello Micheal'
    }, 
    {
        id:3,
        title:"CEO, of Founder",
        name:'Oyebola Oyebisi'
    },
    {
        id:4,
        title:"Instructor",
        name:'Oluwole Ayodeji'
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

        {ourTutors.map(tutor => <SwiperSlide key={tutor.id} 
        style={{paddingBottom:'70px'}}>

            <Col className={TutorsStyle.tutorCard} md={3} xl={3} xxl={3}>
                {/* <Image src={ImgSrc} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'100%', borderRadius:'10px'}} /> */}
                <TutorImg id={tutor.name} />
                <div style={{
                    bottom:'50px',
                    left:'30px',
                    padding:'5px',
                    borderRadius:'2px'
                    }}>
                        <p style={{color:primary}}>{tutor.title}</p>
                        <h4>{tutor.name}</h4>
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
