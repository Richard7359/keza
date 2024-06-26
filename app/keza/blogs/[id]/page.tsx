import React from 'react';
import Navigation from '@/app/components/Navigation_bar/Navigation';
import Footer from '@/app/components/Footer';
import SingleBlog from '@/app/components/home/sections/SingleBlog';

const page = () => {
  return (
    <div>
      <Navigation />
      <SingleBlog />
      <Footer />
    </div>
  )
}

export default page
