import { Button, Col, Row } from "react-bootstrap";
import quickActionStyle from './quickActions.module.css';
import Image from "next/image";
import ImageSrc from "../../../public/bus.jpg"

export default function QuickActions(){
    return (
        <Row className={quickActionStyle.container}>
            <Col md={6} xl={6} lg={6} className={quickActionStyle.body} >
                <h4>Book Your Trip Online</h4>
                <p>Sample text, That can be santhygghk, gfugmngyigu, gfugmngyigu
                    fhgfhjgfhfg fgfhgfgfhj fgyfghjfgf fhufhjkghgj
                </p>
                <Button>Book Now</Button>
            </Col>
            <Col md={6} xl={6} lg={6} style={{overflow:'hidde'}} >
                <img src={ImageSrc.src} style={{width:'100%', height:'100%', overflow:'hidden'}} alt="quick action" />
            </Col>
            {/* <Col md={4}>
                <p>Track your Product</p>
            </Col>
            <Col md={4}>
                <p>Get a quota</p>
            </Col> */}
        </Row>
    )
}