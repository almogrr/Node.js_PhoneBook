# Phone Book

## Overview
This project is a web application developed using React for the frontend and Node.js with Express for the backend. It features user authentication, CRUD operations for managing user data, and styling using SCSS. The project is containerized using Docker for easy deployment.

## Features
- **User Authentication**: Secure login and registration pages with JWT-based authentication.
- **User Management**: Create, read, update, and delete (CRUD) operations for user data.
- **Responsive Design**: SCSS-based styling ensures a responsive and visually appealing UI.
- **Toast Notifications**: Real-time feedback using `react-toastify`.
- **Routing**: Client-side routing with React Router.
- **MySQL**: all data is saved in MySQL.

## Technologies Used
- **Frontend**: React, SCSS, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB (or specify your database)
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Docker, Docker Compose
- **Others**: `react-toastify` for notifications

## Prerequisites
- Node.js and npm installed on your machine
- MySQL or another database setup


### Install Dependencies
cd backend
npm install
cd ../frontend
npm install

### Environment Variables
Create a .env file in the backend directory and add your environment variables. Example:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

### Running the Application
Development Mode
cd backend
npm start
cd ../frontend
npm start
Docker
docker-compose up --build

### Usage
Access the application at http://localhost:3000 (or the port specified in your .env file). Use the navigation links to register or log in. Once authenticated, you can access user data and perform CRUD operations.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements
Acknowledgment of any third-party resources, libraries, or contributors.

## Contact
For any inquiries or feedback, please contact your-email@example.com.