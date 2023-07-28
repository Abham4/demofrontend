import { Container } from "@mui/material";
import { useAaccess } from "./useLogin";
const Login = () => {
  const { register, handleSubmit, onSubmit } = useAaccess();

  return (
    <>
      <Container className="bg-slate-50 mt-16">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-md w-full space-y-8">
            <div className="">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Log In
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="py-5"
                type="hidden"
                name="remember"
                defaultValue="true"
              />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email-address"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-5  py-3 my-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#000] hover:bg-[#ffbb00] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
