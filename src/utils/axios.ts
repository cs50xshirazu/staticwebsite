import axiosOriginal from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNTM5ODY1LCJpYXQiOjE3MjI1Mjc4NjUsImp0aSI6IjE5NTVkZjg0MTBiOTQwZGI4MGM5ZTVhOTFkZjI1MGMzIiwidXNlcl9pZCI6Mn0.3Pqk1tSUpU8Q5iBDx77v450ss5etttOvD1LtOh-5bPc";

const axios = axiosOriginal.create({
    baseURL: 'https://api.cs50xshiraz.ir/api/',
    headers : {
        Authorization : "Bearer " + token,
    }
});

export default axios;