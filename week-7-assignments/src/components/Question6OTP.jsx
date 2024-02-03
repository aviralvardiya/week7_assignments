import React, { useRef, useState } from "react";

function Question6OTP() {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      {!otpSent ? (
        <NumberPrompt setOtpSent={setOtpSent} />
      ) : (
        <OTPPrompt setOtpSent={setOtpSent} />
      )}
    </div>
  );
}

function NumberPrompt({ setOtpSent }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1>Login via OTP</h1>
      <input
        type="text"
        placeholder="Enter number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setOtpSent(true)}
      >
        Send OTP
      </button>
    </div>
  );
}

function OTPPrompt({ setOtpSent }) {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");

  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();
  const bu = useRef();

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1>Enter sent OTP</h1>
      <div className="otp-dabba flex gap-2">
        <input
          ref={b1}
          type="text"
          className="bg-gray-50 border w-10 h-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={d1}
          onChange={(e) => {
            setD1(e.target.value);
            if (e.target.value === "") {
              b1.current.focus();
            } else {
              b2.current.focus();
            }
          }}
        />

        <input
          ref={b2}
          type="text"
          className="bg-gray-50 border w-10 h-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={d2}
          onChange={(e) => {
            setD2(e.target.value);
            if (e.target.value === "") {
              b1.current.focus();
            } else {
              b3.current.focus();
            }
          }}
        />

        <input
          ref={b3}
          type="text"
          className="bg-gray-50 border w-10 h-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={d3}
          onChange={(e) => {
            setD3(e.target.value);
            if (e.target.value === "") {
              b2.current.focus();
            } else {
              b4.current.focus();
            }
          }}
        />

        <input
          ref={b4}
          type="text"
          className="bg-gray-50 border w-10 h-10 text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={d4}
          onChange={(e) => {
            setD4(e.target.value);
            if (e.target.value === "") {
              b3.current.focus();
            } else {
              bu.current.focus();
            }
          }}
        />
      </div>

      <button
        ref={bu}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setOtpSent(false)}
      >
        Send OTP
      </button>
      <p>
        {d1} {d2} {d3} {d4}
      </p>
    </div>
  );
}

export default Question6OTP;
