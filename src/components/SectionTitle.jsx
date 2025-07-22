import React from "react";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="section-title">
      {subtitle && <p>{subtitle}</p>}
      {title && <h3>{title}</h3>}
    </div>
  );
};

export default SectionTitle;
