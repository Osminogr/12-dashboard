"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {fetcher} from "@/fetcher"
import useSWR from "swr";
import { IAuthState, authSlice } from "@/store/authSlice"
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { initialState } from "@/store/authSlice";

const me_ep = "/auth/users/me/"
const me_info = "/api/users/persons/"



interface me_data {
  'email': string,
  'id': number
}



export interface me_data_info {
  "id": number,
  "username": string,
  "first_name": string,
  "last_name": string,
  "email": string,
  "fio": string,
  "role": string
}




export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch()
  const user_id = 1
  const { data: a, error, isLoading } = useSWR(me_info + user_id, fetcher)
  dispatch(authSlice.actions.setUserData(a ?? initialState.user_data))
  const user = useAppSelector(state => state.auth.user_data)
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetcher(me_ep)
      if (!res) {
        router.push("auth/signin")
      }
    }
    checkAuth()
  }, [])

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
