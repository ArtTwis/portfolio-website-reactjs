import React from "react";
import AppThemeColor from "../../../AppThemeColor";
import { useSelector } from "react-redux";
import { GearsData } from "./Data/GearsData";
import GearCard from "./GearCard";

const Gear = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, bodyBgColor, cardBorderColor } =
    AppThemeColor[app_theme];

  return (
    <section id="gear" className="gear-section">
      <div className="container">
        <div className="section-header row justify-content-center">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="gear-section-title" style={{ color: textColor }}>
                Gears
              </h1>
            </div>
          </div>
        </div>
        <div className="gears-wrapper">
          {GearsData.map((gear, index) => (
            <GearCard key={gear.productId + "-" + index} gear={gear} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gear;
