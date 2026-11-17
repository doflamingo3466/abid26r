
import { useState } from "react";

export type Student = {
  name: string;
  email: string;
  phone: string;
  course: string;
  gender: string;
};

type Props = {
  onRegister: (student: Student) => void;
};

function StudentForm({ onRegister }: Props) {
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
  });

  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.course || !form.gender) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    onRegister(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      gender: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          pattern="[A-Za-z ]+"
          title="Name should contain letters only"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="03XXXXXXXXX"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9]+"
          title="Please enter numbers only"
          maxLength={11}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Course</label>
        <select
          name="course"
          className="form-select"
          value={form.course}
          onChange={handleChange}
          required
        >
          <option value="">Select course</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="form-label d-block">Gender</label>

        <div className="d-flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="btn register-btn w-100">
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;
