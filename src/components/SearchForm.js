import React, { useState } from "react";

// Define a functional component named SearchForm that accepts a prop named onSearch
const SearchForm = ({ onSearch}) => {
    // useState hook to manage the 'role' input field value (job title)
    const [role, setRole] = useState("");

    // useState hook to manage the 'location' input field value (job location)
    const [location, setLocation] = useState("");

    // This function is called when the form is submitted
    const handleSubmit = (e) => {
        // Prevents the default form submission behavior (page reload)
        e.preventDefault();

        // Calls the onSearch function (passed in from the parent) with the role and location
        onSearch ({ role, location });
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
            <input
                type = "text"
                placeholder = "Job title (e.g. Data Scientist)"
                className = "w-full border p-2 rounded"
                value = {role}
                onChange = {(e) => setRole(e.target.value)}
            />
            <input
                type = "text"
                placeholder = "Location (e.g. San Francisco)"
                className = "w-full border p-2 rounded"
                value = {location}
                onChange = {(e) => setLocation(e.target.value)}
            />

            {/* Submit button
                - type = "submit": triggers form submission
                - Tailwind classes for color, padding, hover effect */}
            <button
                type = "submit"
                className = "bg-pink-400 text-white px-4 p-2 rounded hover:bg-pink-500 font-semibold"
            >
                Search Jobs
            </button>
        </form>
    );
};

// Export the SearchForm component so it can be used in other files
export default SearchForm;