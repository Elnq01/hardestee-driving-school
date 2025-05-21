"use client"

import ImagePng from '../../../public/testimonies 1.jpg';
import { Row } from 'react-bootstrap';
import TestimoniesStyle from './testimonies.module.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Testimonies(){
  return (
    <Row className={TestimoniesStyle.container}>
        <h3>Testimonies</h3>
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
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
                    <img width={200} src={ImagePng.src} height={200} />
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
