import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="specialization">
        {/* <strong>Specialization: </strong> */}
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Target Amount: </strong>
        {ele?.experience} Rs.
      </p>
      <p className="fees">
        <strong>Raised: </strong> {ele?.fees} Rs.
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.userId?.mobile}
      </p>
      <button
        className="btn appointment-btn"
        onClick={handleModal}
      >
        Raise Fund
      </button>
      {modalOpen && (
        <BookAppointment
          setModalOpen={setModalOpen}
          ele={ele}
        />
      )}
    </div>
  );
};

export default DoctorCard;
