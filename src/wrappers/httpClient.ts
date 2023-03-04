import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

interface IHttpClient {
  get<TResponse>(url: string): Promise<TResponse>;
}

class AxiosHttpClient implements IHttpClient {
  private instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "content-type": "application/json",
    },
  });

  get<TResponse>(url: string): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      this.instance
        .get<TResponse, AxiosResponse<TResponse>>(url)
        .then((result) => {
          setTimeout(() => {
            resolve(result.data);
          }, 1200);
        })
        .catch((error: Error | AxiosError) => {
          reject(error);
        });
    });
  }
}

export const httpClient: IHttpClient = new AxiosHttpClient();
