import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" 
          date="2015-2016" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vikash Residential School, Bargarh, Odisha
          </h3>
          <p>Secondary, CBSE Board</p>
          <p>CGPA - 9.8</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
          date="2016-2018" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vikash Residential School, Bargarh, Odisha
          </h3>
          <p>Senior Secondary, CBSE Board</p>
          <p>Aggregrate Percentage- 64.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
          date="2019-2023" 
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Silicon Institute of Technology, Bhubaneswar, Odisha
          </h3>
          <p>B.Tech in Electronics and Communication Engineering</p>
          <p>CGPA - 7.8</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Writer- WriteWit
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhubaneswar, Odisha
          </h4>
          <p>Content developer for blogs, websites and also have worked as a webcontent writer for various well-known clients like Thrilophilia.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience