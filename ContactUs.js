import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const initialValues = {
    name: '',
    email: '',
    address: '',
    dateOfBirth: '',
    bio: '',
    profileImage: null,
    bannerImage: null
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    address: Yup.string().required('Required'),
    dateOfBirth: Yup.date().required('Required'),
    bio: Yup.string().required('Required')
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>

            <div>
              <label>Date of Birth</label>
              <Field type="date" name="dateOfBirth" />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>

            <div>
              <label>Bio</label>
              <Field as="textarea" name="bio" />
              <ErrorMessage name="bio" component="div" />
            </div>

            <div>
              <label>Profile Image</label>
              <input type="file" name="profileImage" onChange={(event) => setFieldValue('profileImage', event.target.files[0])} />
            </div>

            <div>
              <label>Banner Image</label>
              <input type="file" name="bannerImage" onChange={(event) => setFieldValue('bannerImage', event.target.files[0])} />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
