import axios from "axios";

export const instance = axios.create({
  baseURL: `https://api.github.com/search/`,
  timeout: 1000,
  headers: {
    Authorization: "Bearer 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"
  }
});
