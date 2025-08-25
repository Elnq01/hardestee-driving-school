import { Col, Row } from "react-bootstrap";
import AboutStyle from './about.module.css';
import Image from "next/image";
import ImageSrc from "../../../public/bus.jpg"
import { charcoalGray2, offWhite2 } from "@/colors/colors";

export default function QuickActions(){
    return (
        <Row id="About" className={AboutStyle.container} style={{background:charcoalGray2}}>
            <Col xs={12} sm={12} md={6} xl={6} xxl={6} lg={6} className={AboutStyle.body} >
                <h4>About Us</h4>
                <h2>Learn To Drive, Drive With Safety And Control.</h2>
                <p style={{color:offWhite2}}>To learn to drive safely and with control, first familiarize yoursel
                     with the vehicle and obey traffic laws. Keep a safe following distance
                     , use turn signals, and regularly check mirrors and blind spots.
                </p>
            </Col>
            <Col xs={12} sm={12} md={6} xl={6} xxl={6} lg={6} style={{position:'relative', overflow:'hidden'}}>
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
                <Image src={ImageSrc.src} 
                    width={0} height={0} 
                    style={{width:'100%', height:'100%'}} alt="quick action" />
            </Col>
        </Row>
    )
}