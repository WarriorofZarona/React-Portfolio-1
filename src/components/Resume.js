import React from "react";
const Resume = ({ resumeData }) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p className="description">{item.Description}</p>

                    {item.Achievements.map((achievement) => (
                      <ul>
                        <li>{achievement}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>

                    {item.Achievements.map((achievement) => (
                      <ul>
                        <li>{achievement}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="skills">
            {resumeData.skills &&
              resumeData.skills.map((item) => {
                return (
                  <span className="skill">
                    <img
                      class="skill-logo"
                      src={item.image}
                      alt={item.skillname}
                      title={item.skillname}
                    />
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
