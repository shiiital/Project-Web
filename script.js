const INITIAL_MOVIES = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    mood: "Mind-Bending",
    rating: 8.7,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    emoji: "🪐",
    gradient: "linear-gradient(135deg, #312e81, #7c3aed, #ec4899)",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 2,
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    mood: "Feel-Good",
    rating: 8.6,
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    emoji: "🐉",
    gradient: "linear-gradient(135deg, #be185d, #f43f5e, #fb923c)",
    desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods and spirits."
  },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    mood: "Thrilling",
    rating: 8.5,
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    emoji: "🍑",
    gradient: "linear-gradient(135deg, #065f46, #10b981, #3b82f6)",
    desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    id: 4,
    title: "Past Lives",
    year: 2023,
    genre: "Romance",
    mood: "Emotional",
    rating: 7.8,
    director: "Celine Song",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #831843, #db2777, #a855f7)",
    desc: "Nora and Hae Sung, two deeply connected childhood friends, are drawn apart after Nora's family emigrates from South Korea."
  },
  {
    id: 5,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy",
    mood: "Feel-Good",
    rating: 8.1,
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
    emoji: "🏨",
    gradient: "linear-gradient(135deg, #db2777, #f472b6, #818cf8)",
    desc: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy."
  },
  {
    id: 6,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    mood: "Emotional",
    rating: 7.9,
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    emoji: "🛸",
    gradient: "linear-gradient(135deg, #1e3a8a, #0284c7, #38bdf8)",
    desc: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
  },
  {
    id: 7,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    mood: "Thrilling",
    rating: 8.5,
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    emoji: "🥁",
    gradient: "linear-gradient(135deg, #9a3412, #ea580c, #facc15)",
    desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an abusive instructor."
  },
  {
    id: 8,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    mood: "Feel-Good",
    rating: 8.4,
    director: "Bob Persichetti",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    emoji: "🕷️",
    gradient: "linear-gradient(135deg, #6d28d9, #ec4899, #06b6d4)",
    desc: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions."
  },
  {
    id: 9,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    mood: "Mind-Bending",
    rating: 8.8,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    emoji: "🌀",
    gradient: "linear-gradient(135deg, #1d4ed8, #4f46e5, #9333ea)",
    desc: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    id: 10,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    mood: "Emotional",
    rating: 8.0,
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
    emoji: "🌆",
    gradient: "linear-gradient(135deg, #4c1d95, #be185d, #f59e0b)",
    desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while chasing big dreams."
  },
  {
    id: 11,
    title: "Knives Out",
    year: 2019,
    genre: "Thriller",
    mood: "Mind-Bending",
    rating: 7.9,
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Ana de Armas", "Chris Evans"],
    emoji: "🕵️",
    gradient: "linear-gradient(135deg, #92400e, #d97706, #f43f5e)",
    desc: "A detective investigates the death of a wealthy crime novelist at his estate filled with eccentric relatives."
  },
  {
    id: 12,
    title: "Your Name",
    year: 2016,
    genre: "Animation",
    mood: "Emotional",
    rating: 8.4,
    director: "Makoto Shinkai",
    cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi"],
    emoji: "☄️",
    gradient: "linear-gradient(135deg, #2563eb, #c026d3, #fb7185)",
    desc: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies across time and distance."
  },
  {
    id: 13,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    mood: "Thrilling",
    rating: 8.5,
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    emoji: "🏜️",
    gradient: "linear-gradient(135deg, #b45309, #f59e0b, #ef4444)",
    desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },
  {
    id: 14,
    title: "Barbie",
    year: 2023,
    genre: "Comedy",
    mood: "Feel-Good",
    rating: 6.9,
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    emoji: "🎀",
    gradient: "linear-gradient(135deg, #ec4899, #f472b6, #fda4af)",
    desc: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land until they visit the real world."
  },
  {
    id: 15,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Sci-Fi",
    mood: "Mind-Bending",
    rating: 7.8,
    director: "Daniel Kwan & Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    emoji: "🥯",
    gradient: "linear-gradient(135deg, #701a75, #d946ef, #06b6d4)",
    desc: "An exhausted laundromat owner is swept into an adventure where she alone can save the multiverse."
  },
  {
    id: 16,
    title: "Paddington 2",
    year: 2017,
    genre: "Comedy",
    mood: "Feel-Good",
    rating: 7.8,
    director: "Paul King",
    cast: ["Ben Whishaw", "Hugh Grant", "Hugh Bonneville"],
    emoji: "🧸",
    gradient: "linear-gradient(135deg, #be123c, #fb7185, #fbbf24)",
    desc: "Paddington picks up odd jobs to buy a unique pop-up book for Aunt Lucy's 100th birthday, only for the gift to be stolen."
  }
];

