import React from 'react';
import Image from "next/image";
import bootcamp from "./images/not-found.svg";

const page = () => {
  return (
    <main className='h-screen bg-gradient-to-r from-sky-200 to-red-100 flex items-center'>
    <div className="container">
      <section className="section error-404 min-vh-100 flex flex-col items-center justify-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn&lsquo;t exist.</h2>
       <button className="btn"><a  href="/">Back to home</a></button>
        <Image
                src={bootcamp}
                alt="Page Not Found"
                loading="lazy"
                className="img-fluid py-5"
              />
      </section>
    </div>
  </main>
  )
}

export default page
