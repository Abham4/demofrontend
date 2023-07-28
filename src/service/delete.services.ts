import api from "./api";

const deleteMember = (id: any) => {
  return api.delete(`/Member/${id}`);
};
const deleteServices = {
  deleteMember,
};
export default deleteServices;
