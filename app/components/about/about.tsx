import { Button, Col, Row } from "react-bootstrap";
import AboutStyle from './about.module.css';
import Image from "next/image";
import ImageSrc from "../../../public/bus.jpg"
import { offWhite2 } from "@/colors/colors";

export default function QuickActions(){
    return (
        <Row className={AboutStyle.container}>
            <Col md={6} xl={6} lg={6} className={AboutStyle.body} >
                <h4>About Us</h4>
                <h2>Learn To Drive, Drive With Safety And Control.</h2>
                <p style={{color:offWhite2}}>To learn to drive safely and with control, first familiarize yoursel
                     with the vehicle and obey traffic laws. Keep a safe following distance
                     , use turn signals, and regularly check mirrors and blind spots.
                </p>
            </Col>
            <Col md={6} xl={6} lg={6} style={{position:'relative', overflow:'hidden'}}>
                <div style={{
                    background:'red', 
                    width:'500px',
                    position:'absolute', 
                    top:'60px', right:'-150px',
                    textAlign:'center',
                    transform: "rotate(50deg)"
                    }}>
                    <h1>10+</h1> 
                    <h3>years experience</h3>
                </div>
                <img src={ImageSrc.src} style={{width:'100%', height:'100%', overflow:'hidden'}} alt="quick action" />
            </Col>
        </Row>
    )
}