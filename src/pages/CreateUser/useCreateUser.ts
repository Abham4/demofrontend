import { IUserCreate } from "../../Common/data/user/user";

export interface ICreateAUser {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: (type: any) => void;
}
export const ICreateAUser = (): ICreateAUser => {
  const { register, handleSubmit, errors, onSubmit } = IUserCreate();
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
