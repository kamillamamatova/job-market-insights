// JSX and component features
import React from "react";

function JobList({jobs}){
    return(
        // Outer wrapper with vertical spacing between job items
        <div className = "mt-8 space-y-4">
            {
                // Loops through each job and displays a job card
                jobs.map((job, index) => (
                    // Each item needs a unique key for React to track changes
                    <div key = {index} className = "p-4 border rounded shadow-sm bg-white">
                        {/* Displays the job title in bold and larger text */}
                        <h2 className = "text-xl font-bold text-pink-600">
                            {job.title}
                        </h2>

                    {/* Displays the company name in a smaller gray font */}
                    <p className = "text-gray-700"> {job.company_name} </p>

                    {/* Displays the job location in italic gray text */}
                    <p className = "text-gray-500 italic"> {job.location} </p>

                    {/* Spacing and a button to apply */}
                    <div className = "mt-2">
                        {/* Button opens the job link in a new tab */}
                        <a
                            href = {job.url} // Job URL from the API data
                            target = "_blank" // Opens in a new tab
                            ref = "noopener noreferrer" // Security measure
                            className = "text-white bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded"
                        > 
                            Apply
                        </a>
                    </div>
                    </div>
                ))
            }
    </div>
    );
}

// Exports the JobList component so it can be used in other files
export default JobList;