import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#selectElement'
})

const breedList = document.querySelector('.breed-select');

const url = `https://api.thecatapi.com/v1/breeds`;

// вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => { 
  fetchBreeds(url);
});

// получаем выбранное значение породы 
function getSelectBreed(e){
  const breedId = e.target.value;
  fetchCatByBreed(breedId);
}

breedList.addEventListener('change', getSelectBreed)






  