import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SponsorModal from "../components/Modals/SponsorModal";

function Sponsors() {
  const [showModal, setShowModal] = useState(false);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/sponsors');
      setSponsors(response.data);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
    }
  };

  return (
    <div className=" mb-[140px] lg:p-[38px] md:p-[20px] sm:p-[20px] ">
      <div>
        
        {/* Content */}
        <div className="mt-[50px] text-[18px] w-[80%] m-auto">
 
          {/* Sponsors List */}
          <h2 className="mb-[15px] mt-[15px] text-[28px] font-bold">
            Current Sponsors
          </h2>
          <div className="mt-[20px]">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="p-[10px] border-b flex flex-col gap-[10px] hover:bg-gray-200">
                <span className="text-[18px] font-bold">{sponsor.CompanyName}</span>
                <span className="text-[18px]">Level: {sponsor.SponsorshipLevel}</span>
                <span className="text-[18px]">Details: {sponsor.Details}</span>
                <span className="text-[18px]">Image of Company: {sponsor.ImageOfCompany}</span>
                <span className="text-[18px]">Agreement Date: {sponsor.AgreementDate}</span>
                <span className="text-[18px]">Email: {sponsor.Email}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sponsors;
