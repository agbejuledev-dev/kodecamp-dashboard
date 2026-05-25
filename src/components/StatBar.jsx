// StatBar.jsx — Visual score progress bar with color-coded performance

const StatBar = ({ score, label = "Score" }) => {
  // Determine fill color based on score range
  const color =
    score >= 80
      ? "#4caf50"   // green — high performance
      : score >= 60
      ? "#ff9800"   // orange — mid performance
      : "#f44336";  // red — needs improvement

  return (
    <div className="statbar">
      <div className="statbar-header">
        <span className="statbar-label">{label}</span>
        <span className="statbar-value" style={{ color }}>{score}%</span>
      </div>
      {/* Track (background) */}
      <div className="statbar-track">
        {/* Fill bar using inline style for dynamic width and color */}
        <div
          className="statbar-fill"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default StatBar;