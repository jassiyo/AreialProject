import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './EquipmentsForm.module.css'

const DroneFormSchema = Yup.object().shape({
    // Define your validation schema
    name: Yup.string()
      .required('Required'),
    model: Yup.string()
      .required('Required'),
    serialNumber: Yup.string()
      .required('Required')
  });
  
  const EquipmentsForm = () => {
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
            <h2 >Add New Equipments</h2>
            <div className={style.FieldContainer}>
              <Field name="name" type="text" placeholder="Write a Equipment Name" />
             


              <div className={style.UploadImages}>
  
              <h2>Upload Image</h2>
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

export default EquipmentsForm