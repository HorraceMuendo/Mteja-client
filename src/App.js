import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Products from './Pages/Products';
import Enquiries from './Pages/Enquiries';

function App() {
  return (

    <Router>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Home />} /> Replace with your Home component */}
      <Route path="/products" element={<Products />} />
      <Route path="/enquiries" element={<Enquiries />} />
      {/* <Route path="/contact" element={<Contact />} /> Example route */}
    </Routes>
  </Router>

    // <div className="App">
    // <Header/>
    // <Products/>
    // </div>
  );
}

export default App;
