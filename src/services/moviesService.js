import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page = 1, ids = '') => apiService.get(`${urls.movies}`, {params: {page: page, with_genres: ids}}),
    getById: (id) => apiService.get(`${urls.movie}/${id}`),
    search: (query = '', page = 1) => apiService.get(`${urls.search}&query=${query}&page=${page}`),
}

export {
    moviesService
}