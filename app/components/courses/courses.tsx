"use client"

import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CoursesStyle from './courses.module.css';
import { primary } from '@/colors/colors';

import CourseImage from '../../../public/avatar.png';
import CustomBtn2 from '../UI/custombtn2';
import { CiTimer } from 'react-icons/ci';
import Image from 'next/image';
import HeaderDesign from '../UI/headerDesign';
import CourseImg from './courseImg';
import {ourCourses} from "../../allcourses/coursesdata"
import { useRouter } from 'next/navigation';



export default function Courses(){
    const navigate = useRouter()
  return (
    <Row className={CoursesStyle.container}>
        <HeaderDesign text1="Our" text2="Courses"/>        
        {/* <CustomDesign /> */}

        <Row style={{marginBottom:'30px'}}>    
            <Col xs={12} sm={12} md={12} xl={6} xxl={6} lg={6}>
                <h2 className={CoursesStyle.H2} >
                    Our Educational Driving Courses For All Ages
                </h2>
            </Col>
            <Col xs={12} sm={12} md={12} xl={6} xxl={6} lg={6} style={{padding:'30px 20px', textAlign:'justify'}}>
                <p>
                Our training courses help people of all ages to acquire
                licensed the experience aute irure dolor incly reprehend
                erit cepteur sint cat cupidatat non proident.
                </p>
            </Col>
        </Row>
      <Swiper
        slidesPerView={3}
        style={{padding:'auto 50px'}}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        breakpoints={{
            1000:{
                slidesPerView:3
            },

            700:{
                slidesPerView:2
            },

            100:{
                slidesPerView:1
            }
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        
      >

        {ourCourses.map(service => <SwiperSlide key={service.id} 
        style={{paddingBottom:'10px'}}>
            <Card className='shadow' style={{border:'0px', height:'500px'}}>
                <CourseImg title={service.title} />
                <CardBody 
                style={{
                    display:'flex', 
                    flexDirection:'column', 
                    // justifyContent:'center', 
                    rowGap:'20px',
                    paddingBottom:'30px',
                    // alignItems:'center'
                    }}>
                    <Card.Title style={{fontWeight:'bold'}}>{service.title}</Card.Title>
                    <p style={{color:"#74757B"}}>{service.shortDescription}</p>
                    <CustomBtn2 
                        onClick={()=>{navigate.push(`/allcourses/${service.link}`)}}

                    style={{alignSelf:"center"}}>View Course Details</CustomBtn2>
                </CardBody>
                <Card.Footer style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
                >
                    <div style={{display:'flex', flexDirection:'row', columnGap:'10px'}}>
                    <Image 
                        src={CourseImage} 
                        height={40} 
                        width={40} 
                        alt='avatar' 
                        style={{borderRadius:'50%'}} />

                        <div style={{padding:'0px'}}>
                            <h6 style={{margin:'0px'}}>{service.tutor.name}</h6>
                            <p style={{color:primary}}>{service.tutor.role}</p>
                        </div>
                    </div>
                    <div 
                    style={{
                        display:'flex', 
                        flexDirection:'row', 
                        columnGap:'10px', 
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                        <CiTimer size={30} color={primary} />
                        <p>9 weeks</p>
                    </div>
                </Card.Footer>
            </Card>
        </SwiperSlide>)}


      </Swiper>

      </Row>
  );
}
