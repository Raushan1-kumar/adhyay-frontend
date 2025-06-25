const students = [
  {
    id: 1,
    name: "Rahul Kumar",
    class: "10",
    rollNo: "101",
    subjects: [
      { name: "Mathematics", marks: 85, total: 100 },
      { name: "Science", marks: 78, total: 100 },
      { name: "English", marks: 92, total: 100 },
    ],
    attendance: 87,
    performance: [
      { term: "First Term", percentage: 82 },
      { term: "Mid Term", percentage: 85 },
      { term: "Final Term", percentage: 88 },
    ]
  },
  // Add more sample students...
];

export const verifyStudent = (name, classLevel, rollNo) => {
  return students.find(student => 
    student.name.toLowerCase() === name.toLowerCase() &&
    student.class === classLevel &&
    student.rollNo === rollNo
  );
};

export const getStudentData = (id) => {
  return students.find(student => student.id === id);
};