// StudentCard.jsx — Individual student profile card

import Badge from "./Badge";
import StatBar from "./StatBar";

const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const StudentCard = ({ student: { firstName, lastName, track, score, isActive, skills } }) => {
  const grade = getGrade(score);
  const fullName = `${firstName} ${lastName}`;
  // Get first letter of first and last name for the initials
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <article className={`student-card ${!isActive ? "student-card--inactive" : ""}`}>

      <div className="card-top">
        {/* Initials avatar instead of photo */}
        <div className="avatar-wrap">
          <div className="avatar-initials">
            {initials}
          </div>
          <span className={`status-dot ${isActive ? "status-dot--active" : "status-dot--inactive"}`} />
        </div>

        <div className="card-identity">
          <h3 className="card-name">{fullName}</h3>
          <div className="card-badges">
            <Badge label={track} type="track" />
            <Badge label={isActive ? "Active" : "Inactive"} type="status" />
            <Badge label={`Grade: ${grade}`} type="grade" />
          </div>
        </div>
      </div>

      <div className="card-score">
        <StatBar score={score} label="Score" />
      </div>

      <div className="card-skills">
        <p className="skills-heading">Skills</p>
        {skills.length > 0 ? (
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill} className="skill-tag">{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="skills-empty">No skills listed yet</p>
        )}
      </div>
    </article>
  );
};

export default StudentCard;