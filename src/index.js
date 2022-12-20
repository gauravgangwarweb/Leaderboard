import './style.css';
import addNew from './modules/postData.js';
import { showPlayerdata } from './modules/getData.js';

//Add palyer data
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addNew();
});

//show data
showPlayerdata();

// Show data
const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});