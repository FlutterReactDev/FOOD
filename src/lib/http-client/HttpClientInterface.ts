import HTTP_METHODS from "./types";

export interface HttpClientRequestInit {
  queryParams: Record<any, any>;
  body: Record<any, any>;
  headers: Record<string, string>;
}

export interface HttpClientConfigInterface {
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
}

export interface HttpRequestInterface<T extends unknown> {
  data?: Promise<T>;
  abort(): void;
}

interface HttpClientInterface {
  get<T extends unknown>(
    url: string,
    init?: HttpClientRequestInit
  ): HttpRequestInterface<T>;

  post<T extends unknown>(
    url: string,
    init?: HttpClientRequestInit
  ): HttpRequestInterface<T>;

  put<T extends unknown>(
    url: string,
    init?: HttpClientRequestInit
  ): HttpRequestInterface<T>;

  delete<T extends unknown>(
    url: string,
    init?: HttpClientRequestInit
  ): HttpRequestInterface<T>;
}

export default HttpClientInterface;
