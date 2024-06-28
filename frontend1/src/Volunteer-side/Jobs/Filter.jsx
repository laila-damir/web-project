import { useState } from "react";
import "./Filter.css";
import { Divider } from 'primereact/divider';

const experience = [
    { min: 0, max: 1 },
    { min: 2, max: 3 },
    { min: 4, max: 5 },
    { min: 5, max: 10 },
];

const Filter = ({
                    setFilteredJobs,
                    handleJobFilter,
                    handleExperienceFilter,
                    searchEvent,
                    sortJobsByPosted,
                    filteredJobs,
                }) => {
    const handleOnChangeSort = (order) => {
        sortJobsByPosted(order);
    };
    const [checkedState, setCheckedState] = useState(
        new Array(experience.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
        handleExperienceFilter(updatedCheckedState);
    };

    return (
        <>
            <div className="filter-page">
                <div className="search-box">
                    <div className="search">
                        <h3>Search Offers</h3>
                        <div className="job-search">
                            <input
                                type="text"
                                className="search-term"
                                placeholder="Search Here"
                                onChange={searchEvent}
                            />
                        </div>
                    </div>
                    <div className="filter">
                        <div className="job-category">
                            <h4>Filter :</h4>
                            <ul className="checkbox">
                                <li>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleOnChangeSort("desc")} // Sort by most recent
                                    />
                                    Most Recent
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleOnChangeSort("asc")} // Sort by least recent
                                    />
                                    Least Recent
                                </li>
                            </ul>

                        </div>
                        <div className="job-category">
                            <h4>Categories :</h4>
                            <ul>
                                <li onClick={handleJobFilter}>Social Services</li>
                                <li onClick={handleJobFilter}>Education and Literacy</li>
                                <li onClick={handleJobFilter}>Environment</li>
                                <li onClick={handleJobFilter}>Health Care</li>
                                <li onClick={handleJobFilter}>Youth Development</li>
                                <li onClick={handleJobFilter}>Other</li>
                            </ul>
                        </div>

                        <div className="job-category">
                            <h4>Experience :</h4>
                            <ul className="checkbox">
                                <li>
                                    <input
                                        name="0-1"
                                        type="checkbox"
                                        checked={checkedState[0]}
                                        onChange={() => handleOnChange(0)}
                                    />
                                    0-1 year
                                </li>
                                <li>
                                    <input
                                        name="2-3"
                                        type="checkbox"
                                        checked={checkedState[1]}
                                        onChange={() => handleOnChange(1)}
                                    />
                                    2-3 year
                                </li>
                                <li>
                                    <input
                                        name="4-5"
                                        type="checkbox"
                                        checked={checkedState[2]}
                                        onChange={() => handleOnChange(2)}
                                    />
                                    4-5 year
                                </li>
                                <li>
                                    <input
                                        name="4-5"
                                        type="checkbox"
                                        checked={checkedState[3]}
                                        onChange={() => handleOnChange(3)}
                                    />
                                    5+ year
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;