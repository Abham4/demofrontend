import { SyntheticEvent } from "react";
import api from "./api";
// async function login(email: string, password: string, e: SyntheticEvent) {
//   e.preventDefault();
//   const data = {
//     email: email,
//     password: password,
//   };
//   return api.post("/Authentication/login", data).then((res) => {
//     return res;
//   });
// }
const login = (data: any) => {

  return api.post("/Authentication/login", data).then((res) => {
    return res;
  });
};

const logout = () => {
  localStorage.clear();
}
const authService = {
  login,
  logout
};
export default authService;
