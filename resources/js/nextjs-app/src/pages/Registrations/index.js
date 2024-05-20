import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer/Footer';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Registrations() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all projects when the component mounts
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

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/projects/${id}`);
      fetchProjects(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto ">
          <h2 className="text-center text-[30px]">Registrations</h2>

          {projects.map((project) => (
            <div key={project.id} className="p-[30px] flex flex-col gap-[10px] border-b">
              <div className="inp">
                <label>Student Name</label>
                <p>{project.student_name}</p>
              </div>
              <div className="inp">
                <label>Project Title</label>
                <p>{project.project_name}</p>
              </div>
              <div className="inp">
                <label>Date of presenting</label>
                <p>{project.preferred_date_of_presenting}</p>
              </div>
              <div className="inp">
                <label>Status</label>
                <div className="w-[100%] flex justify-between h-[60px] rounded-[5px] pl-[10px] items-center bg-[white]">
                  <span className="text-[#9d9c9c]">{project.status}</span>
                  <span className="text-[#9d9c9c]">
                    <FaRegCheckCircle className="text-[20px] mr-[18px]" />
                  </span>
                </div>
              </div>
              <div className="flex gap-[20px] mt-[10px]">
                <button
                  onClick={() => approveProject(project.id)}
                  className="w-[140px] rounded-[5px] text-[white] h-[40px] bg-[#28a745]"
                >
                  Approve
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="w-[140px] rounded-[5px] text-[white] h-[40px] bg-[#dc3545]"
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
