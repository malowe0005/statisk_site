const myCategori = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader... med categori:", myCategori);

const listContainer = document.querySelector(".productlist_grid");
const catagoriH2 = document.querySelector(".catagoriH2");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategori}`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products

    .map(
      (product) => `
      <div class="productlist_subgrid">
        <a href="produkt.html?id=${product.id}"><img class="${product.soldout && "soldOut"}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" /></a>
        <h3>${product.productdisplayname}</h3>
        <p>${product.articletype} - ${product.usagetype}</p>
        <p class="onSale ${product.discount && "show"}">-${product.discount}%</p>
        <p class="sale ${product.discount && "show"}">Now DKK ${product.discount && Math.floor(product.price * (product.discount / 100))},-</p>
         <p class="${product.discount && "prev"}">DKK ${product.price},-</p>
      </div>`
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategori}`)
  .then((Response) => Response.json())
  .then((data) => {
    catagoriH2.innerHTML = `
   <h3>${myCategori}</h3>`;
  });
