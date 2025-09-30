document.getElementById("loadBtn").addEventListener("click", () => {
  const name = document.getElementById("pokemonName").value.toLowerCase();

  // Hvis feltet er tomt, henter vi fx "pikachu" som standard
  const url = `https://pokeapi.co/api/v2/pokemon/${name || "pikachu"}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Der opstod en fejl: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Kig i konsollen for at se datastrukturen
      view(data);
    })
    .catch(error => {
      document.getElementById("output").innerHTML =
        `<p style="color:red;">${error.message}</p>`;
    });
});

function view(data) {
  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>Navn: ${data.name}</h2>
    <p>Højde: ${data.height}</p>
    <p>Vægt: ${data.weight}</p>
    <img src="${data.sprites.front_default}" alt="${data.name}">
  `;
}