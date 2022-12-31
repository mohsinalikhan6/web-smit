import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Gallery from './components/gallery/Gallery';
import Form from './components/form/Form';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="form" element={<Form />} />
            <Route path="courses" element={<Courses />} />
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
