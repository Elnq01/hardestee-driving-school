import { Row } from "react-bootstrap";
import HowStyles from "./HowItWorks.module.css";
import CustomDesign from "../UI/customDesign";
import { charcoalGray2, offWhite2, primary } from "@/colors/colors";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import HeaderDesign from "../UI/headerDesign";

export default function HowItWorks() {
  const videoRef = useRef(null);
  const [showControl, setShowControl] = useState(false);

  const onPlayHandler = () => {
    if(videoRef.current){
      videoRef.current.play();
      setShowControl(true);
    }
  }

  const onPlayEnd = () => {
    setShowControl(false);
  }

  return (
      <Row className={HowStyles.container}>
        <div className={HowStyles.header}>
          <HeaderDesign text1="How It" text2="Works"/>
          {/* <CustomDesign /> */}
          <h2 className={HowStyles.H2} >How Hardestee Driving School works?</h2>
        </div>
          <div className={HowStyles.videoContainer}>
              <video 
                onEnded={onPlayEnd}
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
            {showControl? null:<button onClick={onPlayHandler} 
              style={{
                position:'absolute', 
                top:'50%', 
                left:'50%',
                background:charcoalGray2,
                borderRadius:"50%",
                padding:'20px 18px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
              <FaPlay size={50} color={offWhite2} />
            </button>}
          </div>
      </Row>
  );
}
