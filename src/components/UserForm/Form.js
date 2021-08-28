import React from "react";
import * as yup from "yup";
import { useForm } from "@use-form/use-form";

const validationSchema = yup.object().shape({
  name: yup.string().required("this field is required"),
  email: yup
    .string()
    .required("this field is required")
    .email("this field must be a valid email"),
  address: yup.array(
    yup.object().shape({
      street: yup.string().required("this field is required"),
      number: yup.number().required("this field is required"),
    })
  ),
});

const initialValues = {
  name: "Jesse Woodson James",
  email: "jesse@jesse.com",
  address: [
    {
      street: "",
      number: 70,
    },
  ],
  options: "value 1",
  radio: "op3",
  accept: true,
};

const Controlled = () => {
  const {
    state: { touched, errors },
    register,
  } = useForm({
    initialValues,
    validationSchema,
    isControlled: true,
  });

  return (
    <div className="row formrow">
      <div className="col-lg-6">
        <div className="form-group">
          <label>Nome</label>
          <input
            className="form-control"
            autoComplete="off"
            {...register("name")}
          />
          <span className="text-danger">{touched.name && errors.name}</span>
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            className="form-control"
            autoComplete="off"
            {...register("email")}
          />
          <span className="text-danger">{touched.email && errors.email}</span>
        </div>
        <div>
          <h3>Address</h3>
          <div className="form-group">
            <label>Street</label>
            <input
              className="form-control"
              autoComplete="off"
              {...register("address.0.street")}
            />
            <span className="text-danger">
              {touched.address?.[0].street && errors.address?.[0].street}
            </span>
          </div>
          <div className="form-group">
            <label>Number</label>
            <input
              className="form-control"
              autoComplete="off"
              {...register("address.0.number")}
            />
            <span className="text-danger">
              {touched.address?.[0].number && errors.address?.[0].number}
            </span>
          </div>
          <div
            className="btn-group p-3 d-flex justify-content-center"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary m-1">
              Register
            </button>
            <button type="button" className="btn btn-primary m-1">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controlled;
