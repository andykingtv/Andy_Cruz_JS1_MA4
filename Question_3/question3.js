const gamesUrl = "https://api.rawg.io/api/games/4200";

async function fetchGame() {
  try {
    const response = await fetch(gamesUrl);
    const games = await response.json();
    createGameDetails(games);
  } catch (error) {
    console.log(error);
  }
}

function createGameDetails(game) {
  console.log(game);

  const gameTitle = document.querySelector(".container h1");
  gameTitle.innerHTML = game.name;

  const gamePicture = document.querySelector(".image");
  gamePicture.style.backgroundImage = `url(${game.background_image})`;

  const gameText = document.querySelector(".description");
  gameText.innerHTML = game.description;
}

fetchGame();
