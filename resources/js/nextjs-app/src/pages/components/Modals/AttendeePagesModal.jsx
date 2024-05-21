import React, { useState } from "react";
import axios from "axios";

function AttendeePagesModal({ isVisible1, onClose1 }) {
  const [name, setName] = useState("");
  const [dateOfAttendance, setDateOfAttendance] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/attendees", { name, date_of_attendance: dateOfAttendance });
      if (response.status === 201) {
        setStatus("Registration successful!");
        setName("");
        setDateOfAttendance("");
      }
    } catch (error) {
      setStatus("Error registering attendee.");
      console.error("Error:", error);
    }
  };

  if (!isVisible1) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-[15px]">
        <button onClick={onClose1} className="mb-4 bg-red-500 text-white p-2 rounded-[10px]">Close</button>
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
            <label className="mb-2">Date of Attendance</label>
            <input
              type="date"
              value={dateOfAttendance}
              onChange={(e) => setDateOfAttendance(e.target.value)}
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

export default AttendeePagesModal;
