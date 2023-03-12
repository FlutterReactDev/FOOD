import { httpApiToken } from "@di";
import HttpClientInterface from "lib/http-client/HttpClientInterface";
import { singleton, inject } from "tsyringe";

@singleton()
class FoodService {
  constructor(@inject(httpApiToken) protected api: HttpClientInterface) {}
  getFoods(queryParams?: Record<string, string>) {
    const params = new URLSearchParams(queryParams);
    const _url = params.toString() ? `?${params.toString()}` : "";
    return this.api.get(`/foods${_url}`);
  }
}

export default FoodService;
