import * as yup from "yup";
const userValidation = yup.object().shape({
    username: yup.string().required("User Name is required"),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Must be Uppercase Lowercase Special Charachter & Number"
      ),
  });
  export {
    userValidation
  }