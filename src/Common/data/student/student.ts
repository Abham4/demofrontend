import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import postService from "../../../service/post.services";
import { svalidation } from "../../../service/validation/StudentValidation";
import { useEffect, useState, useRef } from "react";
import getServices from "../../../service/get.services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import deleteServices from "../../../service/delete.services";
import { student } from "../../../interface/types";
type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  age: string;
};
export interface IUseCreateAStudent {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}
export interface IGetStudentAData {
  open: any;
  setOpen: any;
  openEdit: any;
  setOpenEdit: any;
  student: any;
  loading: boolean;
  register: any;
  handleSubmit: any;
  setValue:any;
  handleClose: (type: any) => void;
  handleCloseEdit: (type: any) => void;
  handleDelete: (type: any) => void;
  handleClickOpen: (type: any) => void;
  onSubmit: (type: any) => void;
}
export const useCreateAStudent = (): IUseCreateAStudent => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(svalidation),
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    const waiting = toast.loading("please wait", {
      theme: "colored",
      type: "info",
      closeButton: true,
    });
    postService
      .postMember(data)
      .then((res) => {
        toast.update(waiting, {
          render: "success",
          type: "success",
          theme: "colored",
          autoClose: 2500,
          isLoading: false,
        });
        navigate("/List");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.update(waiting, {
          render: err.response.data.title,
          theme: "colored",
          autoClose: 3000,
          type: "error",
          isLoading: false,
          closeOnClick: true,
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

export const GetStudentData = (): IGetStudentAData => {
  const [student, setStudent] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getServices.getMember().then((res) => {
      console.log(res);
      
      setStudent(res);
      setLoading(true);
      console.log(res);
    });
  }, []);
  var memberId = useRef<number>();
  var firstName = useRef("");
  var middleName = useRef("");
  var lastName = useRef("");
  var gender = useRef("");
  var age = useRef("");
  const handleClickOpen = (id: any) => {
    setOpen(true);
    student?.data?.map((stud: student) => {
      if (stud.id === id) {
        memberId.current = stud.id;
        firstName.current = stud.firstName;
        middleName.current = stud.middleName;
        lastName.current = stud.lastName;
        gender.current = stud.gender;
        age.current = stud.age;
      }
      console.log(memberId.current);
    });
  };
  const handleDelete = () => {
    deleteServices.deleteMember(memberId.current).then((res) => {
      toast.success("deleted", {
        type: "success",
        theme: "colored",
        autoClose: 2500,
        isLoading: false,
      });
      navigate(0);
    });
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  const onSubmit = () => {};
  return {
    open,
    setOpen,
    openEdit,
    setOpenEdit,
    student,
    loading,
    register,
    handleSubmit,
    handleClose,
    handleCloseEdit,
    handleDelete,
    handleClickOpen,
    setValue,
    onSubmit,
  };
};