const EXTRA_MOVIE_DATA = [
  ["Ne Zha 2", 2025, "Animation"],
  ["A Minecraft Movie", 2025, "Comedy"],
  ["Lilo & Stitch", 2025, "Comedy"],
  ["Jurassic World Rebirth", 2025, "Sci-Fi"],
  ["How to Train Your Dragon", 2025, "Animation"],
  ["Superman", 2025, "Sci-Fi"],
  ["The Fantastic Four: First Steps", 2025, "Sci-Fi"],
  ["F1: The Movie", 2025, "Drama"],
  ["Mission: Impossible - The Final Reckoning", 2025, "Thriller"],
  ["Captain America: Brave New World", 2025, "Sci-Fi"],
  ["Thunderbolts*", 2025, "Sci-Fi"],
  ["Sinners", 2025, "Thriller"],
  ["Final Destination Bloodlines", 2025, "Thriller"],
  ["Weapons", 2025, "Thriller"],
  ["The Conjuring: Last Rites", 2025, "Thriller"],
  ["M3GAN 2.0", 2025, "Sci-Fi"],
  ["The Bad Guys 2", 2025, "Animation"],
  ["Zootopia 2", 2025, "Animation"],
  ["Avatar: Fire and Ash", 2025, "Sci-Fi"],
  ["Wicked: For Good", 2025, "Drama"],
  ["Elio", 2025, "Animation"],
  ["Freakier Friday", 2025, "Comedy"],
  ["28 Years Later", 2025, "Thriller"],
  ["Tron: Ares", 2025, "Sci-Fi"],
  ["Ballerina", 2025, "Thriller"],
  ["Inside Out 2", 2024, "Animation"],
  ["Deadpool & Wolverine", 2024, "Comedy"],
  ["Wicked", 2024, "Drama"],
  ["Moana 2", 2024, "Animation"],
  ["The Wild Robot", 2024, "Animation"],
  ["Kung Fu Panda 4", 2024, "Animation"],
  ["Godzilla x Kong: The New Empire", 2024, "Sci-Fi"],
  ["Beetlejuice Beetlejuice", 2024, "Comedy"],
  ["A Quiet Place: Day One", 2024, "Thriller"],
  ["Twisters", 2024, "Drama"],
  ["Longlegs", 2024, "Thriller"],
  ["It Ends with Us", 2024, "Romance"],
  ["The Substance", 2024, "Thriller"],
  ["Furiosa: A Mad Max Saga", 2024, "Sci-Fi"],
  ["The Fall Guy", 2024, "Comedy"],
  ["Challengers", 2024, "Romance"],
  ["The Beekeeper", 2024, "Thriller"],
  ["Civil War", 2024, "Drama"],
  ["Kingdom of the Planet of the Apes", 2024, "Sci-Fi"],
  ["Bad Boys: Ride or Die", 2024, "Action"],
  ["The Garfield Movie", 2024, "Animation"],
  ["Oppenheimer", 2023, "Drama"],
  ["Spider-Man: Across the Spider-Verse", 2023, "Animation"],
  ["Guardians of the Galaxy Vol. 3", 2023, "Sci-Fi"],
  ["John Wick: Chapter 4", 2023, "Thriller"],
  ["The Super Mario Bros. Movie", 2023, "Animation"],
  ["Killers of the Flower Moon", 2023, "Drama"],
  ["The Hunger Games: The Ballad of Songbirds & Snakes", 2023, "Sci-Fi"],
  ["The Boy and the Heron", 2023, "Animation"],
  ["Wonka", 2023, "Fantasy"],
  ["The Creator", 2023, "Sci-Fi"],
  ["Talk to Me", 2023, "Thriller"],
  ["Anyone But You", 2023, "Romance"],
  ["The Nun II", 2023, "Thriller"],
  ["The Equalizer 3", 2023, "Thriller"],
  ["The Batman", 2022, "Thriller"],
  ["Top Gun: Maverick", 2022, "Drama"],
  ["Avatar: The Way of Water", 2022, "Sci-Fi"],
  ["Puss in Boots: The Last Wish", 2022, "Animation"],
  ["Black Panther: Wakanda Forever", 2022, "Sci-Fi"],
  ["The Menu", 2022, "Thriller"],
  ["Turning Red", 2022, "Animation"],
  ["The Whale", 2022, "Drama"],
  ["Glass Onion: A Knives Out Mystery", 2022, "Thriller"],
  ["Bullet Train", 2022, "Action"],
  ["The Banshees of Inisherin", 2022, "Drama"],
  ["Smile", 2022, "Thriller"],
  ["Encanto", 2021, "Animation"],
  ["Dune", 2021, "Sci-Fi"],
  ["Spider-Man: No Way Home", 2021, "Sci-Fi"],
  ["No Time to Die", 2021, "Thriller"],
  ["Shang-Chi and the Legend of the Ten Rings", 2021, "Sci-Fi"],
  ["The Mitchells vs. the Machines", 2021, "Animation"],
  ["Free Guy", 2021, "Comedy"],
  ["A Quiet Place Part II", 2021, "Thriller"],
  ["The Suicide Squad", 2021, "Action"],
  ["The French Dispatch", 2021, "Comedy"],
  ["Soul", 2020, "Animation"],
  ["Tenet", 2020, "Sci-Fi"],
  ["The Invisible Man", 2020, "Thriller"],
  ["Palm Springs", 2020, "Romance"],
  ["Enola Holmes", 2020, "Mystery"],
  ["Promising Young Woman", 2020, "Thriller"],
  ["Joker", 2019, "Thriller"],
  ["Avengers: Endgame", 2019, "Sci-Fi"],
  ["Frozen II", 2019, "Animation"],
  ["Little Women", 2019, "Drama"],
  ["The Lion King", 2019, "Animation"],
  ["Ford v Ferrari", 2019, "Drama"],
  ["Jojo Rabbit", 2019, "Comedy"],
  ["1917", 2019, "Drama"],
  ["Toy Story 4", 2019, "Animation"],
  ["Once Upon a Time in Hollywood", 2019, "Drama"],
  ["A Star Is Born", 2018, "Romance"],
  ["Avengers: Infinity War", 2018, "Sci-Fi"]
];

