const movies = [
  {
    title: "127 Hours",
    poster: "data/movies/127_Hours.jpg",
    year: 2010,
    director: "Danny Boyle",
    genre: ["Biography", "Drama", "Adventure"],
    rating: 7.6,
    duration: 94,
    description: "A mountain climber becomes trapped under a boulder and resorts to desperate measures to survive."
  },
  {
    title: "The Amazing Spider-Man",
    poster: "data/movies/amazing-spider-man.jpg",
    year: 2012,
    director: "Marc Webb",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 6.9,
    duration: 136,
    description: "After gaining spider-like abilities, Peter Parker must face the Lizard and uncover secrets about his past."
  },
  {
    title: "Blade Runner",
    poster: "data/movies/Blade_Runner.jpg",
    year: 1982,
    director: "Ridley Scott",
    genre: ["Sci-Fi", "Thriller"],
    rating: 8.1,
    duration: 117,
    description: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth."
  },
  {
    title: "Deadpool",
    poster: "data/movies/Deadpool.jpg",
    year: 2016,
    director: "Tim Miller",
    genre: ["Action", "Comedy"],
    rating: 8.0,
    duration: 108,
    description: "A wisecracking mercenary with accelerated healing powers seeks revenge on the man who experimented on him."
  },
  {
    title: "Drive",
    poster: "data/movies/Drive.jpg",
    year: 2011,
    director: "Nicolas Winding Refn",
    genre: ["Crime", "Drama"],
    rating: 7.8,
    duration: 100,
    description: "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble."
  },
  {
    title: "Free Guy",
    poster: "data/movies/Free-Guy.jpg",
    year: 2021,
    director: "Shawn Levy",
    genre: ["Action", "Adventure", "Comedy"],
    rating: 7.1,
    duration: 115,
    description: "A bank teller discovers he's a background character in a video game and decides to become the hero of his story."
  },
  {
    title: "Inception",
    poster: "data/movies/Inception_2009.jpg",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    duration: 148,
    description: "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea."
  },
  {
    title: "Justice League",
    poster: "data/movies/Justice_League.jpg",
    year: 2017,
    director: "Zack Snyder",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 6.1,
    duration: 120,
    description: "Fueled by his restored faith in humanity, Bruce Wayne enlists the help of Diana Prince to face a powerful enemy."
  },
  {
    title: "Logan",
    poster: "data/movies/logan.jpg",
    year: 2017,
    director: "James Mangold",
    genre: ["Action", "Drama", "Sci-Fi"],
    rating: 8.1,
    duration: 137,
    description: "In the near future, a weary Logan cares for an ailing Professor X while hiding from the world."
  },
  {
    title: "The Super Mario Bros. Movie",
    poster: "data/movies/Mario_2024.jpg",
    year: 2024,
    director: "Aaron Horvath, Michael Jelenic",
    genre: ["Animation", "Adventure", "Comedy"],
    rating: 7.3,
    duration: 92,
    description: "Mario and Luigi team up to save the Mushroom Kingdom from the evil Bowser."
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    poster: "data/movies/spider-man-across-the-spider-verse.jpg",
    year: 2023,
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    genre: ["Animation", "Action", "Adventure"],
    rating: 9.0,
    duration: 140,
    description: "Miles Morales embarks on a journey across the multiverse to save his loved ones and the Spider-Verse itself."
  },
  {
    title: "Tenet",
    poster: "data/movies/Tenet.jpeg",
    year: 2020,
    director: "Christopher Nolan",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 7.3,
    duration: 150,
    description: "A secret agent manipulates time to prevent World War III."
  },
  {
    title: "The Dark Knight",
    poster: "data/movies/The_Dark_Knight.jpg",
    year: 2008,
    director: "Christopher Nolan",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    duration: 152,
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos."
  },
  {
    title: "The Fall Guy",
    poster: "data/movies/The_Fall_Guy.jpg",
    year: 2024,
    director: "David Leitch",
    genre: ["Action", "Drama"],
    rating: 7.5,
    duration: 120,
    description: "A stuntman returns to the industry and faces challenges in his personal and professional life."
  },
  {
    title: "The Gray Man",
    poster: "data/movies/The_Gray_Man.jpg",
    year: 2022,
    director: "Anthony Russo, Joe Russo",
    genre: ["Action", "Thriller"],
    rating: 6.5,
    duration: 122,
    description: "A CIA operative becomes the target of a global manhunt after uncovering dark agency secrets."
  },
  {
    title: "Guardians of the Galaxy",
    poster: "data/movies/The_Guardians_Of_The_Galaxy.jpeg",
    year: 2014,
    director: "James Gunn",
    genre: ["Action", "Adventure", "Comedy"],
    rating: 8.0,
    duration: 121,
    description: "A group of intergalactic criminals must work together to stop a fanatical warrior from destroying the universe."
  },
  {
    title: "The Nice Guys",
    poster: "data/movies/the_nice_guys.jpg",
    year: 2016,
    director: "Shane Black",
    genre: ["Action", "Comedy", "Crime"],
    rating: 7.4,
    duration: 116,
    description: "A private eye and a tough enforcer team up to investigate a missing girl and a mysterious death."
  },
  {
    title: "The Revenant",
    poster: "data/movies/The_Revenant.jpg",
    year: 2015,
    director: "Alejandro G. Iñárritu",
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.0,
    duration: 156,
    description: "A frontiersman fights for survival after being mauled by a bear and left for dead by his hunting team."
  },
  {
    title: "The Avengers",
    poster: "data/movies/TheAvengers.jpg",
    year: 2012,
    director: "Joss Whedon",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.0,
    duration: 143,
    description: "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity."
  },
  {
    title: "The Wolf of Wall Street",
    poster: "data/movies/TheWolfofWallStreet.jpg",
    year: 2013,
    director: "Martin Scorsese",
    genre: ["Biography", "Comedy", "Crime"],
    rating: 8.2,
    duration: 180,
    description: "The story of Jordan Belfort, a stockbroker who rises to wealth and falls into corruption and excess."
  },
  {
    title: "Titanic",
    poster: "data/movies/Titanic.jpg",
    year: 1997,
    director: "James Cameron",
    genre: ["Drama", "Romance"],
    rating: 7.9,
    duration: 195,
    description: "A young couple from different social classes falls in love aboard the ill-fated R.M.S. Titanic."
  },
  {
    title: "Wonka",
    poster: "data/movies/Wonka.jpg",
    year: 2023,
    director: "Paul King",
    genre: ["Adventure", "Comedy", "Family"],
    rating: 7.2,
    duration: 120,
    description: "The origin story of Willy Wonka and his journey to becoming the famous chocolatier."
  }
];


