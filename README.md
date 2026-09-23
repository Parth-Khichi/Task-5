Flask AJAX Users Project

This is a simple web project made using HTML, CSS, JavaScript, AJAX, and Flask.

The main purpose of this project is to understand how the frontend communicates with a Flask backend using AJAX.

Technologies Used

HTML

CSS

JavaScript

AJAX (Fetch API)

Python

Flask

JSON

Project Structure
project/
│
├── app.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── app.js

How It Works

When I open the website, the HTML page is loaded first.

JavaScript then sends an AJAX request to the Flask server:

Browser → /api/users → Flask


Flask returns the users' data in JSON format:

[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  }
]


JavaScript receives this data and displays the users on the webpage.

The main advantage is that the page does not need to reload when the data is requested.

Flask API

The project has an API endpoint:

GET /api/users


This endpoint returns the users in JSON format.

Example:

@app.route("/api/users")
def users():
    return jsonify([
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"},
        {"id": 3, "name": "Charlie", "email": "charlie@example.com"}
    ])

AJAX / Fetch

I used JavaScript's fetch() method to make the AJAX request.

fetch("/api/users")
  .then(response => response.json())
  .then(users => {
    // Display users
  });


This allows the frontend to get data from Flask without refreshing the complete webpage.

How to Run the Project

First, install Flask:

pip install flask


Then run the Flask application:

python app.py


After running the application, open:

http://127.0.0.1:5000/

What I Learned

Through this project, I learned:

How to create a basic Flask application.

How Flask routes work.

How to create a JSON API.

How JavaScript fetch() works.

How AJAX communication works between frontend and backend.

How to display API data dynamically using JavaScript.

How to organize HTML, CSS, JavaScript, and Flask files.

Future Improvements

I can improve this project by adding:

Add new users

Delete users

Edit users

Search users

Connect the project to a database

Add a user registration form

Add better UI and validation

Conclusion

This project helped me understand the basic communication between a frontend and backend. Flask is used for the backend/API, while JavaScript and AJAX are used to request the data and update the webpage dynamically.
