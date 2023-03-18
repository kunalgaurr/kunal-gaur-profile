import React from 'react';
import Text from '../Text/Text';
import './Right.css';

export default function Right() {
  return (
    <div className="right-container">
      <Text
        heading="Intro"
        textOne="I'm a 22-year-old MERN stack developer from Dehradun, India with a passion for solving complex problems through technology. I have expertise in MongoDB, Express, React, and Node.js, and prioritize clean and efficient code. As a quick learner, I enjoy taking on challenges and staying up-to-date with the latest trends. I am a collaborative team player who values communication and committed to creating high-quality web applications for seamless user experiences."
      />
      <Text
        heading="Skills"
        headingOne="Programming"
        textOne="JavaScript, Python"
        headingTwo="Front-end"
        textTwo="HTML, CSS, JavaScript"
        headingThree="Back-end"
        textThree="NodeJs, Express, MongoDB"
        headingFour="Frame-work and Libraries"
        textFive="React, Bootstrap, TailwindCSS, jQuery, GSAP"
      />
      <Text
        heading="Education"
        headingOne="Guru Gobind Singh Indraprastha University"
        textOne="Electronics and Communication Engineering"
        headingTwo="Shri Venkateshwara International School"
        textTwo="High School"
        headingThree="Bal Bharati Public School"
        textThree="Middle School"
      />
      <Text
        heading="Projects"
        headingOne="A social application: Sociogram"
        textOne="A social media platform built using the MERN stack. It uses various packages like Bcrypt, Axios, Redux, etc. The web app has the functionality to post, like,  follow a user, and unfollow a user, and birthday reminders via separate routes."
        headingTwo="Video Streaming Platform: Netflix Clone App"
        textTwo="MERN stack Netflix application clone. Uses JWT and has filtration options for different sorts of entertainment media. The data is fetched from MongoDB."
        headingThree="E-commerce website: Shopkart"
        textThree="An e-commerce website uses JWT, and validators, and has CRUD functionality, payment gateways, and a user profile database. The app was built using the MERN stack."
        headingFour="Personal Portfolio: A react app"
        textFour="An interactive and responsive personal portfolio, it was built using jQuery, GSAP, useState, and useEffect in React, various keyframe animations, and media queries for responsiveness."
        headingFive="Google Chrome extension: Weather Updates"
        textFive="A google chrome extension that uses Reverse Geocoding API to fetch users' locations and populate the current weather and hourly forecast data. The Data is fetched using an API."
      />
    </div>
  );
}
