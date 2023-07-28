import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetList } from "./useList";
import StudentRow from "../../components/StudentRow";
import { student } from "../../interface/types";
import { useEffect, useState, useRef } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import deleteServices from "../../service/delete.services";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
export default function List() {
  const [rows, setRows] = useState<any>([]);
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
  } = GetList();

  useEffect(() => {
    setRows(student);
  });
  var memberId = useRef<number>();
  var firstName = useRef("");
  var middleName = useRef("");
  var lastName = useRef("");
  var gender = useRef("");
  var age = useRef("");
  const handleEdit = (id: any) => {
    student?.data?.map((stud: student) => {
      setOpenEdit(true);
      if (stud.id === id) {
        memberId.current = stud.id;
        firstName.current = stud.firstName;
        middleName.current = stud.middleName;
        lastName.current = stud.lastName;
        gender.current = stud.gender;
        age.current = stud.age;
        console.log(age.current);
      }
    });
    setValue("firstName",firstName.current);
    setValue("middleName",middleName.current);
    setValue("lastName",lastName.current);
    setValue("gender",gender.current);
    setValue("age",age.current);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({});

  // const onSubmit = () => {};

  return (
    <>
      <h1 className="flex justify-center">Student List</h1>
      {loading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 300 }}>Full Name</TableCell>
                <TableCell style={{ width: 300 }}>Gender</TableCell>
                <TableCell style={{ width: 300 }}>Age</TableCell>
                <TableCell style={{ width: 300 }}>Create Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.data.map((row: student) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName} {row.middleName} {row.lastName}
                  </TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.createdDate}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(row.id)}>
                      <AiFillEdit style={{ fontSize: 20 }} />
                    </Button>
                    <Button onClick={() => handleClickOpen(row.id)}>
                      <AiFillDelete style={{ color: "red", fontSize: 20 }} />
                    </Button>
                  </TableCell>
                </TableRow>
                //  <StudentRow row={row} handleDelete={handleDelete} handleEdit={handleEdit} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
          <AiOutlineExclamationCircle
            style={{ color: "FFD700", fontSize: 80 }}
          />
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Delete?
          </DialogContentText>
          <DialogContentText
            sx={{ fontWeight: "bold", justifyContent: "center" }}
          >
            {firstName.current} {middleName.current} {lastName.current}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleDelete} variant="contained" color="primary">
            Yes, Delete it!
          </Button>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "300px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle sx={{ fontSize: "10" }}>Member Edit</DialogTitle>

        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-2 mr-2">
              <TextField
                defaultValue={firstName.current}
                id="valueFieldxyz"
                {...register("firstName")}
                label="First Name"
                variant="outlined"
                className="col-start-2 col-end-6 focus:border-red-300"
                size="small"
              />
              <TextField
                defaultValue={middleName.current}
                id="valueFieldxyz"
                {...register("middleName")}
                label="Middle Name"
                variant="outlined"
                className="col-start-2 col-end-6 focus:border-red-300"
                size="small"
              />
              <TextField
                defaultValue={lastName.current}
                id="valueFieldxyz"
                {...register("lastName")}
                label="Last Name"
                variant="outlined"
                className="col-start-2 col-end-6 focus:border-red-300"
                size="small"
              />
              <TextField
                defaultValue={gender.current}
                id="valueFieldxyz"
                {...register("value")}
                label="Gender"
                variant="outlined"
                className="col-start-2 col-end-6 focus:border-red-300"
                size="small"
              />
              <TextField
                defaultValue={age.current}
                id="valueFieldxyz"
                {...register("age")}
                label="Age"
                variant="outlined"
                className="col-start-2 col-end-6 focus:border-red-300"
                size="small"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Save</Button>
          <Button onClick={handleCloseEdit}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
