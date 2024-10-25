import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  },
})
