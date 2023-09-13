import React, { useEffect, useState } from "react";
import Card from "./Card";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  }, []);

  return (
    <>
      <div className="main"> Blogs : {blogs.length}</div>
      <div className="grid grid-cols-1 gap-5">
        {blogs.map((blog) => {
          return <Card key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
