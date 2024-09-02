const getstudents = "SELECT * FROM students";
const getstudentsbyid = "SELECT * FROM students WHERE id=$1";
const addstudent =
  "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
const checkEmail = "SELECT s FROM students s WHERE s.email=$1";
const deletestudent = "DELETE FROM students WHERE id=$1";
const updatestudent =
  "UPDATE students SET email = $1, name = $2, age = $3, dob = $4 WHERE id = $5";
module.exports = {
  getstudents,
  getstudentsbyid,
  addstudent,
  checkEmail,
  deletestudent,
  updatestudent,
};
