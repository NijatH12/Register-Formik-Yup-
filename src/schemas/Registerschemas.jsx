import *as yup from "yup"
export const registerSchemes=yup.object().shape({
    email:yup.string().email("Right  correct email!").required("Email is important!"),
    age:yup.number().positive("Right correct age!").integer("Right correct age!").required("Age is important!"),
    password:yup.string().required("Password is important!"),
    confirmPassword:yup.string().required("Passwords must match!").oneOf([yup.ref("password"),yup.password],"Passwords do not match!"),
    term:yup.boolean().required("Please check and confrim terms!")
})