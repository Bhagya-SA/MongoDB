// Explain query execution
db.Students.find({ last_name: "Smith" }).explain("executionStats");

// Index optimization
db.Students.createIndex({ last_name: 1 });
