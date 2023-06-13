const catInfo = document.querySelector('.cat-info');
const KEY_API = 'live_sEDFMHRNSodHCaL7awGvLr0m2GM2ft2fhMh0p4uHuGLReqOu194EfLuWmNYD9tGw';

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// получаем породы и вызываем функцию создания разметки 
function fetchBreeds(url) {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    error.classList.add("visually-hidden")
    loader.classList.add("visually-hidden")
    return response.json();
  })
  .then(json => renderBreedsList(json))
  .catch(error => {
    // Error handling
    error.classList.remove("visually-hidden")
  });
}   

// функция создания разметки при перезагрузке страницы 
function renderBreedsList(breeds) {
  
  const breedList = document.querySelector('.breed-select');
  
  const markup = breeds
    .map((breed) => {
      return `
      <option value="${breed.id}">${breed.name}</option>
      `;
    })
    .join("");
  breedList.innerHTML = markup;
}

// получаем кота по введенной породе 
function fetchCatByBreed(breedId){
  
  const urlСatByBreed = `https://api.thecatapi.com/v1/images/search?api_key=${KEY_API}&limit=1&breed_ids=${breedId}`
  
  fetch(urlСatByBreed)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      error.classList.add("visually-hidden")
      return response.json();
    })
    .then(json => renderCatInfo(json)) 
    .catch(error => {
      // Error handling
    });
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
      <h2>${item.name}</h2>
      <p>${item.description}</p>              
      `;
  });

  // вставляем разметку в код
  catInfo.innerHTML = markupUrl + markupName;
}


export { fetchBreeds,fetchCatByBreed }; 