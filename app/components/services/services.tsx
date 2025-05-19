import { Col, Row } from "react-bootstrap";
import ServicesStyle from './services.module.css';

export default function Services(){
    return (
        <Row className={ServicesStyle.container}>
            <Col md={4}>
                <p>Passenger Transport</p>
            </Col>
            <Col md={4}>
                <p>Parkage and Load Delivery</p>
            </Col>
            <Col md={4}>
                <p>Hire Services</p>
            </Col>
        </Row>
    )
}