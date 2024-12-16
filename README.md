# Uncaught Exception After Sending Response in Node.js

This repository demonstrates a scenario where an uncaught exception occurs in a Node.js server *after* the response has been sent to the client. This can be problematic because it might not be caught by standard error handling mechanisms that are set up to handle errors during request processing. 

The `bug.js` file contains the buggy code, and the `bugSolution.js` file illustrates a way to handle this type of error more gracefully.