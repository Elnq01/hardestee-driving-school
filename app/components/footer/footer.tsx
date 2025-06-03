import { Col, Row } from "react-bootstrap";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import  './footer.css';
import {  primary } from "@/colors/colors";
import Logo from "../UI/Logo";

export default function Footer(){
    return (<>
    <Row className="footer-container">
        <div className="footer-overlay"></div>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="footer-col">
            <Logo height={100} id="footer" width={100} />
            <p>
                Dride is an driving school company that specializes in teaching 
                driving an help to get certificate to their learning customers..
            </p>
        
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="footer-col">
            <h4>Contact</h4>
            <div style={{width:'200px', height:'2px', marginBottom:"20px", background:primary}}></div>
            <p>
                <b>Head Office: </b> 
                22 Obafemi Awolowo way, Ikeja, Lagos.  
            </p>
            <p>
                <b>Email: </b>
                info@urbancarrier.com
            </p>
            <p>
                <b>Phone: </b>
                08031112222
            </p>
            <p>
                <b>Office hours: </b>
                Mon - Sun 8:00AM - 10:00PM
            </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="footer-col">
            <h4>Customer Support</h4>
            <div style={{width:'200px', height:'2px', marginBottom:"20px", background:primary}}></div>
            <p>
                <b>WhatsApp: </b>
                08031234307
            </p>
            <p>
                <b>Call Center: </b>
                08037894581
            </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3} className="footer-col">
            <h4>Follow Us</h4>
            <div style={{width:'200px', height:'2px', marginBottom:"20px", background:primary}}></div>

            <div 
                style={{
                    display:'flex',
                    flexDirection:'row'
                }}>
                <CiFacebook size={30} />
                <CiTwitter size={30} />
                <CiInstagram size={30} />
                <CiYoutube size={30} />
                
            </div>
        </Col>
    </Row>
    <div className="containerLeg">
        copyright &copy; since 2025
    </div>
    
    </>)
}