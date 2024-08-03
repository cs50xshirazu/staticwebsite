import axiosOriginal from "axios";

const axios = axiosOriginal.create({
    baseURL: "https://api.cs50xshiraz.ir/api/",
});

export default axios;