import React from 'react';
import './StudentList.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentList({ students, onMarkAttendance, presentCount, absentCount }) {
  const notify = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleMarkAttendance = (index, isPresent) => {
    onMarkAttendance(index);
    const studentName = students[index].name;
    const status = isPresent ? 'present' : 'absent';
    notify(`${studentName} is ${status}`);
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <div className="attendance-summary">
        <p>Total Present: {presentCount}</p>
        <p>Total Absent: {absentCount}</p>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span className={student.present ? 'present' : 'absent'}>{student.name}</span>
            <div className="buttons">
              <button
                className="present-button"
                onClick={() => handleMarkAttendance(index, true)}
                disabled={student.present}
              >
                Present
              </button>
              <button
                className="absent-button"
                onClick={() => handleMarkAttendance(index, false)}
                disabled={!student.present}
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
