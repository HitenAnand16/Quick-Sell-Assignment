import React, { useState } from 'react';
import './Navbar.css';
import { FaChevronDown } from 'react-icons/fa';
import { RiEqualizerLine } from "react-icons/ri";

const Navbar = ({ itemClick }) => {
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);

    const toggleSubNav = () => {
        setIsSubNavVisible(!isSubNavVisible);
    };

    const onItemClick = (item) => {
        itemClick(item);
        console.log(item);
    };

    return (
        <>
            <nav className='main-nav'>
                <button className="dropdown" onClick={toggleSubNav}>
                    <span className='set'><RiEqualizerLine /></span> Display <span className='drop'><FaChevronDown /></span>
                </button>
            </nav>
            {isSubNavVisible && (
                <nav className='sub-nav'>
                    <div className="line1">
                        <div className="elements">
                            <label htmlFor="status">Grouping</label>
                            <select id="status" onChange={(e) => onItemClick(e.target.value)}>
                                <option value="status">Status</option>
                                <option value="priority">Priority</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <br />
                        <div className="elements">
                            <label htmlFor="ordering">Ordering</label>
                            <select id="ordering">
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
