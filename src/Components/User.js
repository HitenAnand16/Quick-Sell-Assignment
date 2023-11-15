import React, { useState, useEffect } from 'react';
import './User.css';
import { GoDotFill, GoDot } from 'react-icons/go';
import { GrAdd } from 'react-icons/gr';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsFillInfoSquareFill } from 'react-icons/bs';

const User = () => {
  const [userData, setUserData] = useState([]);
  const [organizedTickets, setOrganizedTickets] = useState({});

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
        if (jsonData && jsonData.users && jsonData.tickets) {
          setUserData(jsonData.users);

          const ticketsByUser = organizeTicketsByUser(jsonData.tickets);
          setOrganizedTickets(ticketsByUser);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const organizeTicketsByUser = (tickets) => {
    const organized = {};

    tickets.forEach((ticket) => {
      if (!organized[ticket.userId]) {
        organized[ticket.userId] = [ticket];
      } else {
        organized[ticket.userId].push(ticket);
      }
    });

    return organized;
  };

  const getTasksByUserId = (userId) => {
    return organizedTickets[userId] || [];
  };

  return (
    <>
      <div className="status">
        <div className="card-box2">
          {userData.map((user) => (
            <div key={user.id} className="user-task-container">
              <div className="card-header">
                <div className="left">
                  <i>
                    <GoDotFill />
                  </i>
                  <div className="heading">
                    {user.name}
                    <span>{getTasksByUserId(user.id).length}</span>
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

              <div className="user-card">
                <div className="user-head">
                  {getTasksByUserId(user.id).map((task) => (
                    <div className='card-head-content' key={task.id}>
                      <p className="id">{task.id}</p>
                      <h4>{task.title}</h4>
                      <div className="last-line">
                        <i className="info">
                          <BsFillInfoSquareFill />
                        </i>
                        <div className="line2">
                          <i>
                            <GoDotFill />
                          </i>
                          <p className="id2">{task.tag}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;