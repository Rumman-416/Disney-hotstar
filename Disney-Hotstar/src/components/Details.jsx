import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import Footer from "./Footer"
import BackButton from "./BackButton";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Details = () => {
  const { title } = useParams();
  const [post, setPost] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);  
  const [similar, setsimilar] = useState([]);

  useEffect(() => {
    console.log("Title:", title);
    const apiUrl = `http://localhost:8080/api/item?title=${title}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data);
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
      axios
      .get("http://localhost:8080/api/items")
      .then((response) => {
        const musicalPosts = response.data.filter(
          (post) => post.category === "Musical"
        );
        const adventurePosts = response.data.filter(
          (post) => post.category === "Adventure"
        );
        const horrorPosts = response.data.filter(
          (post) => post.category === "Horror"
        );
        const romancePosts = response.data.filter(
          (post) => post.category === "Romance"
        );
  
        setsimilar([
          ...musicalPosts,
          ...horrorPosts,
          ...romancePosts,
          ...adventurePosts,
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [title]);
  console.log("hello", post);

  if (loading) {
    return <p>Loading...</p>;
  }




const slideLeft = () => {
  var sciFi = document.getElementById("slider-s");
  sciFi.scrollLeft -= 500;
  popular.scrollLeft -= 500;
};

const slideRight = () => {
  var sciFi = document.getElementById("slider-s");

  sciFi.scrollLeft += 500;
  popular.scrollLeft += 500;
};

  return (
    <>
        <BackButton/>
    <div className="flex justify-center items-center flex-col">
      <div className="flex w-9/12 bg-sky-800 bg-opacity-10 m-5 h-[40rem] justify-center items-center gap-10 rounded-xl">
        <img
          src={post.data[0].image}
          className="w-[18rem] h-[24rem] rounded-lg"
        />
        <div className=" w-3/6 p-5 flex flex-col gap-8">
          <h1 className=" text-4xl">{post.data[0].title}</h1>
          <p>{post.data[0].description}</p>
          <button
            className=" w-36 h-10 bg-sky-800 rounded-lg"
            onClick={() => setToggle(!toggle)}
          >
            watch now
          </button>
        </div>
      </div>
      {toggle ? (
        <div className=" h-[30rem] w-9/12 flex flex-col justify-center items-center gap-5 border m-5 rounded-xl border-sky-800">
          <h1 className=" text-xl">You're Watching {post.data[0].title}</h1>
          <div className="flex justify-center items-center gap-5">
            <ReactPlayer url="/video/Inception.mp4" controls width="75%" />
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                src={post.data[0].image}
                className=" h-[18rem] rounded-lg"
              />
              <h1>Title : {post.data[0].title}</h1>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
       <div className="my-5 mx-2 bg-black bg-opacity-50 border border-sky-800 p-2 w-[90%]">
        <h1 className="text-6xl m-5"> Similar Contents</h1>
        <div className="relative flex items-center">
          <AiFillCaretLeft className=" text-4xl" onClick={slideLeft} />
          <div
            id="slider-s"
            className="flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {similar.map((post, index) => (
              <Link
              to={`/details/${post.title}`}
              key={index}
              onClick={() => {
                window.scrollTo(0, 0);
                setToggle(false);
             
              }}
            >
                <div className="m-2 w-[12rem] text-center flex justify-center flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[12rem] h-[18rem] rounded-lg hover:scale-125 hover:cursor-pointer transition-all duration-500"
                  />
                  <h3 className="p-2 whitespace-normal break-words">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <AiFillCaretRight className=" text-4xl" onClick={slideRight} />
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Details;
