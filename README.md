# Job Market Insights

Job Market Insights is a responsive web application built with React and Tailwind CSS that allows users to search for job listings in real-time. It fetches data from the JSearch API to provide up-to-date information, allowing users to filter by role, location, job type, and remote work options.

## Features

-   **Real-Time Job Search**: Instantly search for job postings by role and location.
-   **Advanced Filtering**: Narrow down results by job type (Full-Time, Part-Time, Contract, Internship) and a dedicated "Remote only" checkbox.
-   **Interactive UI**: A clean, mobile-first interface for a seamless user experience.
-   **Detailed Job Modal**: Click on any job in the list to view a detailed description, company information, and a direct link to the application page.
-   **Dynamic Content Loading**: Fetches and displays job data asynchronously without page reloads.

### Project Overview (The C.I.R.C.L.E. Framework)

| C.I.R.C.L.E.      | Description                                                                                                                                                                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **(C)hallenge** | Job seekers often struggle to find relevant, up-to-date job listings across various platforms. The process is fragmented and time-consuming, making it difficult to efficiently track and apply for opportunities.                                                                                                                    |
| **(I)nsight** | A centralized, real-time platform that aggregates job listings from a comprehensive API and provides powerful, easy-to-use filters can dramatically streamline the job search process, saving users time and effort.                                                                                                                   |
| **(R)ealization** | I developed a single-page application (SPA) using React to create a fast and interactive user experience. The application fetches data from the JSearch API using Axios. State, including search queries, filters, and API results, is managed efficiently within React components using `useState` and other hooks.                     |
| **(C)ore Features** | <ul><li>**Dynamic Job Search**: Search for jobs by title and location.</li><li>**Advanced Filtering**: Filter results by job type (Full-Time, Part-Time, etc.) and a dedicated "Remote only" option.</li><li>**Detailed Modal View**: Click any job to see a full description and apply link in a modal, without losing search context.</li></ul> |
| **(L)earning & Tech** | <ul><li>**Tech Stack**: React, JavaScript (ES6+), Axios, Tailwind CSS, HTML5, RapidAPI.</li><li>**Key Skills**: This project demonstrates my ability in API integration, state management with React Hooks, component-based architecture, and building responsive, modern user interfaces with a utility-first CSS framework.</li></ul> |
| **(E)nhancements** | Future plans include adding user accounts to save job searches, implementing a system to track application statuses, and integrating data visualization to show salary trends and market demand for specific roles.                                                                                                                  |

---

## Technologies Used

-   **Frontend**: React, Tailwind CSS
-   **API**: [JSearch API](https://rapidapi.com/jsearch/api/jsearch) on RapidAPI
-   **HTTP Client**: [Axios](https://axios-http.com/) for making API requests
-   **Build Tool**: Create React App

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/en/) (v14.0.0 or later)
-   [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation & Configuration

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/kamillamamatova/job-market-insights.git](https://github.com/kamillamamatova/job-market-insights.git)
    cd job-market-insights
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    This project requires API credentials to fetch data from the JSearch API.

    -   Create a `.env` file in the root of your project:
        ```sh
        touch .env
        ```
    -   Sign up on [RapidAPI](https://rapidapi.com/jsearch/api/jsearch) and subscribe to the JSearch API to get your API key.
    -   Add your credentials to the `.env` file:
        ```plaintext
        REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
        REACT_APP_RAPIDAPI_HOST=jsearch.p.rapidapi.com
        ```

## Available Scripts

In the project directory, you can run the following commands:

| Command         | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| `npm start`     | Runs the app in development mode at [http://localhost:3000](http://localhost:3000).       |
| `npm test`      | Launches the test runner in interactive watch mode.                                      |
| `npm run build` | Builds the app for production to the `build` folder.                                     |
| `npm run eject` | **(One-way operation)** Removes the single build dependency and exposes the configuration. |

## Project Structure

Here is an overview of the key files and directories in the project:

```
job-market-insights/
├── public/
│   └── index.html      # The HTML template
├── src/
│   ├── api/
│   │   └── fetchJobs.js  # API call logic to fetch jobs
│   ├── components/
│   │   ├── SearchForm.js # The main search form component
│   │   ├── JobList.js    # Renders the list of jobs
│   │   ├── JobModal.js   # Modal for detailed job view
│   │   └── Filters.js    # Component for filtering options
│   ├── App.js            # Main application component
│   ├── index.css         # Tailwind CSS directives
│   └── index.js          # Entry point of the React application
├── .env                  # Environment variables (API keys)
├── package.json          # Project dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Created and maintained by Kamilla Mamatova
If you found this helpful, feel free to star the repo and share!
