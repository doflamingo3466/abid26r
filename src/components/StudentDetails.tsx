import type { Student } from "./StudentForm";

type Props = {
  students: Student[];
};

function StudentDetails({ students }: Props) {
  if (students.length === 0) {
    return (
      <div className="empty">
        <p>No students registered yet.</p>
      </div>
    );
  }

  return (
    <div>
      {students.map((student, index) => (
        <div className="student-card" key={index}>
          <div className="d-flex justify-content-between">
            <h6>{student.name}</h6>
            <span className="student-id">#{index + 1}</span>
          </div>

          <p>{student.email}</p>

          <div className="student-info">
            <span>{student.course}</span>
            <span>{student.gender}</span>
          </div>

          <small>{student.phone}</small>
        </div>
      ))}
    </div>
  );
}

export default StudentDetails;
