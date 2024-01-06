import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SimilarContent = () => {
    const [loading, setLoading] = useState(true);
    const [similar, setsimilar] = useState([]);
    

  useEffect(() => {
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
  }, []);
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
      </>
  );
};

export default SimilarContent;
