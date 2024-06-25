import { env } from "@/env/client";
import axios from "axios";

const api = axios.create({
  baseURL: `${env.NEXT_PUBLIC_API_SERVER_URL}`,
});

export default api;
