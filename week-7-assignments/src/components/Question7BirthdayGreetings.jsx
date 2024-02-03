import React, { useState } from "react";

function Question7BirthdayGreetings() {

    const [name,setName] = useState()
    const [showcards,setShowCards] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <h1>Enter your name</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
            setShowCards(false)
            setName(e.target.value)}}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={() => setShowCards(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Generate birthday cards
      </button>
      {showcards&&<div className="flex flex-col gap-5">
      <Card1 name={name} />
      <Card2 name={name} />
      <Card3 name={name} />
      </div>}
      
    </div>
  );
}

function Card1({ name }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://i.pinimg.com/236x/a0/43/31/a0433172351ddb93fe4eb81157f15043.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello, {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Wishing you a day filled with joy and laughter. Happy Birthday!
        </p>
      </div>
    </a>
  );
}
function Card2({ name }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://www.shutterstock.com/image-photo/chocolate-birthday-cake-ganache-drip-260nw-2105738375.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello, {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          On your special day, may you be surrounded by love, happiness, and all
          your heart desires. Happy Birthday!
        </p>
      </div>
    </a>
  );
}
function Card3({ name }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello, {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          They say age is just a number, but in your case, it's a really high
          one! Just kidding! Wishing you a fantastic birthday filled with fun
          and laughter!
        </p>
      </div>
    </a>
  );
}

export default Question7BirthdayGreetings;
