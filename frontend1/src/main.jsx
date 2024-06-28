import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from "./Volunteer-side/authentication/Login.jsx";
import Signup from "./Volunteer-side/authentication/Signup.jsx";
import AuthProvider from "./Volunteer-side/authentication/AuthContext.jsx";
import './index.css';
import Home from './Volunteer-side/Home/Home.jsx';
import Jobs from "./Volunteer-side/Jobs/Jobs.jsx";
import Contact from "./Volunteer-side/Contact/Contact.jsx";
import UploadResume from "./Volunteer-side/UploadResume/UploadResume.jsx";

const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/uploadResume",
        element: <UploadResume/>
    },
    {
        path: "/jobs",
        element: <Jobs/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
            <ToastContainer />
        </ChakraProvider>
    </React.StrictMode>
);
