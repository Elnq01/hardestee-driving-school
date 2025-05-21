"use client"

import ImagePng from '../../../public/testimonies 1.jpg';
import { Card, Row } from 'react-bootstrap';
import FacilitiesStyle from './facilities.module.css'
import Image from 'next/image';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Facilities(){
  return (
    <Row className={FacilitiesStyle.container}>
        <h3>Facilities available on our buses</h3>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div style={{
                display:'flex', 
                flexDirection:'row', 
                }}>
                <div><Image height={200} width={400} src={ImagePng} alt='facilities' /></div>
                <div 
                    style={{
                        background:'red', 
                        flexGrow:'1'
                        }}>
                    <h4>Urban Buses</h4>
                    <p> Seat Capacity: 200</p>
                    <p> Air Conditioneer</p>
                    <p> TV</p>
                    <p> Charging Port</p>
                </div>
            </div>
        </SwiperSlide>
                <SwiperSlide>
            <div style={{
                display:'flex', 
                flexDirection:'row', 
                }}>
                <div><Image height={200} width={400} src={ImagePng} alt='facilities' /></div>
                <div 
                    style={{
                        background:'purple', 
                        flexGrow:'1'
                        }}>
                    <h4>Urban Buses</h4>
                    <p> Seat Capacity: 200</p>
                    <p> Air Conditioneer</p>
                    <p> TV</p>
                    <p> Charging Port</p>
                </div>
            </div>
        </SwiperSlide>
                <SwiperSlide>
            <div style={{
                display:'flex', 
                flexDirection:'row', 
                }}>
                <div><Image height={200} width={400} src={ImagePng} alt='facilities' /></div>
                <div 
                    style={{
                        background:'yellow', 
                        flexGrow:'1'
                        }}>
                    <h4>Urban Buses</h4>
                    <p> Seat Capacity: 200</p>
                    <p> Air Conditioneer</p>
                    <p> TV</p>
                    <p> Charging Port</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </Row>
  );
}
