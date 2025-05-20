import { Col, Row } from "react-bootstrap";
import ServicesStyle from './services.module.css';
import { CiBag1, CiMobile1, CiSettings } from "react-icons/ci";

export default function Services(){
    return (
        <Row className={ServicesStyle.container}>
            <h3 className={ServicesStyle.H1}>Services</h3>
            <Row>
                <Col md={4} className={ServicesStyle.body}>
                    <CiSettings color="brown" size={50} />
                    <h4>Passenger Transport</h4>
                    <p className={ServicesStyle.bodyP}>Passenger Transport</p>
                </Col>
                <Col md={4} className={ServicesStyle.body}>
                    <CiBag1 color="brown" size={50} />
                    <h4>Parkage and Load Delivery</h4>
                    <p className={ServicesStyle.bodyP}>Parkage and Load Delivery</p>
                </Col>
                <Col md={4} className={ServicesStyle.body}>
                    <CiMobile1 color="brown" size={50} />
                    <h4>Hire Services</h4>
                    <p className={ServicesStyle.bodyP}>Hire Services</p>
                </Col>
            </Row>
        </Row>
    )
}