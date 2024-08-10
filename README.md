
# Nifty - Notes Taking App

Nifty is a modern and user-friendly notes-taking application that allows users to organize their thoughts, tasks, and ideas in one place. Built with Node.js, Express, MongoDB, and EJS, this application provides a seamless experience for managing notes, with features like note categorization, filtering, and more.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Note Management**: Create, read, update, and delete notes.
- **Note Categorization**: Organize notes into different categories such as Completed, Important, Incomplete, etc.
- **Profile Management**: Update profile details and upload a profile picture.
- **Dark Mode**: User-friendly dark theme for a better user experience.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing notes and user information.
- **EJS**: Template engine for rendering dynamic pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **FontAwesome**: Icon library for intuitive UI design.

## Packages Used

- **bcrypt**: `^5.1.1` - For hashing passwords.
- **cookie-parser**: `^1.4.6` - Middleware for parsing cookies.
- **dotenv**: `^16.4.5` - For loading environment variables from a `.env` file.
- **ejs**: `^3.1.10` - Embedded JavaScript templates for rendering dynamic HTML.
- **express**: `^4.19.2` - Web framework for Node.js.
- **express-validator**: `^7.1.0` - Middleware for validating request data.
- **http-errors**: `^2.0.0` - Create HTTP errors for Express.
- **jsonwebtoken**: `^9.0.2` - For handling JWT authentication.
- **mongoose**: `^8.5.2` - MongoDB object modeling tool.
- **multer**: `^1.4.5-lts.1` - Middleware for handling file uploads.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed or a cloud-based MongoDB instance.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mhistiak3/nifty-notes-taking-app.git
   cd nifty-notes-taking-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory with the following content:
     ```env
     APP_NAME=Nifty
     APP_PORT=3000
     MONGODB_CONNECTION_URL=mongodb://localhost/Nifty
     JWT_SECRET=your_jwt_secret_key
     COOKIE_SECRET=your_cookie_secret_key
     JWT_EXP=86400000
     COOKIE_NAME=nifty
     ```

4. Run the application:
   ```bash
   npm start
   ```
   The app should now be running on `http://localhost:3000`.

## Project Structure

```plaintext
nifty-notes-taking-app/
│
├── controllers/          # Controllers for handling request logic
├── middleware/           # Custom middleware functions
├── models/               # Mongoose models for User and Note
├── routes/               # Express routes for handling requests
├── views/                # EJS templates for rendering the UI
├── public/               # Static files like CSS, JavaScript, and images
├── uploads/              # Directory for storing uploaded profile pictures
├── .env                  # Environment variables file
├── .gitignore            # Files and directories to be ignored by Git
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Application Routes

The application is divided into three main routes, each handling specific functionalities:

- **Authentication Routes** (`/auth`)
  - **Register** (`GET /register`): Displays the registration page.
  - **Register** (`POST /register`): Registers a new user.
  - **Login** (`GET /login`): Displays the login page.
  - **Login** (`POST /login`): Logs in a user.
  - **Logout** (`DELETE /logout`): Logs out the current user.

- **Notes Routes** (`/`)
  - **All Notes** (`GET /`): Displays all notes.
  - **Show Notes** (`GET /allNotes`): Fetches all notes.
  - **Add Note** (`GET /add-note`): Displays the add note page.
  - **Add Note** (`POST /add-note`): Adds a new note.
  - **Edit Note** (`GET /edit-note/:id`): Displays the edit note page.
  - **Edit Note** (`PUT /edit-note/:id`): Updates an existing note.
  - **Delete Note** (`DELETE /delete-note/:id`): Deletes a note.

- **User Profile Routes** (`/profile`)
  - **Profile Page** (`GET /profile`): Displays the user's profile page.
  - **Edit Profile** (`PUT /profile`): Edits the user's profile information.
  - **Delete Profile** (`DELETE /profile/:id`): Deletes the user's profile.

## .gitignore

```plaintext
node_modules
.env
uploads
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## Contact

If you have any questions or suggestions, feel free to contact me via [GitHub](https://github.com/mhistiak3).

---

**Nifty** - A sleek, simple, and effective notes-taking app.
