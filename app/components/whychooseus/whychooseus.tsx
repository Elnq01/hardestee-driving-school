"use client"

import { Accordion, Row } from "react-bootstrap";
import whychooseusStyles from "./whychooseus.module.css";

export default function WhyChooseUs(){
    return (
        <Row className={whychooseusStyles.container}>
            <h3>Why Choose Urban Carrier</h3>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Luxury Seating
                    </Accordion.Header>
                    <Accordion.Body>
                        Luxury seating that is goohfjflkjhgjkgjgkkj
                        dfhjfkjfhkfhjkfhfjkffgjkhgkjhgkjgh
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Real-time parcel tracking
                    </Accordion.Header>
                    <Accordion.Body>
                        Luxury seating that is goohfjflkjhgjkgjgkkj
                        dfhjfkjfhkfhjkfhfjkffgjkhgkjhgkjgh
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Affordable Pricing
                    </Accordion.Header>
                    <Accordion.Body>
                        Luxury seating that is goohfjflkjhgjkgjgkkj
                        dfhjfkjfhkfhjkfhfjkffgjkhgkjhgkjgh
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Affordable Pricing
                    </Accordion.Header>
                    <Accordion.Body>
                        Luxury seating that is goohfjflkjhgjkgjgkkj
                        dfhjfkjfhkfhjkfhfjkffgjkhgkjhgkjgh
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        One-time Guarantee
                    </Accordion.Header>
                    <Accordion.Body>
                        Luxury seating that is goohfjflkjhgjkgjgkkj
                        dfhjfkjfhkfhjkfhfjkffgjkhgkjhgkjgh
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
    )
}