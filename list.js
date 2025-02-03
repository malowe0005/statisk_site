const myCategori = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader... med categori:", myCategori);

const listContainer = document.querySelector(".productlist_grid");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategori}`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) => `<div class="productlist_subgrid">
        <a href="produkt.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" /></a>
        <h3>${product.productdisplayname}</h3>
        <p>${product.articletype} - ${product.usagetype}</p>
         <p>DKK ${product.price},-</p>
      </div>`
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
