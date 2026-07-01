import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import InputField from "./components/InputField";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(student);

    setStudent({
      name: "",
      email: "",
      course: "",
      mobile: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <Card>
          <h2>🎓 Student Registration</h2>

          <form onSubmit={handleSubmit}>
            <InputField
              label="Student Name"
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />

            <InputField
              label="Course"
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
            />

            <InputField
              label="Mobile"
              type="text"
              name="mobile"
              value={student.mobile}
              onChange={handleChange}
            />

            <Button text="Register Student" />
          </form>
        </Card>

        {data && (
          <Card>
            <h2>📋 Student Details</h2>

            <p><b>Name:</b> {data.name}</p>
            <p><b>Email:</b> {data.email}</p>
            <p><b>Course:</b> {data.course}</p>
            <p><b>Mobile:</b> {data.mobile}</p>
          </Card>
        )}

      </div>
    </>
  );
}

export default App;