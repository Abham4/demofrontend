import { useAccess } from "../../Common/data/login/login";

export interface IUseAaccess {
  register: any;
  handleSubmit: any;
  onSubmit: (type: any) => void;
}
export const useAaccess = (): IUseAaccess => {
  const { register, handleSubmit, onSubmit } = useAccess();
  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
