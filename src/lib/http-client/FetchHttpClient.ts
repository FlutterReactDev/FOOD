import HttpClientInterface, {
  HttpClientRequestInit,
  HttpRequestInterface,
} from "./HttpCLientInterface";
import HTTP_METHODS from "./types";

class FetchHttpClient implements HttpClientInterface {
  request<T extends unknown>(
    method: HTTP_METHODS,
    url: string,
    init?: HttpClientRequestInit | undefined
  ): HttpRequestInterface<T> {
    const abortController = new AbortController();
    const _url = new URL(url);

    if (init?.queryParams) {
      Object.entries(init.queryParams).forEach(([key, value]) => {
        _url.searchParams.append(key, value);
      });
    }

    const data = fetch(_url, {
      body: init?.body ? JSON.stringify(init?.body) : undefined,
      method,
      signal: abortController.signal,
    }).then((response) => response.json() as Promise<T>);

    return {
      data,
      abort() {
        abortController.abort();
      },
    };
  }
  get<T extends unknown>(url: string, init?: HttpClientRequestInit) {
    return this.request<T>(HTTP_METHODS.GET, url, init);
  }

  post<T extends unknown>(url: string, init?: HttpClientRequestInit) {
    this.request<T>(HTTP_METHODS.POST, url, init);
  }

  put<T extends unknown>(url: string, init?: HttpClientRequestInit) {
    return this.request<T>(HTTP_METHODS.PUT, url, init);
  }

  delete<T extends unknown>(url: string, init?: HttpClientRequestInit) {
    this.request<T>(HTTP_METHODS.DELETE, url, init);
  }
}

export default FetchHttpClient;
