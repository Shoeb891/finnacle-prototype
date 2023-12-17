"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useRouter from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function DashBoard() {
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      window.location.href = "/";
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/getUser");
      console.log(res.data);
      setData(res.data.data.id);
    } catch (error) {}
  };

  return (
    <div className="flex flex-row items-center justify-evenly min-h-screen py-2">
      <div className=""></div>
      <div>
        <p>Currently logged user id: {data}</p>

        <button
          onClick={getUserDetails}
          className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          GetUser Details
        </button>
        <button
          onClick={logout}
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
