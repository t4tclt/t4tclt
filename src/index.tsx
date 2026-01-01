import 'bootstrap/dist/css/bootstrap.css'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Events from './routes/Events'
import Resources from './routes/Resources'
import { ExternalRedirect } from './components/ExternalRedirect'
import Zine from './routes/Zine';
import NotFound from './routes/NotFound';
import Buddy from './routes/Buddy';
import Vanish from './routes/Vanish';
import { NEW_YEARS_2026_DRIVE_LINK, NEWSLETTER_LINKS } from './constants';
import Members from './routes/Members';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/buddy',
    element: <Buddy />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: "/newsletter",
    element: <ExternalRedirect url={NEWSLETTER_LINKS.current.url} />,
  },
  {
    path: "/new-years-2026",
    element: <ExternalRedirect url={NEW_YEARS_2026_DRIVE_LINK} />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/vanish',
    element: <Vanish />,
  },
  {
    path: '/zine-submission',
    element: <ExternalRedirect url='https://forms.gle/Z2LvMfXdCAqYtzSf6' />,
  },
  {
    path: "/zine",
    element: <Zine/>,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
