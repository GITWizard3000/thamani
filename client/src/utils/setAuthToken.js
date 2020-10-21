import Axios from "axios";
import axious from Axios;

const setAuthToken = token => {
    if(token) {
        Axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete Axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;