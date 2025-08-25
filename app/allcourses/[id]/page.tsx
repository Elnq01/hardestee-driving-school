"use client"

import { Breadcrumb, Card, CardBody, Col, Row, Table } from "react-bootstrap";
import {ourCourses} from ".././coursesdata"
// import CustomBtn2 from "../../components/UI/custombtn2";
import Image from "next/image";
import { offWhite2, primary } from "@/colors/colors";
// import { CiTimer } from "react-icons/ci";
// import CourseImage from '../../public/bus.jpg';
import AllCoursesSrc from "../../../public/allcourses.png";
import SingleSrc from "../../../public/single.jpg"
import singlecourseStyle from "./singlecourse.module.css";
import { useParams } from "next/navigation";


export default function SingleCourse(){
    const param = useParams();
    const ParamId = param.id;

    const singleData = ourCourses.filter(item => item.link == ParamId);
    // console.log("jfgkjgkgj: ", singleData)

    return <Row className={singlecourseStyle.container}>
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
        <Row className={singlecourseStyle.cardContainer}>
            <Col lg={8} style={{padding:'20px'}}>
                <h2 style={{marginBottom:'30px'}}>{singleData[0].title}</h2>
                <div style={{height:'350px', marginBottom:'50px'}}>
                    <Image src={SingleSrc} alt="single image" style={{height:'100%', width:'100%'}} /> 
                </div>

                <div style={{display:'flex', flexDirection:'row', 
                    columnGap:'20px', alignItems:"center", 
                    background:'#201520', padding:'20px',
                    color:offWhite2}}>
                    <Image 
                        src={SingleSrc} 
                        alt="single image" 
                        style={{height:'50px', width:'50px', borderRadius:'50%'}} /> 
                    <div>
                        <h4>{singleData[0].tutor.name}</h4>
                        <p>{singleData[0].tutor.role}</p>
                    </div>
                </div>

                <p style={{margin:'20px auto', fontSize:'18px', textAlign:'justify'}}>{singleData[0].longDescription}</p>
                <div style={{position:'relative', marginTop:'60px'}}>
                    <h3 style={{marginBottom:'30px'}}>Driving School Advantages</h3>
                    <div style={{height:'200px', width:'200px'}}>
                        <Image src={SingleSrc} alt="advantages" style={{height:'100%', width:'100%'}} />
                    </div>
                    <div style={{position:'absolute', right:'-20px', top:'30%'}}>
                        {singleData[0].advantages.map((item, index) => {
                            return <div 
                            style={{fontWeight:'bolder', fontSize:'17px',
                                marginBottom:'10px'
                            }} key={index}>{item}</div>
                        })}
                    </div>
                </div>
            </Col>
            <Col lg={4} style={{padding:'20px'}}>

                <h3>Course Features</h3>
                <div style={{marginBottom:'50px', marginTop:'30px'}}>
                    {singleData[0].features.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                </div>

                 <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th colSpan={4}>Core Features</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sessions: </td>
                            <td>Lessions: </td>
                        </tr>
                        <tr>
                            <td>20 Hours</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Row>
}