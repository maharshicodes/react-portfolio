import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About   
          </p>
        </div>

        <p className="text-xl mt-20"> 
        I am a software professional with over 1.2 years of experience, 
        specializing in ReactJS. My passion lies in developing and styling web applications using this technology.
         I find it exciting to create visually appealing and highly interactive user interfaces that enhance the user experience. 
         Through my work, I strive to constantly improve my skills and stay up-to-date with the latest trends and best practices in the field
        </p>

        <br />

        <p className="text-xl">
          I have created a Messenger application that utilizes React, Firebase, and Material-UI. The application is deployed on FirebaseHosting and uses serverless cloud functions to process
         each message sent. Real-time messaging functionality 
         is achieved through the use of Firebase's Firestore real-time database
        </p>
        <br />
        <p className="text-xl">
        I have built a Todo List application using React, primarily utilizing React hooks such as useEffect, useState, and useRef. 
          The application allows users to add events, remove events, edit existing events, and mark events as complete or cross them out.
         is achieved through the use of Firebase's Firestore real-time database
        </p>
      </div>
    </div>
  );
};

export default About;
