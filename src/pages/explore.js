import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react"

const ExplorePage = () => {
  const [results, setResults] = useState([]);

  async function globalExplore(values) {
    try {
      // 
      const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_BACKEND}/api/explore/global/`,
        params: {"search_query": values.query}
      });

      setResults(response.data.results);
    } catch (error) {
      toast.dismiss(toastLoading);
      toast.error("Something went wrong !");
    }
  }

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit: async (values) => {
      try {
        await globalExplore(values);
      } catch {
        console.log("There was an error");
      }
    },
  });
   
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Explore</h1>

      <h3>
        <Link href="/">Back to home</Link>
      </h3>

      <br></br>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <form onSubmit={formik.handleSubmit}>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <input
              id="query"
              name="query"
              placeholder='Search blogs...'
              onChange={formik.handleChange}
              value={formik.values.query}
              style={{paddingTop: "10px", textIndent: "10px", fontFamily: "Courier New", fontSize: "20px", width: "300px", height: "50px", paddingBottom: "10px", borderRadius: "10px"}}
            />
            {formik.touched.query && formik.errors.query ? (<div>{formik.errors.query}</div>) : null}

            <br></br>

            {formik.isSubmitting ? <button type="submit" disabled style={{cursor: "pointer", fontFamily: "Courier New", fontSize: "20px", color: "white", border: "none", backgroundColor: "#56eb16", width: "100px", height: "50px", borderRadius: "100px"}}>Search</button> : <button type="submit" style={{cursor: "pointer", fontFamily: "Courier New", fontSize: "20px", color: "white", border: "none", backgroundColor: "#56eb16", width: "100px", height: "50px", borderRadius: "100px"}}>Search</button>}
          </div>
        </form>

        <ul>
          {results.map((result) => {
            return(
              <div style={{display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "50px"}}>
                <img
                  src={`http://localhost:8000/${result.blog_logo}`}
                  width="100"
                  height="100"
                  alt="blog logo"
                  style={{border: "solid", borderRadius: "100px"}}
                />
                
                <div style={{paddingLeft: "20px"}}>
                  <p>{result.blog_name} by {result.blog_author}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExplorePage;