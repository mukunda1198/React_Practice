import React, { useState } from "react";
import "./css/blogModa.css";
import BlogModal from "./BlogModal";
const blogList = [
  {
    title: "First Blog Post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nisl vel ante consequat, et consectetur justo posuere. Fusce dictum, magna et sollicitudin bibendum, risus dolor rutrum lacus, nec fringilla enim tortor ac nunc. Integer vestibulum lacus quis metus ultricies, sit amet blandit ipsum tincidunt.",
  },
  {
    title: "Second Blog Post",
    content:
      "Sed lobortis nisl ac metus aliquam, quis dignissim odio sodales. Fusce porttitor sodales ex. Donec nec interdum risus. Suspendisse aliquet augue sed vehicula commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Third Blog Post",
    content:
      "Duis rutrum, elit quis efficitur finibus, felis velit convallis enim, vel accumsan enim odio ut arcu. Praesent nec turpis at risus commodo egestas id nec libero. Vestibulum congue orci nunc, et tincidunt libero tincidunt ut. Phasellus eget eros eget ex faucibus fermentum.",
  },
];

const BlogList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setContent([]);
    setIsOpen(false);
  };
  const opneBlog = (data) => {
    console.log("data====>", data);
    setContent(data);
    openModal();
  };
  const renderBlogTitle = () => {
    return blogList.map((data) => {
      return (
        <div key={data.title} className="title">
          {data.title}
          <button onClick={() => opneBlog(data.content)}>Open Blog</button>
        </div>
      );
    });
  };
  const myPromise = new Promise.all((resolve, reject) => {
    resolve("Hiii")
    // Simulating an asynchronous operation (e.g., fetching data)
    
  });
  const handlePromise = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('Promise resolved successfully!');
    //     }, 2000); // Resolves after 2 seconds
    //   }).then((result) => {
    //     console.log(result); // Logs: Promise resolved successfully!
    //   });
      myPromise.then((result) => {
        console.log("=====", result)
      })
  }

  console.log("myPromise===>",myPromise)
  return (

    <div>
      {renderBlogTitle()}
      <button onClick={handlePromise} >Resolve Promise</button>
      <BlogModal closeModal={closeModal} isOpen={isOpen} content= {content}/>
    
    </div>
  );
};

export default BlogList;
