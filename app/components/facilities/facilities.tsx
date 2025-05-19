"use client"

import Carousel from 'better-react-carousel'
import ImagePng from '../../../public/testimonies 1.jpg';
import { Card, Row } from 'react-bootstrap';
import FacilitiesStyle from './facilities.module.css'
import Image from 'next/image';

export default function Facilities(){
  return (
    <Row className={FacilitiesStyle.container}>
        <h3>Facilities available on our buses</h3>
        <Carousel 
            cols={1} 
            rows={1} 
            gap={10} 
            loop 
            style={{
                margin:'0px', 
                padding:'0px'
                }}>
        <Carousel.Item>
            <div style={{
                background:'red', 
                display:'flex', 
                flexDirection:'row', 
                position:'relative'
                }}>
                <div className={FacilitiesStyle.carousel}></div>
                <div><Image height={200} width={400} src={ImagePng} alt='facilities' /></div>
                <div 
                    style={{
                        background:'blue',
                        position:'absolute',
                        top:'120px',
                        right:'300px', 
                        flexGrow:'1'
                        }}>
                    <h4>Urban Buses</h4>
                    <p> Seat Capacity: 200</p>
                    <p> Air Conditioneer</p>
                    <p> TV</p>
                    <p> Charging Port</p>
                </div>
            </div>

        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        </Carousel>
    </Row>
  )
}