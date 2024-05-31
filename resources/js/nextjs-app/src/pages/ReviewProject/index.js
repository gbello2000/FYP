import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

export default function Registrations() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const approveProject = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/projects/${id}/approve`);
      fetchProjects(); // Refresh the list after approval
    } catch (error) {
      console.error('Error approving project:', error);
    }
  };

  const declineProject = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/projects/${id}/decline`);
      fetchProjects(); // Refresh the list after declining
    } catch (error) {
      console.error('Error declining project:', error);
    }
  };

  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto">
          <h2 className="text-center text-[30px] font-bold mb-[20px]">Review Projects</h2>

          {projects.map((project) => (
            <div key={project.id} className="p-[30px] flex flex-col gap-[10px] border-b bg-[#f9f9f9] rounded-[10px] mb-[20px] shadow-lg">
              <div className="inp mb-[10px]">
                <label className="block text-[#555] font-semibold mb-[5px]">Student Name</label>
                <p className="p-[10px] bg-[white] rounded-[5px] shadow-inner">{project.student_name}</p>
              </div>
              <div className="inp mb-[10px]">
                <label className="block text-[#555] font-semibold mb-[5px]">Project Title</label>
                <p className="p-[10px] bg-[white] rounded-[5px] shadow-inner">{project.project_name}</p>
              </div>
              <div className="inp mb-[10px]">
                <label className="block text-[#555] font-semibold mb-[5px]">Date of Presenting</label>
                <p className="p-[10px] bg-[white] rounded-[5px] shadow-inner">{project.preferred_date_of_presenting}</p>
              </div>
              <div className="inp mb-[10px]">
                <button className="w-[140px] rounded-[5px] text-[white] h-[40px] bg-[#007bff] mt-[10px]">
                  Download Project
                </button>
              </div>
              <div className="inp mb-[10px]">
                <label className="block text-[#555] font-semibold mb-[5px]">Status</label>
                <div className="w-[100%] flex justify-between h-[60px] rounded-[5px] pl-[10px] items-center bg-[white] shadow-inner">
                  <span className="text-[#9d9c9c]">{project.status}</span>
                  {project.status === 'approved' && (
                    <span className="text-[#28a745]">
                      <FaRegCheckCircle className="text-[20px] mr-[18px]" />
                    </span>
                  )}
                  {project.status === 'declined' && (
                    <span className="text-[#dc3545]">
                      <FaRegTimesCircle className="text-[20px] mr-[18px]" />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-[20px] mt-[10px]">
                <button
                  onClick={() => approveProject(project.id)}
                  className="w-[140px] rounded-[5px] text-[white] h-[40px] bg-[#28a745] shadow-lg"
                >
                  Approve
                </button>
                <button
                  onClick={() => declineProject(project.id)}
                  className="w-[140px] rounded-[5px] text-[white] h-[40px] bg-[#dc3545] shadow-lg"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
