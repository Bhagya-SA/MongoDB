// Count students per course
db.Enrollments.aggregate([
  { $group: { _id: "$course_id", total_students: { $sum: 1 } } }
]);
