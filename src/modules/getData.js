import showData from './showData.js';

const showPlayerdata = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOk4bpeeBIDml5xqab0K/scores/';
  await fetch(url).then((response) => response.json())
    .then((data) => showData(data));
};

export default showPlayerdata;