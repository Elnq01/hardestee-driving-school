"use client"

import { Accordion, Row } from "react-bootstrap";
import whychooseusStyles from "./whychooseus.module.css";
import { primary } from "@/colors/colors";

export default function WhyChooseUs(){
    return (
        <Row className={whychooseusStyles.container}>
        <h5 className={whychooseusStyles.H5} style={{color:primary}}>Why Choose Urban Carrier</h5>
        {/* <CustomDesign /> */}
        <h2 className={whychooseusStyles.H2} >Get To Know Our Services</h2>

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