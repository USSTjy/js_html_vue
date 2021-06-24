import { httpPost } from "./httpRequest";
export function loginAPI(params) {
  return httpPost("/login", params);
}
