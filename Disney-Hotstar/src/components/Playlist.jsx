import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import First from './First';
import Nav from "./Nav"
import Footer from './Footer';


const Playlist = () => {
    const [sciFi, setSciFi] = useState([]);
    const [hit, setHit] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/items')
            .then(response => {
                const sciFiPosts = response.data.filter(post => post.category === "Sci-Fi");
                setSciFi(sciFiPosts);

                const dramaPosts = response.data.filter(post => post.category === "Drama");
                const crimePosts = response.data.filter(post => post.category === "Crime");
                const comedyPosts = response.data.filter(post => post.category === "Comedy");

                const actionPosts = response.data.filter(post => post.category === "Action");
                const documentaryPosts = response.data.filter(post => post.category === "Documentary");
                const realityPosts = response.data.filter(post => post.category === "Reality TV");
                const musicalPosts = response.data.filter(post => post.category === "Musical");
                // const adventurePosts = response.data.filter(post => post.category === "Adventure");
                const horrorPosts = response.data.filter(post => post.category === "Horror");
                const romancePosts = response.data.filter(post => post.category === "Romance");

                setHit([...dramaPosts, ...crimePosts, ...comedyPosts]);
                setNewRelease([...actionPosts, ...documentaryPosts, ...realityPosts, ...musicalPosts,  ...horrorPosts, ...romancePosts]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const slideLeft = () => {
        var sciFi = document.getElementById("slider-s");
        var popular = document.getElementById("slider-p");
        var newRelease = document.getElementById("slider-n");
        sciFi.scrollLeft -= 500;
        popular.scrollLeft -= 500;
        newRelease.scrollLeft -= 500;
    };

    const slideRight = () => {
        var sciFi = document.getElementById("slider-s");
        var popular = document.getElementById("slider-p");
        var newRelease = document.getElementById("slider-n");
        sciFi.scrollLeft += 500;
        popular.scrollLeft += 500;
        newRelease.scrollLeft += 500;
    };

    return (
        <>
        <Nav/>
        <First/>
            <div id='playlist' className='my-5 mx-2 bg-black bg-opacity-50 border border-sky-800 p-2 '>
                <h1 className='text-6xl m-5'> Sci-Fi</h1>
                <div className='relative flex items-center'>
                <AiFillCaretLeft className=' text-4xl' onClick={slideLeft}/>
                <div id='slider-s' className='flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {sciFi.map((post, index) => (
                        <Link to={`/details/${post.title}`} key={index}>
                            <div className='m-2 w-[12rem] text-center flex justify-center flex-col'>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className='w-[12rem] h-[18rem] rounded-lg hover:scale-125 hover:cursor-pointer transition-all duration-500'
                                />
                                <h3 className='p-2 whitespace-normal break-words'>{post.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <AiFillCaretRight className=' text-4xl' onClick={slideRight}/>
            </div>
            </div>
            <div className='my-5 mx-2 bg-black bg-opacity-50 border border-sky-800 p-2'>
                <h1 className='text-6xl m-5'>Popular</h1>
                <div className='relative flex items-center'>
                <AiFillCaretLeft className=' text-4xl' onClick={slideLeft}/>
                <div id='slider-p' className='flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {hit.map((post, index) => (
                        <Link to={`/details/${post.title}`} key={index}>
                            <div className='m-2 w-[12rem] text-center flex justify-center flex-col'>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className='w-[12rem] h-[18rem] rounded-lg hover:scale-125 hover:cursor-pointer transition-all duration-500'
                                />
                                <h3 className='p-2'>{post.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <AiFillCaretRight className=' text-4xl' onClick={slideRight}/>
            </div>
            </div>
            <div className='my-5 mx-2 bg-black bg-opacity-50 border border-sky-800 p-2'>
                <h1 className='text-6xl m-5'>New Releases</h1>
                <div className='relative flex items-center'>
                <AiFillCaretLeft className=' text-4xl' onClick={slideLeft}/>
                <div id='slider-n' className='flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {newRelease.map((post, index) => (
                        <Link to={`/details/${post.title}`} key={index}>
                            <div className='m-2 w-[12rem] text-center flex justify-center flex-col'>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className='w-[12rem] h-[18rem] rounded-lg hover:scale-125 hover:cursor-pointer transition-all duration-500'
                                />
                                <h3 className='p-2'>{post.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <AiFillCaretRight className=' text-4xl' onClick={slideRight}/>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Playlist;
