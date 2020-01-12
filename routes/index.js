module.exports = app => {
  const Tasks = app.models.tasks;
  app.get("/tasks", (req, res) => {
    Tasks.findAll({}, (tasks) => {
      res.json({ tasks: tasks });
    });
  });
  app.get("/", (req, res) => {
    res.json({ status: "NTask API" });
  });
  app.get("/about", (req, res) => {
    res.json({about: "Simasware"})
  });  
};
