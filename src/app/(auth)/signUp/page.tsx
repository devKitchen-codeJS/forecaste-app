"use client";
import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { useRouter } from "next/navigation";

interface MyFormValues {
  firstName: string;
}
const SignUp: React.FC = () => {
  const initialValues: MyFormValues = { firstName: "" };
  const router = useRouter();
  const handleAuth = () => {
    router.push("/");
  };
  return (
    <div className=' h-[500px] flex flex-col items-center  justify-center'>
      <span className=' text-[25px] font-bold text-base-100'>Sign Up</span>
      <div className='block'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}>
          <Form className='mt-10'>
            {/* <label htmlFor='firstName'>First Name</label> */}
            <Field
              id='firstName'
              name='firstName'
              placeholder='First Name'
              // type='email'
              className='input input-bordered w-full max-w-xs block mb-10'
            />
            <Field
              id='email'
              name='email'
              placeholder='User Email'
              // type='email'
              className='input input-bordered w-full max-w-xs block mb-10'
            />

            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs block mb-10'
            />
             <Field
              id='password'
              name='rePassword'
              type='password'
              placeholder='Repeate the password'
              className='input input-bordered w-full max-w-xs block mb-10'
            />


            <div className=' flex justify-center '>
              <button
                type='submit'
                onClick={handleAuth}
                className='  rounded-lg  w-[100px] h-[50px] text-[20px] bg-neutral text-base-100'>
                Submit
              </button>
            </div>
            <div className='mt-20'>
              <span>
                Have an account ? Just{" "}
                <a
                  onClick={() => {
                    router.push("/signIn");
                  }}
                  className='text-blue-700 cursor-pointer '>
                  Sign In!
                </a>
              </span>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
