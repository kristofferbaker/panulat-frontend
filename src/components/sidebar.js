import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Sidebar = () => {
  return (
    <div style={{position: "fixed", paddingLeft: "50px", paddingTop: "50px"}}>
      <div style={{paddingBottom: "15px"}}>
        <a href={`${process.env.NEXT_PUBLIC_FRONTEND}/account-mode/subscriptions/`}>Subscriptions</a>
      </div>
      <div style={{paddingBottom: "15px"}}>
        <a href={`${process.env.NEXT_PUBLIC_FRONTEND}/explore/`}>Explore</a>
      </div>
      <div style={{paddingBottom: "15px"}}>
        <a href={`${process.env.NEXT_PUBLIC_FRONTEND}/account-mode/dashboard/`}>Dashboard</a>
      </div>
      <div style={{paddingBottom: "15px"}}>
        <a href={`${process.env.NEXT_PUBLIC_FRONTEND}/account-mode/profile/`}>Profile</a>
      </div>
      <button style={{width: "100px", height: "25px", borderRadius: "10px"}}>Create</button>
    </div>
  );
};

export default Sidebar;