import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer/Footer";
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

export default function Registrations() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, [filter]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/projects');
      const filteredProjects = response.data.filter(project => {
        if (filter === 'all') return true;
        return project.status === filter;
      });
      setProjects(filteredProjects);
      setCount(filteredProjects.length);
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
        <div className="lg:w-[50%] sm:w-[80%] md:w-[80%] m-auto ">
          <h2 className="text-center text-[30px] font-bold mb-[20px]">Registrations</h2>
          
          <div className="flex justify-between mb-[20px]">
            <div>
              <label className="mr-[10px]">Filter: </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded px-[10px] py-[5px]"
              >
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
              </select>
            </div>
            <div>
              <span className="font-bold">{count}</span> projects found
            </div>
          </div>

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
                <label className="block text-[#555] font-semibold mb-[5px]">Status</label>
                <div
                  className={`w-[100%] flex justify-between h-[60px] rounded-[5px] pl-[10px] items-center ${project.status === 'approved' ? 'bg-[#28a745] text-[white]' : project.status === 'declined' ? 'bg-[#dc3545] text-[white]' : 'bg-[white] text-[black]'} shadow-inner`}
                >
                  <span>{project.status}</span>
                  {project.status === 'approved' && (
                    <FaRegCheckCircle className="text-[20px] ml-[10px]" />
                  )}
                  {project.status === 'declined' && (
                    <FaRegTimesCircle className="text-[20px] ml-[10px]" />
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
