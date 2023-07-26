#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, { json: true }, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const tasksCompleted = {};
  body.forEach((todo) => {
    if (todo.completed) {
      if (!tasksCompleted[todo.userId]) {
        tasksCompleted[todo.userId] = 0; // Initialize to 0
      }
      tasksCompleted[todo.userId] += 1; // Increment count for each completed task
    }
  });

  console.log(JSON.stringify(tasksCompleted, null, 2));
});
