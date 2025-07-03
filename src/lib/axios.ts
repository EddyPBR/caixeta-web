import Axios from "axios";
import { env } from "@/env";

export const axios = Axios.create({
  baseURL: env.VITE_API_BASE_URL,
  withCredentials: true,
});
