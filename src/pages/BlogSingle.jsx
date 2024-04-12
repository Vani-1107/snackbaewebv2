import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

// dummy data for blogs
import blogs from "../BlogDummyData";

//components
import Footer from "../component/Footer";

const BlogSingle = () => {
  const [blogs, setBlogs] = useState();
  const [blogss, setBlogss] = useState();
  //fetch last element of the path url
  var location = useLocation().pathname;
  var pathArray = location.split("/");
  var pathId = pathArray[pathArray.length - 1];

  // fetch data from dummy blogs
  const [blog, setBlog] = useState("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    for (var i = 0; i < blogs?.length; i++) {
      if (blogs[i]?._id == pathId) {
        setBlog(blogs[i]);
      }
    }
  }, [pathId]);
  useEffect(() => {
    getblogsbyid();
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
        setBlogss(response.data.data);
        console.log(blogss);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getblogsbyid = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:4000/api/getBlogById/${pathId}`,
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

  return (
    <div className="w-full h-fit ">
      {blogs && (
        <div className="w-[70%] mx-auto h-fit py-[2rem]">
          <p className="text-[#004AAD] my-[1rem]">
            Posted On: {blogs.createdAt}
          </p>
          <p className="text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight my-[1rem]">
            {blogs.header}
          </p>
          <img
            src={blogs.image}
            alt="image1"
            className="w-full aspect-auto object-contain my-[2rem]"
          />
          <pre
            className="w-full text-wrap text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.4rem] tracking-tight my-[1rem] first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
          >
            {blogs.body}
          </pre>
        </div>
      )}

      <p className="text-[#004AAD] text-[2.4rem] font-[700] font-Roboto text-center my-[1rem]">
        What to read next
      </p>

      <div className="w-full max-w-[1200px] mx-auto h-fit flex flex-wrap justify-center items-center my-[1rem]">
        {blogss &&
          blogss.map(
            (blog) =>
              blog._id != pathId && (
                <div
                  className="w-[90%] max-w-[320px] mx-auto h-fit py-[1rem] "
                  key={blog._id}
                >
                  <Link to={`/blogDetail/${blog._id}`}>
                    <img
                      src={blog.image}
                      alt="image1"
                      className="w-full h-[240px] object-contain"
                    />
                  </Link>
                  <div className="py-[1rem]">
                    <p className="text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight text-nowrap overflow-hidden text-ellipsis">
                      {blog.header}
                    </p>
                    <p className="text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.2rem] tracking-tight my-[1rem] ">
                      {blog.body.split(" ").slice(0, 25).join(" ") + "..."}
                    </p>
                    <p className="text-[#004AAD]">
                      Posted On: {blog.createdAt}
                    </p>
                  </div>
                </div>
              )
          )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogSingle;
