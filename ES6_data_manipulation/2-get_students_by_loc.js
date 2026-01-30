export default function getStudentsByLocation(students, city){
  return students.filter((student)=>{return student.city === city;});
}

