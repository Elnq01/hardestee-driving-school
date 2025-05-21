"use client"

import { Card, CardBody, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ServicesStyle from './services.module.css';
import { primary } from '@/colors/colors';
import { CiCreditCard1, CiLight } from 'react-icons/ci';


export default function Services(){
  return (
    <Row className={ServicesStyle.container}>
        <h5 style={{color:primary}}>Our Services</h5>
        <h2>Get To Know Our Services</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"

        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
      >
        <SwiperSlide>
            <Card>
                <CardBody 
                style={{
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center'}}>
                <CiCreditCard1 size={50} />
                    <h4>Get License</h4>
                    <p>MY ride was sweet like butter</p>
                </CardBody>
            </Card>
        </SwiperSlide>

        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>        
        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    {/* <img width={200} src={ImagePng.src} height={200} /> */}
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>

      </Row>
  );
}
