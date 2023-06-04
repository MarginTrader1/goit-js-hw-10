import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(json => console.log(json))


const selectElem = document.querySelector('.breed-select');

selectElem.addEventListener('click', handleClick);

function handleClick (event) {
   
}