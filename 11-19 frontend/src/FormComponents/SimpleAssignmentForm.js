import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import VIDEOS_MOCK_DATA from "./VIDEOS_MOCK_DATA";
import ReactPlayer from "react-player";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const videos = VIDEOS_MOCK_DATA.map((videos) => videos.video);
const exercise = VIDEOS_MOCK_DATA.map((video) => video.exercise);
console.log(videos);
console.log(exercise);

const initialValues = {
  title: "",
  description: "",
  //toggle: false,
  checked: [],
  startDate: null,
  endDate: null,
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  checked: Yup.string().required("Required"),
  startDate: Yup.date().required("Required").nullable(),
  endDate: Yup.date().required("Required").nullable(),
});

const onSubmit = async (values) => {
  await sleep(500);
  console.log(values);
  alert(JSON.stringify(values, null, 2));
};

const SimpleAssignmentForm = () => (
  <div>
    <h1>Video Assignment Page</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          
          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>
*/}
          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          {/*}
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="title" />
          <label htmlFor="description">Description</label>
          <Field
            control="textarea"
            id="description"
            name="description"
            placeholder="description"
          />
        */}
          <FormikControl control="input" label="Title" name="title" />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl control="date" label="Start Date" name="startDate" />
          <FormikControl control="date" label="End Date" name="endDate" />
          <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <ul>
              {VIDEOS_MOCK_DATA.map((value, index) => {
                return (
                  <label>
                    <Field type="checkbox" name="checked" value={value.video} />
                    {value.exercise}
                    <>
                      <ReactPlayer url={value.video} />
                    </>
                  </label>
                );
              })}
            </ul>

            {/*
            <label>
              <Field type="checkbox" name="checked" value={videos[0]} />
              <ReactPlayer url={videos[0]} />
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
            */}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SimpleAssignmentForm;
