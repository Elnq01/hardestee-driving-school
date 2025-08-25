import { Row } from "react-bootstrap";
import HowStyles from "./HowItWorks.module.css";
import { charcoalGray2, offWhite2 } from "@/colors/colors";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import HeaderDesign from "../UI/headerDesign";

export default function HowItWorks() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
                <source src="/how-5.mp4" type="video/mp4" />
        
                Your browser does not support the video tag.
            </video>
            {showControl? null:<div style={{
              position:'absolute',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              height:'100%',
              width:'100%'
            }}>
              <button onClick={onPlayHandler} 
                style={{
                  background:charcoalGray2,
                  borderRadius:"50%",
                  padding:'20px',
                  }}>
                <FaPlay size={50} color={offWhite2} />
              </button>
            </div>}
          </div>
      </Row>
  );
}
