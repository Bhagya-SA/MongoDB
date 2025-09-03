// Index on course_id for faster aggregation
db.Enrollments.createIndex({ course_id: 1 });

// Compound index on student_id and course_id
db.Enrollments.createIndex({ student_id: 1, course_id: 1 });
