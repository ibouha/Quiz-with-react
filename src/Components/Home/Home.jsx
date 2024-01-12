import React from 'react';
import '../Home/home.css';
import logoimage from '../../Assets/Untitled design (1).svg';
import homeimage from "../../Assets/homeimage.png" ;
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <DescriptionSection />
    </div>
  );
}




const DescriptionSection = () => {
  const Navigate=useNavigate();
  return (
    <section>

      <div className='left'>
        <h1 className='title'>DevRecruit</h1>
        <h2>Welcome to Our Website</h2>
        <p>As a software development company, we strike the perfect balance between cost, speed, and quality through our unique set of 36 quality standards and strive to work with the best developers so are you ready to join us?</p>
        <p>Ready to show off your development skills?</p><br/><br /><br />
        <button className='button' onClick={()=>{Navigate("/categories")}}><span>Start the quiz</span></button>
        
      </div>
      <div className='right'>
        <img src={homeimage} alt="" className='homeimage' />
      </div>

    </section>
  );
};


export default Home;
