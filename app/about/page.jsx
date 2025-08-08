import Cta from "../components/about/Cta";
import Value from "../components/about/Value";
import { Team } from "../components/about/Team";
import { Timeline } from "../components/about/TimeLine";
import { Offices } from "../components/about/Office";
import Header from "../components/about/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <Timeline />
      <Value />
      <Team />
      <Offices />
      <Cta />
    </div>
  );
}
