import { Fragment } from "react";
import resumeData from "./data";
import "./Resume.css";

const Resume = () => (
  <div className="resume-container">
    <div className="header">
      <h1 className="name">{resumeData.name}</h1>
      <p className="position">{resumeData.position}</p>
      <ul className="list">
        <li>
          <a className="contact" href={`tel:${resumeData.contacts.phone}`}>
            {resumeData.contacts.phone}
          </a>
        </li>
        <li>
          <a className="contact" href={resumeData.contacts.linkedin}>
            linkedIn
          </a>
        </li>
        <li>
          <a className="contact" href={`mailto:${resumeData.contacts.mail}`}>
            {resumeData.contacts.mail}
          </a>
        </li>
        <li>{resumeData.contacts.place}</li>
      </ul>
    </div>

    <div>
      <h2 className="text-on-line">PROFILE SUMMARY</h2>
      <p className="text">{resumeData.profileSummary}</p>
    </div>

    <div>
      <h2 className="text-on-line">PROFESSIONAL SKILLS</h2>
      <ul className="list">
        {resumeData.professionalSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-on-line">TECHNICAL SKILLS</h2>
      <ul className="list">
        {resumeData.technicalSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-on-line">MY PROJECTS</h2>
      <ul className="list">
        {resumeData.myProjects.map(({ id, name, link }) => (
          <li key={id}>
            <a className="contact" href={link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-on-line">WORK EXPERIENCE</h2>
      {resumeData.workExperience.map(
        ({ jobTitle, project, company, period, description }) => (
          <Fragment key={project}>
            <div className="job">
              <h3 className="job-title">
                {jobTitle} in {project} project
              </h3>
              <div className="job-info">
                <p className="company">{company}</p>
                <p>{period}</p>
              </div>
            </div>
            <ul className="text job-description">
              {description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </Fragment>
        )
      )}
    </div>

    <div className="block">
      <h2 className="text-on-line">EDUCATION</h2>
      {resumeData.education.map(({ degree, school, year }) => (
        <div key={school}>
          <p className="university">{degree}</p>
          <div className="university-info">
            <p className="company">{school}</p>
            <p>{year}</p>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h2 className="text-on-line">ADDITIONAL INFORMATION</h2>
      {resumeData.additionalInformation.map((info) => (
        <p className="add-info" key={info}>
          {info}
        </p>
      ))}
    </div>
  </div>
);

export default Resume;
