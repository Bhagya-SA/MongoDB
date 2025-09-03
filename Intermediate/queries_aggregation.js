// Count students by gender
db.Students.aggregate([
  { $group: { _id: "$gender", total: { $sum: 1 } } }
]);

// Average grade (numeric mapping A=4, B=3)
db.Enrollments.aggregate([
  { $group: { _id: "$course_id", avg_grade: { $avg: "$grade" } } }
]);
