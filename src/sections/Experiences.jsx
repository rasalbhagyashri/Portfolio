import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="experience" className="w-full mt-30 pb-30 scroll-mt-24">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
