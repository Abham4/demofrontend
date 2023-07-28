import api from "./api";

const postMember = async (data: any) => {
  console.log(data);

  return await api.post("/Member", data);
};

const postUser = (data:any) => {
  return api.post("/Authentication/Register",data)
}

const postService = {
  postMember,
  postUser,
};
export default postService;
