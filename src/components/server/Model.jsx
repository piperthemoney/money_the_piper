const Modal = ({ isOpen, onClose, id, link, _id }) => {
  const [updateLink, setUpdateLink] = useState("");
  const updateServerLink = async () => {
    const data = {
      id: id,
      _id: _id,
      vlessServer: updateLink,
    };
    const res = await updatelinkserver(data);
    if (res.status == "success") {
      setUpdateLink("");
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-black rounded-lg shadow-lg p-20 z-10 w-full mx-20 rounded">
        <h2 className="text-white text-2xl font-semibold mb-10">
          Quick Fix the Broken Servers
        </h2>
        <div className="mb-4">
          <label className="text-white font-bold">Old Server</label>
          <div className="flex items-center mt-2 px-5 py-1 border border-gray-600 rounded">
            <button className="text-white">✖</button>
            <input
              type="text"
              className="flex-1 bg-black text-white px-2 py-3 text-right focus:outline-none"
              defaultValue={link}
              readOnly
            />
          </div>
        </div>
        <div className="mb-10">
          <label className="text-white font-bold">New Server</label>
          <div className="flex items-center mt-2 px-5 py-1 border border-gray-600 rounded">
            <button className="text-white">✔</button>
            <input
              type="text"
              className="flex-1 bg-black text-white px-2 py-3 text-right focus:outline-none"
              value={updateLink}
              onChange={(e) => setUpdateLink(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <button
            className="border border-white rounded-lg text-white font-medium rounded px-10 py-3 hover:bg-white hover:text-black"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-primary text-black font-medium rounded-lg px-10 py-3 hover:border hover:text-primary hover:bg-black hover:border-primary"
            onClick={updateServerLink}
          >
            Replace Server
          </button>
        </div>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";
import { useState } from "react";
import updatelinkserver from "../../api/updatelink";

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string,
  link: PropTypes.string,
  _id: PropTypes.string,
};

export default Modal;
