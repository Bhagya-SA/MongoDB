// Create a view for students with course info
db.createView("StudentCourses", "Enrollments", [
  { $lookup: { from: "Students", localField: "student_id", foreignField: "_id", as: "student_info" } },
  { $lookup: { from: "Courses", localField: "course_id", foreignField: "_id", as: "course_info" } }
]);
