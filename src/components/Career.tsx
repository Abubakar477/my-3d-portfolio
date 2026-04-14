import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSCS Student</h4>
                <h5>Institute of Space Technology (IST)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently in my 6th semester pursuing a Bachelor's in Computer Science.
              Developing practical software skills across mobile engineering, game development,
              and robust backend web architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer</h4>
                <h5>Academic & Personal Projects</h5>
              </div>
              <h3>2022–Present</h3>
            </div>
            <p>
              Building a variety of full-stack and mobile applications including on-device AI apps, branching narrative games in C#, and enterprise-grade web platforms in Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
