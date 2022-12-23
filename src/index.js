import './style.css';
import addNew from './modules/postData.js';
import showPlayerdata from './modules/getData.js';

// Add palyer data
const addBtn = document.querySelector('.add-btn');
const emptyBLock = document.querySelector('.empty-data');
const inpName = document.querySelector('.inp-name');
const inpScore = document.querySelector('.inp-score');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!inpName.value || !inpScore.value) {
    emptyBLock.innerHTML = '<p class="alert">Please add name and score</p>';
  } else {
    addNew();
  }
});

// show data
showPlayerdata();

// Show data
const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});