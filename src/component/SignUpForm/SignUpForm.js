// src/components/SignUpForm/SignUpForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

const SignUpForm = ({ onSubmit }) => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    phone: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    phone: Yup.string().required('Required')
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30%] mr-[5%] mt-[4%]">
        <h1 className="text-center text-[#333335] text-[40px] italic my-[90px]">
          Sign Up
        </h1>
        <Field name="fullName" type="text" placeholder="Full Name" component={InputField} />
        <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs italic" />

        <Field name="email" type="text" placeholder="Email" component={InputField} />
        <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />

        <Field name="password" type="password" placeholder="Password" component={InputField} />
        <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />

        <Field name="phone" type="text" placeholder="Phone" component={InputField} />
        <ErrorMessage name="phone" component="div" className="text-red-500 text-xs italic" />

        <div>
          <button type="submit" className="bg-[#333335] hover:bg-gray-900 text-[#e4e2e2] text-xl flex justify-center w-full p-8 my-12">
            SIGN UP
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
