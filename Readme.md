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
