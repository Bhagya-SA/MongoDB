// Lookup student info with course details
db.Enrollments.aggregate([
  { $lookup: {
      from: "Students",
      localField: "student_id",
      foreignField: "_id",
      as: "student_info"
    }
  },
  { $lookup: {
      from: "Courses",
      localField: "course_id",
      foreignField: "_id",
      as: "course_info"
    }
  }
]);
