import './index.css';

function App(){
  // Returns JSX, which describes what should be rendered in the browser
  return(
    // Padding of 2.5rem on all sides
    <div className = "p=10">
      {/* h1 is a heading element
          Tailwind classes:
          - 'text-3xl' = text size
          - 'font-bold' = bold text
          - 'text-blue-600 = text color */}
      <h1 className = "text-3xl font-bold text-blue-600">
        Tailwind CSS is working!
      </h1>
      {/* p is a paragraph element
          Tailwind classes:
          - 'mt-2' = margin-top of 2rem
          - 'text-gray-600 = text color */}
      <p className = "mt-2 text-gray-600">
        You're ready to build your Job Market Insights App.
      </p>
    </div>
  );
}

// This exports the app component so that it can be used in index.js (the app's entry point)
export default App;
