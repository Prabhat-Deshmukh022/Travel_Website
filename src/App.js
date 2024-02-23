
import './App.css';
import React, {Component} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
/*import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Packages from "./components/Packages/Packages";
import Book from "./components/Book/Book";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";*/
import Home2 from "./pages/Home2/Home2";
import Packages2 from "./pages/Packages2/Packages2";
import About2 from "./pages/About2/About2";
import Book2 from "./pages/Book2/Book2";
import Reviews2 from "./pages/Reviews2/Reviews2";
import Hotel from "./pages/Hotels/Hotel";


class App extends Component {
  render() {
    return( 
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home2/>}/>
      <Route path="/Home2" element={<Home2/>}/>
      <Route path="/About2" element={<About2/>}/>
      <Route path="/Packages2" element={<Packages2/>}/>
      <Route path="/Book2" element={<Book2/>}/>
      <Route path="/Reviews2" element={<Reviews2/>}/>
      <Route path="/Hotel" element={<Hotel/>} />


    </Routes>
    </BrowserRouter>
    </div>)
  }
}

export default App;
