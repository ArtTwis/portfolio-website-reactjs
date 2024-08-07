import React from "react";
import AppThemeColor from "../../../AppThemeColor";
import { useSelector } from "react-redux";
import { Education } from "./Data/Education";
import { Experience } from "./Data/Experience";

const Career = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, bodyBgColor, cardBorderColor } =
    AppThemeColor[app_theme];

  return (
    <section id="career" className="career-section">
      <div className="container">
        <div className="section-header row justify-content-center">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="career-section-title" style={{ color: textColor }}>
                Career
              </h1>
            </div>
          </div>
        </div>
        <div className="edu-wrapper row">
          <div className="edu-wrapper col-lg-5 col-md-12">
            <div
              className="edu-card card"
              style={{
                backgroundColor: bodyBgColor,
              }}
            >
              <h2 style={{ color: primaryColor }}>Education</h2>
              <div className="edu-content">
                <ul
                  className="timeline"
                  style={{
                    borderColor: primaryColor,
                    boxShadow: `0 1px 3px  ${cardBorderColor}`,
                  }}
                >
                  {Education.map((edu, index) => {
                    return (
                      <li
                        key={"edu-" + edu.institute}
                        className={`event  ${
                          app_theme === "dark" ? "eduDark" : "eduLight"
                        }`}
                        style={{ borderColor: cardBorderColor }}
                      >
                        <div className="event-headline">
                          <p
                            className="event-title"
                            style={{ color: textColor }}
                          >
                            {edu.institute}
                          </p>
                          <p
                            className="event-city"
                            style={{ color: textColor }}
                          >
                            {edu.city}
                          </p>
                          <p
                            className="event-course"
                            style={{ color: textColor }}
                          >
                            {edu.course}
                          </p>
                          <p className="eventwhen" style={{ color: textColor }}>
                            {edu.period}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="exp-wrapper col-lg-7 col-md-12">
            <div
              className="exp-card card"
              style={{
                backgroundColor: bodyBgColor,
              }}
            >
              <h2 style={{ color: primaryColor }}>Experience</h2>
              <div className="exp-content">
                <ul
                  className="timeline"
                  style={{
                    borderColor: primaryColor,
                    boxShadow: `0 1px 3px  ${cardBorderColor}`,
                  }}
                >
                  {Experience.map((exp, index) => {
                    return (
                      <li
                        key={"exp-" + exp.organization}
                        className={`event  ${
                          app_theme === "dark" ? "eduDark" : "eduLight"
                        }`}
                        style={{ borderColor: cardBorderColor }}
                      >
                        <div className="event-headline">
                          <p className="event-org" style={{ color: textColor }}>
                            {exp.organization}
                          </p>
                          <p
                            className="event-location"
                            style={{ color: textColor }}
                          >
                            {exp.location}
                          </p>
                          <p
                            className="event-title"
                            style={{ color: primaryColor }}
                          >
                            {exp.title}
                          </p>
                          <p className="eventwhen" style={{ color: textColor }}>
                            {exp.period}
                          </p>
                          <p
                            className="event-title"
                            style={{ color: textColor }}
                          >
                            Projects
                          </p>
                          {exp.projects.map((project) => {
                            return (
                              <div className="project-container">
                                <p
                                  className="event-project"
                                  style={{
                                    color: primaryColor,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {project.client} - {project.module}
                                </p>
                                <p
                                  className="event-keyword"
                                  style={{ color: textColor }}
                                >
                                  {project.description}
                                </p>
                                <p
                                  className="event-keyword"
                                  style={{ color: textColor }}
                                >
                                  {project.keyword}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
