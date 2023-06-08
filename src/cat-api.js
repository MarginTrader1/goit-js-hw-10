function fetchBreeds() {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => console.log(json.map(element => element.name)))
    .catch(error => {
      // Error handling
    });
  }   