import React from "react";

const Features = () => {
  return (
    <section id="features">
      <h1>Awesome Features</h1>
      <p>Replenish man have thing gathering lights yielding shall you</p>
      <div className="fea-base">
        <div className="fea-box">
          <i className="fas fa-graduation-cap"></i>
          <h3>Scholarship Facility</h3>
          <p>Opportunities for scholarships to help fund your education.</p>
        </div>
        <div className="fea-box">
          <i className="fas fa-book"></i>
          <h3>Online Courses</h3>
          <p>
            Access a wide range of courses and resources at your convenience.
          </p>
        </div>
        <div className="fea-box">
          <i className="fas fa-award"></i>
          <h3>Global Certification</h3>
          <p>
            Receive globally recognized certifications for your achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
