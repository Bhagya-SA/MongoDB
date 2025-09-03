// Create unique index on email
db.Students.createIndex({ email: 1 }, { unique: true });

// Create index on last_name
db.Students.createIndex({ last_name: 1 });
