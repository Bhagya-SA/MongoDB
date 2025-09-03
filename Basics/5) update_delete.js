// Update a student's email
db.Students.updateOne(
  { first_name: "Alice" },
  { $set: { email: "alice.johnson@example.com" } }
);

// Update grade
db.Enrollments.updateOne(
  { student_id: 2, course_id: 2 },
  { $set: { grade: "A+" } }
);

// Delete a student
db.Students.deleteOne({ first_name: "Charlie" });

// Delete an enrollment
db.Enrollments.deleteOne({ student_id: 3, course_id: 3 });
