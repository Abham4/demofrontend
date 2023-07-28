import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import postService from "../../../service/post.services";
import { useNavigate } from "react-router-dom";
import { userValidation } from "../../../service/validation/UserValidation";
export interface IUserCreate {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: (type: any) => void;
}
export const IUserCreate = (): IUserCreate => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidation),
  });
  const onSubmit = (data: any) => {
    const waiting = toast.loading("please wait", {
      theme: "colored",
      type: "info",
      closeButton: true,
    });
    postService
      .postUser(data)
      .then((res) => {
        navigate(0);
        toast.update(waiting, {
          render: "user create success",
          theme: "colored",
          type: "success",
          isLoading: false,
          autoClose: 2500,
        });
      })
      .catch((error) => {
        toast.update(waiting, {
          render: error?.response?.data?.title,
          theme: "colored",
          type: "error",
          isLoading: false,
          autoClose: 2500,
        });
      });
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
