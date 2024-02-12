// // Slider
var images = document.getElementsByClassName("scrollbar-item");
imagesLenght = images.length;
var index = 0;

function showImages(index) {
  if (index >= imagesLenght) index = 0;

  for (var i = 0; i < imagesLenght; i++) {
    images[i].style.display = "none";
  }

  images[index].style.display = "block";
  index++;
}
function nextPhoto() {
  index = (index + 1) % imagesLenght;
  showImages(index);
}

function prevPhoto() {
  index = (index - 1 + imagesLenght) % imagesLenght;
  showImages(index);
}

//Form Validation
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phonedInput = document.getElementById("phone");
var passwordInput = document.getElementById("password");

var nameEmpty = document.getElementById("nameEmpty");
var nameError = document.getElementById("errorMsgUserName");
var emailEmpty = document.getElementById("emailEmpty");
var emailError = document.getElementById("errorMsgEmail");
var passwordEmpty = document.getElementById("passwordEmpty");
var passwordError = document.getElementById("passwordError");

var phoneError = document.getElementById("errorMsgPhone");

var namePattern = /^[a-zA-Z]+$/;
var emailPatter = /@(gmail|yahoo|outlook).com/;
var phonePattern = /^(011|012|010)/;
function inputValidation() {
  if (nameInput.value == false) {
    nameEmpty.classList.remove("hide");
  } else {
    nameEmpty.classList.add("hide");
  }

  if (
    (!isNaN(nameInput.value) || namePattern.test(nameInput.value) == false) &&
    nameInput.value != false
  ) {
    nameError.classList.remove("hide");
  } else {
    nameError.classList.add("hide");
  }

  if (emailInput.value == false) {
    emailEmpty.classList.remove("hide");
  } else {
    emailEmpty.classList.add("hide");
  }

  if (
    emailPatter.test(emailInput.value) == false &&
    emailInput.value != false
  ) {
    emailError.classList.remove("hide");
  } else {
    emailError.classList.add("hide");
  }

  if (passwordInput.value == false) {
    passwordEmpty.classList.remove("hide");
  } else {
    passwordEmpty.classList.add("hide");
  }

  if (passwordInput.value.length < 8 && passwordInput.value != false) {
    passwordError.classList.remove("hide");
  } else {
    passwordError.classList.add("hide");
  }

  var flag = phonePattern.test(phonedInput.value);

  if (
    phonedInput.value.length != 11 ||
    isNaN(phonedInput.value) ||
    flag == false
  ) {
    phoneError.classList.remove("hide");
  } else {
    phoneError.classList.add("hide");
  }
}

//Product List

let listProductHTML = document.getElementsByClassName("listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCart = document.querySelector(".icon-cart");
let iconCartSpan = document.querySelector(".icon-cart span");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let products = null;
let cart = [];

function addDataToHTML() {
  // remove datas default from HTML

  // add new datas
  if (products != null) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
      <img src="${
        product.image
      }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
        product.id
      }'">
      <h2>${product.name}</h2>
      <div class="price">$${product.price}</div>
      
      <div class="stars">
        ${"★".repeat(5)}
      </div>

      <button class="addCart">Add to Cart</button>
    `;
      listProductHTML[0].appendChild(newProduct);
    });
  }
}

function All() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // remove datas default from HTML
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }
  // add new datas
  if (products != null) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.dataset.id = product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
      <img src="${
        product.image
      }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
        product.id
      }'">
      <h2>${product.name}</h2>
      <div class="price">$${product.price}</div>
      
      <div class="stars">
        ${"★".repeat(5)}
      </div>

      <button class="addCart">Add to Cart</button>
    `;
      listProductHTML.appendChild(newProduct);
    });
  }
}

function SerumCat() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "Serum") {
        let newProduct = document.createElement("div");
        newProduct.classList.add("item");
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = `
          <img src="${
            product.image
          }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <div class="stars">
            ${"★".repeat(5)}
          </div>
          <button class="addCart">Add to Cart</button>`;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

function EyeCream() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "EyeCream") {
        let newProduct = document.createElement("div");
        newProduct.dataset.id = product.id;
        newProduct.classList.add("item");
        newProduct.innerHTML = `
          <img src="${
            product.image
          }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <div class="stars">
            ${"★".repeat(5)}
          </div>
          <button class="addCart">Add to Cart</button>`;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

function cleanser() {
  let listProductHTML = document.getElementsByClassName("listProduct")[0];

  // Remove all existing child elements
  while (listProductHTML.firstChild) {
    listProductHTML.removeChild(listProductHTML.firstChild);
  }

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      if (product.category == "cleanser") {
        let newProduct = document.createElement("div");
        newProduct.dataset.id = product.id;
        newProduct.classList.add("item");
        newProduct.innerHTML = `
          <img src="${
            product.image
          }" alt="" onclick="window.location.href='../HTML/ProductDetail.html?id=${
          product.id
        }'">
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <div class="stars">
            ${"★".repeat(5)}
          </div>
          <button class="addCart"">Add to Cart</button>`;
        listProductHTML.appendChild(newProduct);
      }
    });
  }
}

//Add to cart
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

listProductHTML[0].addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let id_product = positionClick.parentElement.dataset.id;
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
      addDataToHTML();

      // get data cart from memory
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML();
      }
    });
};
initApp();
