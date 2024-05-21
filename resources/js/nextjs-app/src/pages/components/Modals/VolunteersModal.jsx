import React, { useState } from "react";
import axios from "axios";

function VolunteersModal({ isVisible3, onClose3 }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/volunteers", { name, position, date });
      if (response.status === 201) {
        setStatus("Registration successful!");
        setName("");
        setPosition("");
        setDate("");
      }
    } catch (error) {
      setStatus("Error registering volunteer.");
      console.error("Error:", error);
    }
  };

  if (!isVisible3) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10">
      <div className="bg-white p-8 rounded-[15px] w-[90%] max-w-[600px] mt-10">
        <button onClick={onClose3} className="mb-4 bg-red-500 text-white p-2 rounded-[10px]">Close</button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col bg-[#f1f1f1] p-4 rounded-[10px]">
            <label className="mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 rounded-[10px] border border-gray-400"
            />
          </div>
          <div className="flex flex-col bg-[#f1f1f1] p-4 rounded-[10px]">
            <label className="mb-2">Position</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="p-2 rounded-[10px] border border-gray-400"
            >
              <option value="">Select a position</option>
              <option value="taking attendance">Taking Attendance</option>
              <option value="it support">IT Support</option>
              <option value="chairs">Chairs</option>
              <option value="front-desk">Front Desk</option>
            </select>
          </div>
          <div className="flex flex-col bg-[#f1f1f1] p-4 rounded-[10px]">
            <label className="mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="p-2 rounded-[10px] border border-gray-400"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-[10px]">Register</button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </div>
  );
}

export default VolunteersModal;
