import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/Homepage';
import AboutPage from './assets/AboutPage';
import CoursesPage from './assets/CoursePage';
import FAQPage from './assets/Faq';
import FAQDemoPage from './assets/Demo';
import ContactPage from './assets/ContactPage';
import StudentAuth from './assets/StudentAuth';
import StudentDashboard from './assets/StudentDashboard'
import ClassCoursePage from './assets/CourseForClass';
// import AboutPage from './pages/About';
// import CoursesPage from './pages/Courses';
// import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/demo" element={<FAQDemoPage/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/studentauth" element={<StudentAuth />} />
        <Route path="/dashboard/:id" element={<StudentDashboard />} />
        <Route path="/courses/:classId" element={<ClassCoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;