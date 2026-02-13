import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();

  async function registerUser(values) {
    const toastLoading = toast.loading("Loading...");

    try {
      // Register the user.
      await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_BACKEND}/api/registration/`,
        data: values
      });
      
      toast.dismiss(toastLoading);
      toast.success("Registration was successful !");
      
      // setTimeout(() => {
      //   router.push("/login");
      // }, 2000);
    } catch (error) {
      toast.dismiss(toastLoading);
      toast.error("Something went wrong !");
    }
  }

  const validate = values => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 20) {
      errors.username = "Must not be more than 20 characters";
    } else if (values.username.length < 8) {
      errors.username = "Must be at least 8 characters";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password1.length < 8) {
      errors.password = "Must be at least 8 characters";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        await registerUser(values);
      } catch {
        console.log("There was an error");
      }
    },
  });
   
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login</h1>
      
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <h3>
        <Link href="/">Back to home</Link>
      </h3>

      <br></br>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <input
              id="username"
              name="username"
              placeholder='Username'
              onChange={formik.handleChange}
              value={formik.values.username}
              style={{paddingTop: "10px", textIndent: "10px", fontFamily: "Courier New", fontSize: "20px", width: "300px", height: "50px", paddingBottom: "10px", borderRadius: "10px"}}
            />
            {formik.touched.username && formik.errors.username ? (<div>{formik.errors.username}</div>) : null}

            <br></br>

            <input
              id="password"
              name="password"
              placeholder='Password'
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              style={{paddingTop: "10px", textIndent: "10px", fontFamily: "Courier New", fontSize: "20px", width: "300px", height: "50px", paddingBottom: "10px", borderRadius: "10px"}}
            />
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

            <br></br>

            {formik.isSubmitting ? <button type="submit" disabled style={{cursor: "pointer", fontFamily: "Courier New", fontSize: "20px", color: "white", border: "none", backgroundColor: "#56eb16", width: "300px", height: "50px", borderRadius: "10px"}}>Login</button> : <button type="submit" style={{cursor: "pointer", fontFamily: "Courier New", fontSize: "20px", color: "white", border: "none", backgroundColor: "#56eb16", width: "300px", height: "50px", borderRadius: "10px"}}>Login</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;