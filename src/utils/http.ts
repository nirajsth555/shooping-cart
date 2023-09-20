import axios from "axios";
import config from "../config";

const http = axios.create({
    baseURL: config.apiBaseURI
});

export default http;