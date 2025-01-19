import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="1st Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Register
        </h3>

        <p>
          Register to create your profile and explore matches. Fill in your
          details, set preferences, and connect securely with compatible
          profiles to find the right partner.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="2nd Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Find your Match
        </h3>

        <p>
          Browse through profiles based on your preferences and discover
          potential matches. Our advanced algorithm helps you find compatible
          partners, making your search easier and more efficient.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="3rd Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Send Interest
        </h3>

        <p>
          Express your interest by sending a message or notification to a
          profile you like. Initiate a connection and take the first step toward
          building a meaningful relationship.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="4th Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Get Profile Information
        </h3>

        <p>
          View detailed profiles to learn more about potential matches. Explore
          interests, backgrounds, and preferences to make informed connections.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="5th Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1) ", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Start Meetups
        </h3>
        <p>
          Take the next step by arranging meetups with your matches. Whether
          online or in person, start building a connection through meaningful
          conversations.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgba(37, 99, 235, 0.9)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgba(37, 99, 235, 0.9)" }}
        date="5th Step"
        iconStyle={{ background: "rgba(50, 60, 70, 1)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-2xl font-bold">
          Getting Marriage
        </h3>

        <p className="">
          Once you've found the right partner, take the next step toward a
          lifelong commitment. Our platform supports you in making informed
          decisions for a happy and successful marriage.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
