import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from "./DroneForm.module.css";

const DroneFormSchema = Yup.object().shape({
  // Define your validation schema
  name: Yup.string()
    .required('Required'),
  model: Yup.string()
    .required('Required'),
  serialNumber: Yup.string()
    .required('Required')
});

const DroneForm = () => {
  return (
    <div className={style.droneFormContainer}>
      <Formik
        initialValues={{
          name: '',
          model: '',
          serialNumber: '',
          image: null
        }}
        validationSchema={DroneFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className={style.FormContainer}>
          <h2 >Add A New Drone</h2>
          <div className={style.FieldContainer}>
            <Field name="name" type="text" placeholder="Search Drone" />
            or
            <Field name="model" type="text" placeholder="Write A Name"  />

            <div className={style.categorySelect}>
            <div className={style.categorySelect}>
  <Field as="select" name="category">
    <option value="">Select category</option>
    <option value="photography">Photography</option>
    <option value="surveying">Surveying</option>
    <option value="racing">Racing</option>
    <option value="recreational">Recreational</option>
  </Field>
</div>

            </div>
            <div className={style.UploadImages}>

            <h2>Upload Drone Image</h2>
            <input 
              name="image"
              type="file"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }} 
              accept="image/*"
            />
            
            </div>
            </div>
          <div className={style.btnContainer}>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DroneForm;
