import axios from "axios";

export const imageURL = axios.get(
  "https://picture-searches.herokuapp.com/api/pictures"
);
