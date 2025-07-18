# Flask To-Do List
A clean and responsive To-Do List web app built with Flask, HTML/CSS, and JavaScript. Tasks are managed in the browser using `localStorage`, but the app is served with a proper Python web server — ready for backend expansion.

## Features

- Add, delete, and complete tasks
- Data persists across sessions via browser `localStorage`
- Fully responsive, clean UI with modern styling
- Flask backend for future extensibility (e.g. SQLite, user auth, APIs)

## Project Structure

todo-list/
├── app.py
├── templates/
│ └── index.html
├── static/
│ ├── style.css
│ └── script.js

## Getting Started

### 1. Clone the Repo
git clone https://github.com/natekep/todo-list.git
cd todo_list

### 2. Install Dependencies
pip install flask

### 3. Run the App
python app.py
Then open your browser to http://127.0.0.1:5000