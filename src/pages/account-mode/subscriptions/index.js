import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import myAxios from "@/utils/apiConfig";
import Sidebar from '@/components/sidebar';
import { useEffect, useState } from 'react';

const SubscriptionPage = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  function pageNumbering(pageCount) {
    let pageNumbers = [];

    for (let i = 0; i < pageCount; i++) {
      pageNumbers[pageNumbers.length] = i + 1;
    }

    return pageNumbers;
  }

  async function getLatestPostOfSubscribedToBlogs(pageNumber) {
    try {
      const response = await myAxios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_BACKEND}/api/account-mode/list-latest-posts-of-subscribed-to-blogs/?page=${pageNumber}`,
      });
      
      setPageCount(pageNumbering(response.data.pages));

      setCurrentPageNumber(pageNumber);

      setPosts(response.data.results);
    } catch (error) {
      toast.dismiss(toastLoading);
      toast.error("Something went wrong !");
    }
  }

  useEffect(() => {
    getLatestPostOfSubscribedToBlogs(1);
  }, []);

  return (
    // <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
    <div>
      <Sidebar />
      
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 className="text-3xl font-bold underline">Subscriptions</h1>
          
          {/* <h3>
            <Link href="/">Back to home</Link>
          </h3> */}

          <br></br>
          <ul>
            {posts.map((post) => {
              return(
                <div>
                  {/* Search result */}
                  <div style={{display: "flex", paddingTop: "50px", paddingBottom: "25px", justifyContent: "space-between", width: "500px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
                      <div style={{display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: "10px"}}>
                        <img
                          src={`http://localhost:8000/${post.blog_logo}`}
                          width="30"
                          height="30"
                          alt="blog logo"
                          style={{border: "solid", borderRadius: "5px", border: "none"}}
                        />

                        <p>{post.blog_name}</p>
                      </div>
                      
                      <div style={{display: "flex", flexDirection: "column", alignItems: "left", paddingBottom: "10px"}}>
                        <p style={{paddingBottom: "10px"}}><b>{post.title}</b></p>
                        <p style={{paddingBottom: "10px"}}>{post.subtitle}</p>
                        <p style={{paddingBottom: "10px"}}>{post.author_username}</p>
                      </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "right", paddingBottom: "10px"}}>
                      <p>{post.created_at}</p>
                      <img
                        src={`http://localhost:8000/${post.opening_graphic}`}
                        width="140"
                        height="120"
                        alt="opening graphic"
                        style={{border: "solid", borderRadius: "5px", border: "none"}}
                      />
                    </div>

                    {/* <p>{post.locked_to_subscribers}</p> */}
                  </div>

                  <hr></hr>
                </div>
              );
            })}
          </ul>
          
          <div style={{display: "flex", flexDirection: "row", paddingTop: "10px", paddingBottom: "10px"}}>
          {pageCount.map((number) => {
            return number == currentPageNumber ? (<b><p style={{cursor: "pointer", paddingRight: "5px"}} onClick={() => getLatestPostOfSubscribedToBlogs(number)}>{number}</p></b>) : <p style={{cursor: "pointer", paddingRight: "5px"}} onClick={() => getLatestPostOfSubscribedToBlogs(number)}>{number}</p>;
          })
          }
          </div>
          
        </div>
      </div>

      {/* <div>
      </div> */}
    </div>
  );
};

export default SubscriptionPage;