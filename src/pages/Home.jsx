
import React from 'react'
import style from '../styles/Home.module.css'
import Button from "react-bootstrap/Button";

import main from '../assets/Screen.png'
import main7 from '../assets/Screenshot 9.png'
import main6 from '../assets/Screenshot 10.png'
import main5 from '../assets/Screenshot8.png'
import main4 from '../assets/Screenshot11.png'
import mains from '../assets/Screen2.png'
import Template1 from '../pages/SelectTemplate.jsx'
// import Header from '../header/Header.jsx'
import Home_image from '../assets/resume-builder-home image.png'
import Footer from '../footer/Footer.jsx'
// import Header2 from '../component/Header2.jsx'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <>
      {/* <Header /> */}
      <div className='main_containers' style={{ display: 'flex', gap: '100px', marginLeft: '190px', marginTop: '40px' }}>
        <div className='body_contain' style={{ margin: '80px' }}>
          <p style={{ padding: '10px', fontSize: '22px' }}>
            Fast. Easy.Effective
          </p>
          <h1 style={{ padding: '10px' }}>Elite Resume. The Best Resume </h1>
          <h1 style={{ marginLeft: '10px', lineHeight: '10px' }}>Maker Online.</h1>

          <p style={{ padding: '10px', fontSize: '20px', marginTop: '40px' }}>If a sheet of paper represents your entire work life,<span><p>Personality,and Skills,it better be a pretty amazing piece of <br />paper--Let Elite Resume do the heavy lifting.</p></span></p>
          <button style={{ borderRadius: '10px', padding: '10px', marginBottom: '30px' }} onClick={() => navigate("/select_template")}> Create your Resume Now</button>

        </div>
        <div className='image_set'>
          <img src={Home_image} />
        </div>
      </div>
      <center>
        <div className='step_set'>
          <img src={main} />
        </div>
      </center>
      <center> <button className='create_btn' onClick={() => navigate("/select_template")}>Create Resume</button></center>

      <Template1 />
      <center>
        <div style={{ marginTop: "60px", fontSize: '20px' }}>
          <p>Aren't you tired of second-rate job offers and having to lower your expectation repeatedly? This will be the end of it. </p><br />
          <p>We've developed our resume builder with one goal: to help you find your dream job.So you'll get a resume creator<br />  that comes with <span style={{ color: 'blue' }}>ATS-optimised resume templates</span> and an intuitive resume wizard guiding you through the entire<br /><span>resume creation</span></p><br />
          <span>
            <p>if you get stuck with your writing , just drag abd drop the content written by careerexperts that matches your<br /> <span>
              position. Elite Resume will take it from there.</span></p>
          </span>


        </div>
      </center>
      <center>
        <h3 style={{ marginTop: '30px' }}>As Seen In:</h3>
        <div style={{ backgroundColor: '#F1F8FE' }}><marquee hspace="5%" ><h1   >theguardian &nbsp; &nbsp; IHUFFPOSTI &nbsp; &nbsp;<i>lifehacker &nbsp; &nbsp;</i> <b>business.com &nbsp; &nbsp;</b></h1></marquee></div></center>
      <div className='middle_img_set' style={{ height: '10px' }}>
        <hr />
        <center>
          <button style={{ marginTop: '10px', borderRadius: '10px', padding: '5px', backgroundColor: '#F1D3CE' }} onClick={() => navigate("/formr")}>
            Create resume</button>
        </center>
      </div>
      <img style={{ width: '100%' }} src={mains} />
      <h3 style={{ marginTop: '50px', textAlign: 'center' }}>what can you gain from it?<br />Here's what you get with our resume maker:</h3>
      <div>

        <div style={{ display: 'flex', backgroundColor: 'white' }}>
          <img style={{ width: '50%' }} src={main5} />
          <p style={{ width: '40%', marginTop: '80px', marginLeft: '40px' }}>x
            <h2 style={{ lineHeight: '50px' }}  >1. Template designs for all types of professions</h2>
            Making your phone boil from callbacks or writing a generic resume? Stop fighting with software and templates that never seem to work. Use Elite Resume’s pre-formatted templates and ready-made content from hiring pros. Personalise your resume with colours and arrange sections the way you want. The possibilities are limitless, and you’ll always preserve your resume layout.</p>
        </div>
        <div style={{ display: 'flex', backgroundColor: 'white' }}>
          <p style={{ width: '30%', marginTop: '80px', marginLeft: '150px', marginTop: '150px' }}><h2>2. Resume checker</h2>
            It’s difficult to evaluate your resume yourself, isn’t it? Don’t worry—Elite Resume will provide you with an accurate resume score in seconds. Analyse what’s wrong (or right) and improve your resume with minimal effort.</p>
          <img style={{ width: '50%', marginLeft: '150px' }} src={main7} />
        </div>
        <div style={{ display: 'flex', backgroundColor: 'white' }}><img style={{ width: '50%' }} src={main4} />
          <p style={{ width: '40%', marginTop: '200px', marginLeft: '40px' }}><h2>3. Integrated cover letter builder</h2>
            If only cover letters generated themselves with a click… Your wish is our command. Upload your resume and let Elite Resume use that information to create a job-winning cover letter. Find out more about our cover letter maker.</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', backgroundColor: 'white' }}>
          <p style={{ width: '30%', marginTop: '170px', marginLeft: '150px' }} ><h2>4. Pre-written content</h2>
            Writing isn’t one of your strengths? Don’t worry. Elite Resume’s free resume builder suggests content pre-written by hiring professionals that you only need to drag and drop. It’s that easy.</p>
          <img style={{ width: '50%', marginLeft: '150px' }} src={main6} />
          <button style={{
            position: 'absolute',
            top: '81%',
            left: '76.9%',
            width: '13.9%',
            height: '76px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px',
            padding: '10px',

          }}>Download</button>
        </div>
      </div>
      <Footer />
      {/* <Header2 /> */}
    </>
  )
}

export default Home
