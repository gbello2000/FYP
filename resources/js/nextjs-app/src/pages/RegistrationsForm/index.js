import React, { useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";
import { FaRegCheckCircle } from "react-icons/fa";

export default function RegistrationForm() {
  const [studentName, setStudentName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('student_name', studentName);
    formData.append('project_name', projectName);
    formData.append('preferred_date_of_presenting', preferredDate);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setStatus('Project saved successfully');
      } else {
        setStatus('Error saving project');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error saving project');
    }
  };

  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto">
          <h2 className="text-center text-[30px]">Registration Form</h2>
          <form className="p-[30px] flex flex-col gap-[10px]" onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="StudentName">Student Name</label>
              <input
                type="text"
                placeholder="Name"
                name="StudentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div className="inp">
              <label htmlFor="ProjectTitle">Project Title</label>
              <input
                type="text"
                placeholder="Project Name"
                name="ProjectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="inp">
              <label htmlFor="date">Date of presenting</label>
              <input
                type="date"
                placeholder="Preferred Date"
                name="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="text-[#aaaaaa]"
              />
            </div>
            <div className="inp">
              <label htmlFor="images">Image of a Company</label>
              <input
                type="file"
                className="bg-[white] h-[40px] text-[#aaaaaa]"
                placeholder="File"
                name="images"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="inp">
              <label htmlFor="Status">Status</label>
              <div className="w-[100%] flex justify-between h-[60px] rounded-[5px] pl-[10px] items-center bg-[white]">
                <span className="text-[#9d9c9c]">Approved</span>
                <span className="text-[#9d9c9c]">
                  <FaRegCheckCircle className="text-[20px] mr-[18px]" />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-[140px] rounded-[5px] m-auto text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Save
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
