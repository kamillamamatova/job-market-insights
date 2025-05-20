// Defines an async function that fetches job listings based on filters
const fetchJobs = async (role, location, remoteOnly, jobType) => {
    // Query parameters from user input
    const params = new URLSearchParams({
        query: '${role} in ${location}', // Combines role and location
        page: "1", // Page number
        num_pages: "1", // Number of pages to fetch
        location,
        ...(remoteOnly && { remote_only: "true" }), // Adds remote_only parameter if remoteOnly is true
        ...(jobType && { job_type: jobType}), // Adds job_type parameter if jobType is set
    });
    
    // Full API URL with query parameters based on user input
    const url = `https://jsearch.p.rapidapi.com/search?${params.toString()}`;

    // Sets up the options for the fetch request, including headers
    const options = {
        method: 'GET', // GET request to retrieve data
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            // Which API is being accessed
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
    };

    // Try to send the request and process the response
    try{
        // Waits for a response from the API
        const response = await fetch(url, options);

        // Convert the response to JSON format
        const result = await response.json();

        // Return the list of jobs from the "data" field
        return result.data || [];
    }
    catch (error){
        // Logs any errors that happen during the fetch
        console.error("API fetch failed:", error);

        // Returns an empty array if there was an error
        return [];
    }
};

// Exports this function so other files can import and use it
export default fetchJobs;