const EXTRA_MOVIES = EXTRA_MOVIE_DATA.map((item, index) => ({
  id: 17 + index,
  title: item[0],
  year: item[1],
  genre: item[2],
  mood: item[2] === "Comedy" || item[2] === "Animation"
    ? "Feel-Good"
    : item[2] === "Thriller" || item[2] === "Action" || item[2] === "Mystery"
    ? "Thrilling"
    : item[2] === "Romance" || item[2] === "Drama"
    ? "Emotional"
    : "Mind-Bending",
  rating: 7.5,
  director: "Not listed",
  cast: [],
  emoji: "🎬",
  gradient: "linear-gradient(135deg, #312e81, #9333ea, #ec4899)",
  desc: "A popular movie added to the CineMatch collection."
}));


const MOVIES_STORAGE_KEY = "cinematch_movies_v2";
const WATCHLIST_STORAGE_KEY = "cinematch_watchlist_v2";

function escapeHTML(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeParseJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSaveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors
  }
}

function loadMovies() {
  const defaultMovies = [...INITIAL_MOVIES, ...EXTRA_MOVIES];
  const saved = safeParseJSON(MOVIES_STORAGE_KEY, []);

  if (!Array.isArray(saved)) return defaultMovies;

  // Keep user-added movies while always including the latest built-in collection.
  const userAddedMovies = saved.filter(
    savedMovie => !defaultMovies.some(movie => movie.id === savedMovie.id)
  );

  return [...defaultMovies, ...userAddedMovies];
}

