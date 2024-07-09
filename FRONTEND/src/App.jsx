//importing all components 

import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import axios from "axios";
import { Toaster } from "react-hot-toast";


const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  //using useEffect hook , run in accordance to isAuthorized i.e when ever it changes useEffect runs 

  useEffect(() => { 
    //fetch the user 
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://job-portal-backend-z1fg.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);//response -> contains an array data from which we get user 
        setIsAuthorized(true);
      }
      //if no user or any error 
       catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser(); //calling the function 
  }, [isAuthorized]);
// * indicates all those path which are not defined than go to NotFound page
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;