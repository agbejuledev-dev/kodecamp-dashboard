// StudentList.jsx — Grid wrapper that renders all StudentCard components

import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", children }) => {
  return (
    <section className="student-list">

      {/* ── List header with filter buttons (visual only — no state) ── */}
      <div className="list-header">
        <h2 className="list-title">{title}</h2>
        <div className="filter-controls">
          {/* BONUS: static display buttons — no filtering implemented per spec */}
          <button className="filter-btn filter-btn--active-selected">Show All</button>
          <button className="filter-btn">Show Active Only</button>
        </div>
      </div>

      {/* ── Card grid or empty state ── */}
      {students.length > 0 ? (
        <div className="card-grid">
          {students.map((student) => (
            // Use student.id as the stable key
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="list-empty">
          <p>No students to display</p>
        </div>
      )}

      {/* ── Optional footer content passed as children ── */}
      {children && (
        <div className="list-footer">
          {children}
        </div>
      )}
    </section>
  );
};

export default StudentList;