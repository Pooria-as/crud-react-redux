import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Newuser } from "../../store/Actions/Users/UserAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
          age: "",
        }}
        onSubmit={(values) => {
          const { name, password, email, age } = values;
          // console.log(values);
          dispatch(Newuser(name, email, password, age));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }}
        validationSchema={yup.object({
          name: yup.string().required("Name is Required"),
          age: yup.number().required("age is Required"),
          password: yup.string().min(6).required("Password is Required"),
          email: yup
            .string()
            .email("Email is Not Valid")
            .max(255)
            .required("Email is Required"),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <div className="card  m-2">
            <div className="card-header">
              <h1>New User</h1>
            </div>
            <div className="card-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter Name"
                        />
                        {errors.name && touched ? (
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.name}
                          </small>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName">password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          placeholder="password"
                        />
                        {errors.password && touched ? (
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.password}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="email"
                        />
                        {errors.email && touched ? (
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.email}
                          </small>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="age">age</label>
                        <input
                          type="text"
                          className="form-control"
                          id="age"
                          name="age"
                          value={values.age}
                          onChange={handleChange}
                          placeholder="age"
                        />
                        {errors.age && touched ? (
                          <small
                            id="emailHelp"
                            className="form-text text-danger"
                          >
                            {errors.age}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary m-1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreateComp;
