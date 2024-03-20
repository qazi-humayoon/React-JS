import React, { useState, useEffect } from 'react';

function Contact() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div className='text-white'>
            <div>
                <img className='w-[250px] h-[350px] mx-auto rounded-2xl mt-7' src="https://images.pexels.com/photos/16816516/pexels-photo-16816516/free-photo-of-back-view-of-a-couple-holding-hands-walking-on-a-street-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kashmir" />
            </div> 

            <div className='mt-8 text-center'>
                <h1 className='opacity-90 mb-3'>About</h1>
                <p className='opacity-70 font-sans'>As someone hailing from Baramulla, Kashmir, my love for crafting websites and my dream of becoming a  <br />  software developer are deeply rooted in my  personal experiences  and aspirations. Growing up amidst<br />the breathtaking beauty of the Kashmir valley, I've always been intrigued by the possibilities that <br />technology offers to bridge gaps and connect people from diverse backgrounds.</p>
            </div>

            <div className='text-center mt-9 border bg-blue-300 flex items-center justify-between'>
                <div><h1 className='text-black font-semibold ml-8 font-sans'>© Humayoon Niyaz - 2024</h1></div>

                <div>
                    <a href="https://github.com/qazi-humayoon"><i className="ri-github-line ml-10"></i></a>
                    <a href="https://www.instagram.com/qazi_humayoon/?hl=en"><i className="ri-instagram-line ml-10"></i></a>
                    <a href="https://twitter.com/QHumayoon"><i className="ri-twitter-x-line ml-10"></i></a>
                    <a href="https://www.linkedin.com/in/qazi-humayoon-589b86212/"><i className="ri-linkedin-box-fill ml-8"></i></a>
                </div>
                <div className=" mr-8">
                <p className="text-black font-semibold">Date/Time(IST): {time.toLocaleString()}</p>
            </div>

                {/* <div><h1 className='text-black mr-5 font-semibold font-sans'>Copyright 2023</h1></div> */}
            </div>

            
        </div>
    );
}

export default Contact;
