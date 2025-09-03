// Students enrolled in courses with more than 1 student
db.Enrollments.aggregate([
  { $group: { _id: "$course_id", student_count: { $sum: 1 } } },
  { $match: { student_count: { $gt: 1 } } }
]);
