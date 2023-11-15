import React, { useState, useEffect } from 'react';
import './Priority.css';
import { GoDotFill, GoDot } from "react-icons/go";
import { GrAdd } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { TbLineDashed } from "react-icons/tb";
import { PiWarningDiamondFill } from "react-icons/pi";
import { MdSignalCellularAlt, MdSignalCellularAlt2Bar, MdSignalCellularAlt1Bar } from "react-icons/md";

const Priority = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.quicksell.co/v1/internal/frontend-assignment'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        if (jsonData && jsonData.tickets) {
          setTickets(jsonData.tickets);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterByPriority = (priority) => {
    // Filter tickets based on the priority
    return tickets.filter((ticket) => ticket.priority === priority);
  };

  // Fetch tickets with priority 3 as an example
  const priorityFourTickets = filterByPriority(4);
  const priorityThreeTickets = filterByPriority(3);
  const priorityTwoTickets = filterByPriority(2);
  const priorityOneTickets = filterByPriority(1);
  const priorityNoTickets = filterByPriority(0);

  return (
    <>
      <div className="priority-card">
        <div className="priority-container">
          <div className="priority-header">
            <div className="left">
              <i>
                <TbLineDashed />
              </i>
              <div className="heading">
                {" "}
                No Priority{" "}
                <span>
                  {priorityNoTickets.length}
                </span>
              </div>
            </div>
            <div className="right">
              <i>
                <GrAdd />
              </i>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </div>
          </div>

          <div className="priority-card-content">
            {priorityNoTickets.map((ticket) => (
              <div key={ticket.id}>
                <div className="line01">
                  <p className='id'>{ticket.id}</p>
                  <i className='m1'><FaUserCircle /></i>
                </div>
                <h4>{ticket.title}</h4>
                <div className="line02">
                  <i>
                    <GoDotFill />
                  </i>
                  <p className="id2">{ticket.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="priority-container">
          <div className="priority-header">
            <div className="left">
              <i>
                <PiWarningDiamondFill />
              </i>
              <div className="heading">
                {" "}
                Urgent{" "}
                <span>
                  {priorityFourTickets.length}
                </span>
              </div>
            </div>
            <div className="right">
              <i>
                <GrAdd />
              </i>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </div>
          </div>

          <div className="priority-card-content">
            {priorityFourTickets.map((ticket) => (
              <div key={ticket.id}>
                <div className="line01">
                  <p className='id'>{ticket.id}</p>
                  <i className='m2'><FaUserCircle /></i>
                </div>
                <h4>{ticket.title}</h4>
                <div className="line02">
                  <i>
                    <GoDotFill />
                  </i>
                  <p className="id2">{ticket.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="priority-container">
          <div className="priority-header">
            <div className="left">
              <i>
                <MdSignalCellularAlt />
              </i>
              <div className="heading">
                {" "}
                High{" "}
                <span>
                  {priorityThreeTickets.length}
                </span>
              </div>
            </div>
            <div className="right">
              <i>
                <GrAdd />
              </i>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </div>
          </div>

          <div>
            {priorityThreeTickets.map((ticket) => (
              <div className="priority-card-content" key={ticket.id}>
                <div className="line01">
                  <p className='id'>{ticket.id}</p>
                  <i className='m3'><FaUserCircle /></i>
                </div>
                <h4>{ticket.title}</h4>
                <div className="line02">
                  <i>
                    <GoDotFill />
                  </i>
                  <p className="id2">{ticket.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="priority-container">
          <div className="priority-header">
            <div className="left">
              <i>
                <MdSignalCellularAlt2Bar />
              </i>
              <div className="heading">
                {" "}
                Medium{" "}
                <span>
                  {priorityTwoTickets.length}
                </span>
              </div>
            </div>
            <div className="right">
              <i>
                <GrAdd />
              </i>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </div>
          </div>

          <div>
            {priorityTwoTickets.map((ticket) => (
              <div className="priority-card-content" key={ticket.id}>
                <div className="line01">
                  <p className='id'>{ticket.id}</p>
                  <i className='m1'><FaUserCircle /></i>
                </div>
                <h4>{ticket.title}</h4>
                <div className="line02">
                  <i>
                    <GoDotFill />
                  </i>
                  <p className="id2">{ticket.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="priority-container">
          <div className="priority-header">
            <div className="left">
              <i>
                <MdSignalCellularAlt1Bar />
              </i>
              <div className="heading">
                {" "}
                Low{" "}
                <span>
                  {priorityOneTickets.length}
                </span>
              </div>
            </div>
            <div className="right">
              <i>
                <GrAdd />
              </i>
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </div>
          </div>

          <div>
            {priorityOneTickets.map((ticket) => (
              <div className="priority-card-content" key={ticket.id}>
                <div className="line01">
                  <p className='id'>{ticket.id}</p>
                  <i className='m4'><FaUserCircle /></i>
                </div>
                <h4>{ticket.title}</h4>
                <div className="line02">
                  <i>
                    <GoDotFill />
                  </i>
                  <p className="id2">{ticket.tag}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Priority;
