import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './component/header/Index';
import SelectTemplate from './pages/SelectTemplate';
import ResumeForm from './pages/ResumeForm';
import ShowTemplate from './pages/ShowTemplate';
import Show from './pages/Show';
import Template1 from './pages/template/Template1';
import UpdatePage from './pages/UpdatePage';
import DeletePage from './pages/DeletePage';
import Update from './pages/Update';
import Template2 from './pages/template/Template2';
import Template3 from './pages/template/Template3';
import Template4 from './pages/template/Template4';
import Template5 from './pages/template/Template5';
import Template6 from './pages/template/Template6';
import Template7 from './pages/template/Template7';
import Template8 from './pages/template/Template8';
import HomeMob from './pages/HomeMob';

const App = () => {
  const [theme, setTheme] = useState("1");
  const [id, setId] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      {!isMobile && <Index />}  
      <Routes>
        <Route exact path='/' element={isMobile ? <HomeMob /> : <Home />} />
        <Route exact path='/select_template' element={<SelectTemplate setTheme={setTheme} />} />
        <Route exact path='/resume_form' element={<ResumeForm setId={setId} />} />
        <Route exact path='/showTemplate' element={<ShowTemplate theme={theme} id={id} />} />
        <Route exact path='/show' element={<Show />} />
        <Route exact path='/updatePage' element={<UpdatePage />} />
        <Route exact path='/deletePage' element={<DeletePage />} />
        <Route exact path='/update/:id' element={<Update />} />
        <Route exact path='/template1/:id' element={<Template1 />} />
        <Route exact path='/template2/:id' element={<Template2 />} />
        <Route exact path='/template3/:id' element={<Template3 />} />
        <Route exact path='/template4/:id' element={<Template4 />} />
        <Route exact path='/template5/:id' element={<Template5 />} />
        <Route exact path='/template6/:id' element={<Template6 />} />
        <Route exact path='/template7/:id' element={<Template7 />} />
        <Route exact path='/template8/:id' element={<Template8 />} />
      </Routes>
    </Router>
  );
};

export default App;