function loadWatchlist() {
  const saved = safeParseJSON(WATCHLIST_STORAGE_KEY, []);
  return Array.isArray(saved) ? saved.map(Number).filter(Number.isFinite) : [];
}

let movies = loadMovies();
let selectedGenre = "all";
let watchlist = loadWatchlist();
let quizAnswers = {};
let currentQuizStep = 0;

// DOM Elements
const movieGrid = document.getElementById("movieGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchSuggestions = document.getElementById("searchSuggestions");
const moodFilter = document.getElementById("moodFilter");
const ratingFilter = document.getElementById("ratingFilter");
const genrePills = document.getElementById("genrePills");
const watchlistCount = document.getElementById("watchlistCount");
const watchlistDrawer = document.getElementById("watchlistDrawer");
const watchlistItems = document.getElementById("watchlistItems");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const detailModal = document.getElementById("detailModal");
const quizModal = document.getElementById("quizModal");
const quizBody = document.getElementById("quizBody");
const suggestForm = document.getElementById("suggestForm");

// Whole-Movie Search Matcher
function movieMatchesQuery(movie, normalizedQuery) {
  if (!normalizedQuery) return true;
  const castText = Array.isArray(movie.cast) ? movie.cast.join(" ") : String(movie.cast || "");
  const searchable = [
    movie.title,
    movie.director,
    castText,
    movie.genre,
    movie.mood,
    movie.year,
    movie.desc
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalizedQuery);
}

function updateSearchSuggestions(query) {
  const trimmed = query.trim().toLowerCase();
  clearSearchBtn.classList.toggle("visible", trimmed.length > 0);

  if (!trimmed) {
    searchSuggestions.classList.remove("open");
    return;
  }

  const matches = movies.filter((m) => movieMatchesQuery(m, trimmed)).slice(0, 6);

  if (matches.length === 0) {
    searchSuggestions.innerHTML = `
      <div style="padding: 0.8rem 1rem; color: var(--text-muted); font-size: 0.88rem;">
        No instant matches for "${escapeHTML(query.trim())}".
      </div>
    `;
    searchSuggestions.classList.add("open");
    return;
  }

  searchSuggestions.innerHTML = matches
    .map(
      (m) => `
      <button type="button" class="suggestion-item" data-id="${m.id}">
        <div>
          <div style="font-weight: 700;">${escapeHTML(m.emoji || "🎞️")} ${escapeHTML(m.title)} <span style="color: var(--text-muted); font-weight: 500;">(${Number(m.year)})</span></div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${escapeHTML(m.genre)} • ${escapeHTML(m.director)}</div>
        </div>
        <span style="color: var(--gold); font-weight: 800; font-size: 0.85rem;">⭐ ${Number(m.rating).toFixed(1)}</span>
      </button>
    `
    )
    .join("");

  searchSuggestions.classList.add("open");
}

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  searchSuggestions.classList.remove("open");
  renderMovies();
  searchInput.focus();
});

searchSuggestions.addEventListener("click", (e) => {
  const item = e.target.closest(".suggestion-item");
  if (!item) return;
  searchSuggestions.classList.remove("open");
  openDetailModal(Number(item.dataset.id));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchSuggestions.classList.remove("open");
  }
});

// Filtering
function getFilteredMovies() {
  const query = searchInput.value.trim().toLowerCase();
  const mood = moodFilter.value;
  const minRating = Number.parseFloat(ratingFilter.value) || 0;

  return movies.filter((movie) => {
    const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre;
    const matchesMood = mood === "all" || movie.mood === mood;
    const matchesRating = Number(movie.rating) >= minRating;
    const matchesQuery = movieMatchesQuery(movie, query);

    return matchesGenre && matchesMood && matchesRating && matchesQuery;
  });
}

function updateResultsHeading(count) {
  const parts = [];
  if (selectedGenre !== "all") parts.push(selectedGenre);
  if (moodFilter.value !== "all") parts.push(moodFilter.value);
  if (searchInput.value.trim()) parts.push(`"${searchInput.value.trim()}"`);

  resultsTitle.textContent = parts.length > 0 ? parts.join(" • ") : "All Movies";
  resultsCount.textContent = `Showing ${count} of ${movies.length} movies`;
}

