import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../components/SectionTitle";
import ListItems from "../components/ListItems";
import uiuximg01 from "../assets/images/subpages/uiux01.jpg";
import uiuximg02 from "../assets/images/subpages/uiux02.png";
import uiuximg03 from "../assets/images/subpages/uiux03.png";
import uiuximg04 from "../assets/images/subpages/uiux04.png";

const pagesubtitle = "UX/UI Designing";
const pagetitle = "Design That Converts Visitors";
const pagedescription =
  "We craft intuitive interfaces that delight users and drive business results through strategic design thinking";

const designprocess = [
  "User Research & Persona Development:  We analyze real user behavior to create targeted audience profiles for precise design decisions.",
  "Information Architecture & Wireframing: Structuring content logically and sketching blueprints for intuitive user flows and navigation.",
  "Interactive Prototyping:  Transforming static designs into clickable prototypes to validate functionality early.",
  "Usability Testing & Iteration:  Observing real users interact with designs to refine and eliminate friction points.",
];

const designspecialities = [
  "Web & Mobile App UI/UX:  We craft intuitive, visually stunning interfaces for seamless user journeys across all devices—from responsive websites to native iOS/Android apps.",
  "Design Systems & Style Guides:  Build brand consistency at scale with reusable component libraries, documented patterns, and future-proof design governance.",
  "SaaS Product Interfaces:  Complex workflows made simple. We specialize in dashboards, admin panels, and B2B tools that users actually enjoy.",
  "E-commerce Optimization:  Turn browsers into buyers with conversion-focused product pages, frictionless checkout flows, and mobile-first shopping experiences",
];

const whychoose = [
  "300+ Successful Design Projects: roven track record across 12 industries—from fintech to healthcare—delivering measurable improvements in engagement and conversions.",
  "Data-Driven Design Decisions:We blend qualitative insights (user testing) with quantitative metrics (heatmaps, analytics) to remove guesswork.",
  "Collaborative Design Sprints: Fast, transparent iterations with Figma prototypes and weekly stakeholder reviews—no endless feedback loops..",
  "Developer-Friendly Handoffs: Pixel-perfect specs, organized design tokens, and Slack-ready dev teams for smoother implementation.",
];

const UIUXDesigning = () => {
  return (
    <>
      <main className="Subpage">
        <Helmet>
          <title>{pagesubtitle}</title>
          <meta
            name="description"
            content="Learn more about Core Web Pro Studio, Hyderabad's leading web design and development agency. Discover our expertise in UI/UX, web development, SEO, digital marketing, and mobile apps."
          />
          <meta
            name="keywords"
            content="About Core Web Pro Studio, Web Design, Web Development, UI/UX, SEO, Digital Marketing, Mobile Apps, Hyderabad, Agency"
          />
          <meta name="author" content="Core Web Pro Studio" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="About Us | Core Web Pro Studio - Digital Excellence in Hyderabad"
          />
          <meta
            property="og:description"
            content="Discover the story and expertise behind Core Web Pro Studio, Hyderabad's award-winning web design and development agency."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://corewebpro.com/about" />
          <meta
            property="og:image"
            content="https://corewebpro.com/assets/images/logo.svg"
          />
        </Helmet>
        <section className="subpage-header">
          <div className="custom-container">
            <h1>{pagesubtitle}</h1>
            <h2>{pagetitle}</h2>
            <p>{pagedescription}</p>
          </div>
        </section>
        <section className="subpage-content">
          <div className="custom-container">
            <img src={uiuximg01} alt="" className="img-fluid roundedimg" />
            <div className="row section-row">
              <div className="col-md-12">
                <div className="section-content">
                  <SectionTitle title="Design With Intent: Experiences That Engage & Deliver" />
                  <p>
                    At CoreWebPro, we blend aesthetics with functionality to
                    create digital experiences that users love. Our
                    human-centered design approach focuses on solving real user
                    problems while achieving your business objectives. From
                    initial research to pixel-perfect prototypes, we design
                    interfaces that reduce friction and increase engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="row section-row">
              <div className="col-md-12">
                <div className="section-content">
                  <div className="row pt-2 pt-md-4 justify-content-md-between">
                    <div className="col-md-5 align-self-center">
                      <SectionTitle
                        subtitle="Where Ideas Become Digital Reality"
                        title="Our Design Process"
                      />
                      <ListItems
                        items={designprocess}
                        className="mt-2 my-md-4"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src={uiuximg02}
                        alt="UI/UX Design Process"
                        className="img-fluid roundedimg"
                      />
                    </div>
                  </div>

                  <div className="row pt-2 pt-md-4 justify-content-md-between">
                    <div className="col-md-5 align-self-center order-md-last">
                      <SectionTitle
                        subtitle="Design Specialties"
                        title="Tailored Solutions for Every Digital Need"
                      />
                      <ListItems
                        items={designspecialities}
                        className="mt-2 my-md-4"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src={uiuximg03}
                        alt="UI/UX Design Process"
                        className="img-fluid roundedimg"
                      />
                    </div>
                  </div>

                   <div className="row pt-2 pt-md-4 justify-content-md-between">
                    <div className="col-md-5 align-self-center">
                      <SectionTitle
                        subtitle="Why Choose Our Designs?"
                        title="Where Expertise Meets Exceptional Results"
                      />
                      <ListItems
                        items={whychoose}
                        className="mt-2 my-md-4"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src={uiuximg04}
                        alt="UI/UX Design Process"
                        className="img-fluid roundedimg"
                      />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UIUXDesigning;
