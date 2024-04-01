import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Details = ({ toggleModal, data }) => {
  const handleClose = () => {
    toggleModal(false);
  };
  return (
    <div
      style={{ textAlign: "justify" }}
      className="bg-bgcolor ml-1 md:ml-0 md:top-[-80px] w-[100%] md:w-[450px] md:h-[400px] absolute p-3 flex flex-col justify-center items-center shadow-2xl rounded-2xl text-white"
    >
      <h2 className="text-[10px] md:text-[16px]">{data}</h2>
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
