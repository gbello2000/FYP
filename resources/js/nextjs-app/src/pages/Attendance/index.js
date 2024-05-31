import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";

export default function Attendance() {
  const [attendees, setAttendees] = useState([]);
  const [filter, setFilter] = useState('all');
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetchAttendees();
  }, [filter]);

  const fetchAttendees = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/attendees');
      setAttendees(response.data);

      const uniqueDates = [...new Set(response.data.map(att => att.date_of_attendance))];
      setDates(['all', ...uniqueDates]);
    } catch (error) {
      console.error('Error fetching attendees:', error);
    }
  };

  const deleteAttendee = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/attendees/${id}`);
      fetchAttendees(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting attendee:', error);
    }
  };

  const filteredAttendees = filter === 'all' ? attendees : attendees.filter(att => att.date_of_attendance === filter);

  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto">
          {/* Filter */}
          <div className="flex justify-between items-center p-[10px] mb-[20px]">
            <div className="text-[18px] font-bold">{filteredAttendees.length} Attendees</div>
            <div className="flex gap-[10px] items-center">
              <h3 className="text-[18px]">Filter</h3>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded px-[10px] py-[5px] bg-white"
              >
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date === 'all' ? 'All Dates' : date}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Title */}
          <h2 className="text-center text-[30px] font-bold mb-[20px]">Attendance</h2>
          
          {/* Attendees List */}
          <div className="space-y-[10px]">
            {filteredAttendees.map((attendee) => (
              <div
                key={attendee.id}
                className="p-[20px] border-b flex justify-between items-center bg-white rounded-[10px] shadow hover:bg-gray-100"
              >
                <span className="text-[18px] font-semibold">{attendee.name}</span>
                <span className="text-[18px] text-gray-600">{attendee.date_of_attendance}</span>
                <button
                  onClick={() => deleteAttendee(attendee.id)}
                  className="bg-red-500 text-white px-[15px] py-[8px] rounded-[5px] shadow"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
