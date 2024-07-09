import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Join our job portal today! 🌟 Create your account, connect with top employers, and discover endless career opportunities. 🚀 Take the first step towards your dream job!
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Find your perfect job today! 🔍 Browse our job portal, discover exciting opportunities, and apply for positions that match your skills and passion. 🚀 Start your career journey now! 🌟
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for your dream job or recruit top talent today! 🌟 Whether you're a job seeker or an employer, our portal connects you with the best opportunities and candidates. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;