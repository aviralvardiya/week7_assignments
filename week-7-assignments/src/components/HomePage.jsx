import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-9">Welcome to the Week7 assignment home page</h1>
      <div className="flex flex-col gap-5">
        <Link to={"/q1"}>Click here to go to Question 1</Link>
        <Link to={"/q2"}>Click here to go to Question 2</Link>
        <Link to={"/q4"}>Click here to go to Question 4</Link>
        <Link to={"/q5"}>Click here to go to Question 5</Link>
      </div>
    </div>
  );
}

export default HomePage;
