// Badge.jsx — Reusable pill badge for track, status, and grade labels

const Badge = ({ label, type = "track" }) => {
  // className uses template literal to apply the correct color variant
  return (
    <span className={`badge badge-${type}`}>
      {label}
    </span>
  );
};

export default Badge;