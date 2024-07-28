import React from "react";
import AppThemeColor from "../../../AppThemeColor";
import { useSelector } from "react-redux";

const GearCard = ({ gear }) => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, bodyBgColor, cardBorderColor } =
    AppThemeColor[app_theme];

  return (
    <div className="gear-card" style={{ borderColor: cardBorderColor }}>
      <img
        src={gear.productImage}
        alt={gear.productName}
        className="product-image"
      />
      <div className="product-details">
        <h2 className="product-name" style={{ color: primaryColor }}>
          {gear.productName}
        </h2>
        <p className="product-description" style={{ color: textColor }}>
          {gear.productDescription}
        </p>
        <p
          className="product-price"
          style={{ color: primaryColor, textAlign: "center" }}
        >
          {gear.productPrice}
        </p>
        <p style={{ textAlign: "center" }}>
          <a
            href={gear.productLink}
            className="buy-link"
            style={{ borderColor: textColor, color: textColor }}
          >
            Buy Link
          </a>
        </p>
      </div>
    </div>
  );
};

export default GearCard;
