import http from '../Http';
import {tvshow} from '../types/Tvshows';

const getAll = async() => {
    return http.get<Array<tvshow>>("/tvshow");
}

    const get = async(tvid: string) => {
        return http.get<tvshow>(`/tvshow/{tvid}`);
}

	const remove = async(tvid:string) => {
    	 return http.delete(`/tvshow/${tvid}`)
    	}
    

const TvshowService = {

    getAll,
    get,
    remove
    
}

export default TvshowService;

