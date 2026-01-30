/*Eslint-disable*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentByCity = students.filter(
    (student) => student.location === city
  );

  const result = studentByCity.map((el) => {
    const grades = newGrades.find(
      (newGrade) => newGrade.studentId === el.id
    );
    const grade = grades ? grades.grade : 'N/A';

    return {
      ...el,
      grade,
    };
  });

  return result;
}
