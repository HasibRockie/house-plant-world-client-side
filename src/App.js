import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/placeorder" element={<PlaceOrder/>} />
            
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
