let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// console.log(cart);

function readProducts(products) {
  document.querySelector("#cart").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector(
      "#cart"
    ).innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${product.img}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      
      <p class="card-text">R${product.price * product.qty}</p>
      <a href="#" class="btn btn-danger" data-target="#cart" onclick="deleteCart(${position})"><i class="material-icons">delete</i></a>
    </div>
  </div>`;
  });
}
readProducts(cart);

// DELETE FROM CART

function deleteCart(position) {
  cart.splice(position, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  readProducts(cart);
}

// CART TOTAL
