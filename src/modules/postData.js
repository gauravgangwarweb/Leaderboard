const addNew = async () => {
  const inpName = document.querySelector('.inp-name');
  const inpScore = document.querySelector('.inp-score');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOk4bpeeBIDml5xqab0K/scores/';

  const playerData = {
    user: inpName.value,
    score: inpScore.value,
  };

  const prost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerData),
  };
  await fetch(url, prost).then((response) => response.json())
    .then(() => {
      window.location.reload();
    });
};

export default addNew;