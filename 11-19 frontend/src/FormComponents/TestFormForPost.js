import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import axios from "axios";

function TestFormForPost() {
  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/getCurrentPatients")
      .then((res) => {
        setData(res.data.data.currentPatients);
        console.log(res.data.data.currentPatients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  */

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    Registeration_date: null,
    user_ID: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    bio: Yup.string().required("Required"),
    /*
    Registeration_date: Yup.date().required("Required").nullable(),
    user_ID: Yup.string().required("Required"),
    */
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    axios
      .post("/getCurrentPatients/data/data/currentPatients", values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control="input" label="First Name" name="first_name" />
          <FormikControl control="input" label="Last Name" name="last_name" />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl control="textarea" label="Biography" name="bio" />
          {/*
          <FormikControl
            control="date"
            label="Registeration_date"
            name="Registeration_date"
          />
          <FormikControl control="input" label="User ID" name="user_ID" />
          */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default TestFormForPost;
