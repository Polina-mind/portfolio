import React from "react";
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
          <a className="contact" href={`mailto:${resumeData.contacts.mail}`}>
            {resumeData.contacts.mail}
          </a>
        </li>
        <li>{resumeData.contacts.place}</li>
        <li>
          <a className="contact" href={resumeData.contacts.linkedin}>
            {resumeData.contacts.linkedin}
          </a>
        </li>
      </ul>
    </div>

    <div className="block">
      <h2 className="text-on-line">PROFILE SUMMARY</h2>
      <p className="text">{resumeData.profileSummary}</p>
    </div>

    <div className="block">
      <h2 className="text-on-line">PROFESSIONAL SKILLS</h2>
      <ul className="list">
        {resumeData.professionalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

    <div className="block">
      <h2 className="text-on-line">TECHNICAL SKILLS</h2>
      <ul className="list">
        {resumeData.technicalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>

    <div className="block">
      <h2 className="text-on-line">WORK EXPERIENCE</h2>
      {resumeData.workExperience.map((job, index) => (
        <>
          <div className="job" key={index}>
            <h3 className="job-title">{job.jobTitle}</h3>
            <div className="job-info">
              <p className="company">{job.company}</p>
              <p>{job.period}</p>
            </div>
          </div>
          <ul className="text job-description">
            {job.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </>
      ))}
    </div>

    <div className="block">
      <h2 className="text-on-line">EDUCATION</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <p className="university">{edu.degree}</p>
          <div className="university-info">
            <p className="company">{edu.school}</p>
            <p>{edu.year}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="block">
      <h2 className="text-on-line">ADDITIONAL INFORMATION</h2>
      {resumeData.additionalInformation.map((info, index) => (
        <p className="add-info" key={index}>
          {info}
        </p>
      ))}
    </div>
  </div>
);

export default Resume;
