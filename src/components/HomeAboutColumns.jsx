import React from "react";
import CreativeHouseIcon from "../assets/images/creativehouse-icon.svg";
import IdeasFactoryIcon from "../assets/images/ideas-factory-icon.svg";
import DesignerIcon from "../assets/images/designer-icon.svg";
import DeveloperIcon from "../assets/images/developer-icon.svg";

const HomeAboutColumns = () => {
  //columns data
  const aboutColumnsData = [
    {
      id: 1,
      icon: CreativeHouseIcon,
      title: "Creative House",
      description:
        "The wall, betrothed moon and stars, spiced wine, honed and ready pride.",
    },
    {
      id: 2,
      icon: IdeasFactoryIcon,
      title: "Ideas Factory",
      description:
        "When it comes to innovative web design, we can honestly say that our.",
    },
    {
      id: 3,
      icon: DesignerIcon,
      title: "Designer",
      description:
        "Our designers understand their users: their fears, goals, behaviors, and.",
    },
    {
      id: 4,
      icon: DeveloperIcon,
      title: "Developer",
      description:
        "Keep in mind that software is ultimately about people, so having the.",
    },
  ];
  return (
    <div>
      <div className="row">
        {aboutColumnsData.map((column) => (
          <div key={column.id} className="col-md-3 text-center aboutcol">
            <img src={column.icon} alt={column.title} />
            <article className="text-text-color p-3">
              <h4>{column.title}</h4>
              <p>{column.description}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAboutColumns;
