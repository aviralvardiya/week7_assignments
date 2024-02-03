import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-9">Welcome to the Week7 assignment home page</h1>
      <div className="flex flex-col gap-5 text-center">
        <Link to={"/q1"}>Click here to go to Question 1</Link>
        <Link to={"/q2"}>Click here to go to Question 2</Link>
        <p>Question 3 does not use react so it's not mentioned here</p>
        <Link to={"/q4"}>Click here to go to Question 4</Link>
        <Link to={"/q5"}>Click here to go to Question 5</Link>
        <Link to={"/q6"}>Click here to go to Question 6</Link>
        <Link to={"/q7"}>Click here to go to Question 7</Link>
      </div>
    </div>
  );
}

export default HomePage;
