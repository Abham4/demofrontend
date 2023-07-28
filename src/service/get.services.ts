import api from "./api";
const getMember = async () => {
  return await api.get("/Member");
};
const getServices = {
  getMember,
};
export default getServices;
