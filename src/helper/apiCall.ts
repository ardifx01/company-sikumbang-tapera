import axios from "axios";

export const apiCall = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiCallAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_AUTH,
});