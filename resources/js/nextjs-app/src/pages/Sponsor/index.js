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
    <div className="mb-[140px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
      <div>
        {/* Content */}
        <div className="mt-[50px] text-[18px] w-[80%] m-auto">
          {/* Sponsors List */}
          <h2 className="mb-[15px] mt-[15px] text-[28px] font-bold text-center">
            Current Sponsors
          </h2>
          <div className="mt-[20px] space-y-[20px]">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="p-[20px] border rounded-[10px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-[22px] font-bold mb-[10px]">{sponsor.CompanyName}</h3>
                <p className="text-[18px]"><strong>Level:</strong> {sponsor.SponsorshipLevel}</p>
                <p className="text-[18px]"><strong>Details:</strong> {sponsor.Details}</p>
                <p className="text-[18px]"><strong>Image of Company:</strong> {sponsor.ImageOfCompany}</p>
                <p className="text-[18px]"><strong>Agreement Date:</strong> {sponsor.AgreementDate}</p>
                <p className="text-[18px]"><strong>Email:</strong> {sponsor.Email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
