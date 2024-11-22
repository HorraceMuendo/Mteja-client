import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Products from './Pages/Products';
import Enquiries from './Pages/Enquiries';
import Complaints from './Pages/Complains';
import Compliments from './Pages/Compliments';
import Contact from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import LandingPage from './Pages/LandingPage';

function App() {
  return (



    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <div className='grid-container'>
            <Header/>
            <Routes>
            <Route path="/home" element={<Home />} /> 
      <Route path="/products" element={<Products />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/compliments" element={<Compliments />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/contactus" element={<Contact />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} />           




            </Routes>
          </div>
        }
      />
    </Routes>
  </Router>

  );
}

export default App;
