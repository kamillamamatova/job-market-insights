import React from "react";

// Filters component takes current filter state and a toggle function
function Filters({ remoteOnly, onToggleRemote}){
    return(
        // Cotainer with spacing and margin
        <div className = "mt-6 flex items-center gap-4">
            {/* Checkbox input to toggle remote-only jobs */}
            <lable className = "flex items-center space-x-2 text-sm text-gray-700">
                <input 
                    type = "checkbox" // Checkbox input
                    checked = {remoteOnly} // Checks if remoteOnly is true
                    onChange = {onToggleRemote} // Calls the toggle function when changed
                />
                {/* Text next to checkbox */}
                <span>Remote Only</span> 
            </lable>
        </div>
    );
}

export default Filters;