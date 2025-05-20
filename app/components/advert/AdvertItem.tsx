"use client"

import ImageCarousel from "../../../public/bus.jpg";
import Image from 'next/image'; 
import {Row} from 'react-bootstrap'


export default function AdvertItem(){
    return (
        <Row style={{background:'red'}}>
            <Image src={ImageCarousel} height={400} alt="Advert Image" />
        </Row>
    )
}