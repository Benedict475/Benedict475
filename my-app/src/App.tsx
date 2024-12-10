import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import { Authenticator } from '@aws-amplify/ui-react';
import Movies from './components/movies';
import Tvshows from './components/tvshows';
import Moviepage from './components/moviepage';

function App() {
  return (
    <Router>
      <Header />
      <Authenticator loginMechanisms={['email']} signUpAttributes={['name']}>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Tvshows' element={<Tvshows/>}/>
        <Route path='/Movies:id' element={<Moviepage/>}/>
        
      </Routes>
      <Footer />
      </Authenticator>
    </Router>
  );
}

export default App;

