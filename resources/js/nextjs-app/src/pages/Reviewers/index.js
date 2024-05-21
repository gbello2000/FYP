import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";


export default function Reviewers() {
  const [reviewers, setReviewers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchReviewers();
  }, [filter]);

  const fetchReviewers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/reviewers');
      setReviewers(response.data);
    } catch (error) {
      console.error('Error fetching reviewers:', error);
    }
  };

  const deleteReviewer = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/reviewers/${id}`);
      fetchReviewers(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting reviewer:', error);
    }
  };

  const filteredReviewers = filter === 'all' ? reviewers : reviewers.filter(reviewer => reviewer.assign === filter);

  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto">

          {/* Title */}
          <h2 className="text-center text-[30px]">Reviewers</h2>
          
          {/* Filter */}
          <div className="flex justify-between p-[10px] items-center">
            <div>{filteredReviewers.length}</div>
          </div>
          
          
          
          {/* Reviewers List */}
          <div>
            {filteredReviewers.map((reviewer) => (
              <div key={reviewer.id} className="p-[10px] border-b flex justify-between items-center hover:bg-gray-200">
                <span className="text-[18px]">{reviewer.name}</span>
                <span className="text-[18px]">{reviewer.bio}</span>
                <span className="text-[18px]">{reviewer.email}</span>
                <span className="text-[18px]">{reviewer.assign}</span>
                <button
                  onClick={() => deleteReviewer(reviewer.id)}
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
