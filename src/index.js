import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#selectElement'
})

const breedList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

const url = `https://api.thecatapi.com/v1/breeds`;


// вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => { 
  fetchBreeds(url)
  .then(json => renderBreedsList(json))
  .catch(error => {
    // Error handling
  });;
});

// функция создания разметки при перезагрузке страницы 
function renderBreedsList(breeds) {
  const markup = breeds
    .map((breed) => {
      return `
      <option value="${breed.id}">${breed.name}</option>
      `;
    })
    .join("");
  breedList.innerHTML = markup;
}

// получаем выбранное значение породы 
function getSelectBreed(e){
  const breedId = e.target.value;
  
  fetchCatByBreed(breedId)
  .then(json => renderCatInfo(json)) 
  .catch(error => {
    // Error handling
  });;
}

// создания разметки для информации о породе 
function renderCatInfo(breedData) {
  
  // добавляем url
  const markupUrl = breedData
    .map((item) => {
      return `
      <img src="${item.url}" width="500">              
      `;
  });

  // вытягиваем и добавляем описание и имя
  const markupName = breedData
    .flatMap(elem => elem.breeds)
    .map((item) => {
      return `
      <div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>  
        <p><span style="font-size:120%; font-weight:bold;">Temperament:</span> ${item.temperament}.</p>
      </div>              
      `;
  });

  // вставляем разметку в код
  catInfo.innerHTML = markupUrl + markupName;
}

breedList.addEventListener('change', getSelectBreed)






  