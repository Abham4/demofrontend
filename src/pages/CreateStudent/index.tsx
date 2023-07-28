import { Container, TextField } from "@mui/material";
import { useCreateStudents } from "./useCreateStudent";
import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  const { register, handleSubmit, errors, onSubmit } = useCreateStudents();

  return (
    <Container className="bg-slate-50 mt-20 mb-20 pb-20 rounded-lg drop-shadow-lg sm:mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 mt-32 flex items-center justify-center ">
          <h1 className="mt-4 mb-4 text-2xl text-center mr-20 col-start-2 col-end-3">
            Creare Student
          </h1>
          <div className="col-start-2 col-end-3">
            <TextField
              label="First Name"
              sx={{
                width: 300,
              }}
              {...register("firstName")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="Middle Name"
              sx={{
                width: 300,
              }}
              {...register("middleName")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.middleName?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="last Name"
              sx={{
                width: 300,
              }}
              {...register("lastName")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.lastName?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="Gender"
              sx={{
                width: 300,
              }}
              {...register("gender")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.gender?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="Age"
              sx={{
                width: 300,
              }}
              {...register("age")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.age?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 flex ml-20">
            <input
              className="mt-4 w-32 flex  justify-center  font-bold py-2  border border-yellow-400 rounded"
              type="submit"
            />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CreateStudent;
