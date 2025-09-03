// Find all students
db.Students.find();

// Find specific fields
db.Students.find({}, { first_name: 1, last_name: 1, _id: 0 });

// Filter by condition
db.Students.find({ gender: "Male" });

// Find students enrolled in Computer Science
db.Enrollments.aggregate([
  { $lookup: {
      from: "Courses",
      localField: "course_id",
      foreignField: "_id",
      as: "course_info"
    }
  },
  { $match: { "course_info.course_name": "Computer Science" } }
]);
