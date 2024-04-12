import React, { useState } from 'react'
import axios from "axios"
// dummy data for blogs
// import blogs from '../BlogDummyData';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
//image

import blogHero from '../assets/blogHero.png';
import blogsecondhero from '../assets/blogsecondhero.png';

//icons
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

//components
import Footer from '../component/Footer';

const Blog = () => {
  const [blogs, setBlogs] = useState();
  // Function to handle scrolling to the referenced element
  const scrollToElement = () => {
    const element = document.getElementById("blogs");

    // Scroll to the element if found
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/getBlogs",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        console.log(response.data.data);
        setBlogs(response.data.data);
        console.log(blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  // Define the scrollSmooth function
  function scrollSmooth(id) {
    // Log the id for debugging purposes
    console.log(id);

    // Smoothly scroll to the top of the window
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Construct the URL for the blog detail page
    const url = `/blogDetail/${id}`;

    // Custom navigate function for navigation
    const navigate = (url) => {
      // Perform navigation here, for example:
      window.location.href = url;
    };

    // Use the navigate function to navigate to the specified URL
    navigate(url);
  }

  return (
    <div className="w-full h-fit ">
      {/* hero section */}
      <div className="w-full h-[calc(100vh-70px)] relative ">
        <img
          src={blogHero}
          alt="blogHero"
          className="w-full h-full object-cover absolute z-[-1] brightness-75"
        />
        <div className="w-full sm:w-[80%] lg:w-[55%] h-fit relative top-[50%] translate-y-[-50%]  pl-[1rem] md:ml-[3rem] ">
          <p className="w-full font-Sen text-[#FFFFFF] font-[700] text-[3.2rem] leading-[3.6rem] md:text-[3.6rem] md:leading-[4.8rem]">
            Welcome to the Snackbae Blogs
          </p>
          <p className="w-[90%] font-inter text-[.9rem] text-[#e4e5ea] font-[400] leading-[1.4rem] mt-[.5rem]">
            Discover insightful articles, actionable tips, and expert advice to
            help eateries and retailers thrive in today's competitive landscape.
            Explore topics such as customer retention, engagement strategies,
            marketing tactics, and much more.
          </p>
          <button
            onClick={scrollToElement}
            className="bg-[#FFD628] px-[1.8rem] py-[.5rem] rounded-md  font-Sen font-[700] text-[1.1rem] leading-[1.8rem] mt-[1rem] flex items-center gap-[.2rem]"
          >
            Read blogs
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="w-full h-fit lg:p-[3rem] flex lg:flex-row flex-col items-center justify-center py-[3rem]">
        <img
          src={blogsecondhero}
          alt="blogsecondhero"
          className="w-[90%] sm:w-[80%] lg:w-[50%] aspect-auto"
        />
        <div className="bg-[#ffffff] rounded-lg w-[80%] sm:w-[60%] lg:w-[40%] h-fit py-[3rem] px-[2rem] shadow-lg relative top-[-50px] lg:top-0 lg:left-[-5%] ">
          <p className=" font-inter text-[.9rem] text-[#232536] font-[400] leading-[1.4rem]">
            At Snackbae, we understand the importance of staying ahead in
            today's dynamic business landscape. Our blogs serve as a valuable
            resource for merchants seeking to navigate challenges, capitalize on
            opportunities, and achieve sustainable growth.
          </p>
          <p className=" font-inter text-[.8rem] text-[#6D6E76] font-[400] leading-[1.4rem] mt-[.5rem]">
            By sharing insights, strategies, and success stories, we empower
            merchants like you to thrive in an ever-evolving market. Stay
            informed, inspired, and equipped for success with our blog – your
            trusted companion on the journey to merchant excellence.
          </p>
        </div>
      </div>

      {/* allblogs */}
      <div id="blogs" className="w-full h-fit">
        {blogs &&
          blogs.map((blog) => (
            <div
              className="w-[90%] mx-auto h-fit p-[2rem] flex md:flex-row flex-col items-center md:items-start justify-center gap-[2rem] "
              key={blog._id}
            >
              <Link
                onClick={() => {
                  scrollSmooth(blog._id);
                }}
              >
                <img
                  src={blog.image}
                  alt="image1"
                  className="w-[360px] h-[240px] object-contain"
                />
              </Link>
              <div className="md:w-[50%] py-[1rem]">
                <p className="text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight">
                  {blog.header}
                </p>
                <p className="text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.2rem] tracking-tight my-[1rem]">
                  {blog.body.split(" ").slice(0, 25).join(" ") + "..."}
                </p>
                <p className="text-[#004AAD]">Posted On: {blog.createdAt}</p>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Blog