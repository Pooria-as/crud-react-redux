import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  getUserById,
  Newuser,
} from "../../store/Actions/Users/UserAction";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserId } = useParams();
  useEffect(() => {
    dispatch(getUserById(UserId));
  }, []);
  const data = useSelector((state) => state.users.user);

  if (!data) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <Formik
        initialValues={{
          name: data.name,
          password: data.password,
          email: data.email,
          age: data.age,
        }}
        enableReinitialize
        onSubmit={(values) => {
          const { name, password, email, age } = values;

          dispatch(editUser(UserId, name, email, password, age));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
          // console.log(values)
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
              <h1>Edit User</h1>
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

export default EditComp;
