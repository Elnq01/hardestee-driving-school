import { Col, Row } from "react-bootstrap";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import FooterStyle from './footer.module.css';

export default function Footer(){
    return (<>
    <Row className={FooterStyle.container}>
        <Col md={4}>
            <h4>Contact</h4>
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
        <Col md={4}>
            <h4>Customer Support</h4>
            <p>
                <b>WhatsApp: </b>
                08031234307
            </p>
            <p>
                <b>Call Center: </b>
                08037894581
            </p>
        </Col>
        <Col md={4}>
            <h4>Follow Us</h4>
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
    <div className={FooterStyle.containerLeg}>
        copyright since 2025
    </div>
    
    </>)
}