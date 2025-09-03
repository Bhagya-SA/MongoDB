const session = db.getMongo().startSession();

session.startTransaction();

try {
  db.Students.updateOne({ first_name: "Alice" }, { $set: { phone: "9999999999" } }, { session });
  db.Enrollments.updateOne({ student_id: 2, course_id: 2 }, { $set: { grade: "A+" } }, { session });

  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
}
session.endSession();
