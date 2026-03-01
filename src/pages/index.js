import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';
import { useEffect } from 'react';

// Components should never be declared unless it is the main component 
// other than that it should be imported from the components folder
const ProfileImage = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

// async function getData() {
//   const params = new URLSearchParams();
//   params.append("blog", 1);

//   const response = await fetch(`http://127.0.0.1:8000/api/reading-mode/?${params}`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return response.json();
// }

export default function Homepage() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getData();
  //     console.log(data);
  //   };

  //   fetchData().catch(console.error);
  // }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      
      <div style={{display: "flex", fontFamily: "Courier New"}}>
        <div style={{border: "none"}}>
          <h1>Panulat</h1>
          
          <br></br>

          {/* <p style={{fontSize: "18px"}}>Panulat ay isang plataporma para maibahagi ng Pilipino ang kwento niya.</p> */}
          <p style={{fontSize: "18px"}}>Panulat is a platform for sharing your stories to the world.</p>
          
          <br></br>
          
          {/* <p style={{fontSize: "18px"}}>Ikaw, anong kwento mo ?</p> */}
          <p style={{fontSize: "18px"}}>What will be your story ?</p>
          
          <br></br>

          <div style={{display: "flex"}}>
            <div style={{paddingRight: "10px", paddingTop: "10px"}}>
              <Link href="/login">
                <button style={{cursor: "pointer", fontFamily: "Arial", fontSize: "15px", color: "white", border: "none", backgroundColor: "#56eb16", width: "100px", height: "30px", borderRadius: "15px"}}>Login</button>
              </Link>
            </div>
            <div style={{paddingRight: "10px", paddingTop: "10px"}}>
              <Link href="/signup">
                <button style={{cursor: "pointer", fontFamily: "Arial", fontSize: "15px", color: "white", border: "none", backgroundColor: "#3e95f8", width: "100px", height: "30px", borderRadius: "15px"}}>Sign-up</button>
              </Link>
            </div>
            <div style={{paddingRight: "10px", paddingTop: "10px"}}>
              <Link href="/explore">
                <button style={{cursor: "pointer", fontFamily: "Arial", fontSize: "15px", color: "white", border: "none", backgroundColor: "#343434", width: "100px", height: "30px", borderRadius: "15px"}}>Explore</button>
              </Link>
            </div>
          </div>
        </div>
        
        <div style={{border: "none"}}>
          <Image
            src="/images/feather_and_pot.jpg" // Route of the image file
            height={450} // Desired size with correct aspect ratio
            width={184} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </div>
    </Layout>
  );
}