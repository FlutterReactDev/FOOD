import HttpClientInterface from "lib/http-client/HttpClientInterface";
import { InjectionToken } from "tsyringe";

export const httpApiToken = Symbol("api_client_token") as InjectionToken<
  HttpClientInterface
>;
