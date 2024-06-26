import axios from "axios";
export const API_URL = "http://localhost:3000/api";

export const appAPI = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
