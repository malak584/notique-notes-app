Notique - Note-taking App
Notique is a simple note-taking application built with React, Node.js, Express, and MongoDB. It allows users to create, update, and delete notes in a clean and user-friendly interface.

Table of Contents
Project Overview

Features

Tech Stack

Installation

API Endpoints

Usage

License

Project Overview
Notique is a full-stack application where users can:

View a list of notes.

Create a new note.

Edit an existing note.

Delete notes.

The app provides a seamless experience using React for the frontend, Express for the backend, and MongoDB for database storage.

Features
View Notes: Display all notes with title and content.

Create Notes: Add a new note with a title and content.

Edit Notes: Update existing notes.

Delete Notes: Delete notes permanently.

Responsive UI: The app is mobile-friendly with a responsive design.

Tech Stack
Frontend: React, Tailwind CSS

Backend: Node.js, Express

Database: MongoDB

Authentication: None (For simplicity, you can expand it later with JWT or sessions)

Libraries: Axios (for HTTP requests), React Router, react hot toast (for notifications)

Installation
Prerequisites
Node.js (v16 or higher)

MongoDB (locally or cloud-based like MongoDB Atlas)

1. Clone the Repository
bash
Copier
Modifier
git clone https://github.com/your-username/notique.git
cd notique
2. Install Dependencies
Frontend (React)
bash
Copier
Modifier
cd frontend
npm install
Backend (Node.js)
bash
Copier
Modifier
cd backend
npm install
3. Set Up Environment Variables
Create a .env file in the root of the backend directory and add your MongoDB connection string:

ini
Copier
Modifier
MONGO_URI=your-mongo-connection-string
PORT=5000
4. Run the Application
Start Backend (backend)
bash
Copier
Modifier
cd backend
npm run dev
Start Frontend (React)
bash
Copier
Modifier
cd frontend
npm start
Now open your browser and go to http://localhost:3000 to see the app in action.

API Endpoints
Here are the available API routes for the backend:

GET /api/notes/get - Retrieve all notes

POST /api/notes/create - Create a new note

Request body: { "title": "note title", "content": "note content" }

PUT /api/notes/update/:id - Update an existing note

Request body: { "title": "updated title", "content": "updated content" }

DELETE /api/notes/delete/:id - Delete a note by ID

Usage
HomePage: Displays all notes fetched from the backend.

CreatePage: Allows users to create a new note.

NoteDetailPage: Used to view and edit an individual note.

Navbar: Includes a link to the Create page.

License
This project is licensed under the MIT License - see the LICENSE file for details.