// Render Grid
function renderMovies(list = getFilteredMovies()) {
  updateResultsHeading(list.length);

  if (list.length === 0) {
    movieGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: var(--bg-card); border: 1px solid var(--border-pink); border-radius: var(--radius);">
        <p class="muted-text" style="margin-bottom: 1rem;">No movies matched your search or filters.</p>
        <button type="button" id="resetAllFiltersBtn" class="btn btn-primary">✨ Reset All Filters</button>
      </div>
    `;
    return;
  }

  movieGrid.innerHTML = list
    .map((movie) => {
      const isSaved = watchlist.includes(movie.id);
      const castLine =
        Array.isArray(movie.cast) && movie.cast.length > 0
          ? `Starring ${escapeHTML(movie.cast.slice(0, 2).join(", "))}`
          : `Dir. ${escapeHTML(movie.director)}`;

      return `
        <article class="movie-card">
          <div class="poster-banner" style="background: ${movie.gradient}">
            <span class="poster-emoji">${escapeHTML(movie.emoji || "🎞️")}</span>
            <span class="rating-tag">⭐ ${Number(movie.rating).toFixed(1)}</span>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="tag tag-genre">${escapeHTML(movie.genre)}</span>
              <span class="tag tag-mood">${escapeHTML(movie.mood)}</span>
              <span class="tag tag-year">${Number(movie.year)}</span>
            </div>
            <h4 class="card-title">${escapeHTML(movie.title)}</h4>
            <p class="card-cast">${castLine}</p>
            <p class="card-desc">${escapeHTML(movie.desc)}</p>
            <div class="card-actions">
              <button type="button" class="btn btn-glass detail-btn" data-id="${movie.id}">Details</button>
              <button type="button" class="btn ${isSaved ? "btn-primary" : "btn-glass"} save-btn" data-id="${movie.id}">
                ${isSaved ? "💖 Saved" : "🤍 Save"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function resetAllFilters() {
  selectedGenre = "all";
  searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  searchSuggestions.classList.remove("open");
  moodFilter.value = "all";
  ratingFilter.value = "0";
  genrePills.querySelectorAll(".pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.genre === "all");
  });
  renderMovies();
}

// Grid Event Delegation
movieGrid.addEventListener("click", (e) => {
  if (e.target.closest("#resetAllFiltersBtn")) {
    resetAllFilters();
    return;
  }

  const detailBtn = e.target.closest(".detail-btn");
  if (detailBtn) {
    openDetailModal(Number(detailBtn.dataset.id));
    return;
  }

  const saveBtn = e.target.closest(".save-btn");
  if (saveBtn) {
    toggleWatchlist(Number(saveBtn.dataset.id));
  }
});

// Search & Filter Listeners
searchInput.addEventListener("input", () => {
  updateSearchSuggestions(searchInput.value);
  renderMovies();
});

searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) {
    updateSearchSuggestions(searchInput.value);
  }
});

moodFilter.addEventListener("change", () => renderMovies());
ratingFilter.addEventListener("change", () => renderMovies());

genrePills.addEventListener("click", (e) => {
  const pill = e.target.closest(".pill");
  if (!pill) return;

  genrePills.querySelectorAll(".pill").forEach((btn) => btn.classList.remove("active"));
  pill.classList.add("active");
  selectedGenre = pill.dataset.genre;
  renderMovies();
});

// Watchlist
function toggleWatchlist(id) {
  const numericId = Number(id);
  if (watchlist.includes(numericId)) {
    watchlist = watchlist.filter((item) => item !== numericId);
  } else {
    watchlist.push(numericId);
  }
  safeSaveJSON(WATCHLIST_STORAGE_KEY, watchlist);
  updateWatchlistUI();
  renderMovies();
}

function updateWatchlistUI() {
  watchlistCount.textContent = String(watchlist.length);
  const savedMovies = movies.filter((m) => watchlist.includes(m.id));

  if (savedMovies.length === 0) {
    watchlistItems.innerHTML = `<p class="muted-text">Your watchlist is empty. Click "Save" on any movie card!</p>`;
    return;
  }

  watchlistItems.innerHTML = savedMovies
    .map(
      (m) => `
      <div class="watchlist-item">
        <div>
          <strong>${escapeHTML(m.emoji || "🎞️")} ${escapeHTML(m.title)}</strong>
          <div class="muted-text">${Number(m.year)} • ⭐ ${Number(m.rating).toFixed(1)}</div>
        </div>
        <button type="button" class="icon-btn remove-watchlist-btn" data-id="${m.id}" aria-label="Remove ${escapeHTML(m.title)}">🗑️</button>
      </div>
    `
    )
    .join("");
}

