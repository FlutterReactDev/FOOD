import { httpApiToken } from "@di";
import HttpClientInterface from "@lib/http-client/HttpClientInterface";
import { singleton, inject } from "tsyringe";
export interface Customers {
  id: number;
  name: string;
  avatar: string;
  menu: string;
  totalPayment: number;
  status: string;
}

@singleton()
class CustomerService {
  constructor(@inject(httpApiToken) protected api: HttpClientInterface) {}

  get<T>() {
    return this.api.get<T>(`/customers`);
  }
}

export default CustomerService;
