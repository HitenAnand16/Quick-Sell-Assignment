import React, { useState, useEffect } from "react";
import { GoDotFill, GoDot } from "react-icons/go";
import { GrAdd } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiCircleHalfFill,PiWarningDiamondFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { TbLineDashed } from "react-icons/tb";
import { MdSignalCellularAlt, MdSignalCellularAlt2Bar, MdSignalCellularAlt1Bar } from "react-icons/md";
import "./Status.css";

const Status = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="status">
        <div className="card-box">
          <div className="card-header">
            <div className="left">
              <i>
                <GoDotFill />
              </i>
              <div className="heading">
                {" "}
                Backlogs{" "}
                <span>
                  {data &&
                    data.tickets &&
                    data.tickets.filter((ticket) => ticket.status === "Backlog")
                      .length}
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

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-7")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt2Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-10")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt1Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card-box">
          <div className="card-header">
            <div className="left">
              <i>
                <GoDot />
              </i>
              <div className="heading">
                {" "}
                Todo{" "}
                <span>
                  {data &&
                    data.tickets &&
                    data.tickets.filter((ticket) => ticket.status === "Todo")
                      .length}
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

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-1")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info urgent">
                            <PiWarningDiamondFill />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-6")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt1Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-9")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt2Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card-box">
          <div className="card-header">
            <div className="left">
              <i className="progress-color">
                <PiCircleHalfFill />
              </i>
              <div className="heading">
                {" "}
                In Progress{" "}
                <span>
                  {data &&
                    data.tickets &&
                    data.tickets.filter(
                      (ticket) => ticket.status === "In progress"
                    ).length}
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

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-2")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info high">
                            <MdSignalCellularAlt />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-3")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt1Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-4")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-5")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <TbLineDashed />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              {/* Render your fetched data here */}
              {data && data.tickets && data.tickets.length > 0 && (
                <div>
                  {data.tickets
                    .filter((ticket) => ticket.id === "CAM-8")
                    .map((ticket) => (
                      <div key={ticket.id}>
                        <p className="id">{ticket.id}</p>
                        <h4>{ticket.title}</h4>
                        <div className="last-line">
                          <i className="info">
                            <MdSignalCellularAlt1Bar />
                          </i>
                          <div className="line2">
                            <i>
                              <GoDotFill />
                            </i>
                            <p className="id2">{ticket.tag}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card-box">
          <div className="card-header">
            <div className="left">
              <i className="done-color">
                <AiOutlineCheckCircle />
              </i>
              <div className="heading">
                {" "}
                Done{" "}
                <span>
                  {data &&
                    data.tickets &&
                    data.tickets.filter((ticket) => ticket.status === "Done")
                      .length}
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
        </div>

        <div className="card-box">
          <div className="card-header">
            <div className="left">
              <i>
                <MdCancel />
              </i>
              <div className="heading">
                {" "}
                Cancelled{" "}
                <span>
                  {data &&
                    data.tickets &&
                    data.tickets.filter(
                      (ticket) => ticket.status === "Cancelled"
                    ).length}
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
        </div>
      </div>
    </>
  );
};

export default Status;
