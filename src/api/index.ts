import axios from "axios";
import { IGDBAPI } from "../configs/environment";

export const api = axios.create({
  baseURL: IGDBAPI.url,
  headers: {
    "Content-Type": "text/plain",
    "x-api-key": IGDBAPI.apiKey,
  },
});
