# MERN-project
A basic task planner app that uses Online API to store data, Node.js to handle HTTP requests, and React to allow users to add, edit, and delete tasks from the UI.

The app would first connect to the MongoDB Atlas database and create a collection for tasks. Then, it would use Node.js to create an HTTP server that would listen for requests from the React app. When a user makes a request to add, edit, or delete a task, the Node.js server would send a request to the MongoDB Atlas database to perform the requested operation. The MongoDB Atlas database would then update the task collection accordingly.

The React app would use the HTTP server to fetch the latest list of tasks from the MongoDB Atlas database. It would then display the tasks in a list view, and allow users to add, edit, and delete tasks by clicking on buttons.

This app would allow users to easily manage their tasks, and would be a good example of how to use the MERN stack to build a full-stack web application.