const params = new URLSearchParams(window.location.search);
const movieTitle = params.get("title");

const movie = movies.find(m => m.title === movieTitle);

if (movie) {
    const movieContainer = document.getElementById("movie-container");
    const moviePoster = document.getElementById("poster");
    const movieTitleElement = document.getElementById("title");
    const movieYear = document.getElementById("release-year");
    const movieDirector = document.getElementById("director");
    const movieGenre = document.getElementById("genre");
    const movieRating = document.getElementById("rating");
    const movieDuration = document.getElementById("duration");
    const movieDescription = document.getElementById("description");
    
    window.document.title = `${movie.title} - Movie Details`;
    moviePoster.src = movie.poster;
    movieTitleElement.textContent = movie.title;
    movieYear.textContent = `${movie.year}`;
    movieDirector.textContent = `${movie.director}`;
    movieGenre.textContent = `${movie.genre.join(", ")}`;
    movieRating.textContent = `${movie.rating}`;
    movieDuration.textContent = `${movie.duration} min`;
    movieDescription.textContent = `${movie.description}`;
} else {
    console.error("Movie not found");
    const movieContainer = document.getElementById("movie-container");
    movieContainer.innerHTML = "<p>Movie not found</p>";
}

const colorPicker = document.querySelector("#color-picker");
const fontPicker = document.querySelector("#font-picker");
const resetButton = document.querySelector("#reset-button");


const defaultAccentColor = "#009688";
const defaultFontFamily = "'Poppins', sans-serif";

function startingColor() {
    const savedColor = localStorage.getItem("accentColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--accent-color", savedColor);
        colorPicker.value = savedColor;
    } else {
        document.documentElement.style.setProperty("--accent-color", defaultAccentColor);
        colorPicker.value = defaultAccentColor;
    }
}

function setColor() {
    const selectedColor = colorPicker.value;
    document.documentElement.style.setProperty("--accent-color", selectedColor);
    localStorage.setItem("accentColor", selectedColor);
}

function startingFontFamily() {
    const savedFontFamily = localStorage.getItem("fontFamily");
    if (savedFontFamily) {
        document.documentElement.style.setProperty("--font-family", savedFontFamily);
        fontPicker.value = savedFontFamily;
    } else {
        document.documentElement.style.setProperty("--font-family", defaultFontFamily);
        fontPicker.value = defaultFontFamily;
    }
}

function setFontFamily() {
    const selectedFontFamily = fontPicker.value;
    document.documentElement.style.setProperty("--font-family", selectedFontFamily);
    localStorage.setItem("fontFamily", selectedFontFamily);
}


colorPicker.addEventListener("input", setColor);
fontPicker.addEventListener("input", setFontFamily);

startingColor();
startingFontFamily();

resetButton.addEventListener("click", () => {
    localStorage.removeItem("accentColor");
    localStorage.removeItem("fontFamily");
    startingColor();
    startingFontFamily();
})