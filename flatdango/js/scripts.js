document.addEventListener("DOMContentLoaded", () => {
    const filmList = document.getElementById("films");
    const filmDetails = document.getElementById("film-details");
    const buyTicketButton = document.getElementById("buy-ticket");
    
    function fetchFilms() {
      fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(films => {
          films.forEach(film => {
            const li = document.createElement("li");
            li.classList.add("film", "item");
            li.textContent = film.title;
            li.dataset.id = film.id;
            filmList.appendChild(li);
          });
          displayFilmDetails(films[0]);
        });
    }
  
    function displayFilmDetails(film) {
      const poster = document.getElementById("poster");
      const title = document.getElementById("title");
      const runtime = document.getElementById("runtime");
      const showtime = document.getElementById("showtime");
      const availableTickets = document.getElementById("available-tickets");
      const description = document.getElementById("description");
      
      poster.src = film.poster;
      title.textContent = film.title;
      runtime.textContent = `Runtime: ${film.runtime} minutes`;
      showtime.textContent = `Showtime: ${film.showtime}`;
      availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
      description.textContent = film.description;
      
      buyTicketButton.dataset.id = film.id;
      buyTicketButton.disabled = film.tickets_sold >= film.capacity;
      buyTicketButton.textContent = film.tickets_sold >= film.capacity ? "Sold Out" : "Buy Ticket";
    }
  
    function handleBuyTicket(event) {
      const filmId = event.target.dataset.id;
      fetch(`http://localhost:3000/films/${filmId}`)
        .then(response => response.json())
        .then(film => {
          if (film.tickets_sold < film.capacity) {
            film.tickets_sold += 1;
            fetch(`http://localhost:3000/films/${filmId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ tickets_sold: film.tickets_sold })
            })
            .then(response => response.json())
            .then(updatedFilm => {
              displayFilmDetails(updatedFilm);
            });
          }
        });
    }
  
    filmList.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        const filmId = event.target.dataset.id;
        fetch(`http://localhost:3000/films/${filmId}`)
          .then(response => response.json())
          .then(film => displayFilmDetails(film));
      }
    });
  
    buyTicketButton.addEventListener("click", handleBuyTicket);
  
    fetchFilms();
  });
  