watchlistItems.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-watchlist-btn");
  if (removeBtn) {
    toggleWatchlist(Number(removeBtn.dataset.id));
  }
});

// Drawer & Modals
function openDrawer() {
  watchlistDrawer.classList.add("open");
  watchlistDrawer.setAttribute("aria-hidden", "false");
  drawerBackdrop.classList.add("show");
}

function closeDrawer() {
  watchlistDrawer.classList.remove("open");
  watchlistDrawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.classList.remove("show");
}

document.getElementById("openWatchlistBtn").addEventListener("click", openDrawer);
document.getElementById("closeWatchlistBtn").addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

function openDetailModal(id) {
  const movie = movies.find((m) => m.id === Number(id));
  if (!movie) return;

  const castText =
    Array.isArray(movie.cast) && movie.cast.length > 0 ? movie.cast.join(", ") : "Not listed";

  document.getElementById("detailTitle").textContent = `${movie.emoji || "🎞️"} ${movie.title} (${movie.year})`;
  document.getElementById("detailBody").innerHTML = `
    <p><strong>Director:</strong> ${escapeHTML(movie.director)}</p>
    <p><strong>Cast:</strong> ${escapeHTML(castText)}</p>
    <p><strong>Genre:</strong> ${escapeHTML(movie.genre)} | <strong>Mood:</strong> ${escapeHTML(movie.mood)}</p>
    <p><strong>IMDb Rating:</strong> ⭐ ${Number(movie.rating).toFixed(1)}/10</p>
    <p style="margin-top: 1rem; color: var(--text-muted);">${escapeHTML(movie.desc)}</p>
  `;
  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetailModal() {
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeDetailBtn").addEventListener("click", closeDetailModal);
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) closeDetailModal();
});

// 3-Step Smart Quiz
const quizSteps = [
  {
    key: "mood",
    question: "Step 1/3: What kind of vibe are you in the mood for tonight?",
    options: ["Feel-Good", "Mind-Bending", "Thrilling", "Emotional"]
  },
  {
    key: "genre",
    question: "Step 2/3: Pick a favorite genre:",
    options: ["Sci-Fi", "Animation", "Thriller", "Romance", "Drama", "Comedy"]
  },
  {
    key: "era",
    question: "Step 3/3: Do you prefer newer releases or modern classics?",
    options: ["2018 or Newer", "Before 2018", "Any Year"]
  }
];

function startQuiz() {
  quizAnswers = {};
  currentQuizStep = 0;
  renderQuizStep(0);
  quizModal.classList.add("open");
  quizModal.setAttribute("aria-hidden", "false");
}

function closeQuizModal() {
  quizModal.classList.remove("open");
  quizModal.setAttribute("aria-hidden", "true");
}

function renderQuizStep(stepIndex) {
  const step = quizSteps[stepIndex];
  quizBody.innerHTML = `
    <p><strong>${escapeHTML(step.question)}</strong></p>
    <div class="quiz-options">
      ${step.options
        .map(
          (opt, idx) =>
            `<button type="button" class="quiz-option" data-option-index="${idx}">${escapeHTML(opt)}</button>`
        )
        .join("")}
    </div>
  `;
}

quizBody.addEventListener("click", (e) => {
  const optionBtn = e.target.closest(".quiz-option");
  if (optionBtn) {
    const idx = Number(optionBtn.dataset.optionIndex);
    quizAnswers[quizSteps[currentQuizStep].key] = quizSteps[currentQuizStep].options[idx];

    if (currentQuizStep + 1 < quizSteps.length) {
      currentQuizStep += 1;
      renderQuizStep(currentQuizStep);
    } else {
      showQuizResult();
    }
    return;
  }

  const saveQuizBtn = e.target.closest(".quiz-save-btn");
  if (saveQuizBtn) {
    toggleWatchlist(Number(saveQuizBtn.dataset.id));
    closeQuizModal();
    return;
  }

  if (e.target.closest(".quiz-retake-btn")) {
    startQuiz();
  }
});

