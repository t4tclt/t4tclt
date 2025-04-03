import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Events from './routes/Events';
import Resources from './routes/Resources';
import Profile from './routes/Profile';
import SuggestSkill from './routes/SuggestSkill';
import SkillRequests from './routes/SkillRequests';
import RequestDetails from './routes/RequestDetails';
import Notification from './routes/Notifications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/resources",
    element: <Resources/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/profile/:username",
    element: <Profile/>,
  },
  {
    path: "/suggest-skill",
    element: <SuggestSkill/>,
  },
  {
    path: "/requests",
    element: <SkillRequests/>,
  },
  {
    path: "/requests/:id",
    element: <RequestDetails/>,
  },
  {
    path: "/notifications",
    element: <Notification/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
