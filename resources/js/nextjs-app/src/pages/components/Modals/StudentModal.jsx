import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

const StudentModal = ({ isVisible4, onClose4 }) => {
  const [studentName, setStudentName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  if (!isVisible4) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('student_name', studentName);
    formData.append('project_name', projectTitle);
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
        onClose4(); // Close the modal on success
      } else {
        setStatus('Error saving project');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error saving project');
    }
  };

  return (
    <div className="top-0 left-0 w-[100%] h-[100vh] blur-0 bg-[#1d1c1c32] fixed backdrop-blur-sm z-[800] flex justify-center items-center">
      <div className="bg-white p-5 rounded relative">
        <button onClick={onClose4} className="absolute top-2 right-2">
          <IoMdClose className="cursor-pointer text-2xl" />
        </button>
        <h2 className="text-center text-[30px]">Registration Form</h2>
        <form className="p-[30px] flex flex-col gap-[10px]" onSubmit={handleSubmit}>
          <div className="inp">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              placeholder="Name"
              name="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div className="inp">
            <label htmlFor="projectTitle">Project Title</label>
            <input
              type="text"
              placeholder="Project Name"
              name="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
          <div className="inp">
            <label htmlFor="date">Preferred date of presenting</label>
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
            <label htmlFor="images">Files</label>
            <input
              type="file"
              className="bg-[white] h-[40px] text-[#aaaaaa]"
              placeholder="text"
              name="File"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Done
            </button>
          </div>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
