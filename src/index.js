import SlimSelect from 'slim-select';

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

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
  .then(json => {
    // делаем проверку получения данных
    // если нет данных - тогда ошибка 
    if('message' in json) {
      loader.classList.add('visually-hidden')
      throw new Error();
      } 
      //если данные есть - рендерим разметку
      breedList.classList.remove('visually-hidden')
      loader.classList.add('visually-hidden')
      renderBreedsList(json)
  })
  .catch(error => onError(error));
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
  
  loader.classList.remove('visually-hidden')
  catInfo.classList.add('visually-hidden')

  fetchCatByBreed(breedId)
  .then(json => {
    if (json.length === 0) {
      // делаем проверку данных
      loader.classList.add('visually-hidden')
      throw new Error();
    }
    //если данные есть - рендерим разметку
    loader.classList.add('visually-hidden')
    renderCatInfo(json)
    catInfo.classList.remove('visually-hidden')
  }) 
  .catch(error => onError(error));
}

// функция создания разметки для информации о породе 
function renderCatInfo(breedData) {
  
  // добавляем url
  const markupUrl = breedData
    .map((item) => {
      return `
      <img src="${item.url}" width="500">              
      `;
  });

  // вытягиваем и добавляем описание кота
  const markupName = breedData
    .flatMap(elem => elem.breeds)
    .map((item) => {
      return `
      <div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>  
        <p><span style="font-size:120%; font-weight:bold">Temperament:</span> ${item.temperament}.</p>
      </div>              
      `;
  });

  // вставляем разметку в код
  catInfo.innerHTML = markupUrl + markupName;
}

// функция вывода ошибки
function onError(err){
  error.classList.remove('visually-hidden');
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
}

breedList.addEventListener('change', getSelectBreed)







  