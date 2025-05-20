"use client"

import Facilities from "./components/facilities/facilities";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import QuickActions from "./components/quickActions/quickActions";
import Services from "./components/services/services";
import Terminals from "./components/terminals/terminals";
import Testimonies from "./components/testimonies/testimonies";
import WhyChooseUs from "./components/whychooseus/whychooseus";
import Advert from "./components/advert/advert";
import Test from "./components/terminals/test";
import dynamic from 'next/dynamic';

// const MapView = dynamic(() => import('./components/terminals/test'), {
//   ssr: false, // disables SSR
// });



export default function Home() {
  return (<>
    <Advert />
    <Services />
    <QuickActions />
    <WhyChooseUs />
    <Terminals />
    <HowItWorks />
    <Facilities />
    {/* <MapView /> */}
    {/* <Testimonies /> */}
  </>
  );
}
