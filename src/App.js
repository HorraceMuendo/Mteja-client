import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
    <Header/>
    <Products/>
    </div>
  );
}

export default App;
