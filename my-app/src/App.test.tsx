// Importing necessary modules from React and testing libraries
import React from 'react';  // React is needed to create the component
import { render, screen } from '@testing-library/react';  // Functions for rendering and querying the DOM for testing
import App from './App';  // Importing the App component to be tested

// Defining the test case
test('renders learn react link', () => {
  // Rendering the App component into the virtual DOM
  render(<App />);

  // Finding the link element that contains the text "learn react"
  const linkElement = screen.getByText(/learn react/i); // Using regular expression to match the text

  // Asserting that the link element is present in the document
  expect(linkElement).toBeInTheDocument();  // Verifying that the element exists
});

