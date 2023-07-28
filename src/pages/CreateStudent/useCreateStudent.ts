import {
  IUseCreateAStudent,
  useCreateAStudent,
} from "../../Common/data/student/student";

export const useCreateStudents = (): IUseCreateAStudent => {
  const { register, handleSubmit, errors, onSubmit } = useCreateAStudent();
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
