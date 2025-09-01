// import Image from "next/image";
import CourseImage1 from '../../../public/cur 1.jpg';
import CourseImage2 from '../../../public/cur 2.jpg';
import CourseImage3 from '../../../public/cus 3.jpg';
import { Card } from "react-bootstrap";

export default function CourseImg({title}:{title:String}){
    switch(title){
        case "Automatic Car Lessons":
            // return <Image src={CourseImage1} alt="automatic" />
            return <Card.Img variant='top' style={{height:'200px'}} src={CourseImage1.src} />
        
        case "Highway Driving Lessons":
            // return <Image src={CourseImage2} alt="High" />
            return <Card.Img variant='top' style={{height:'200px'}} src={CourseImage2.src} />
           
        default:
            // return <Image src={CourseImage3} alt="International" />
            return <Card.Img variant='top' style={{height:'200px'}} src={CourseImage3.src} />

    }
}