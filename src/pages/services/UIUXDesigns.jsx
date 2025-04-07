import React from "react";
import SubpageHeader from "../../components/SubpageHeader";
import Step01Img from "../../assets/images/step01.png";
import Step02Img from "../../assets/images/step02.png";
import Step03Img from "../../assets/images/step03.png";

const UIUXDesigns = () => {
  return (
    <main className="subPage" role="main">
      <SubpageHeader
        subTitle="Welcome to Core Web Pro"
        mainTitle="Create. Convert. Scale"
      />

      <section className="subpageMain">
        <div className="container">
          <div>
            <article className="sectionTitle pt-5">
              <h5>How we do it</h5>
              <div className="row">
                <div className="col-md-12">
                  <h3>
                    We have a team of seasoned product designers with years of
                    experience under their belts. When we assemble a team for
                    you, we make sure to include the ones that would best fit
                    your requirements.
                  </h3>
                </div>
              </div>
            </article>
          </div>

          <div className="processSteps">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div>
                  <h4>
                    First, tell us who we're building for, and what the problem
                    is.
                  </h4>
                  <p>
                    The design process starts way before we put pencil to paper
                    and sketch out that first wireframe. Good design needs to be
                    useful — our designers and product managers spend their
                    first several hours with you understanding your users, their
                    needs, digging into any data you already have and and
                    observing the current industry landscape.
                  </p>
                  <ul className="list-items">
                    <li>UX Research</li>
                    <li>Data analysis</li>
                    <li> Market Research and competitor anal</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src={Step01Img} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 align-self-center order-lg-last">
                <div>
                  <h4>Next, let's talk solutions.</h4>
                  <p>
                    This is the part where our design team does their thing.
                    This includes everything from visual explorations,
                    moodboarding and styletiles to wireframes, detailed design
                    systems, low and high fidelity prototypes and usability
                    testing.
                  </p>
                  <ul className="list-items">
                    <li>Visual Explorations</li>
                    <li>Prototyping</li>
                    <li>Design Systems</li>
                    <li>Usability Testing</li>
                    <li>Wireframing</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src={Step02Img} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 align-self-center">
                <div>
                  <h4>Ship, measure, iterate, repeat.</h4>
                  <p>
                    Your product is designed, built and shipped — great! But
                    that's just the start. Good design is always a work in
                    progress and from this point on, our designers will collect
                    user feedback, analyse metrics, identify problem areas and
                    pain points, and work on data-driven iterations that are
                    guaranteed to work!
                  </p>
                  <ul className="list-items">
                    <li>Visual Explorations</li>
                    <li>Prototyping</li>
                    <li>Design Systems</li>
                    <li>Usability Testing</li>
                    <li>Wireframing</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src={Step03Img} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default UIUXDesigns;
