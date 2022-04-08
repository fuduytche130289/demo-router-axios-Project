import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login",payload);
}

export const authService = {
    doLogin
};