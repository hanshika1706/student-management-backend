const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// POST - Create Student
router.post("/", createStudent);

// GET - Get All Students
router.get("/", getStudents);

// PUT - Update Student
router.put("/:id", updateStudent);

// DELETE - Delete Student
router.delete("/:id", deleteStudent);

module.exports = router;