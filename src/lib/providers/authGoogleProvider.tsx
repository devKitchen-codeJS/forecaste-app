"use client";

import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import appSelectore from "../features/appSelectors";
import { useRouter } from "next/navigation";

function AuthGoogleProvider({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector(appSelectore.getIsAuth);
  const router = useRouter();
  console.log("isAuth", isAuth);

  return (
    <div>
      {isAuth ? (
        <div>{children}</div>
      ) : (
        <>
          {router.push("/signIn")}
          <p>loading...</p>
        </>
      )}
    </div>
  );
}

export default AuthGoogleProvider;
