import React, { useEffect, useState } from "react";
import { faCalendar, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faCog,
  faGripHorizontal,
  faHome,
  faSignOutAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
// import { UserContext } from "../../../App";

const Sidebar = () => {
  
  const user = JSON.parse(localStorage.getItem('user'));

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://paint-shack-server.vercel.app//adminList")
      .then((res) => res.json())
      .then((data) => {
        const checkAdmin = data.find(
          (checkingPerson) => checkingPerson.email === user.email
        );
        setIsAdmin(checkAdmin);
      });
  }, [user.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between  py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-brand text-decoration-none" to="/dashboard">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/bookingList" className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faAccessibleIcon} />{" "}
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link className="text-brand text-decoration-none" to="/addReview">
            <FontAwesomeIcon icon={faAddressBook} /> <span>Add Review</span>
          </Link>
        </li>

        {isAdmin && (
          <div>
            <li>
              <Link
                to="/allBookings"
                className="text-brand text-decoration-none"
              >
                <FontAwesomeIcon icon={faCalendar} /> <span>All Bookings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addService"
                className="text-brand text-decoration-none"
              >
                <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-brand text-decoration-none">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="/manageService"
                className="text-brand text-decoration-none"
              >
                <FontAwesomeIcon icon={faUserPlus} />{" "}
                <span>Manage Service</span>
              </Link>
            </li>
          </div>
        )}
        <li>
          <Link className="text-brand text-decoration-none">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-brand text-decoration-none">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
