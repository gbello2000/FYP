import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function PresentationsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchApprovedProjects();
  }, []);

  const fetchApprovedProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/projects/approved');
      setProjects(response.data);
      const calendarEvents = response.data.map(project => ({
        title: project.project_name,
        start: new Date(`${project.preferred_date_of_presenting}T${project.start_time}`),
        end: new Date(`${project.preferred_date_of_presenting}T${project.end_time}`),
      }));
      setEvents(calendarEvents);
    } catch (error) {
      console.error('Error fetching approved projects:', error);
    }
  };

  const handleTimeSelection = async (projectId) => {
    if (!selectedTime) {
      alert('Please select a time.');
      return;
    }

    const startTime = selectedTime;
    const startDateTime = new Date(`1970-01-01T${startTime}:00Z`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000);
    const endTime = endDateTime.toISOString().slice(11, 19);

    try {
      await axios.patch(`http://localhost:8000/api/projects/${projectId}/time`, { start_time: startTime, end_time: endTime });
      fetchApprovedProjects(); // Refresh the list after updating time
    } catch (error) {
      console.error('Error updating project time:', error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Approved Presentations</h2>
        {projects.map((project) => (
          <div key={project.id} className="mb-4 p-4 border rounded">
            <p><strong>Student Name:</strong> {project.student_name}</p>
            <p><strong>Project Name:</strong> {project.project_name}</p>
            <p><strong>Preferred Date:</strong> {project.preferred_date_of_presenting}</p>
            <div className="flex items-center">
              <input
                type="time"
                className="mr-2 p-2 border rounded"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <button
                onClick={() => handleTimeSelection(project.id)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Set Time
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Calendar View</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export default PresentationsPage;
