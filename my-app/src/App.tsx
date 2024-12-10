// Importing React, CSS, and necessary modules for routing and authentication
import React from 'react'; // Import React to create the component
import './App.css'; // Import custom CSS styles for the application
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components from React Router
import Header from './components/header'; // Import Header component to be displayed on all pages
import Footer from './components/footer'; // Import Footer component to be displayed on all pages
import Home from './components/home'; // Import the Home component (Landing Page)
import About from './components/about'; // Import the About component
import { Authenticator } from '@aws-amplify/ui-react'; // Import Authenticator component for user authentication
import Movies from './components/movies'; // Import Movies component
import Tvshows from './components/tvshows'; // Import Tvshows component
import Moviepage from './components/moviepage'; // Import Moviepage component for detailed movie view

// Main App component function
function App() {
  return (
    // Router component to enable routing for the app
    <Router>
      {/* Header is displayed on all pages */}
      <Header />

      {/* Authenticator component provides login functionality, restricting access to pages */}
      <Authenticator loginMechanisms={['email']} signUpAttributes={['name']}>
      
        {/* Define the application's routes */}
        <Routes>
          {/* Route for the Home page */}
          <Route path='/' element={<Home />} />
          {/* Route for the About page */}
          <Route path='/About' element={<About />} />
          {/* Route for the Movies page */}
          <Route path='/Movies' element={<Movies />} />
          {/* Route for the Tvshows page */}
          <Route path='/Tvshows' element={<Tvshows />} />
          {/* Dynamic route for Moviepage, using the movie id as a URL parameter */}
          <Route path='/movies/:id' element={<Moviepage />} />
        </Routes>

        {/* Footer is displayed on all pages */}
        <Footer />
      </Authenticator>
    </Router>
  );
}

// Exporting App component as the default export
export default App;


