import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../../styles/templates_css/Template6.module.css'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaEarthAsia } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Template6 = ({ id: propId }) => {
  const { id: paramId } = useParams();
  const id = propId || paramId;

  const [data, setData] = useState({
    name: '',
    designation: '',
    about: '',
    email: '',
    address: '',
    linkedin: '',
    number: '',
    portfolio: '',
    github: '',
    education: [],
    experience: [],
    projects: [],
  });

  useEffect(() => {
    fetch(id)
  }, [id]);

  const fetch = (id) => {
    axios.get(`https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/resumebuilder/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }

  const handleDownload = () => {
    const resumeElement = document.getElementById('resume');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const margin = 15;
    const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    const pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;

    html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = margin;
      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      } else {
        let pageHeightLeft = imgHeight;

        while (pageHeightLeft > 0) {
          pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
          pageHeightLeft -= pdfHeight;
          if (pageHeightLeft > 0) {
            pdf.addPage();
            position = margin;
          }
        }
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <h1 className={styles.header}>Resume of {data.name}</h1>
        <div className={styles.resumeContent} id="resume">
          <div className={styles.personalInfo}>
            <h1>{data.name}</h1>
            <h4>{data.designation}</h4>
            <p>{data.about}</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactDetails}>
              <Link className={styles.contactLink}><MdEmail /> {data.email}</Link>
              <Link className={styles.contactLink}><MdLocationOn /> {data.address}</Link>
              <Link className={styles.contactLink}><FaLinkedin /> {data.linkedin}</Link>
            </div>
            <div className={styles.contactDetail}>
              <Link className={styles.contactLink}><FaPhoneAlt /> {data.number}</Link>
              <Link className={styles.contactLink}><FaEarthAsia /> {data.portfolio}</Link>
              <Link className={styles.contactLink}><FaGithubSquare /> {data.github}</Link>
            </div>
          </div>
          <div className={styles.final_container}>
            <div className={styles.education_container}>
              <h2 >Education :</h2>
              <div>
                {Array.isArray(data.education) && data.education.length > 0 ? (
                  data.education.map((edu, index) => (
                    <div key={index} className={styles.education_container_child}>
                      <h4>{edu.education}</h4>
                      <h5>{edu.schoolname}</h5>
                      <h5>{edu.specialization}</h5>
                      <h6>{edu.year}</h6>
                      <h6>{edu.city}</h6>
                    </div>
                  ))
                ) : (
                  <p>No education data available</p>
                )}
              </div>

              <div className={styles.experience_container}>
                <h2>Experience :</h2>
                {Array.isArray(data.experience) && data.experience.length > 0 ? (
                  data.experience.map((exp, index) => (
                    <div key={index} className={styles.experience_container_child}>
                      <h4>{exp.position}</h4>
                      <h5>{exp.organization}</h5>
                      <h6>{exp.joining} to {exp.exit}</h6>
                      <h6>{exp.mode}, {exp.place}</h6>
                    </div>
                  ))
                ) : (
                  <p>No experience data available</p>
                )}
              </div>
            </div>

            <div className={styles.project_container}>
              <div>
                <h2>Projects :</h2>
                {Array.isArray(data.projects) && data.projects.length > 0 ? (
                  data.projects.map((proj, index) => (
                    <div key={index} className={styles.project_container_child}>
                      <h4>{proj.name}</h4>
                      <h5>{proj.link}</h5>
                    </div>
                  ))
                ) : (
                  <p>No projects data available</p>
                )}
              </div>

              <h2 className={styles.declartion}>Declaration :</h2>
              <div className={styles.declartion_child}>
                <h6>I hereby declare that the details furnished above are true and correct, The information presented in this resume accurately reflects my qualifications and experience.</h6>
                <p className={styles.declartion_child_name}>{data.name}</p>
                <p className={styles.declartion_child_city}>{data.address}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Button variant="primary" type="submit" style={{ margin: '40px 0px 0px 400px', padding: '9px 50px' }} onClick={handleDownload}>
        Download Resume
      </Button>
    </div>
  );
}

export default Template6;
