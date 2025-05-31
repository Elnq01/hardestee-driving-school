import { Row } from "react-bootstrap";
import HowStyles from "./HowItWorks.module.css";
import CustomDesign from "../UI/customDesign";
import { primary } from "@/colors/colors";
import { useRef } from "react";

export default function HowItWorks() {
  const videoRef = useRef(null);

  return (
      <Row className={HowStyles.container}>
        <div className={HowStyles.header}>
          <h5 className={HowStyles.H5} style={{color:primary}}>Our It Works</h5>
          <CustomDesign />
          <h2 className={HowStyles.H2} >How Hardestee Driving School works?</h2>
        </div>
          
          <video 
            ref={videoRef}
            style={{
                width:'100%', 
                // height:'500px', 
                // display:'block', 
                // objectFit:'cover'
                }} preload="none" poster="/how-hardestee-driving-school-works.png">
            <source src="/how-hardestee-driving-school-works-3.mp4" type="video/mp4" />
     
            Your browser does not support the video tag.
        </video>
      </Row>
  );
}
