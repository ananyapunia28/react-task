import React, { useState } from 'react';
import './AttendanceForm.css';

function AttendanceForm({ onAddStudent }) {
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      onAddStudent(studentName);
      setStudentName('');
    }
  };

  return (
    <div className="attendance-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="submit">Add to Attendance</button>
      </form>
    </div>
  );
}

export default AttendanceForm;
