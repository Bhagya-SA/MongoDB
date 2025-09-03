// Insert students
db.Students.insertMany([
  { first_name: "Alice", last_name: "Johnson", gender: "Female", dob: ISODate("2000-03-15"), email: "alice@example.com", phone: "9876543210" },
  { first_name: "Bob", last_name: "Smith", gender: "Male", dob: ISODate("1999-07-22"), email: "bob@example.com", phone: "9123456780" },
  { first_name: "Charlie", last_name: "Brown", gender: "Male", dob: ISODate("2001-12-05"), email: "charlie@example.com", phone: "9988776655" }
]);

// Insert courses
db.Courses.insertMany([
  { course_name: "Computer Science", course_duration: "4 years" },
  { course_name: "Mathematics", course_duration: "3 years" },
  { course_name: "Physics", course_duration: "3 years" }
]);

// Insert enrollments
db.Enrollments.insertMany([
  { student_id: 1, course_id: 1, enrollment_date: ISODate("2023-07-01"), grade: "A" },
  { student_id: 2, course_id: 2, enrollment_date: ISODate("2023-07-02"), grade: "B" },
  { student_id: 3, course_id: 3, enrollment_date: ISODate("2023-07-03"), grade: "A" }
]);
