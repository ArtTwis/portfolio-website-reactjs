import React from "react";
import { Technologies } from "./Data/Technologies";
import { TechRating } from "./Data/TechRating";
import AppThemeColor from "../../../AppThemeColor";
import { useSelector } from "react-redux";
import "./css/HomeComponentStyle.css";

// To add Animation in Tech-Stack cards add reveal class in card className....

const SkillSet = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, secondaryColor, techCardBG } =
    AppThemeColor[app_theme];

  return (
    <div
      className='aboutme-section'
      style={{ backgroundColor: secondaryColor }}>
      <h1 style={{ color: textColor, textAlign: "center" }}>Skill Sets</h1>
      <h2 style={{ color: primaryColor }}>Technologies and Tools</h2>
      <div className='technologies-parent-dv'>
        {Technologies.map((techItem, index) => {
          return (
            <div
              key={"tech-icon-" + techItem.technology}
              className={`technology-item`}
              style={{
                backgroundColor: techCardBG,
                borderColor: primaryColor,
              }}>
              <img src={techItem.techicon} alt='Tech' />
              <h6 style={{ color: textColor }}>{techItem.technology}</h6>
            </div>
          );
        })}
      </div>
      <h2 style={{ color: primaryColor }}>Rate Myself</h2>
      <div className='rate-myself-container'>
        {TechRating.map((techItem, index) => {
          return (
            <div
              className='card'
              style={{ backgroundColor: "transparent" }}
              key={"tech-icon-" + techItem.technology + index}>
              <div className='percent'>
                <div
                  className={techItem.technology + " dot"}
                  style={{
                    transform: `rotate(3.6deg * ${techItem.rating})`,
                    animation: `${techItem.dotanimation} 3s linear forwards`,
                  }}></div>
                <svg>
                  <circle
                    cx={"70"}
                    cy={"70"}
                    r={"70"}
                    style={{ stroke: "#191919" }}></circle>
                  <circle
                    cx={"70"}
                    cy={"70"}
                    r={"70"}
                    style={{
                      stroke: techItem.color,
                      strokeDashoffset: 440 - (440 * techItem.rating) / 100,
                    }}></circle>
                </svg>
                <div className='data'>
                  <h2 style={{ color: textColor }}>
                    {techItem.rating}
                    <span>%</span>
                  </h2>
                  <p style={{ color: textColor }}>{techItem.technology}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSet;
