"use client"

import Image from 'next/image'; 
import {Row} from 'react-bootstrap';
import AdvertStyle from './advert.module.css';


export default function AdvertItem({source}:any){
    return (
        <Row className={AdvertStyle.imageContainer}>
            <Image src={source} style={{width:'100%', height:'500px'}} alt="Advert Image" />
        </Row>
    )
}