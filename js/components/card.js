export function renderCards() {
  const grid = document.querySelector(".companies__grid");
  if (!grid) return;

  fetch("./data/cards.json")
    .then(response => response.json())
    .then(data => {
      const companies = data.companies.filter(c => !c.featured);
      let html = "";
      companies.forEach(company => {
        html += `<article class="card">
          <img class="card__icon" src="./assets/icons/${company.icon}" alt="${company.name}" width="48" height="48">
          <h3 class="card__name">${company.name}</h3>
          <a class="card__link" href="${company.link}">Learn more</a>
        </article>`;
      });
      grid.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando companies:", error);
      grid.innerHTML = "";
    });
}
