const API_KEY = process.env.API_KEY;

export default {
  fetchAction: {
    title: "Action",
    url: `/games?genres=4&key=${API_KEY}`,
  },
  fetchIndie: {
    title: "Indie",
    url: `/games?genres=51&key=${API_KEY}`,
  },
  fetchAdventure: {
    title: "Adventure",
    url: `/games?genres=3&key=${API_KEY}`,
  },
  RPG: {
    title: "Action",
    url: `/games?genres=5&key=${API_KEY}`,
  },
  fetchAdventure: {
    title: "Adventure",
    url: `/games?genres=3&key=${API_KEY}`,
  },
  fetchRPG: {
    title: "RPG",
    url: `/games?genres=5&key=${API_KEY}`,
  },
  fetchStrategy: {
    title: "Strategy",
    url: `/games?genres=10&key=${API_KEY}`,
  },
  fetchShooter: {
    title: "Shooter",
    url: `/games?genres=2&key=${API_KEY}`,
  },
  fetchCasual: {
    title: "Casual",
    url: `/games?genres=40&key=${API_KEY}`,
  },
  fetchSimulation: {
    title: "Simulation",
    url: `/games?genres=14&key=${API_KEY}`,
  },
  fetchPuzzle: {
    title: "Puzzle",
    url: `/games?genres=7&key=${API_KEY}`,
  },
  fetchArcade: {
    title: "Arcade",
    url: `/games?genres=11&key=${API_KEY}`,
  },
  fetchPlatformer: {
    title: "Platformer",
    url: `/games?genres=83&key=${API_KEY}`,
  },
  fetchRacing: {
    title: "Racing",
    url: `/games?genres=1&key=${API_KEY}`,
  },
  fetchMassivelyMultiplayer: {
    title: "Massively Multiplayer",
    url: `/games?genres=59&key=${API_KEY}`,
  },
  fetchSports: {
    title: "Sports",
    url: `/games?genres=15&key=${API_KEY}`,
  },
  fetchFighting: {
    title: "Fighting",
    url: `/games?genres=6&key=${API_KEY}`,
  },
  fetchFamily: {
    title: "Family",
    url: `/games?genres=19&key=${API_KEY}`,
  },
  fetchBoardGames: {
    title: "Board Games",
    url: `/games?genres=28&key=${API_KEY}`,
  },
  fetchEducational: {
    title: "Educational",
    url: `/games?genres=34&key=${API_KEY}`,
  },
  fetchCard: {
    title: "Card",
    url: `/games?genres=17&key=${API_KEY}`,
  },
};
