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

// SSR disabled
const Location = dynamic(() => import("./components/location/location"), { ssr: false });



export default function Home() {
  return (<>
    <Advert />
    <Services />
    <About />
    <Courses />
    <WhyChooseUs />
    <Tutors />
    <Gallery />
    <HowItWorks />
    <Testimonies />
    <Location /> 
  </>
  );
}
