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

function App() {
  return (

    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/products" element={<Products />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/compliments" element={<Compliments />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/contactus" element={<Contact />} /> 
    </Routes>
  </Router>

    // <div className="App">
    // <Header/>
    // <Products/>
    // </div>
  );
}

export default App;
