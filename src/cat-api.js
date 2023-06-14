
// получаем породы 
function fetchBreeds(url) {
  return fetch(url)
  .then(response => response.json())
}   

// получаем кота по введенной породе 
function fetchCatByBreed(breedId){
  
  const KEY_API = 'live_sEDFMHRNSodHCaL7awGvLr0m2GM2ft2fhMh0p4uHuGLReqOu194EfLuWmNYD9tGw';
  const urlСatByBreed = `https://api.thecatapi.com/v1/images/search?api_key=${KEY_API}&limit=1&breed_ids=${breedId}`

  return fetch(urlСatByBreed)
  .then(response => response.json())
  }

export { fetchBreeds,fetchCatByBreed }; 