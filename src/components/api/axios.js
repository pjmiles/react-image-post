import axios from "axios";

const baseURL = "https://picture-searches.herokuapp.com/api/pictures"

const axiosInstance = axios.create({
  baseURL: baseURL
});

export default axiosInstance

// M   https://file-6556.herokuapp.com/
// for uploads
// /uploads
// for search
//  /search/:id

// B  https://picture-searches.herokuapp.com/api/