import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

const KEY_API = 'live_sEDFMHRNSodHCaL7awGvLr0m2GM2ft2fhMh0p4uHuGLReqOu194EfLuWmNYD9tGw';
const url = `https://api.thecatapi.com/v1/breeds/`;

fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))


const selectElem = document.querySelector('.breed-select');

selectElem.addEventListener('click', handleClick);

function handleClick (event) {
   
}