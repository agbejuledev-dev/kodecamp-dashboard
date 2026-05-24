// Header.jsx - top section of the dashboard

const Header = ({ title, studentCount, averageScore }) => {
  return (
    <header className="header">
      <div className="header-brand">
        <h1 className="header-title">{title}</h1>
        <p className="header-sub">
          {studentCount} Students Enrolled &nbsp;|&nbsp; Class Average: {averageScore.toFixed(1)}%
        </p>
      </div>

      <div className="header-stats">
        <div className="header-stat">
          <span className="stat-value">{studentCount}</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="header-stat">
          <span className="stat-value">{averageScore.toFixed(1)}%</span>
          <span className="stat-label">Avg Score</span>
        </div>
      </div>
    </header>
  );
};

export default Header;