import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialField = {
  name: '',
  designation: '',
  about: '',
  email: '',
  number: '',
  address: '',
  portfolio: '',
  linkedin: '',
  github: '',
  education: [{ schoolname: '', education: '', specialization: '', year: '', city: '' }],
  experience: [{ organization: '', position: '', mode: '', joining: '', exit: '', place: '' }],
  skills: [''],
  projects: [{ name: '', link: '' }]
};

const ResumeForm = ({ setId }) => {
  const [data, setData] = useState(initialField);

  const handleChange = (e, index, type) => {
    const updatedFields = data[type].map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setData({ ...data, [type]: updatedFields });
  };

  const handlePersonalChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addField = (type) => {
    setData({ ...data, [type]: [...data[type], { ...initialField[type][0] }] });
  };

  const removeField = (type, index) => {
    const updatedFields = data[type].filter((_, i) => i !== index);
    setData({ ...data, [type]: updatedFields });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/resumebuilder', data)
      .then((res) => {
        setId(res.data.id);
        setData(initialField);
        navigate('/showTemplate');
      });
  };

  return (
    <div style={{ margin: '50px 100px 50px 100px' }}>
      <h1>Fill The Details</h1>
      <Form
        style={{
          border: '2px solid black',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0px 0px 50px 0px black',
        }}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <h3>Personal Detail :</h3>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your designation"
              name="designation"
              value={data.designation}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>About Us</Form.Label>
            <Form.Control
              type="text"
              placeholder="About us"
              name="about"
              value={data.about}
              onChange={handlePersonalChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={data.email}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your mobile number"
              name="number"
              value={data.number}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              name="address"
              value={data.address}
              onChange={handlePersonalChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Portfolio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your portfolio link"
              name="portfolio"
              value={data.portfolio}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your linkedin link"
              name="linkedin"
              value={data.linkedin}
              onChange={handlePersonalChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Github</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your github link"
              name="github"
              value={data.github}
              onChange={handlePersonalChange}
            />
          </Form.Group>
        </Row>

        {data.education.map((edu, index) => (
          <Row className="mt-5" key={index}>
            <h3>Education {index + 1}:</h3>

            <Row>
              <Form.Group as={Col}>
                <Form.Label>School / College</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your school or college"
                  name="schoolname"
                  value={edu.schoolname}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Degree / Class</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your degree or class"
                  name="education"
                  value={edu.education}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label>Specialization / Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your specialization or subject"
                  name="specialization"
                  value={edu.specialization}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the year"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the city"
                  name="city"
                  value={edu.city}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
              </Form.Group>
            </Row>

            <Row>
              <Button
                as={Col}
                variant="danger"
                onClick={() => removeField('education', index)}
                style={{ margin: '30px 30px 0px 0px' }}

              >
                Remove
              </Button>

              <Button
                as={Col}
                variant="primary"
                onClick={() => addField('education')}
                style={{ marginTop: '30px' }}
              >
                Add Education
              </Button>
            </Row>
          </Row>
        ))}

        {data.experience.map((exp, index) => (
          <Row className="mt-5" key={index}>
            <h3>Experience {index + 1}:</h3>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your organization"
                  name="organization"
                  value={exp.organization}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your position"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Mode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the work mode"
                  name="mode"
                  value={exp.mode}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>
            </Row>

            <Row className='mt-3'>
              <Form.Group as={Col}>
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter joining date"
                  name="joining"
                  value={exp.joining}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Exit Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter exit date"
                  name="exit"
                  value={exp.exit}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="place"
                  value={exp.place}
                  onChange={(e) => handleChange(e, index, 'experience')}
                />
              </Form.Group>
            </Row>

            <Row>
              <Button
                as={Col}
                variant="danger"
                onClick={() => removeField('experience', index)}
                style={{ margin: '30px 30px 0px 0px' }}

              >
                Remove
              </Button>

              <Button
                as={Col}
                variant="outline-primary"
                onClick={() => addField('experience')}
                style={{ margin: '30px 30px 0px 0px' }}
              >
                Add Experience
              </Button>
            </Row>
          </Row>
        ))}

        {data.projects.map((proj, index) => (
          <Row className="mt-5" key={index}>
            <h3>Project {index + 1}:</h3>
            <Form.Group as={Col}>
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                name="name"
                value={proj.name}
                onChange={(e) => handleChange(e, index, 'projects')}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project link"
                name="link"
                value={proj.link}
                onChange={(e) => handleChange(e, index, 'projects')}
              />
            </Form.Group>

            <Row>
              <Button
                as={Col}
                variant="danger"
                onClick={() => removeField('projects', index)}
                style={{ margin: '30px 30px 0px 0px' }}

              >
                Remove
              </Button>

              <Button
                as={Col}
                variant="outline-primary"
                onClick={() => addField('projects')}
                style={{ margin: '30px 30px 0px 0px' }}
              >
                Add Project
              </Button>
            </Row>            
          </Row>

        ))}

        {data.skills.map((skil, index) => (
          <Row className="mt-5" key={index}>
            <h3>Skills {index + 1}:</h3>
            <Form.Group as={Col}>
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter skills"
                name="name"
                value={skil}
                onChange={(e) => handleChange(e, index, '')}
              />
            </Form.Group>

            <Row>
              <Button
                as={Col}
                variant="danger"
                onClick={() => removeField('projects', index)}
                style={{ margin: '30px 30px 0px 0px' }}

              >
                Remove
              </Button>

              <Button
                as={Col}
                variant="outline-primary"
                onClick={() => addField('projects')}
                style={{ margin: '30px 30px 0px 0px' }}
              >
                Add Skills
              </Button>
            </Row>
          </Row>

        ))}

        <Row>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: '60px' }}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default ResumeForm;