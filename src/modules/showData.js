const showData = (arr) => {
  const { result } = arr;
  const listBlock = document.querySelector('.list-block');
  const totalPlyrs = document.querySelector('.total-plyrs');
  let count = 0;
  if (!result.length) {
    listBlock.innerHTML = '<div class="empty-data">Nothing to show</div>';
  } else {
    result.forEach((x) => {
      count++;
      listBlock.innerHTML += `<p class="data">${x.user}: ${x.score}</p>`;
    });
  }
  totalPlyrs.innerHTML = `<p>Total Players: ${count}</p>`;
};

export default showData;