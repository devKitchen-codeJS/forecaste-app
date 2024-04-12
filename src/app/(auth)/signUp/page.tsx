"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/reduxHooks";

import {
  getAuth,
  createUserWithEmailAndPassword,
  confirmPasswordReset,
} from "firebase/auth";
import { setUser } from "@/lib/features/appSlice";

interface MyFormValues {
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const handleAuth = (e: any) => {
    console.log("val", e);
    const { email, password } = e;
    console.log(email, password);
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential: any) => {
          console.log(userCredential);
          localStorage.setItem(
            "refreshToken",
            userCredential._tokenResponse.refreshToken
          );
          let payload: any = {
            email: userCredential.user.email,
            token: userCredential._tokenResponse.refreshToken,
            isAuthenticated: true,
          };
          dispatch(setUser(payload));
          console.log(localStorage.getItem("refreshToken"));
          router.push('/')
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className=' h-[500px] flex flex-col items-center  justify-center'>
      <span className=' text-[25px] font-bold text-base-100'>Sign Up</span>
      <div className='block'>
        <Formik initialValues={initialValues} onSubmit={handleAuth}>
          <Form className='mt-10'>
            <Field
              id='email'
              name='email'
              placeholder='User Email'
              type='email'
              className='input input-bordered w-full max-w-xs block mb-10'
            />

            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs block mb-10'
            />

            <div className=' flex justify-center '>
              <button
                type='submit'
                className='  rounded-lg  w-[100px] h-[50px] text-[20px] bg-neutral text-base-100'>
                Submit
              </button>
            </div>

            <div className='mt-20'>
              <span>
                Dont have an account ? Just{" "}
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
