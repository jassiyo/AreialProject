import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './ExperiancesForm.module.css'


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
  employmentType: Yup.string().required('Required'),
  companyName: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  locationType: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  startDate: Yup.date().required('Required'),
  endDate: Yup.date().required('Required'),
  });


const ExperiancesForm = () => {
  return (
    <div className={style.formContainer}>
    <Formik
      initialValues={{
        title: '',
          employmentType: '',
          companyName: '',
          location: '',
          locationType: '',
          description: '',
          startDate: '',
          endDate: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // Handle form submission
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
        <h2>Add a Experiances</h2>
          <Field name="title" type="text" placeholder="Title" className={style.field} />
          {/* <Field name="employmentType" as="select" className={style.field}>
            <option value="">employment type</option>
            <option value="fullTime">Full-Time</option>
            <option value="partTime">Part-Time</option>
            Add other options as necessary
          </Field> */}
          <Field name="Employment Type" type="text" placeholder="Employment Type" className={style.field} />
          <Field name="CompanyName" type="text" placeholder="Company Name" className={style.field} />
          <Field name="Location" type="text" placeholder="Location" className={style.field} />
          <Field name="LocationType" type="text" placeholder="Location Type" className={style.field} />
          <Field name="Description" type="text" placeholder="Description" className={style.field} />
          <label>
          <Field type="radio" name="recordNextHearing" value="Yes" className={style.radio} /> I am currently working in this roll
        </label>
        <div className={style.DateFields}>
            <Field name="startDate" type="date" placeholder="Start Date" className={`${style.Field} ${style.DateField}`} />
            <Field name="endDate" type="date" placeholder="End Date" className={`${style.Field} ${style.DateField}`} />
            </div>
          {/* Add other fields as necessary */}
          <div className={style.btnContainer}>
          <button type="submit" disabled={isSubmitting} className={style.submitButton}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default ExperiancesForm