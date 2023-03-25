import { VerticalTimeline } from "react-vertical-timeline-component";
import HistorySection from "./HistorySection";

//Style
import "../Restaurant.scss";

const Story = () => {
  return (
    <section>
      <h2>Da più di 25 anni con la stessa passione</h2>
      <VerticalTimeline>
        <HistorySection
          date={"1996"}
          paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              nulla earum autem recusandae quam explicabo aut. Repellat,
              facilis sunt. Sit, soluta impedit! Incidunt, quas distinctio?
              Eius explicabo ex eum voluptatibus."
          title="NASCE IL MABROUK"
        />
        <HistorySection
          date={"2012"}
          paragraph="Trasmesso dalla CNN"
          title="FINO IN AMERICA"
        />
        <HistorySection
          date={"2022"}
          paragraph="Il mabrouk direttamente in mezzo al mare"
          title="ESCURSIONI"
        />
      </VerticalTimeline>
    </section>
  );
};

export default Story;
