import React from "react";

// Displays full job info in a popup modal
const JobModal = ({ job, onCLose}) => {
    // If no job is selected, return null (no modal)
    if(!job) return null;

    return(
        // Overlay background
        <div className = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* Modal container */}
            <div className = "bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative">
                {/* Close button */}
                <button
                    onClick = {onCLose}
                    className = "absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
                >
                    x
                </button>

                {/* Job title */}
                <h2 className = "text-2xl font-bold text-pink-600 mb-2">{job.job_title}</h2>

                {/* Company and location */}
                <p className = "text-gray-700 text-sm mb-4">
                    {job.employer_name} - {job.job_city}, {job.job_country}
                </p>

                {/* Full job description */}
                <div className = "text-sm text-gray-800 whitespace-pre-line max-h-80 overflow-y-auto">
                    {job.job_description || "No description available."}
                </div>

                {/* Apply button */}
                <a
                    href = {job.job_apply_link}
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                    Apply Now
                </a>
            </div>
        </div>
    );
};

// Exports so App.js can use it
export default JobModal;