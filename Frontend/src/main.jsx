import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import Aboutpage from './About.jsx';
import Page404 from './Page404.jsx';
import StudentsPage from './Studentspage.jsx';
import TeachersPage from './Teacherspage.jsx';
import StudentsForm from './Studentsform.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />}></Route>
        <Route path="/about-school" element={<Aboutpage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/students-school" element={<StudentsPage />}></Route>
        <Route path="/teachers-school" element={<TeachersPage />}></Route>
        <Route path="/students-form" element={<StudentsForm />}></Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
