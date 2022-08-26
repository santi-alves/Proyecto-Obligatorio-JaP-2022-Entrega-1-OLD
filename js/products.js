/* ----------- Variables ----------- */
/* ----------- URL con contenido en formato JSON ----------- */
const URLProductosAutos =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";
/* ------------------------------------------------------ */

/* ----------------- Event listener DOMContentLoaded ----------------- */
document.addEventListener("DOMContentLoaded", async function () {
  /* ------------------------------------------------------ */
  /* ----------- definicion de la funcion que genera contenido ----------- */
  const mainContainer = document.querySelector(".main-container");
  function generateHTMLContent(product) {
    return `<div data-id="${product.id}" class="sub-container-01 margin-05" >
              <div class="img-container">
                <a class="img-anchor" href="#">
                  <img class="img-product" src="${product.image}" alt="Imágen de vehículo" />
                </a>
              </div>
              <div class="sub-container-02">
                <h3 class="sub-heading-01">
                  <a class="text-anchor no-underline" href="#">${product.name} - ${product.currency} ${product.cost}</a>
                </h3>
                <p class="description">
                ${product.description}
                </p>
                <p class="further-reading">
                  <a class="text-anchor no-underline" href="#">Ver más...</a>
                </p>
                <p class="sold-amount">${product.soldCount} vendidos</p>
              </div>
            </div>
          </div>`;
  }
  /* ------------------------------------------------------ */
  /* ----------- Llamado a la funcion que genera el contenido a partir de la respuesta que devuelve fetch a la URL que contiene el array de objetos en formato .json ----------- */
  const objProductosAutos = await getJSONData(URLProductosAutos);
  objProductosAutos.data.products.forEach((auto) => {
    mainContainer.innerHTML += generateHTMLContent(auto);
  });
  /* ---------------------------------------------------- */
});
/* ---------------------------------------------------- */
