# Flatdango

Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater.

## Features

Update the number of available tickets in real-time.
show details of the first movie when the page loads.
Allow users to purchase tickets for a movie.
Update the number of available tickets in real-time.
Displays a list of movies available for viewing.
## Setup

1. Clone the repository.
2. Install JSON Server: `npm install -g json-server`
3. Start the JSON Server: `json-server --watch db.json`
4. Open `index.html` in your browser.

## JSON Server Endpoints

- `GET /films` - Get a list of all films.
- `GET /films/:id` - Get details of a single film.
- `PATCH /films/:id` - Update the number of tickets sold for a film.
- `DELETE /films/:id` - Delete a film (extra bonus).

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server

## License

This project is licensed under the MIT License.
