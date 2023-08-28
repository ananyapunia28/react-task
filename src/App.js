import React, { useState } from 'react';
import Header from './components/Header';
import AttendanceForm from './components/AttendanceForm';
import StudentList from './components/StudentList';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const initialStudents = [
    { name: 'Ananya', present: false },
    { name: 'Anshika', present: false },
    { name: 'Arjit', present: false },
  ];

  const [students, setStudents] = useState(initialStudents);

  const addStudent = (studentName) => {
    setStudents([...students, { name: studentName, present: false }]);
  };

  const markAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  const presentCount = students.filter((student) => student.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="App">
      <Header />
      <AttendanceForm onAddStudent={addStudent} />
      <StudentList
        students={students}
        onMarkAttendance={markAttendance}
        presentCount={presentCount}
        absentCount={absentCount}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
