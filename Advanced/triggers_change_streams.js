// Watch for changes in Students collection
const changeStream = db.Students.watch();

changeStream.on("change", (change) => {
  printjson(change);
});
