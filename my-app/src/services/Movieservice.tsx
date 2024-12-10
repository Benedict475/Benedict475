// Importing the HTTP utility to handle API requests
import http from '../Http'; 
// Importing the 'movie' type definition for TypeScript type checking
import { movie } from '../types/Movie'; 

// Function to get all movies from the API
const getAll = async () => {
    // Sending a GET request to fetch an array of movies from the server
    return http.get<Array<movie>>("/movie");
}

// Function to get a specific movie by its ID from the API
const get = async (id: string) => {
    // Sending a GET request to fetch a single movie by its ID
    return http.get<movie>(`/movie/${id}`);
}

// Function to remove a movie by its ID from the API
const remove = async (id: string) => {
    // Sending a DELETE request to remove the movie with the given ID
    return http.delete(`/movie/${id}`);
}

// Defining the MovieService object to group all the functions related to movie operations
const MovieService = {
    getAll,  // Fetch all movies
    get,     // Fetch a single movie by ID
    remove   // Delete a movie by ID
}

// Exporting the MovieService object to make these functions accessible elsewhere in the app
export default MovieService;


