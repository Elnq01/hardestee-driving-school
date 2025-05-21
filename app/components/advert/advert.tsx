"use client"

import Carousel from 'react-bootstrap/Carousel';
import AdvertBackImage from './AdvertItem';
import AdvertStyle from "./advert.module.css";
import ImageCarousel1 from "../../../public/carousel 1.png";
import ImageCarousel2 from "../../../public/carousel 2.png";
import CustomBtn from '../UI/CustomBtn';
import { offWhite1, primary } from '@/colors/colors';

export default function Advert() {
  return (
    <Carousel controls={false} fade>
      <Carousel.Item>
        <AdvertBackImage source={ImageCarousel1} />
        <Carousel.Caption 
          style={{
            textAlign:'left',
            // background:'red',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            rowGap:'20px'
            }}>
              <div 
                style={{
                  display:'flex',
                  flexDirection:'column',
                  rowGap:'5px'
                  }}>      
                <h6 style={{fontWeight:'bolder'}}>Grow Up your Skill</h6>
                <h2>
                  Learn Car  <span 
                    style={{
                      background:offWhite1,
                      color:primary,
                      padding:'5px 5px'
                      }}>Driving</span> With Us.
                </h2>
              </div>
              <CustomBtn 
                style={{
                  // justifySelf:'flex-start',
                  alignSelf:'flex-start',
                  marginLeft:'210px'
                  }}>Explore Course</CustomBtn>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <AdvertBackImage source={ImageCarousel2} />
        <Carousel.Caption 
          style={{
            textAlign:'left',
            // background:'red',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            rowGap:'20px'
            }}>
              <div 
                style={{
                  display:'flex',
                  flexDirection:'column',
                  rowGap:'5px'
                  }}>    
              <h6 style={{fontWeight:'bolder'}}>Get your Career Started with Us</h6>
              <h2>You can <span style={{
                      background:offWhite1,
                      color:primary,
                      padding:'5px 5px'
                }}>Learn Easy</span> Car Driving Skill</h2>
              </div>
              <CustomBtn 
                style={{
                  // justifySelf:'flex-start',
                  alignSelf:'flex-start',
                  marginLeft:'120px'
                  }}>Explore Course</CustomBtn>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}
