"use client"

import { Breadcrumb, Card, CardBody, Col, Row } from "react-bootstrap";
import {ourCourses} from "./coursesdata"
import CustomBtn2 from "../components/UI/custombtn2";
import Image from "next/image";
import { offWhite2, primary } from "@/colors/colors";
import { CiTimer } from "react-icons/ci";
import CourseImage from '../../public/bus.jpg';
import AllCoursesSrc from "../../public/allcourses.png";
import allcoursesStyle from "./allcourses.module.css";
import { useRouter } from "next/navigation";


export default function AllCourses(){
    const navigate = useRouter();

    return <Row className={allcoursesStyle.container}>
        <div style={{height:'300px', position:'relative'}}>
            <Image src={AllCoursesSrc} style={{height:'100%', width:'100%'}} alt="all courses" />
            <div style={{
                position:'absolute', 
                display:'flex', 
                flexDirection:'column',
                width:'100%',
                height:'100%',
                top:'0px',
                left:'0px',
                alignItems:'center',
                // background:'red', 
                background:'rgba(0,0,0,0.3)', 
                justifyContent:'center',
                color:offWhite2
                }}>
                    <h2>Courses</h2>
                    <Breadcrumb color={offWhite2}>
                        <Breadcrumb.Item 
                        style={{
                            color:offWhite2,
                            textDecoration:'none'
                            }} href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item style={{color:offWhite2}} active>Courses</Breadcrumb.Item>
                    </Breadcrumb>
            </div>
        </div>
        <Row className={allcoursesStyle.cardContainer}>
            {ourCourses.map(item => {
                return <Col key={item.id} md={4} lg={4} xxl={4} xl={4} sm={12} xs={12}>
                    <Card className='shadow' style={{border:'0px'}}>
                        <Card.Img variant='top' src={CourseImage.src} />
                        <CardBody 
                        style={{
                            display:'flex', 
                            flexDirection:'column', 
                            // justifyContent:'center', 
                            rowGap:'20px',
                            paddingBottom:'30px',
                            // alignItems:'center'
                            }}>
                            <Card.Title style={{fontWeight:'bold'}}>{item.title}</Card.Title>
                            <p style={{color:"#74757B"}}>{item.shortDescription}</p>
                            <CustomBtn2 
                                onClick={()=>{navigate.push(`/allcourses/${item.link}`)}}

                            style={{alignSelf:"center"}}>View Course Details</CustomBtn2>
                        </CardBody>
                        <Card.Footer style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
                        >
                            <div style={{display:'flex', flexDirection:'row', columnGap:'10px'}}>
                            <Image 
                                src={CourseImage} 
                                height={40} 
                                width={40} 
                                alt='avatar' 
                                style={{borderRadius:'50%'}} />

                                <div style={{padding:'0px'}}>
                                    <h6 style={{margin:'0px'}}>Mr Elijah</h6>
                                    <p style={{color:primary}}>Instructor</p>
                                </div>
                            </div>
                            <div 
                            style={{
                                display:'flex', 
                                flexDirection:'row', 
                                columnGap:'10px', 
                                justifyContent:'center',
                                alignItems:'center'
                                }}>
                                <CiTimer size={30} color={primary} />
                                <p>9 weeks</p>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            })}

        </Row>
    </Row>
}