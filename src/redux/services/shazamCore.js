const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "44feaf607bmshfd51d0b4de8b6d4p1cd0cfjsnceb664c97f90",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
