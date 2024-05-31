import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";

export default function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchVolunteers();
  }, [filter]);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/volunteers');
      setVolunteers(response.data);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  const deleteVolunteer = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/volunteers/${id}`);
      fetchVolunteers(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting volunteer:', error);
    }
  };

  const filteredVolunteers = filter === 'all' ? volunteers : volunteers.filter(volunteer => volunteer.position === filter);

  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto">
          {/* Filter */}
          <div className="flex justify-between items-center p-[10px] mb-[20px]">
            <div className="text-[18px] font-bold">{filteredVolunteers.length} Volunteers</div>
            <div className="flex gap-[10px] items-center">
              <h3 className="text-[18px]">Filter</h3>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded px-[10px] py-[5px] bg-white"
              >
                <option value="all">All Positions</option>
                {[...new Set(volunteers.map(volunteer => volunteer.position))].map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-center text-[30px] font-bold mb-[20px]">Volunteers</h2>
          
          {/* Volunteers List */}
          <div className="space-y-[10px]">
            {filteredVolunteers.map((volunteer) => (
              <div key={volunteer.id} className="p-[20px] border-b flex justify-between items-center bg-white rounded-[10px] shadow hover:bg-gray-100">
                <span className="text-[18px] font-semibold">{volunteer.name}</span>
                <span className="text-[18px] text-gray-600">{volunteer.date}</span>
                <span className="text-[18px] text-gray-600">{volunteer.position}</span>
                <button
                  onClick={() => deleteVolunteer(volunteer.id)}
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
