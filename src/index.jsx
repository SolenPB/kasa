import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Error from './components/Header/Error/error';
import Destination from './pages/Home/destination';
import Carrousel from './pages/Home/carrousel';
import './assets/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<><Home /><Destination /> <Carrousel /></>} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            <Footer />
    </Router>
);
