# MovieFlix

## Description
This is a movie listing platform where users can browse, search, and save movies to the watchlist.

## Features
- **Browse Movies:** Users can browse through a list of movies.
- **Search Movies:**
  - Users can search for movies using the search bar.
  - Users can enter full or partial movie names to search for movies.
  - Users can search movies by the genre of the movie through the search bar.
- **Watchlist:** Users can add and remove movies from the watchlist.

## Installation

### For Backend Server
1. Clone the repository: `git clone https://github.com/FTWEB25/propFTX.git`
2. Navigate to the project directory: `cd Backend`
3. Install dependencies: `npm install`
4. Create a `.env` file.
5. Add MongoDB URL in the `.env` file for connection: `MONGO_URL = <Mongo Database URL>`
6. Add JWT_KEY in the `.env` file: `JWT_SECRET_KEY = <Your JWT secret key>`
7. Add the port number in the `.env` file: `PORT = <port number>`
8. Start the backend server: `npm run server`

### For Frontend Server
1. Navigate to the project directory: `cd Frontend`
2. Install dependencies: `npm install`
3. Start the frontend server: `npm run dev`

## Tech Stack
- **Frontend:** ReactJS 
- **Backend:** Express, MongoDB, JSON Web Token (JWT)


## API Endpoints

### User Routes

#### 1. Register
- **Endpoint:** `POST /register`
- **Description:** Registers a new user.
- **Parameters:**
  - `name` (string): User's name.
  - `email` (string): User's email address.
  - `password` (string): User's password.
  - `role` (string): User's role (optional).
- **Response:**
  - Success: 200 OK, User registered successfully, along with user details and authentication token.
  - Conflict: 200 OK, User already exists.
  - Error: 400 Bad Request, Error message.

#### 2. Login
- **Endpoint:** `POST /login`
- **Description:** Logs in an existing user.
- **Parameters:**
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response:**
  - Success: 200 OK, Login successful, along with authentication token.
  - Not Found: 200 OK, User not found.
  - Unauthorized: 200 OK, Incorrect password.
  - Error: 400 Bad Request, Error message.

#### 3. Watchlist
- **Endpoint:** `PUT /watchlist/:id`
- **Description:** Adds a movie to the user's watchlist.
- **Parameters:**
  - `id` (string): Movie ID.
- **Authentication:** Requires a valid authentication token.
- **Response:**
  - Success: 200 OK, Movie added to the watchlist, along with updated user details.
  - Conflict: 409 Conflict, Movie is already in the watchlist.
  - Not Found: 404 Not Found, User not found.
  - Error: 400 Bad Request, Error message.


### Movie Routes

#### 1. Get Movies
- **Endpoint:** `GET /`
- **Description:** Retrieves all movies.
- **Authentication:** Requires authentication.
- **Authorization:** All authenticated users.
- **Response:**
  - Success: 200 OK, List of movies.
  - Error: 400 Bad Request, Error message.

#### 2. Add Movie
- **Endpoint:** `POST /add`
- **Description:** Adds a new movie.
- **Authentication:** Requires authentication.
- **Authorization:** Only for users with the role "admin".
- **Parameters:**
  - `payload` (object): Movie details.
- **Response:**
  - Success: 200 OK, Movie added successfully, along with movie details.
  - Error: 400 Bad Request, Error message.

#### 3. Update Movie
- **Endpoint:** `PATCH /update/:id`
- **Description:** Updates an existing movie.
- **Authentication:** Requires authentication.
- **Authorization:** Only for users with the role "admin".
- **Parameters:**
  - `payload` (object): Updated movie details.
  - `id` (string): Movie ID.
- **Response:**
  - Success: 200 OK, Movie updated successfully, along with updated movie details.
  - Error: 400 Bad Request, Error message.

#### 4. Delete Movie
- **Endpoint:** `DELETE /delete/:id`
- **Description:** Deletes a movie.
- **Authentication:** Requires authentication.
- **Authorization:** Only for users with the role "admin".
- **Parameters:**
  - `id` (string): Movie ID.
- **Response:**
  - Success: 200 OK, Movie deleted successfully.
  - Error: 400 Bad Request, Error message.

#### 5. Search Movie
- **Endpoint:** `GET /`
- **Description:** Searches for movies based on the provided keyword.
- **Parameters:**
  - `search` (string): Keyword to search for in movie titles and genres.
- **Response:**
  - Success: 200 OK, List of movies matching the search criteria.
  - Error: 400 Bad Request, Error message.

## Deployed Links

- **Backend:** [https://flix-rgt6.onrender.com]
- **Frontend:** [https://prop-ftx-gwoy.vercel.app/]

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.