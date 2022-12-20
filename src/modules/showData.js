const showData = (arr) => {
    let result = arr.result;
    const listBlock = document.querySelector('.list-block');
    if(!result.length){
        listBlock.innerHTML = `<div class="empty-data">Nothing to show</div>`
    } else {
        result.forEach((x) => {
            listBlock.innerHTML += `<p>${x.user}: ${x.score}</p>`
        })
    }
}

export default showData