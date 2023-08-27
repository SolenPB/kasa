import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Header from './components/Header/header';
import Error from './components/Header/Error/error';
import Presentation from './pages/Presentation/presentation';
import './assets/style.css';
import Slider from './pages/Presentation/presentation';
import Footer from './components/Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/presentation' element={<Presentation />} />
                    <Route path ='/:id'element={<Slider />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/error' element={<Error />} />
                </Routes>
            <Footer />
    </Router>
);
