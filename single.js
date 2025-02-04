const productContainer = document.querySelector(".product_grid");
// const productId = 15345;

const ProductId = new URLSearchParams(window.location.search).get("id");
console.log("produkt loader... med id:", ProductId);

fetch(`https://kea-alt-del.dk/t7/api/products/${ProductId}`)
  .then((Response) => Response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <img class="${data.soldout && "soldOut"}" src="https://kea-alt-del.dk/t7/images/webp/640/${ProductId}.webp" alt="" />

      <div class="product_info">
      <h2 class="out ${data.soldout && "show"}">SOLD OUT</h2>
        <h1>${data.productdisplayname}</h1>
        <h4>${data.articletype} - ${data.usagetype}</h4>

        <h3>Sizes</h3>
        <div class="size">
          <button class="small">S</button>
          <button class="medium">M</button>
          <button class="large">L</button>
        </div>

       <h3 class="sale ${data.discount && "show"}">-${data.discount}%</h3>
        <h3 class="sale ${data.discount && "show"}">Now DKK ${data.discount && Math.floor(data.price * (data.discount / 100))},-</h3>
         <h3 class="${data.discount && "prev"}">DKK ${data.price},-</h3>
        <button class="${data.soldout && "prev"}">Add to basket</button>
      </div>
        `;
  });
