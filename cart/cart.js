let listProductsforCart = []; //read from json
fetch("./products/product-data.json")
  .then((res) => res.json())
  .then((data) => {
    listProductsforCart = data;
  });

let cartItems = [];
let addCartItems = [];

$(document).ready(function () {
  if (sessionStorage["cart-items"] != null) {
    cartItems = JSON.parse(sessionStorage["cart-items"].toString());
  }
  displayCartItems();
});

function addToCart(ID) {
  toastr[
    "success"
  ](
    "</i><a href='' style='font-size: 1.2rem'>You have selected one item</a>",
    "",
    { timeOut: 1000 }
  );

  addCartItems.push(ID);
  let addItem = listProductsforCart.filter(
    (item) => item.ID === addCartItems[addCartItems.length - 1]
  ); // read list product from json data

  var newItem = {};
  for (var i = 0; i < addItem.length; i++) {
    newItem.ID = addItem[i].ID;
    newItem.Name = addItem[i].Name;
    newItem.Image = addItem[i].Image;
    newItem.Brand = addItem[i].Brand;
    newItem.Price = addItem[i].Price;
    newItem.Quantity = 1;
  }
  //console.log(newItem);

  var exists = false;
  if (cartItems.length > 0) {
    $.each(cartItems, function (index, value) {
      // if exist, increase quantity
      if (value.ID == newItem.ID) {
        value.Quantity++;
        exists = true;
        return false;
      }
    });
  }

  if (!exists) {
    cartItems.push(newItem);
  }

  //console.log(cartItems);

  sessionStorage["cart-items"] = JSON.stringify(cartItems);

  displayCartItems();
}

