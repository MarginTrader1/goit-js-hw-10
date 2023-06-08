import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

const breedList = document.querySelector('.breed-select');
const KEY_API = 'live_sEDFMHRNSodHCaL7awGvLr0m2GM2ft2fhMh0p4uHuGLReqOu194EfLuWmNYD9tGw';
const url = `https://api.thecatapi.com/v1/breeds`;

// вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => { 
  fetchBreeds(url)
});

// получаем породы и вызываем функцию создания разметки 
function fetchBreeds(url) {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => renderBreedsList(json)) 
    .catch(error => {
      // Error handling
    });
}    

// функция создания разметки 
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

function getCat(){
  
}