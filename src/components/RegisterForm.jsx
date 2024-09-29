import React from "react";
import { useFormik } from "formik";
import { registerSchemes } from "../schemas/Registerschemas";
function RegisterForm() {
    const submit=(values,action)=>{
setTimeout(()=>{
action.resetForm()
},2000)
    }
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema:registerSchemes,
  onSubmit:submit
  });

  return (
    <div className="main">
      <p className="form">Register</p>
      <form onSubmit={handleSubmit}>
       <div>
       <div className="line">
          <label>Email :</label>
          <input
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            id="email" className="input"
          />
        
        </div>
        <div>
        {
            errors&& <p className="p">{errors.email}</p>
          }
        </div>
       </div>
        <div>
        <div className="line">
          <label>Age :</label>
          <input
            type="number"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
            id="age"
            className="input"
          />
        
        </div>
        <div>
        {
            errors&& <p className="p">{errors.age}</p>
          }
        </div>
        </div>
       <div>
       <div className="line">
          <label>Password :</label>
          <input
            type="text"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            id="password" className="input"
          />
         
        </div>
        <div>
        {
            errors&& <p className="p">{errors.password}</p>
          }
        </div>
       </div>
        <div>
        <div className="line">
          <label>Password Again :</label>
          <input
            type="text"
            placeholder="Password Again"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword" className="input"
          />
         
        </div>
        <div>
        {
            errors&& <p className="p">{errors.confirmPassword}</p>
          }
        </div>
        </div><div>
          
        <div className="check">
          <label>Check Term</label>
          <input
            type="checkbox"
            value={values.term}
            onChange={handleChange}
            id="term"
          />
       
        </div>
        <div>
        {
            errors&& <p className="p">{errors.term}</p>
          }
        </div>
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>

    </div>
  );
}

export default RegisterForm;
