import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './styles/index.css'

import Header from './components/Header/Header';
import ProfServises from './page/ProfServises/ProfServises';
import OurServices from './page/OurServices/OurServices';
import Blog from './page/Blog/Blog';
import Review from './page/Review/Review';
import HowWorks from './page/HowWorks/HowWorks';
import Banner from './page/Banner/Banner';
import FAQ from './page/FAQ/FAQ';
import Featured from './page/Featured/Featured';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: '/home_services',
    element: (
      <>
        <Header />
        <ProfServises />
      </>
    )
  }, 
  {
    path: '/home_services/services',
    element: (
      <>
        <OurServices />,
        <Featured />,
        <HowWorks />
      </>
    )
  },
  {
    path: '/home_services/blog',
    element: (
      <>
        <Review />,
        <Blog />,
        <FAQ />
      </>
    )
  },
  {
    path: '/home_services/contact',
    element: (
      <>
        <Banner />,
        <Footer />
      </>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);