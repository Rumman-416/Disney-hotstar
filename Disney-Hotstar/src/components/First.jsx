import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const First = () => {
    const sliderData = [
        {
            id: 1,
            image: 'https://emerging-europe.com/wp-content/uploads/2020/10/borat-subsequent-moviefilm-wallpaper.jpeg',
            title: 'Borat',
            genre: 'Comedy',
            description: '"Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan" is a mockumentary comedy film starring Sacha Baron Cohen. It humorously explores cultural misunderstandings as Borat interacts with Americans',
        },
        {
            id: 2,
            image: 'https://wallpapers.com/images/hd/sacha-baron-cohen-the-dictator-movie-3tkvglqrrrgeqhpc.jpg',
            title: 'The Dictator',
            genre: 'Comedy',
            description: '"The Dictator," a satirical comedy film, follows the fictional North African dictator General Aladeen. Portrayed by Sacha Baron Cohen, it humorously explores themes of dictatorship, politics, and cultural differences',
        },
        {
            id: 3,
            image: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/216/1640216-h-6b1d26b33811',
            title: '12th fail',
            genre: 'Documentary',
            description: 'The story deals with Sharmas rise to becoming an IPS officer from being a “12th fail". The movie, despite having restricted promotion during its theatrical release, became massively successful at the Box Office, thanks to highly-positive word-of-mouth',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='overflow-hidden' id='home'>
            <Slider {...settings}>
                {sliderData.map((item) => (
                    <div key={item.id} className='flex justify-center items-center p-10'>
                        <div className='flex items-center justify-center'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='h-[40rem] object-cover rounded-md mb-4'
                                style={{ maxWidth: '100%' }}
                            />
                            <div className='text-white text-center  m-5 h-[40rem] w-96 flex flex-col justify-center items-start p-5 gap-5 rounded-xl bg-sky-800'>
                                <h2 className='text-2xl font-bold '>Title : <span className='text-[#000026]'>{item.title}</span></h2>
                                <h2 className='text-xl font-bold '>Genre : <span className='text-[#000026]'>{item.genre}</span></h2>
                                <p className='text-md text-start text-[#000026]'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default First;