function showQuizResult() {
  const scored = movies.map((m) => {
    let score = 0;
    if (m.mood === quizAnswers.mood) score += 3;
    if (m.genre === quizAnswers.genre) score += 3;
    if (quizAnswers.era === "2018 or Newer" && m.year >= 2018) score += 1;
    if (quizAnswers.era === "Before 2018" && m.year < 2018) score += 1;
    return { movie: m, score };
  });

  scored.sort((a, b) => b.score - a.score || b.movie.rating - a.movie.rating);
  const best = scored[0].movie;

  quizBody.innerHTML = `
    <p class="muted-text">Your Top Personalized Match:</p>
    <h2 style="margin: 0.5rem 0;">${escapeHTML(best.emoji || "🎞️")} ${escapeHTML(best.title)} (${Number(best.year)})</h2>
    <p><strong>${escapeHTML(best.genre)}</strong> • <strong>${escapeHTML(best.mood)}</strong> • ⭐ ${Number(best.rating).toFixed(1)}</p>
    <p style="margin: 1rem 0; color: var(--text-muted);">${escapeHTML(best.desc)}</p>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button type="button" class="btn btn-primary quiz-save-btn" data-id="${best.id}">
        💖 Add to Watchlist
      </button>
      <button type="button" class="btn btn-glass quiz-retake-btn">Retake Quiz</button>
    </div>
  `;
}

document.getElementById("openQuizBtn").addEventListener("click", startQuiz);
document.getElementById("closeQuizBtn").addEventListener("click", closeQuizModal);
quizModal.addEventListener("click", (e) => {
  if (e.target === quizModal) closeQuizModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchSuggestions.classList.remove("open");
    closeDrawer();
    closeDetailModal();
    closeQuizModal();
  }
});

// Validated Suggest a Movie Form
suggestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelectorAll(".error-msg").forEach((el) => {
    el.textContent = "";
  });
  const successEl = document.getElementById("formSuccess");
  successEl.textContent = "";

  const title = document.getElementById("movieTitle").value.trim();
  const year = Number.parseInt(document.getElementById("movieYear").value, 10);
  const genre = document.getElementById("movieGenre").value;
  const mood = document.getElementById("movieMood").value;
  const rating = Number.parseFloat(document.getElementById("movieRating").value);
  const director = document.getElementById("movieDirector").value.trim();
  const desc = document.getElementById("movieDesc").value.trim();

  let isValid = true;

  if (title.length < 2) {
    document.getElementById("titleError").textContent = "Please enter a valid movie title.";
    isValid = false;
  }
  if (Number.isNaN(year) || year < 1900 || year > 2030) {
    document.getElementById("yearError").textContent = "Enter a year between 1900 and 2030.";
    isValid = false;
  }
  if (!genre) {
    document.getElementById("genreError").textContent = "Please select a genre.";
    isValid = false;
  }
  if (!mood) {
    document.getElementById("moodError").textContent = "Please select a mood.";
    isValid = false;
  }
  if (Number.isNaN(rating) || rating < 1 || rating > 10) {
    document.getElementById("ratingError").textContent = "Rating must be between 1.0 and 10.0.";
    isValid = false;
  }
  if (director.length < 2) {
    document.getElementById("directorError").textContent = "Please enter the director's name.";
    isValid = false;
  }
  if (desc.length < 15) {
    document.getElementById("descError").textContent = "Synopsis must be at least 15 characters.";
    isValid = false;
  }

  if (!isValid) return;

  const newMovie = {
    id: Date.now(),
    title,
    year,
    genre,
    mood,
    rating,
    director,
    cast: [],
    emoji: "🎞️",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6, #38bdf8)",
    desc
  };

  movies.unshift(newMovie);
  safeSaveJSON(MOVIES_STORAGE_KEY, movies);
  renderMovies();
  suggestForm.reset();
  successEl.textContent = `✨ "${title}" was added and saved to your catalog!`;
});

// Initialize
renderMovies();
updateWatchlistUI();




