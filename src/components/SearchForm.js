import React, { useState } from "react";

// Define a functional component named SearchForm that accepts a prop named onSearch
const SearchForm = ({ onSearch}) => {
    // useState hook to manage the 'role' input field value (job title)
    const [role, setRole] = useState("");

    // useState hook to manage the 'location' input field value (job location)
    const [location, setLocation] = useState("");

    // useState hook to manage the 'remoteOnly' checkbox state
    const [remoteOnly, setRemoteOnly] = useState(false);

    // useState hook to manage the 'job type' from the dropdown
    const [jobType, setJobType] = useState("");

    // This function is called when the form is submitted
    const handleSubmit = (e) => {
        // Prevents the default form submission behavior (page reload)
        e.preventDefault();

        // Calls the onSearch function (passed in from the parent) with the role and location
        onSearch ({ role, location, remoteOnly, jobType }); 
    };

    // Return the JSX to render the form
    return(
        // The form element wraps all input fields and the button
        // It uses Tailwind classes for vertical layout and spacing
        <form onSubmit = {handleSubmit} className = "flex flex-col gap-4 mb-6">

            {/* Input field for job title (role)
                - type = "text": plain text input
                - placeholder: light gray text shown when empty
                - value: bound to the role state variable
                - onChange: updates role when user types
                - className: Tailwind styles for border, padding, and rounding */}

            {/* Job Title Input Field */}
            <input
                type = "text"
                placeholder = "Job title (e.g. Data Scientist)"
                className = "w-full border p-2 rounded" // Tailwind styling
                value = {role} // Controlled input state
                onChange = {(e) => setRole(e.target.value)} // Updates state on change
            />

            {/* Location Input Field */}
            <input
                type = "text"
                placeholder = "Location (e.g. San Francisco)"
                className = "w-full border p-2 rounded"
                value = {location}
                onChange = {(e) => setLocation(e.target.value)}
            />

            {/* Remote Only Checkbox */}
            <label className = "flex items-center gap-2 text-sm">
                <input
                    type = "checkbox"
                    checked = {remoteOnly} // Bind checkbox to remoteOnly state
                    onChange = {(e) => setRemoteOnly(e.target.checked)} // Toggle state
                />
                Remote only
            </label>

            {/* Job Type Dropdown Selector */}
            <label htmlFor = "job-type" className = "sr-only">
                Job Type
            </label>
            <select
                id = "job-type"
                name = "job-type"
                value = {jobType}
                className = "border p-2 rounded"
                onChange = {(e) => setJobType(e.target.value)} // Updates jobType state
            >
                <option value = "">Any Job Type</option>
                <option value = "full-time">Full Time</option>
                <option value = "part-time">Part Time</option>
                <option value = "contract">Contract</option>
                <option value = "internship">Internship</option>
            </select>

            {/* Submit button */}
            <button
                type = "submit" // Triggers form submission
                className = "bg-pink-600 text-white px-4 p-2 rounded hover:bg-pink-500 font-semibold"
            >
                Search Jobs
            </button>
        </form>
    );
};

// Export the SearchForm component so it can be used in other files
export default SearchForm;