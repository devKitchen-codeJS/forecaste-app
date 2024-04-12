"use client";

import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import appSelectore from "../features/appSelectors";
import { useRouter } from "next/navigation";
import { getIdToken } from "firebase/auth";
import { auth } from "../firebase/firebase";

function AuthGoogleProvider({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector(appSelectore.getIsAuth);
  const token = localStorage.getItem("refreshToken");
  // let token:any = 
  const router = useRouter();
  console.log("token", token);
  console.log("isAuth", isAuth);


  return (
    <div>
      {token?.length ? (
        <div>{children}</div>
      ) : (
        <>
          {router.push("/signIn")}
          <p>loading...</p>
          {/* <div>{children}</div> */}

        </>
      )}
    </div>
  );
}

export default AuthGoogleProvider;
