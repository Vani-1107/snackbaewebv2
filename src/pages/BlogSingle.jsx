import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';



// dummy data for blogs
import blogs from '../BlogDummyData';

//components
import Footer from '../component/Footer';

const BlogSingle = () => {
  //fetch last element of the path url
  var location = useLocation().pathname;
  var pathArray = location.split('/');
  var pathId = pathArray[pathArray.length - 1];

  // fetch data from dummy blogs
  const [blog, setBlog] = useState('');
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    for (var i = 0; i < blogs?.length; i++) {
      if (blogs[i]?.id == pathId) {
        setBlog(blogs[i]);
      }
    }
  }, [pathId])

  

  return (
    <div className='w-full h-fit '>
      <div className='w-[70%] mx-auto h-fit py-[2rem]'>
        <p className='text-[#004AAD] my-[1rem]'>Posted On: {blog.postOn}</p>
        <p className='text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight my-[1rem]'>{blog.title}</p>
        <img src={blog.image} alt='image1' className='w-full aspect-auto object-contain my-[2rem]' />
        <pre className='w-full text-wrap text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.4rem] tracking-tight my-[1rem] first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left'>{blog.description}</pre>
      </div>

      <p className='text-[#004AAD] text-[2.4rem] font-[700] font-Roboto text-center my-[1rem]'>What to read next</p>

      <div className='w-full max-w-[1200px] mx-auto h-fit flex flex-wrap justify-center items-center my-[1rem]'>
        {blogs.map((blog) => (
          blog.id != pathId && (
            <div className='w-[90%] max-w-[320px] mx-auto h-fit py-[1rem] ' key={blog.id}>
              <Link
                to={`/blogDetail/${blog.id}`}>
                <img src={blog.image} alt='image1' className='w-full h-[240px] object-contain' />
              </Link>
              <div className='py-[1rem]'>
                <p className='text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight text-nowrap overflow-hidden text-ellipsis'>{blog.title}</p>
                <p className='text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.2rem] tracking-tight my-[1rem] '>{blog.description.split(' ').slice(0, 25).join(' ') + '...'}</p>
                <p className='text-[#004AAD]'>Posted On: {blog.postOn}</p>
              </div>
            </div>
          )
        ))}
      </div>

      <Footer/>
    </div>
  )
}

export default BlogSingle;