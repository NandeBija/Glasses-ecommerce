let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Seasons polerised glasses #black ",
        category: "Women",
        price: 420.99,
        img: "https://media.takealot.com/covers_images/a15b9e53a240406bbef3c3bcf2bcf7f6/s-pdpxl.file",
      },
      {
        title: "Seasons Coin glasses #black + gold",
        category: "Men",
        price: 229.99,
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hhZGVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      },
      {
        title: "Seasons Summer-meowie #blood red",
        category: "Women",
        price: 158.99,
        img: "https://i.pinimg.com/736x/1b/66/4c/1b664c00c6bf3170d428c0bc564c80a9.jpg",
      },
      {
        title: "Seasons Coin glasses #midnightGreen + gold",
        category: "Men",
        price: 189.99,
        img: "https://cdn.shopify.com/s/files/1/0661/7423/products/airplane-mode-002-front_250x250@2x.jpg?v=1620045390",
      },
      {
        title: "Seasons Summer izaza #sunset pink",
        category: "Kids",
        price: 133.59,
        img: "https://realshades.com/wp-content/uploads/2018/08/screen-shades-pink.jpg",
      },

      {
        title: "Seasons Sahara #BeeInspired",
        category: "Men",
        price: 345.99,
        img: "https://media.istockphoto.com/photos/croatian-beach-mirroring-in-sunglasses-on-towel-picture-id1278067767?b=1&k=20&m=1278067767&s=170667a&w=0&h=CGCBCIQDyuagQaiyO0LanJk-JL4Wl0_akEjonhL3ArQ=",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// Read
function readProducts(products) {
  document.querySelector("#badge").innerHTML = cart.length;
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <p>Quantity:<p>
        
          <input type="number" min=1 value=1 id="addtoCart${position}" style="width:150px">

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart" onclick="addtoCartProduct(${position})"><i class="material-icons">shopping_cart</i></button>
          
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editProduct${position}" ><i class="material-icons">edit</i>
          </button>
          <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
          <i class="material-icons">delete</i>
          </button>
          
          

           
              <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                          
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    `;
  });
}

readProducts(products);

// Create
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// Update
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// Delete
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}

// Add to Cart
function addtoCartProduct(position) {
  let qty = document.querySelector(`#addtoCart${position}`).value;

  cart.push({ ...products[position], qty });
  document.querySelector("#badge").innerHTML = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Sorting by Category
function sortbyCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// Sorting by name

function sortbyName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}

// Sorting by price

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}
