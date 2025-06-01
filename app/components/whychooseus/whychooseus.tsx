"use client"

import { Col, Form, Row } from "react-bootstrap";
import whychooseusStyles from "./whychooseus.module.css";
import { offWhite2, primary } from "@/colors/colors";


import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaCaretDown, FaUpDown } from "react-icons/fa6";
import CustomBtn2 from "../UI/custombtn2";
import { useState } from "react";
import CustomBtn from "../UI/CustomBtn";



const whyChooseUsinfo = [
    {
        id:"0",
        title:"Affordable Fee",
        description:'All of our course fee are very affordable for everyone.'
    },
    {
        id:"1",
        title:"Online Tracking",
        description:'Online tracking is the process of gathering information.'
    },
    {
        id:"2",
        title:"Best Trainers",
        description:'We have the best trainers form helping you always.'
    },
    {
        id:"3",
        title:"Perfect Timing",
        description:"Our course is neither so long nor so short it's perfect."
    },
    
]


export default function WhyChooseUs() {

  const [accordionIndex, setAccordionIndex] = useState(null);
  
  return (
        <Row className={whychooseusStyles.container}>
       {/* <div className={whychooseusStyles.containerWhyChoose}></div> */}
      
      <Col xs={12} sm={12} md={12} xl={6} xxl={6} lg={6} className={whychooseusStyles.colum1}>
        <h2 style={{margin:'40px auto'}}>Why Choose Us</h2>
        {whyChooseUsinfo.map((info, index) => <Disclosure key={info.id} as="div" 
        className="p-6" 
        style={{
            background:'rgba(255, 255, 255, 0.13)',
            borderRadius:'10px',
            marginBottom:'10px'
        }} 
        defaultOpen={false}>
          
             {({ open }) => {
              const isOpen = accordionIndex === index;

             
             return (
                <>
                  <DisclosureButton 
                    className="group flex w-full items-center justify-between"
                    onClick={() =>
                    setAccordionIndex(isOpen ? null : index)
                    }
                    >
                    <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    {info.title}
                    </span>
                    <FaCaretDown className="w-5 group-data-open:rotate-180" color={primary} /> 
                  </DisclosureButton>
        
                  {isOpen && (<DisclosurePanel
                      transition
                      className="origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
                    >
                      {info.description}
                    </DisclosurePanel>)}

                </>)}}
                
            </Disclosure>)}
      </Col>

    <Col xs={12} sm={12} md={12} xl={6} xxl={6} lg={6} className={whychooseusStyles.colum2}>
      <Form className={whychooseusStyles.form}>
        <h3 style={{textAlign:'center'}}>Ask Any Question</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter your inquiry</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <CustomBtn 
          style={{
            // color:offWhite2,
            // background:"rgba(255, 255, 255, 0.14)"
            }}>Submit</CustomBtn>
      </Form>
    </Col>
    </Row>
  )
}
