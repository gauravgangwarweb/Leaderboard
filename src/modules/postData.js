const addNew = async () => {
  const inpName = document.querySelector('.inp-name');
  const inpScore = document.querySelector('.inp-score');
  const emptyBLock = document.querySelector('.empty-data');
  const alert = document.querySelector('.alert-block2');
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
    .then((data) => {
      emptyBLock.innerHTML = `<p class="alert">${data.result}</p>`;
      alert.innerHTML = '<p class="alert-2">Please click on refresh button to see the recent player data</p>';
    });
};

export default addNew;