import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../components/SectionTitle";
import ListItems from "../components/ListItems";
import AboutImg from "../assets/images/subpages/about01.jpg";
import aboutImg2 from "../assets/images/subpages/about02.jpg";
import aboutImg3 from "../assets/images/subpages/about03.jpg";

const ourStory = [
  "Founded in 2000 as a freelance venture, now a trusted partner for businesses worldwide.",
  "Evolved with technology trends while staying rooted in creativity and user-centric design.",
  "Proudly serving startups, SMEs, and enterprises across 15+ industries.",
];

const whychooseus = [
  "20+ Years of Expertise: Proven track record in evolving digital landscapes.",
  "Freelance Flexibility: Agile workflows tailored to your unique needs.",
  "95% Client Retention: Long-term partnerships built on transparency.",
];

const uiuxdesign = [
  "User-Centric Interfaces: Intuitive designs that prioritize usability and engagement.",
  "Prototyping & Wireframing: Interactive mockups to visualize user journeys.",
  "Accessibility-First: WCAG-compliant designs for inclusive digital experiences.",
];

const seodm = [
  "Keyword Strategy: Data-backed SEO for top Google rankings.",
  "ROI-Driven Campaigns: Targeted PPC, social ads, and conversion optimization.",
  "Analytics & Reporting: Transparent metrics to track growth and refine strategies.",
];

const webdevelopment = [
  "Full-Stack Solutions: Responsive websites with React, Angular, or Node.js.",
  "E-Commerce Mastery: Custom Shopify, WooCommerce, and Magento integrations.",
  "Security & Scalability: Enterprise-grade architecture and API-driven workflows.",
];

const mobdevelopment = [
  "Native Apps: High-performance iOS (Swift) and Android (Kotlin) solutions.",
  "Cross-Platform Apps: Flutter or React Native for cost-effective scalability.",
  "App Security: Encryption, GDPR compliance, and secure payment gateways.",
];

const corevalues = [
  "Innovation: Staying ahead with cutting-edge tools and trends.",
  "Collaboration: Working with you, not just for you.",
  "Excellence: Delivering beyond expectations, every time.",
  "Sustainability: Ethical practices for long-term growth.",
];

const meetteam = [
  "Global Talent Hub: A network of 50+ designers, developers, marketers, and strategists across 10+ countries.",
  "Diverse Skill Sets: From UX researchers to SEO specialists, united by a shared goal: your success.",
  "Continuous Learners: Certifications in AWS, Google Analytics, Adobe Suite, and Agile methodologies.",
  "Client-First Mentality: We collaborate closely with you, ensuring your vision drives every decision.",
];

const pagesubtitle="Welcome to Corewebpro";
const pagetitle="Crafting Digital Excellence";
const pagedescription="Since 2000, Corewebpro has been at the forefront of digital innovation, delivering tailored solutions in UI/UX design, web development, SEO, digital marketing, and mobile apps.";

const About = () => {
  return (
    <>
      <main className="Subpage">
        <Helmet>
          <title>
           {pagesubtitle}
          </title>
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
            <img src={AboutImg} alt="" className="img-fluid roundedimg" />
            <div className="row section-row">
              <div className="col-md-6">
                <div className="section-content">
                  <SectionTitle
                    subtitle="Our Story"
                    title="From Vision to Global Impact"
                  />
                  <ListItems items={ourStory} className="mt-3 mt-md-5" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-content mt-3 mt-md-0">
                  <SectionTitle
                    subtitle="Why Choose Us?"
                    title="Decades of Trust, Innovation, Results"
                  />
                  <ListItems items={whychooseus} className="mt-3 mt-md-5" />
                </div>
              </div>
            </div>
            <div className="row section-row">
              <div className="col-md-12">
                <div className="section-content">
                  <SectionTitle
                    subtitle="Our Expertise"
                    title="Solutions That Transform Businesses"
                  />
                  <div className="row pt-2 pt-md-4 justify-content-md-between">
                    <div className="col-md-5">
                      <h4>UI/UX Design</h4>
                      <ListItems items={uiuxdesign} className="mt-2 my-md-4" />
                    </div>
                    <div className="col-md-5 pt-5 pt-md-5">
                      <h4>UI/UX Design</h4>
                      <ListItems
                        items={webdevelopment}
                        className="mt-2 mt-md-4"
                      />
                    </div>
                    <div className="col-md-5 pt-5 pt-md-5">
                      <h4>SEO & Digital Marketing</h4>
                      <ListItems items={seodm} className="mt-2 mt-md-4" />
                    </div>
                    <div className="col-md-5 pt-5 pt-md-5">
                      <h4>Mobile App Development</h4>
                      <ListItems
                        items={mobdevelopment}
                        className="mt-2 mt-md-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row section-row">
              <div className="col-md-6">
                <img src={aboutImg2} alt="" className="img-fluid roundedimg" />
              </div>
              <div className="col-md-6">
                <div className="section-content d-flex flex-column justify-content-center">
                  <SectionTitle
                    subtitle="Our Core Values"
                    title="Driving Success Through Integrity"
                  />
                  <ListItems items={corevalues} className="mt-2 mt-md-4" />
                </div>
              </div>
            </div>

            <div className="row section-row">
              <div className="col-md-6 order-md-last">
                <img src={aboutImg3} alt="" className="img-fluid roundedimg" />
              </div>
              <div className="col-md-6">
                <div className="section-content d-flex flex-column justify-content-center">
                  <SectionTitle
                    subtitle="Meet the Team"
                    title="Passionate Minds Behind the Magic"
                  />
                  <ListItems items={meetteam} className="mt-2 mt-md-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
