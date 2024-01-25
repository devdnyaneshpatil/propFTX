#MovieFlix

#Description
This is a movie listing platform where users can browse, search, and save movies to watchlist.

#Features
Browse Movies: Users can browse through a list of movies.
Search Movies:
Users can search for movies using the search bar.
User can enter full or partial movie name to search movie.
User can search movie by genre of movie through search bar.
Watchlist: Users can add and remove movies to watchlist.


#Installation

For Backend Server
Clone the repository: git clone https://github.com/FTWEB25/propFTX.git
Navigate to the project directory: cd Backend
Install dependencies: npm install
Create .env file.
Add MongoDB URL in .env file for connection : MONGO_URL = <Mongo Database URL>
Add JWT_KEY in .env file: JWT_SECRET_KEY = <Your JWT secret key>
Add port number in .env file: PORT = <port number>
Start the backend server: npm run server

For Frontend Server
Navigate to the project directory: cd Frontend
Install dependencies: npm install
Start the frontend server: npm run dev
TechStack
Frontend: ReactJS 
Backend: Express, Mongo DB, Json web token(JWT)