const showData = (arr) => {
  const { result } = arr;
  const listBlock = document.querySelector('.list-block');
  if (!result.length) {
    listBlock.innerHTML = '<div class="empty-data">Nothing to show</div>';
  } else {
    result.forEach((x) => {
      listBlock.innerHTML += `<p class="data">${x.user}: ${x.score}</p>`;
    });
  }
};

export default showData;