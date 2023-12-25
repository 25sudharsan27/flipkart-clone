import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Navbar from './components/navbar.jsx';
import ImgSlider from './components/imgslider.jsx';
import Categories from './components/categories.jsx'
import Products from './components/products.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
    <div id="body">
      <Navbar/>
      <Categories/>
      <ImgSlider/>
      <Products/>
      <Footer/>
    </div>
    

  );

    
}

export default App;
