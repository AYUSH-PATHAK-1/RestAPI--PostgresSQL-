const pool = require("../db");
const quries = require("./quries");

const getstudents = (req, res) => {
  pool.query(quries.getstudents, (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

const getstudentsbyid = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(quries.getstudentsbyid, [id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

const addstudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(quries.checkEmail, [email], (error, results) => {
    if (results.rows.length) {
      return res.send("Email already exists");
    }
  });

  pool.query(quries.addstudent, [name, email, age, dob], (error, results) => {
    if (error) throw error;
    return res.status(201).send("Student Created Successfully !");
  });
};

const deletestudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(quries.getstudentsbyid, [id], (error, results) => {
    const notfound = !results.rows.length;
    if (notfound) {
      return res.status(200).send("Student not found!");
    }
    pool.query(quries.deletestudent, [id], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Student Delete Successfully !");
    });
  });
};

const updatestudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { email, name, age, dob } = req.body;

  pool.query(quries.getstudentsbyid, [id], (error, results) => {
    const nofound = !results.rows.length;
    if (nofound) {
      return res.send("Student Not Found !");
    }
    pool.query(
      quries.updatestudent,
      [email, name, age, dob, id],
      (error, results) => {
        if (error) throw error;
        return res.status(200).send("Student Updated Successfully !");
      }
    );
  });
};

module.exports = {
  getstudents,
  getstudentsbyid,
  addstudent,
  deletestudent,
  updatestudent,
};
