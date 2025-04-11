import React, { useState } from "react";
import "./index.css";
import SearchForm from "./components/SearchForm";
import fetchJobs from "./api/fetchJobs";
import JobList from "./components/JobList";
import Filters from "./components/Filters";

function App(){
  // Tracks the job results that are fetched from the API
  const [jobs, setJobs] = useState([]);
  // Tracks the filter state for remote jobs
  const [remoteOnly, setRemoteOnly] = useState(false);
  // Tracks the selected job type
  const [jobType, setJobType] = useState("");

  // This function will be triggered when the SearchForm is submitted
  const handleSearch = async ({ role, location}) => {
    // Saves remote and job type states
    setRemoteOnly(remoteOnly);
    setJobType(jobType);

    // Calls the fetchJobs function and passes in role and location
    const fetchedJobs = await fetchJobs(role, location);

    // Log the values to the console
    console.log("Search submitted for:", role, location);
    console.log("Fetched jobs:", jobs);
    setJobs(fetchedJobs);
  };

  // Toggles the remoteOnly filter
  const handleToggleRemote = () => setRemoteOnly(!remoteOnly);

  // Filters jobs if "Remote Only" is checked
  const filteredJobs = jobs.filter((job) => {
    // Only includes remote jobs if the filter is turned on
    const isRemoteMatch = !remoteOnly || job.location?.toLowerCase().includes("remote");

    //Only includes jobs that match the selected job type
    const isJobTypeMatch = !jobType || job.job_type?.toLowerCase().includes(jobType);

    // Only returns jobs that match both criterias
    return isRemoteMatch && isJobTypeMatch;
  });

  return(
    // Outer wrapper: full height screen, pink background, centered
    <div className = "min-h-screen bg-pink-50 flex justify-center items-center">
      {/* Inner card container: padding, shadow, rounded corners */}
      <div className = "p-10 bg-white rounded-lg shadow-md w-full max-w-xl">

        {/* App title */}
        <h1 className = "text-3xl font-bold text-pink-400 mb-4">
          Job Market Insights
        </h1>

        {/* Subheading */}
        <p className = "text-gray-600 text-lg mb-6">
          Find trending roles and salary insights in real time.
        </p>

        {/* Renders the SearchForm component and pass the handleSearch function as a prop */}
        <SearchForm onSearch = {handleSearch} />

        {/* Renders the JobList component and passes the fetched jobs as a prop */}
        <JobList job = {filteredJobs} />

        {/* Renders job results if any are available */}
        <div className = "mt-6 space-y-4">
          {/* Loops through each job and displays a job card */}
          {jobs.map((job, index) => (
            <div
              key = {index}
              className = "border rounded p-4 shadow-sm bg-gray-50 hover: bg-gray-100 transition"
            >
              {/* Job title */}
              <h2 className = "text-xl font-semibold text-pink-700">
                {job.job_title}
              </h2>

              {/* Company and location info */}
              <p classname = "text-gray-600">
                {job.employer_name} - {job.job_city}, {job.job_country}
              </p>

              {/* Optional job description snippet */}
              {job.job_description && (
                <p className = "text-sm mt-2 text-gray-700 line-clamp-3">
                  {job.job_description}
                </p>
              )}

              {/* Links to the full job posting */}
              <a
                href = {job.job_apply_link}
                target = "_blank"
                rel = "noopener noreferrer"
                className = "inline-block mt-2 text-pink-600 hover:underline"
              >
                View Job
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// This exports the app component so that it can be used in index.js (the app's entry point)
export default App;
