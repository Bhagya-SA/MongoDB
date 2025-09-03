// Create a new user
db.createUser({
  user: "student_user",
  pwd: "password123",
  roles: [ { role: "readWrite", db: "StudentDB" } ]
});
