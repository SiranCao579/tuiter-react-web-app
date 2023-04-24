import axios from 'axios';
const USERS_API = "http://localhost:5001/api/users";

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const findUserById = (id) => {
    return axios.get(`${USERS_API}/${id}`);
}

export const createUser = (user) => {
    return axios.post(USERS_API, user);
}

export const deleteUser = (id) => {
    return axios.delete(`${USERS_API}/${id}`);
}

export const updateUser = (newUser) => {
    return axios.post(`${USERS_API}/${newUser.id}`, newUser);
}

export const login = (user) => {
    return axios.post(`${USERS_API}/login`, user);
}

export const logout = () => {
    return axios.post(`${USERS_API}/logout`);
}

export const profile = () => {
    return axios.get(`${USERS_API}/profile`);
}

export const register = (user) => {
    return axios.post(`${USERS_API}/register`, user);
}