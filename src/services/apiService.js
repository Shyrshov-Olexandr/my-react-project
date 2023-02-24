import axios from "axios";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzE0NTNmNjcxZjgwMGUxNTdmMzM2NGNhNDNmMSIsInN1YiI6IjYzZWY4YTRlZWE4NGM3MDBiMjlkMjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Pl9K1MoSTotxxclN3S-xiKnxJ909Ejiy51_CM-Ziaw'
apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    apiService
}