import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header">
        <h1 className="name">Polina Artiushenko</h1>
        <p className="position">SOFTWARE ENGINEER</p>
        <ul className="list">
          <li>
            <a className="contact" href="tel:+38(099)797-55-15">
              (099) 797-5515
            </a>
          </li>
          <li>
            <a className="contact" href="mailto:artiushenkopolina@gmail.com">
              artiushenkopolina@gmail.com
            </a>
          </li>
          <li>Kyiv, Ukraine</li>
          <li>
            <a
              className="contact"
              href="https://www.linkedin.com/in/polina1505"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="block">
        <h2 className="text-on-line">PROFILE SUMMARY</h2>
        <p className="text">
          Software Engineer with more than 2 years of experience, devoted to JS
          & React & Team.
        </p>
      </div>
      <div className="block">
        <h2 className="text-on-line">PROFESSIONAL SKILLS</h2>
        {/* <h3>PROFESSIONAL SKILLS</h3> */}
        <ul className="list">
          <li>Result-driven</li>
          <li>Team player</li>
          <li>Critical-thinking</li>
          <li>Responsible</li>
          <li>Communicative</li>
          <li>Work ethic</li>
          <li>Positive</li>
        </ul>
        {/* <h3>TECHNICAL SKILLS</h3> */}
        <ul className="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>Jest</li>
          <li>WDIO</li>
          <li>VS Code</li>
          <li>JAWS</li>
          <li>Jira</li>
          <li>Jenkins</li>
        </ul>
      </div>
      <div className="block">
        <h2 className="text-on-line">WORK EXPERIENCE</h2>
        <div className="job">
          <h3 className="job-title">DEVELOPER</h3>
          <div className="job-info">
            <p className="company">EPAM</p>
            <p>Sep 2021 - Present</p>
          </div>
        </div>
        <ul className="text job-description">
          <li>
            Working with web technologies HTML, CSS, JavaScript, React, and
            various libraries.
          </li>
          <li>Bugs fixing in application modules.</li>
          <li>
            Developing React components to replace the existing jQuery code.
          </li>
          <li>
            Utilizing testing tools, including Jest, WDIO (using Docker and
            Rancher), and TestCafe, to test web applications.
          </li>
          <li>
            Enhancing accessibility of web applications to provide equal user
            access (working with JAWS screen reader).
          </li>
          <li>
            Effective communication with clients regarding PR&#39;s review.
          </li>
          <li>Working with tools, including Jira, Jenkins, and GitHub.</li>
          <li>
            Providing guidance for newcomers during the onboarding period.
          </li>
        </ul>
        <div className="job">
          <h3 className="job-title">DEVELOPER</h3>
          <div className="job-info">
            <p className="company">GoIT</p>
            <p>Feb 2021 - Aug 2021</p>
          </div>
        </div>
        <ul className="text job-description">
          <li>
            Utilized agile development methodologies to ensure project success.
          </li>
          <li>
            Creating the ability to add|delete the movie to the user's library,
            implemented with local storage.
          </li>
          <li>Creating markup with responsive design.</li>
        </ul>
      </div>
      <div className="block">
        <h2 className="text-on-line">EDUCATION</h2>
        <p className="university">MASTER's DEGREE IN COMPUTER SCIENCE</p>
        <div className="university-info">
          <p className="company">NTUU "KPI"</p>
          <p>2008</p>
        </div>
      </div>
      <div className="block">
        <h2 className="text-on-line">ADDITIONAL INFORMATION</h2>
        <p className="add-info">ENGLISH level B2</p>
        <p>Oracle Cloud Infrastructure Foundations Certified Associate</p>
      </div>
    </div>
  );
};

export default Resume;
