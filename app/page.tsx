"use client"

import Facilities from "./components/facilities/facilities";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import QuickActions from "./components/quickActions/quickActions";
import Services from "./components/services/services";
import Terminals from "./components/terminals/terminals";
import Testimonies from "./components/testimonies/testimonies";
import WhyChooseUs from "./components/whychooseus/whychooseus";

export default function Home() {
  return (<>
    <Services />
    <QuickActions />
    <WhyChooseUs />
    <Terminals />
    <HowItWorks />
    <Facilities />
    <Testimonies />
  </>
  );
}
