// JSX and component features
import React from "react";

// Recieves the job list and a function to call when a job is clicked
function JobList({ jobs, onSelect }){
    // If jobs is undefined or not an array, return null
    if(!Array.isArray(jobs)) return null;

    return(
        // Outer wrapper with vertical spacing between job items
        <div className = "mt-6 space-y-4">
            {
                // Loops through each job and displays a job card
                jobs.map((job, index) => (
                    // Each item needs a unique key for React to track changes
                    <div 
                    key = {index} 
                    onClick = {() => onSelect(job)} // When clicked, calls onSelect with that job
                    className = "p-4 border rounded shadow-sm bg-white hover:bg-gray-50 cursor-pointer transition"
                    >
                        {/* Displays the job title in bold and larger text */}
                        <h2 className = "text-xl font-bold text-pink-600">
                            {job.title}
                        </h2>

                    {/* Displays the company name in a smaller gray font */}
                    <p className = "text-gray-700"> {job.company_name} </p>

                    {/* Displays the job location in italic gray text */}
                    <p className = "text-gray-500 italic"> {job.location} </p>
                    </div>
                ))
            }
    </div>
    );
}

// Exports the JobList component so it can be used in other files
export default JobList;