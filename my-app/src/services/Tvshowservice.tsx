// Importing the HTTP utility to handle API requests
import http from '../Http'; 
// Importing the 'tvshow' type definition for TypeScript type checking
import { tvshow } from '../types/Tvshows'; 

// Function to get all TV shows from the API
const getAll = async () => {
    // Sending a GET request to fetch an array of TV shows from the server
    return http.get<Array<tvshow>>("/tvshow");
}

// Function to get a specific TV show by its ID from the API
const get = async (tvid: string) => {
    // Sending a GET request to fetch a single TV show by its ID
    return http.get<tvshow>(`/tvshow/${tvid}`);
}

// Function to remove a TV show by its ID from the API
const remove = async (tvid: string) => {
    // Sending a DELETE request to remove the TV show with the given ID
    return http.delete(`/tvshow/${tvid}`);
}

// Defining the TvshowService object to group all the functions related to TV show operations
const TvshowService = {
    getAll,  // Fetch all TV shows
    get,     // Fetch a single TV show by ID
    remove   // Delete a TV show by ID
}

// Exporting the TvshowService object to make these functions accessible elsewhere in the app
export default TvshowService;


