import axiosOriginal from "axios";
import { axiosErrorLogger } from "@/utils/logger";

const axios = axiosOriginal.create({
    baseURL: "https://api.cs50xshiraz.ir/api/"
});

axios.interceptors.response.use(function(conf) {
    return conf;
}, function(error) {
    axiosErrorLogger(error, "ApiResponseError");
    return Promise.reject(error);
});

axios.interceptors.request.use(function(conf) {
    return conf;
}, function(error) {
    axiosErrorLogger(error, "ApiRequestError");
    return Promise.reject(error);
});

export default axios;