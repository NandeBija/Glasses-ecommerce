let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// console.log(cart);

function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">R${product.price}</p>
            
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
              Edit
            </button>
            <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
              Delete
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cart" onclick="addtoCart(${position})">Add to Cart</button>
            
  
             
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
  readProducts(products);
}
