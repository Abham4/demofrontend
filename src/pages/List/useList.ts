import {
  GetStudentData,
  IGetStudentAData,
} from "../../Common/data/student/student";

export const GetList = (): IGetStudentAData => {
  const {
    open,
    setOpen,
    openEdit,
    setOpenEdit,
    student,
    loading,
    register,
    handleSubmit,
    setValue,
    handleClose,
    handleCloseEdit,
    handleDelete,
    handleClickOpen,
    onSubmit,
  } = GetStudentData();
  return {
    open,
    setOpen,
    openEdit,
    setOpenEdit,
    student,
    loading,
    register,
    handleSubmit,
    setValue,
    handleClose,
    handleCloseEdit,
    handleDelete,
    handleClickOpen,
    onSubmit,
  };
};
