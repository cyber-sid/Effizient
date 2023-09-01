import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Forms.css";
import { useState } from "react";
import axios from "axios";

function Forms() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    qual: "",
    institue: "",
    course: "",
    experience: "",
    institueCanada: "",
    program: "",
    countryApplying: "",
    futueGoals: "",
    englishL: "",
    englishR: "",
    englishS: "",
    englishW: "",
    tuitionFee: "",
    gic: "",
    gicFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = formData;
    console.log(JSON.stringify(formData));

    axios
      .post(`http://localhost:${process.env.PORT || 3001}/sendEmail`, jsonData)
      .then((response) => {
        alert("Email sent", response.data);
        setFormData({
          email: "",
          name: "",
          age: "",
          qual: "",
          institue: "",
          course: "",
          experience: "",
          institueCanada: "",
          program: "",
          countryApplying: "",
          futueGoals: "",
          englishL: "",
          englishR: "",
          englishS: "",
          englishW: "",
          tuitionFee: "",
          gic: "",
          gicFee: "",
        });
      })
      .catch((error) => {
        alert("Error Sending Data");
      });
  };

  return (
    <Form className="Form-container" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Email <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            Full Name <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>
            Age <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQual">
          <Form.Label>
            Highest Qualification{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Select
            name="qual"
            value={formData.qual}
            onChange={handleChange}
          >
            <option value="Choose" style={{ display: "none" }}>
              Choose...
            </option>
            <option value="Grade 12">Grade 12</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="PhD">PhD</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEdu">
          <Form.Label>
            Institute where you completed your highest level of education{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            name="institue"
            type="text"
            value={formData.institue}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridStudy">
          <Form.Label>
            What did you study{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            name="course"
            type="text"
            value={formData.course}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridExp">
          <Form.Label>
            Do you have any relevant work experience?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
            <br />
            Write None if no work experience. Provide the following details if
            yes: <br />
            <ul>
              <li>Job Title</li>
              <li>Company Name</li>
              <li>Job duties</li>
            </ul>
            Sample Answer: I worked as a Sales Manager at Effizient Immigration
            Inc from Jan 2022 till Feb 2023. In this role, I managed sales
            operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </Form.Label>
          <Form.Control
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridInsC">
          <Form.Label>
            What institue did you get admitted to in Canada?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="institueCanada"
            value={formData.institueCanada}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCourseC">
          <Form.Label>
            What is your program of study in Canada?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridApp">
          <Form.Label>
            Which country are you applying from?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="countryApplying"
            value={formData.countryApplying}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGoals">
          <Form.Label>
            What are your future goals?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="futueGoals"
            value={formData.futueGoals}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <h5>
          English Scores:{" "}
          <span style={{ color: "red", fontWeight: "600" }}>*</span>
        </h5>
        <Form.Group as={Col} controlId="formGridEngL">
          <Form.Label>Listening</Form.Label>
          <Form.Control
            type="number"
            name="englishL"
            value={formData.englishL}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEngR">
          <Form.Label>Reading</Form.Label>
          <Form.Control
            type="number"
            name="englishR"
            value={formData.englishR}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEngS">
          <Form.Label>Speaking</Form.Label>
          <Form.Control
            type="number"
            name="englishS"
            value={formData.englishS}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEngW">
          <Form.Label>Writing</Form.Label>
          <Form.Control
            type="number"
            name="englishW"
            value={formData.englishW}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEngTut">
          <Form.Label>
            How much tuition fee did you pay?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            name="tuitionFee"
            value={formData.tuitionFee}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGic">
          <Form.Label>
            Did you do a GIC?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Check
            type={"radio"}
            name="gic"
            value="true"
            label="Yes"
            checked={formData.gic === "true"}
            onChange={handleChange}
          />
          <Form.Check
            type={"radio"}
            name="gic"
            value="false"
            checked={formData.gic === "false"}
            onChange={handleChange}
            label="No"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridGicFee">
          <Form.Label>
            How much did you pay towards GIC?{" "}
            <span style={{ color: "red", fontWeight: "600" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            value={formData.gicFee}
            onChange={handleChange}
            name="gicFee"
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
