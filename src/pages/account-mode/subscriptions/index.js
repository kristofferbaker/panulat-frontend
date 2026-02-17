import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SubscriptionPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Subscriptions</h1>
      
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <h3>
        <Link href="/">Back to home</Link>
      </h3>

      <br></br>
    </div>
  );
};

export default SubscriptionPage;