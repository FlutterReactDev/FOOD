import { httpApiToken } from "@di";
import HttpClientInterface from "@lib/http-client/HttpClientInterface";
import { singleton, inject } from "tsyringe";
@singleton()
class CustomerService {
  constructor(@inject(httpApiToken) protected api: HttpClientInterface) {}

  get() {
    return this.api.get(`/customers`);
  }
}

export default CustomerService;
