import { Col, Row } from "react-bootstrap";
import quickActionStyle from './quickActions.module.css';

export default function QuickActions(){
    return (
        <Row className={quickActionStyle.container}>
            <Col md={4}>
                <p>Book Now</p>
            </Col>
            <Col md={4}>
                <p>Track your Product</p>
            </Col>
            <Col md={4}>
                <p>Get a quota</p>
            </Col>
        </Row>
    )
}