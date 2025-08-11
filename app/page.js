import { CaseStudySpotlight } from "./components/home/CaseStudySpotlight";
import { CountryComparison } from "./components/home/CountryComparison";
import { DualCTA } from "./components/home/DualCTA";
import GCCMapSection from "./components/home/GCCMapSection";
import Header from "./components/home/Header";
import ServicePillars from "./components/home/ServicePillars";
import { TestimonialCarousel } from "./components/home/TestimonialCarousel";

export default function Home() {
  return (
   <div>
    <Header />
    <GCCMapSection/>
    <ServicePillars/>
    <CountryComparison/>
    <CaseStudySpotlight/>
    <DualCTA/>
    <TestimonialCarousel/>
   </div>
  );
}