function displayCartItems() {
  var firstBlock = "";
  var total = 0;
  if (sessionStorage["cart-items"] != null) {
    cartItems = JSON.parse(sessionStorage["cart-items"].toString());
    for (var i = 0; i < cartItems.length; i++) {
      //document.getElementById("Cart").innerHTML +=
      firstBlock +=
        '   <div class="col-xs-12 col-lg-8">\n' +
        '     <div class="card mb-3">\n' +
        '       <div class="card-body">\n' +
        '         <div class="row mb-4">\n' +
        '           <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">\n' +
        '                <div class="thumbnail mb-3">\n' +
        '                    <img src="./products/images/' +
        cartItems[i].Image +
        '">\n' +
        "                </div>\n" +
        "            </div>\n" +
        '            <div class=" col-xs-12 col-sm-12 col-md-7 col-lg-9">\n' +
        '                <div class="d-flex justify-content-between">\n' +
        "                    <div>\n" +
        "                        <h5>" +
        cartItems[i].Name +
        "</h5>\n" +
        '                        <p class="mb-3 text-muted small">Brand: ' +
        cartItems[i].Brand +
        "</p>\n" +
        '                        <p class="mb-3 text-muted small">' +
        cartItems[i].Price +
        " USD</p>\n" +
        "                    </div>\n" +
        '                    <div class="">\n' +
        '                        <button type="button" class="btn btn-default btn-sm" onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown(); minus(\'' +
        cartItems[i].ID +
        "')\">\n" +
        '                            <span class="glyphicon glyphicon-minus"></span>\n' +
        "                        </button>\n" +
        '                        <input min="0" type="number" value="' +
        cartItems[i].Quantity.toString() +
        '">\n' +
        '                        <button type="button" class="btn btn-default btn-sm" onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp(); add(\'' +
        cartItems[i].ID +
        "')\">\n" +
        '                            <span class="glyphicon glyphicon-plus"></span>\n' +
        "                        </button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        '                <div class="d-flex justify-content-between align-items-center">\n' +
        "                    <div>\n" +
        '                        <a href="#!" type="button" class=" small mr-3" onclick="removeItem(\'' +
        cartItems[i].ID +
        '\')"><i class="fas fa-trash-alt mr-1"></i> Remove this Item </a>\n' +
        "                    </div>\n" +
        '                    <p class="mb-0"><span><strong>\n' +
        (parseFloat(cartItems[i].Price) * cartItems[i].Quantity).toFixed(2) +
        " USD</strong></span></p>\n" +
        "                </div> \n" +
        "            </div> \n" +
        "        </div> \n" +
        '        <hr class="mb-4"> \n' +
        "      </div>\n" +
        "    </div>\n" +
        "   </div>";
      total += parseFloat(cartItems[i].Price) * cartItems[i].Quantity;
    }
    document.getElementById("Cart").innerHTML =
      '<div class="container"><h3 class="mb-4">Your Cart</h3></div>\n' +
      ' <div class="container ">\n' +
      firstBlock +
      '  <div class="col-xs-12 col-lg-4"> \n' +
      '          <div class="card mb-3"> \n' +
      '              <div class="card-body"> \n' +
      '                  <ul class="list-group "> \n' +
      '                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"> \n' +
      "                           Temporary Amount<span>" +
      total.toFixed(2) +
      " USD</span> \n" +
      "                      </li> \n" +
      '                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"> \n' +
      "                          <div> \n" +
      "                              <strong>Total Amount</strong> \n" +
      '                              <strong><p class="mb-0">(including VAT)</p></strong> \n' +
      "                          </div> \n" +
      "                          <span><strong>" +
      total.toFixed(2) +
      " USD</strong></span> \n" +
      "                      </li> \n" +
      "                  </ul> \n" +
      '                  <a href="#cart-form"><button type="button" class="btn btn-primary btn-block">PROCEED TO CHECKOUT</button></a> \n' +
      "              </div> \n" +
      "          </div> \n" +
      "      </div> \n" +
      "</div>" +
      "<br> \n" +
      "<br> \n" +
      "<br> \n" +
      "<br> \n" +
      "<br> \n" +
      "<br> \n" +
      "<br> \n" +
      '<hr class="mb-4"> \n' +
      "<br> \n" +
      "<br> \n" +
      '<div class="container" id="cart-form"> <!--Start form--> \n' +
      '  <div class="card mb-3"> <!--Phan dien thong tin--> \n' +
      '    <div class="card-body"> \n' +
      '      <h3 class="mb-3">Please fill in your information</h3> \n' +
      '      <form class="needs-validation" novalidate >  \n' +
      '        <div class="mb-3"> \n' +
      '          <label for="firstName">Your name</label> \n' +
      '          <input type="text" class="form-control" id="Name" placeholder="John Smith" value="" required> \n' +
      '          <div class="invalid-feedback"> \n' +
      "            Valid name is required. \n" +
      "          </div> \n" +
      "        </div> \n" +
      '        <div class="mb-3"> \n' +
      '          <label for="email">Email <span class="text-muted">(Optional)</span></label> \n' +
      '            <input type="email" class="form-control" id="email" placeholder="email@example.com"> \n' +
      '              <div class="invalid-feedback"> \n' +
      "                Please enter a valid email address. \n" +
      "              </div> \n" +
      "        </div> \n" +
      '        <div class="mb-3"> \n' +
      '          <label for="address">Shipping Address</label> \n' +
      '          <input type="text" class="form-control" id="address" placeholder="123 Hung Vuong Street - Hai Chau District - Danang city" required> \n' +
      '            <div class="invalid-feedback"> \n' +
      "              Please enter your shipping address. \n" +
      "            </div> \n" +
      "        </div> \n" +
      '        <div class="mb-3"> \n' +
      '          <label for="country">Country</label> \n' +
      '          <select class="custom-select d-block w-100" id="country" required> \n' +
      '            <option value="">Choose...</option> \n' +
      "              <option>Vietnam</option> \n" +
      "             <option>United States</option> \n" +
      "          </select> \n" +
      '          <div class="invalid-feedback"> \n' +
      "            Please select a valid country. \n" +
      "          </div> \n" +
      "        </div> \n" +
      '        <div class="mb-3"> \n' +
      '          <label for="phone">Phone Number</label> \n' +
      '          <input type="tel" class="form-control" id="phone" pattern="[0-9]{10}" placeholder="0901234567" required> \n' +
      '          <div class="invalid-feedback"> \n' +
      "            Please enter a valid phone number. \n" +
      "          </div> \n" +
      "        </div> \n" +
      '        <hr class="mb-4"> \n' +
      '        <h3 class="mb-3">Payment method</h3> \n' +
      '        <div class="list-group"> \n' +
      '          <div class="list-group-item"> \n' +
      "              <label> \n" +
      '                <input type="radio" name="optionsRadios" checked>  Cash on Delivery (COD) \n' +
      "              </label><br> \n" +
      "              <label> \n" +
      '                <input type="radio" name="optionsRadios" checked>  Credid Card \n' +
      "              </label> \n" +
      "              <br> \n" +
      "              <label> \n" +
      '                <input type="radio" name="optionsRadios" checked>  Internet Banking \n' +
      "              </label> \n" +
      "              <br> \n" +
      "          </div> \n" +
      "        </div> \n" +
      '        <hr class="mb-4"> \n' +
      '        <button class="btn btn-primary btn-lg btn-block" type="submit" onclick="checkForm()">Place your order</button> \n' +
      "      </form>  <!-- end card section --></br> \n";
  }
}

function minus(id) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].ID == id) {
      var a = cartItems[i].Quantity;
      if (a == 0) return;
      a--;
      cartItems[i].Quantity = a;
    }
  }
  sessionStorage["cart-items"] = JSON.stringify(cartItems);
  cartItems = JSON.parse(sessionStorage["cart-items"].toString());
  displayCartItems();
}

function add(id) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].ID == id) {
      var b = cartItems[i].Quantity;
      b++;
      cartItems[i].Quantity = b;
    }
  }
  sessionStorage["cart-items"] = JSON.stringify(cartItems);
  cartItems = JSON.parse(sessionStorage["cart-items"].toString());
  displayCartItems();
}

//End add to cart

//remove Item from cart
function removeItem(id) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].ID == id) {
      cartItems.splice(i, 1);
    }
  }
  sessionStorage["cart-items"] = JSON.stringify(cartItems);
  cartItems = JSON.parse(sessionStorage["cart-items"].toString());
  displayCartItems();
}

// function to validate form

function checkForm() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");

  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}
false;
