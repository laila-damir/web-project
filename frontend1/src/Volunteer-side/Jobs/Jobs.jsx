import "./Jobs.css";
import Filter from "./Filter.jsx";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "../Home/NavBar.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobsData from "../../assets/jobs.json";
import defaultLogo from "../../assets/amazon.png";

const loadJobsData = () => {
    const storedJobs = localStorage.getItem("jobs");
    if (!storedJobs) {
        localStorage.setItem("jobs", JSON.stringify(jobsData));
    }
};

loadJobsData();

const experience = [
    { min: 0, max: 1 },
    { min: 2, max: 3 },
    { min: 4, max: 5 },
    { min: 5, max: 10 },
];

function sortByPostedDate(jobs, order = "asc") {
    return jobs.sort((jobA, jobB) => {
        const postedA = new Date(jobA.posted);
        const postedB = new Date(jobB.posted);
        return order === "asc" ? postedA - postedB : postedB - postedA;
    });
}

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortByPosted, setSortByPosted] = useState("asc");

    useEffect(() => {
        const storedJobs = localStorage.getItem("jobs");
        if (storedJobs) {
            const jobsData = JSON.parse(storedJobs);
            setJobs(jobsData);
            setFilteredJobs(jobsData);
        }
    }, []);

    const sortJobsByPosted = (newOrder) => {
        const sortedJobs = sortByPostedDate(filteredJobs, newOrder);
        setFilteredJobs(sortedJobs);
    };

    const handleJobFilter = (event) => {
        const value = event.target.innerText;
        event.preventDefault();
        setFilteredJobs(jobs.filter((job) => job.role === value));
    };

    const saveClick = (job) => {
        localStorage.setItem("Job", JSON.stringify(job));
    };

    const searchEvent = (event) => {
        const data = event.target.value;
        setSearchTerm(data);
        if (data !== "" || data.length > 2) {
            const filteredData = jobs.filter((item) =>
                Object.values(item).join("").toLowerCase().includes(data.toLowerCase())
            );
            setFilteredJobs(filteredData);
        } else {
            setFilteredJobs(jobs);
        }
    };

    const handleExperienceFilter = (checkedState) => {
        let filters = [];
        checkedState.forEach((item, index) => {
            if (item) {
                const filterResults = jobs.filter(
                    (job) =>
                        job.experience >= experience[index].min &&
                        job.experience <= experience[index].max
                );
                filters = [...filters, ...filterResults];
            }
        });
        setFilteredJobs(filters);
    };

    const resetFilters = () => {
        setFilteredJobs(jobs);
        setSearchTerm("");
    };

    return (
        <>
            <Navbar />
            <div className="jobs-for-you">
                <div className="job-background">
                    <div className="title">
                        <h2>
                            The best way to find yourself is to lose yourself in the service
                            of others
                        </h2>
                    </div>
                </div>

                <div className="job-section">
                    <div className="job-page">
                        {filteredJobs.map(
                            ({id, company, position, location, posted, role}) => (
                                <div className="job-list" key={id}>
                                    <div className="job-card">
                                        <div className="job-name">
                                            <img
                                                src={defaultLogo} // use the default logo for all job listings
                                                alt="logo"
                                                className="job-profile"
                                            />
                                            <div className="job-detail">
                                                <h4>{company}</h4>
                                                <h3>{position}</h3>
                                                <div className="category">
                                                    <p>City: {location}</p>
                                                    <p>Category: {role}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-button">
                                            <div className="job-posting">
                                                <Link to="/apply-jobs">Apply Now</Link>
                                            </div>
                                            <div className="save-button">
                                                <Link
                                                    to="/Jobs"
                                                    onClick={() => {
                                                        saveClick({
                                                            id,
                                                            company,
                                                            position,
                                                            location,
                                                            posted,
                                                        });
                                                    }}
                                                >
                                                    {JSON.parse(localStorage.getItem("Job"))?.id === id ? (
                                                        <AiFillHeart/>
                                                    ) : (
                                                        <AiOutlineHeart/>
                                                    )}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <Filter

                        setFilteredJobs={setFilteredJobs}
                        handleJobFilter={handleJobFilter}
                        handleExperienceFilter={handleExperienceFilter}
                        searchEvent={searchEvent}
                        sortJobsByPosted={sortJobsByPosted}
                        sortByPosted={sortByPosted}
                        filteredJobs={filteredJobs}
                    />


                </div>
            </div>
        </>
    );
};

export default Jobs;
