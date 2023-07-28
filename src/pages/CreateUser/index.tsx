import { Container, TextField } from "@mui/material";
import { ICreateAUser } from "./useCreateUser";
const CreateUser = () => {
  const { register, handleSubmit, errors, onSubmit } = ICreateAUser();

  return (
    <Container className="bg-slate-50 mt-20 mb-20 pb-20 rounded-lg drop-shadow-lg sm:mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 mt-32 flex items-center justify-center ">
          <h1 className="mt-4 mb-4 text-2xl text-center mr-20 col-start-2 col-end-3">
            Creare User
          </h1>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="User Name"
              sx={{
                width: 300,
              }}
              {...register("username")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.username?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="Email"
              sx={{
                width: 300,
              }}
              {...register("email")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.email?.message}
            </p>
          </div>
          <div className="col-start-2 col-end-3 pt-3">
            <TextField
              label="password"
              type="password"
              sx={{
                width: 300,
              }}
              {...register("password")}
            />
            <p color="error" className="text-red-700 col-start-2 col-end-3">
              {errors.password?.message}
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

export default CreateUser;
