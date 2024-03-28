import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Details = ({ toggleModal, data }) => {
  const handleClose = () => {
    toggleModal(false);
  };
  return (
    <div
      style={{ textAlign: "justify", top: "-70px" }}
      className="bg-bgcolor w-[450px] h-[400px] absolute p-3 flex flex-col justify-center items-center shadow-2xl rounded-2xl text-white"
      data-aos="zoom-in"
    >
      <h2 className="text-[16px]">{data}</h2>
      <button
        onClick={handleClose}
        className="text-red-600 rounded-2xl text-3xl hover:bg-red-700 hover:text-white"
      >
        <IoIosCloseCircleOutline />
      </button>
    </div>
  );
};

export default Details;
