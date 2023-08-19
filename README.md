# WebD-Selection-Task-2

- Name - **Shubham Gupta**
- Enrollment Number - **IFI2022019**
- Whatsapp Number - **9818961227**
- Preferred bucket - **Backend**

## Social Media Backend

### Tech Stack Used

- **NodeJS** - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

- **ExpressJS** - Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.

- **MongoDB** - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

### Dependencies
You npm/yarn installed in your device to run this project.

### How to Setup this project

- Make sure your Machine is having internet connection.
- Fork this repository.
- Open shell (which ever your OS support) on your PC.
- Change the directory to the location where you want to clone this repository.
- Clone the repository
```bash
git clone <repo-link>
```
- Once cloned, Run the following command in the root directory of the project
```bash
npm install
```
- Run the project
```bash
npm start
```
- Make sure you have required enviornment variables saved in the ```.env``` file in the root of the project.

### Reference Links 
- [Download and install the latest version of Git.](https://git-scm.com/downloads)
- [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
- [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
- [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)

### Project Structure 

```
/  
|-- controllers/
    |-- auth.controller.js     #Contains http request controllers for user authentication
    |-- user.controller.js     #Contains http request controllers for user methods
    |-- posts.controller.js    #Contains http request controllers for posts methods
|
|-- middlewares/               #Contains all required middlewares
    |-- auth.middleware.js     #Contains User Authentication middleware
    |-- file.middleware.js     #Contains File upload handling middlware
|
|-- models/                    #Contains all MongoDB models
    |-- user.model.js          #Contains user model
    |-- posts.model.js         #Contains posts model
    |-- story.model.js         #Contains story model
|
|-- routes/                   #Contains all routes
    |-- auth.routes.js        #Contains all routes for user authentication
    |-- user.routes.js        #Contains all routes for user methods
    |-- posts.routes.js       #Contains all routes for posts methods
|-- app.js

```

### Models

#### User Model

- FirstName: String,
- LastName: String,
- Email: String,
- Password: String,
- PicturePath: String,
- Friends: Array,
- location: String,
- occupation: String,
- viewedprofile: Number,
- impressions: Number,

#### Posts Model

- UserId: String,
- FirstName: String,
- LastName: String,
- PicturePath : String,
- location : String,
- description: String,
- likes: Array,
- comments: Array,

#### Story Model

- UserId: String,
- ContentPath: String,
- Description: String,
- ExpiresIn: Date,

### Environment Variables

- **MONGO_URI** - MongoDB URI
- **JWT_SECRET** - JWT Secret
- **PORT** - Port on which the server will run

### Live Deployment 

- The backend of this project is deployed on Render.com and can be accessed using the following [link](https://webd-task-2.onrender.com)









