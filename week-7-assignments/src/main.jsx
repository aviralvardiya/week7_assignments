import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Question1Profile from './components/Question1-Profile.jsx';
import Question2BackgroundChanger from './components/Question2BackgroundChanger.jsx';
import Question4ParaGenerator from './components/Question4ParaGenerator.jsx';
import HomePage from './components/HomePage.jsx';
import Question5GitHubApi from './components/Question5GitHubApi.jsx';
import Question6OTP from './components/Question6OTP.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/greet",
    element: <div>Namaste world!</div>,
  },
  {
    path: "/q1",
    element: <Question1Profile/>,
  },
  {
    path: "/q2",
    element: <Question2BackgroundChanger/>,
  },
  {
    path: "/q4",
    element: <Question4ParaGenerator/>,
  },
  {
    path: "/q5",
    element: <Question5GitHubApi/>,
  },
  {
    path: "/q6",
    element: <Question6OTP/>,
  },
  {
    path: "/*",
    element: <div>Galat path broo</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
