import { toast } from "react-toastify";
import useStore from "../../../Hook/Store";
import { useForm } from "react-hook-form";
import jwt from "jwt-decode";
import authService from "../../../service/auth.service";
export interface IUseAccess {
  register: any;
  handleSubmit: any;
  onSubmit: (type: any) => void;
}
export const useAccess = (): IUseAccess => {
  const setUser = useStore((state) => state.setUser);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: any) => {
    const waiting = toast.loading("please wait", {
      theme: "colored",
      type: "info",
      closeButton: true,
    });
    try {
      authService
        .login(data)
        .then((res) => {
          const token = res.data.token;
          const user = jwt(token);
          setUser(user);
          console.log(user);
          console.log(res);
          toast.update(waiting, {
            render: "Logged in Successfully",
            type: "success",
            theme: "colored",
            autoClose: 2500,
            isLoading: false,
            closeOnClick: true,
            hideProgressBar: false,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.update(waiting, {
            render: err?.response?.data?.title,
            type: "error",
            theme: "colored",
            autoClose: 2500,
            isLoading: false,
            closeOnClick: true,
            hideProgressBar: false,
          });
        });
    } catch (error) {
      console.log(error);
      toast.update("e", {
        render: "error",
        type: "error",
        theme: "colored",
        autoClose: 2500,
        isLoading: false,
        closeOnClick: true,
        hideProgressBar: false,
      });
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
