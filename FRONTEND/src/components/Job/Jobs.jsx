import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => { // useEfect will run when we reload our project
    try {
      axios
        .get("https://job-portal-backend-z1fg.onrender.com/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data); //load in job state all current jobs available 
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  //if not a authorized user , navigate to login page 
  if (!isAuthorized) {
    navigateTo("/login");
  }
 
  //working on page 
  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.country}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;