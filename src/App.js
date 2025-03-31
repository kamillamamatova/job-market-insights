import React from 'react';
import './index.css';
import SearchForm from "./components/SearchForm";

function App(){
  // This function will be triggered when the SearchForm is submitted
  const handleSearch = ({ role, location}) => {
    // Log the values to the console
    console.log("Search submitted for:", role, location);
  };

  return(
    <div className = "min-h-screen bg-pink-50 flex justify-center items-center">
      <div className = "p-10">
        <h1 className = "text-3xl font-bold text-pink-400 mb-4">
          Job Market Insights
        </h1>

        <p className = "text-gray-600 text-lg mt-1">
          Find trending roles and salary insights in real time.
        </p>

        {/* Render the SearchForm component and pass the handleSearch function as a prop */}
        <SearchForm onSearch = {handleSearch} />
      </div>
    </div>
  );
}

// This exports the app component so that it can be used in index.js (the app's entry point)
export default App;
