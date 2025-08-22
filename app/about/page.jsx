import Cta from "../components/about/Cta";
import Value from "../components/about/Value";

import { Timeline } from "../components/about/TimeLine";
import { Offices } from "../components/about/Office";
import Header from "../components/about/Header";
import { Team } from "../components/about/Team";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <Timeline />
      <Value />
      <Team/>
      <Offices />
      <Cta />
    </div>
  );
}
