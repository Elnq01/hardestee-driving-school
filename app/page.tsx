"use client"

import HowItWorks from "./components/HowItWorks/HowItWorks";
import About from "./components/about/about";
import Services from "./components/services/services";
import Testimonies from "./components/testimonies/testimonies";
import WhyChooseUs from "./components/whychooseus/whychooseus";
import Advert from "./components/advert/advert";
import Courses from "./components/courses/courses";
import Tutors from "./components/tutors/tutors";
import Gallery from "./components/gallery/gallery";
// import Location from "./components/location/location";
import dynamic from "next/dynamic";
import { motion, Variants } from "motion/react"

// SSR disabled
const Location = dynamic(() => import("./components/location/location"), { ssr: false });



export default function Home() {

    const slideUpVariants:Variants = {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut", delay:0.2 },
      },
    };


  return (<>
    <Advert />

    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
      <Services />
    </motion.div>

    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        
      <About />

    </motion.div>

     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <Courses />
      </motion.div>

     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >

        <WhyChooseUs />
    </motion.div>

    
     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <Tutors />

      </motion.div>


      
     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <Gallery />

      </motion.div>

      
     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <HowItWorks />

      </motion.div>


      
     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <Testimonies />

      </motion.div>

      
     <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      >
        <Location /> 
      </motion.div>
  </>
  );
}
