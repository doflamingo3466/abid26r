
import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentDetails from "../components/StudentDetails";
import type { Student } from "../components/StudentForm";

function Home() {
  const [students, setStudents] = useState<Student[]>([]);

  function addStudent(student: Student) {
    setStudents([...students, student]);
  }

  return (
    <div className="container py-5">
      <div className="dashboard-header mb-4">
        <div>
          <p className="small-label">STUDENT PORTAL / 2026</p>
          <h1>Registration Desk<span>.</span></h1>
        </div>

        <div className="student-count">
          <strong>{students.length}</strong>
          <small>REGISTERED</small>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="panel">
            <h4>New Student</h4>
            <p className="subtitle">Fill in the registration details.</p>

            <StudentForm onRegister={addStudent} />
          </div>
        </div>

        <div className="col-lg-7">
          <div className="panel students-panel">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h4>Students</h4>
                <p className="subtitle mb-0">Registration records</p>
              </div>

              <span className="student-number">
                {students.length}
              </span>
            </div>

            <StudentDetails students={students} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
