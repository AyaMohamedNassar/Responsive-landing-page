let products = null;
// get datas from file json
fetch("../JS/product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showDetail();
  });

function showDetail() {
  // remove datas default from HTML
  let detail = document.querySelector(".detail");
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = products.filter((value) => value.id == productId)[0];
  //if there is no product with id = productId => return to home page
  if (!thisProduct) {
    window.location.href = "/";
  }

  detail.querySelector(".image img").src = thisProduct.image;
  detail.querySelector(".name").innerText = thisProduct.name;
  detail.querySelector(".price").innerText = "$" + thisProduct.price;
  detail.querySelector(".description").innerText =
    "$" + thisProduct.description;
}

//Shoping Cart

let addToCard = document.querySelector(".addCart");
let listCartHTML = document.querySelector(".listCart");
let iconCart = document.querySelector(".icon-cart");
let iconCartSpan = document.querySelector(".icon-cart span");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");

let cart = [];

//Add to cart
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

addToCard.addEventListener("click", (event) => {
  let positionClick = event.target;

  if (positionClick.classList.contains("addCart")) {
    let id_product = new URLSearchParams(window.location.search).get("id");
    addToCart(id_product);
  }
});

const addToCart = (product_id) => {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );

  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
};
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;

  if (cart.length > 0) {
    console.log(cart);
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;

      let newItem = document.createElement("div");

      newItem.classList.add("item");

      newItem.dataset.id = item.product_id;

      console.log(item);

      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      console.log(positionProduct);

      let info = products[positionProduct];
      listCartHTML.appendChild(newItem);
      newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                   <span><i class="fa-solid fa-arrow-up plus"></i></span> 
                    <span>${item.quantity}</span>
                    <span><i class="fa-solid fa-arrow-down minus"></i></span>
                </div>
            `;
    });
  }
  iconCartSpan.innerText = totalQuantity;
};

listCartHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id =
      positionClick.parentElement.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantityCart(product_id, type);
  }
});

const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    let info = cart[positionItemInCart];
    switch (type) {
      case "plus":
        cart[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
};

const initApp = () => {
  // get data product
  fetch("../JS/product.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML();
      }
    });
};
initApp();
