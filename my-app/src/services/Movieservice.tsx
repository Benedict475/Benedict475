import http from '../Http';
import {movie} from '../types/Movie';

const getAll = async() => {
    return http.get<Array<movie>>("/movie");
}

    const get = async(id: string) => {
        return http.get<movie>(`/movie/${id}`);
}

	const remove = async(id:string) => {
    	 return http.delete(`/movie/${id}`)
    	}
    

const MovieService = {

    getAll,
    get,
    remove
    
}

export default MovieService;

