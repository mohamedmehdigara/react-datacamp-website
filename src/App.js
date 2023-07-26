import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Pricing from './components/Pricing';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/courses" element={<CourseList/>} />
        <Route exact path="/course/:id" element={<CourseDetail/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/pricing" element={<Pricing/>} />

        <Route element={<NotFound/>} />
      </Routes>
<Main/>
      <Footer />
      
    </Router>
  );
};

export default App;
