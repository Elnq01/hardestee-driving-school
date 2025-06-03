"use client"

import Image from 'next/image'; 
import {Row} from 'react-bootstrap';
import AdvertStyle from './advert.module.css';


export default function AdvertItem({source}:{source:string}){
    return (
        <Row className={AdvertStyle.imageContainer}>
            <div className={AdvertStyle.overlay}></div>
            <Image src={source} width={0} height={0} style={{width:'100%', height:'500px'}} alt="Advert Image" />
        </Row>
    )
}