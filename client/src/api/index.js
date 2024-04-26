import axios from "axios";
import { hostscripts } from "../utilities/host";

const token = sessionStorage.getItem("token");

export default axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "/api/",
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const apiUpload = axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "/api/",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data"
  }
});

export const scripts = axios.create({
  responseType: "json",
  baseURL: hostscripts
});
