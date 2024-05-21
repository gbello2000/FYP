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
          <div className="flex justify-between items-center p-[10px]">
            <div>{filteredVolunteers.length}</div>
            <div className="flex gap-[10px] items-center">
              <h3>Filter</h3>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-[#ffffff] p-[10px]"
              >
                <option value="all">All Positions</option>
                {volunteers.map((volunteer, index) => (
                  <option key={index} value={volunteer.position}>
                    {volunteer.position}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-center text-[30px]">Volunteers</h2>
          
          {/* Volunteers List */}
          <div>
            {filteredVolunteers.map((volunteer) => (
              <div key={volunteer.id} className="p-[10px] border-b flex justify-between items-center hover:bg-gray-200">
                <span className="text-[18px]">{volunteer.name}</span>
                <span className="text-[18px]">{volunteer.date}</span>
                <span className="text-[18px]">{volunteer.position}</span>
                <button
                  onClick={() => deleteVolunteer(volunteer.id)}
                  className="bg-red-500 text-white p-2 rounded-[10px]"
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
