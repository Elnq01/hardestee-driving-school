"use client"

import { Card, CardBody, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ServicesStyle from './services.module.css';
import { primaryLight } from '@/colors/colors';
import ServicesIcon from './servicesIcons';
import CustomBtn2 from '../UI/custombtn2';
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

export default function Services(){
  return (
    <Row className={ServicesStyle.container}>
        <HeaderDesign text1="Our" text2="Services"/>
        {/* <CustomDesign /> */}
        <h2 className={ServicesStyle.H2} >Get To Know Our Services</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // cssMode={true}
        style={{padding:'0px', margin:'0px'}}
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
        style={{paddingBottom:'10px', padding:'0px', margin:'0px'}}>
            <Card className='shadow' style={{padding:'0px', border:'0px'}}>
                <CardBody 
                style={{
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    rowGap:'20px',
                    alignItems:'center'}}>
                    <div 
                        style={{
                            background:primaryLight,
                            padding:'20px',
                            borderRadius:'50%',
                            // border:`2px solid ${primary}`, 
                            // color:primary
                            }}>
                        <ServicesIcon type={service.title} />
                    </div>
                    <h4>{service.title}</h4>
                    <p style={{color:"#74757B"}}>{service.description}</p>
                    <CustomBtn2>Read More</CustomBtn2>
                </CardBody>
            </Card>
        </SwiperSlide>)}


      </Swiper>

      </Row>
  );
}
