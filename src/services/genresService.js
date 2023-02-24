import {apiService} from "./apiService";
import {urls} from "../configs";

const genresService = {
    getAll: () => apiService.get(urls.genres),
    genresToRequest: (selectedGenres) => {
        if (selectedGenres.length < 1) return '';
        const genresId = selectedGenres?.map(genre => genre?.id);
        return genresId?.reduce((accumulator, value) => {
            return accumulator + "," + value
        })
    }
}

export {
    genresService
}