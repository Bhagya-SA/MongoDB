// Only select first_name and course_name
db.Enrollments.aggregate([
  { $lookup: { from: "Students", localField: "student_id", foreignField: "_id", as: "student_info" } },
  { $lookup: { from: "Courses", localField: "course_id", foreignField: "_id", as: "course_info" } },
  { $project: { "student_info.first_name": 1, "course_info.course_name": 1, _id: 0 } }
]);
