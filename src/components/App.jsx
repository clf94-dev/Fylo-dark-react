import React from 'react'
import './styles/App.css'
import Navbar from './Navbar';
import Top from './Top';
import Features from './Features.jsx';
import Middle from './Middle';
import Testimonials from './Testimonials.jsx';
import Cta from './Cta';
import Footer from './Footer';


function App() {
    return (
        <div>
           <Navbar /> 
           <Top/>
           <Features/>
           <Middle/>
           <Testimonials/>
           <Cta/>
           <Footer/>
        </div>
    )
}

export default App;

