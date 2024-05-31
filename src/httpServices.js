import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const base_url = process.env.REACT_APP_BASE_URL;


axios.interceptors.response.use(

    (response) => {
        // You can modify the response data here
        return response;
    },
    (error) => {

        // Handle response error here

        if (error.response.status === 401) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            localStorage.removeItem("token");
            window.location.href=process.env.REACT_APP_LOGIN_URL
        }
        return Promise.reject(error);
    }
);

const makeHttpRequest = async (method, URL, data, params) => {
    try {
        const token = localStorage.getItem("token")
        const url = base_url + URL
        const res = await axios({
            method,
            url,
            data,
            params,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        toast.success(res?.data?.message)
        return res?.data
    } catch (error) {
        toast.error(error?.response?.data?.message)
        // console.log(error)
        throw error;
    }
}



export default makeHttpRequest;