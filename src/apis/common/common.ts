import axios, { AxiosResponse } from "axios";
import { GetRequest, PostRequest, PutRequest } from "./types";
export const BASE_API_URL: string =
  process.env.API_URL || "http://localhost:8080";

const get = async (request: GetRequest): Promise<AxiosResponse<any, any>> => {
  const result = await axios.get(request.url, request.headers);
  return result;
};

const post = async (request: PostRequest) => {
  const result = await axios.post(request.url, request.body, request.headers);
  return result;
};

const put = async (request: PutRequest) => {
  const result = await axios.post(request.url, request.body, request.headers);
  return result;
};

const deleteAPI = async (request: PutRequest) => {
  const result = await axios.delete(request.url, request.headers);
  return result;
};

export { get, post, put, deleteAPI };
