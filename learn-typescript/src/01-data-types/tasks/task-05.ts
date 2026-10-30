/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  id: number;
  name: string;
  date: string;
  checkIn:string;
  checkOut: string;
  totalHours: number;
  present: boolean;
};

const data1: Attendance = {
  id: 1,
  name: "Andi",
  date: "2026-09-08",
  checkIn: "08:00",
  checkOut: "17:00",
  totalHours: 9,
  present: true,
};

const data2: Attendance = {
  id: 2,
  name:"Siti",
  date: "2026-09-08",
  checkIn: "08:15",
  checkOut: "16:45",
  totalHours: 8,
  present: true,
};

const data3: Attendance= {
  id: 3,
  name: "Budi",
  date: "2026-09-08",
  checkIn: "-",
  checkOut: "-",
  totalHours: 0,
  present: false,
};

console.log(data1);
console.log(data2);
console.log(data3);