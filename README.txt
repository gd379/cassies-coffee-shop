# CSCI 3172 Lab 3

* *Date Created*: 26 Oct 2026
* *Last Modification Date*: 02 Nov 2026
* *Lab Deployment URL*: https://cassies-coffee-shop.onrender.com
* *Lab Faculty Gitlab URL*: https://git.cs.dal.ca/gajayi/csci3172.git
* *GitHub URL: https://github.com/gd379/cassies-coffee-shop.git


## Authors
Name- Gideon Ajayi
Email- gd379874@dal.ca

## Project description
Cassie's Coffee Shop API is a RESTful backend application implemented using Node.js and Express. 
It manages a collection of coffee shop menu items, allowing users to retrieve, create, and delete items through HTTP requests.
The application uses REST API development, middleware implementation, request validation, and centralized error handling.


## Built With

* Node.js- used to excecute the application 
* Express.js- framework used to implement RESTful API endpoints, middleware, and centralized error handling
* JavaScript- used for application logic
* Git/GitLab/GitHub- used for version control
Render- used for deployment

## Sources Used

*Express Documentation — Express application setup, routing, and middleware.
*Node.js Documentation — Node.js runtime and package management.
*Render Documentation — Deployment and hosting configuration.


## Artificial Intelligence Tools Used
ChatGPT (OpenAI) - Used to assist with implementation guidance and explain express concepts for the application


### Prompt Used on ChatGPT

```
I want to make a backend service that manages a structured resource (e.g. task manager) which includes strict payload validation, custom logging middleware, and centralized error management. I intend to use Express with structured configuration files for the environment. I would also implement REST endpoints to manage retrieving, creating and removing records. 
The web service would also handle JSON bodies using bilt-in Express middleware. A custom middleware function that intercepts requests, logs the 
incoming HTTP method, requested route path, and timestamp to the console, and calls next() would also be implemented. 
Payload walidation rules would also be included inside the POST endpoint or through a validation middleware layer, 
inspect incoming data to ensure required fields exist and match expected types while rejecting invalid data safely. An error-handling middleware 
would also be implemented at the bottoom of the routing pipeline with the four-parameter signature. HTTP status codes would be implemented to indicate
what type of error occurs in the application. Could you give a step by step on the idea and possible concepts of the application and implementation?

```

The code prompt above was used ChatGPT to help with strucure of the project and code ideas, here is the URL: 

```

https://chatgpt.com/share/6ae900d3-7c54-83ea-856c-1859b946ac22



```

## Acknowledgments

* Official Node.js, Express, and Render documentation.
