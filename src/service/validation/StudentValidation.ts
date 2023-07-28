import * as yup from "yup";

const svalidation = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  middleName: yup
    .string()
    .required("First Name required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .required("First Name required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  gender: yup
    .string()
    .required("First Name required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  age: yup.string().required(),
});

export { svalidation };
