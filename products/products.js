// var listProducts = [];
// function Product(id, category, image, name, price, brand) {
//   this.ID = id;
//   this.Category = category;
//   this.Image = image;
//   this.Name = name;
//   this.Price = price;
//   this.Brand = brand;
// }

// listProducts.push(
//   new Product(
//     "BA1",
//     "Baby Care",
//     "baby-care/bottlejs1.jpg",
//     "Anti Colic Bottle 260ml",
//     "15.00",
//     "Johnson"
//   )
// );
// listProducts.push(
//   new Product(
//     "BA2",
//     "Baby Care",
//     "baby-care/bottle-pigeon1.jpg",
//     "Nursing Bottle",
//     "14.45",
//     "Pigeon"
//   )
// );
// listProducts.push(
//   new Product(
//     "BA3",
//     "Baby Care",
//     "baby-care/stroller1.jpg",
//     "Baby Stroller",
//     "578.50",
//     "Kids"
//   )
// );
// listProducts.push(
//   new Product(
//     "BA4",
//     "Baby Care",
//     "baby-care/bib1.jpg",
//     "Waterproof Silicone Bib",
//     "5.8",
//     "Pigeon"
//   )
// );
// listProducts.push(
//   new Product(
//     "BA5",
//     "Baby Care",
//     "baby-care/pacifier1.jpg",
//     "Ultra Air Pacifier",
//     "6.50",
//     "Johnson"
//   )
// );

// listProducts.push(
//   new Product(
//     "FA1",
//     "Fashion",
//     "fashion/girldress1.jpg",
//     "Girl Party Dress",
//     "30.00",
//     "Baby Comfy"
//   )
// );
// listProducts.push(
//   new Product(
//     "FA2",
//     "Fashion",
//     "fashion/girltshirt1.jpg",
//     "Girl Cotton T-shirt",
//     "8.00",
//     "Kids"
//   )
// );
// listProducts.push(
//   new Product(
//     "FA3",
//     "Fashion",
//     "fashion/Fairydress1.jpg",
//     "Girl Fairy Dress",
//     "20.50",
//     "Kids"
//   )
// );
// listProducts.push(
//   new Product(
//     "FA4",
//     "Fashion",
//     "fashion/boytshirt1.jpg",
//     "Boy Cotton T-shirt",
//     "8.0",
//     "Kids"
//   )
// );
// listProducts.push(
//   new Product(
//     "FA5",
//     "Fashion",
//     "fashion/boydenim1.jpg",
//     "Boy Denim Jumpsuits",
//     "15.25",
//     "Baby Comfy"
//   )
// );

// listProducts.push(
//   new Product(
//     "TO1",
//     "Toys",
//     "toys/lego1.jpg",
//     "LEGO Construction Bulldozer",
//     "30.20",
//     "Lego"
//   )
// );
// listProducts.push(
//   new Product(
//     "TO2",
//     "Toys",
//     "toys/piano1.jpg",
//     "Mini Keys Musical KeyboardÂ ",
//     "45.00",
//     "Kids"
//   )
// );
// listProducts.push(
//   new Product(
//     "TO3",
//     "Toys",
//     "toys/truck1.jpg",
//     "Monster Truck Cars",
//     "15.50",
//     "Lego"
//   )
// );
// listProducts.push(
//   new Product(
//     "TO4",
//     "Toys",
//     "toys/barbie1.jpg",
//     "Barbie Doll",
//     "17.99",
//     "Baby Comfy"
//   )
// );
// listProducts.push(
//   new Product(
//     "TO5",
//     "Toys",
//     "toys/unicorn1.jpg",
//     "Unicorn Toy Soft Stuffed",
//     "10.99",
//     "Lego"
//   )
// );

// listProducts.push(
//   new Product(
//     "WE1",
//     "Wellness and Hygiene",
//     "wellness-and-hygiene/diaper1.jpg",
//     "Diaper",
//     "18.00",
//     "Pampers"
//   )
// );
// listProducts.push(
//   new Product(
//     "WE2",
//     "Wellness and Hygiene",
//     "wellness-and-hygiene/wipe1.jpg",
//     "Baby Wet wipes",
//     "6.99",
//     "Johnson"
//   )
// );
// listProducts.push(
//   new Product(
//     "WE3",
//     "Wellness and Hygiene",
//     "wellness-and-hygiene/shampoo1.jpg",
//     "Baby Shampoo",
//     "9.00",
//     "Johnson"
//   )
// );
// listProducts.push(
//   new Product(
//     "WE4",
//     "Wellness and Hygiene",
//     "wellness-and-hygiene/powder1.jpg",
//     "Baby powder",
//     "6.50",
//     "Johnson"
//   )
// );
// listProducts.push(
//   new Product(
//     "WE5",
//     "Wellness and Hygiene",
//     "wellness-and-hygiene/mosquito1.jpg",
//     "Mosquito Repellent",
//     "4.50",
//     "Pampers"
//   )
// );

let listProducts = [];
fetch("./products/product-data.json")
  .then((res) => res.json())
  .then((data) => {
    listProducts = data;
  });

// localStorage.listProducts = JSON.stringify(listProducts);
//listProducts = JSON.parse(localStorage.listProducts);

function product(n) {
  let category = n;
  document.getElementById("active_page").innerHTML = category;
  document.getElementById("product-list").innerHTML = "";
  for (let i in listProducts) {
    if (listProducts[i].Category == n) {
      document.getElementById("product-list").innerHTML +=
        '<div class="d-flex flex-colum product-item">\n' +
        '   <div class="thumbnail">\n' +
        '       <a  onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        '"><img src="./products/images/' +
        listProducts[i].Image +
        '" ></a>\n' +
        '       <div class="caption">\n' +
        '           <a  onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        '"><h3 class="product-name">' +
        listProducts[i].Name +
        "</h3></a>\n" +
        '           <h4 class="product-price">' +
        listProducts[i].Price.toString() +
        " USD</h4>" +
        '           <p class="product-brand">Brand: ' +
        listProducts[i].Brand +
        "</p>" +
        '           <button class="btn btn-warning add-to-cart-button" onclick="addToCart(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
        '           <button class="btn btn-light detail-button" onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')">Detail</button>\n' +
        '           <button class="btn btn-light compare-button" onclick="addToCompare(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')">Select to Compare</button>\n' +
        "       </div>\n" +
        "   </div>\n" +
        "</div>";
    }

    if (listProducts[i].Brand == category) {
      document.getElementById("product-list").innerHTML +=
        '<div class="d-flex flex-colum product-item">\n' +
        '   <div class="thumbnail">\n' +
        '       <a  onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        '"><img src="./products/images/' +
        listProducts[i].Image +
        '" ></a>\n' +
        '       <div class="caption">\n' +
        '           <a  onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        '"><h3 class="product-name">' +
        listProducts[i].Name +
        "</h3></a>\n" +
        '           <h4 class="product-price">' +
        listProducts[i].Price.toString() +
        " USD</h4>" +
        '           <p class="product-brand">Brand: ' +
        listProducts[i].Brand +
        "</p>" +
        '           <button class="btn btn-warning add-to-cart-button" onclick="addToCart(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
        '           <button class="btn btn-light detail-button" onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')">Detail</button>\n' +
        '           <button class="btn btn-light compare-button" onclick="addToCompare(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')">Select to Compare</button>\n' +
        "       </div>\n" +
        "   </div>\n" +
        "</div>";
    }
  }
}

function loadingProducts() {
  for (let i in listProducts) {
    document.getElementById("product-list").innerHTML +=
      '<div class="d-flex flex-colum product-item">\n' +
      '   <div class="thumbnail">\n' +
      '       <a  onclick="productDetail(' +
      "'" +
      listProducts[i].ID +
      "'" +
      '"><img src="./products/images/' +
      listProducts[i].Image +
      '" ></a>\n' +
      '       <div class="caption">\n' +
      '           <a  onclick="productDetail(' +
      "'" +
      listProducts[i].ID +
      "'" +
      '"><h3 class="product-name">' +
      listProducts[i].Name +
      "</h3></a>\n" +
      '           <h4 class="product-price">' +
      listProducts[i].Price.toString() +
      " USD</h4>" +
      '           <p class="product-brand">Brand: ' +
      listProducts[i].Brand +
      "</p>" +
      '           <button class="btn btn-warning add-to-cart-button" onclick="addToCart(' +
      "'" +
      listProducts[i].ID +
      "'" +
      ')"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
      '           <button class="btn btn-light detail-button" onclick="productDetail(' +
      "'" +
      listProducts[i].ID +
      "'" +
      ')">Detail</button>\n' +
      '           <button class="btn btn-light compare-button" onclick="addToCompare(' +
      "'" +
      listProducts[i].ID +
      "'" +
      ')">Select to Compare</button>\n' +
      "       </div>\n" +
      "   </div>\n" +
      "</div>";
  }
}

// Compare products

let compareCount = 0;
let compareID = [];

function addToCompare(ID) {
  compareCount += 1;
  console.log(compareCount);
  compareID.push(ID);
  console.log(compareID);
  if (compareCount == 1) {
    // toastr.success("Please select another product for comparison!", "", {
    //   timeOut: 1000,
    // });
    toastr[
      "success"
    ](
      "</i><a href='' style='font-size: 1.2rem'>Please select another product for comparison!</a>",
      "",
      { timeOut: 1000 }
    );
  }
  if (compareCount == 2) {
    compareProducts(compareID);
    compareCount = 0;
  }
}

function compareProducts() {
  console.log("Comparing!");
  let modal = document.getElementById("comparing-modal");
  let closeButton = document.getElementById("compare-modal-close");
  modal.style.display = "block";
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  let product1 = listProducts.filter((item) => item.ID === compareID[0]);
  let product2 = listProducts.filter((item) => item.ID === compareID[1]);
  console.log(listProducts.filter((item) => item.ID === compareID[0]));
  console.log(product1[0].Image);

  document.getElementById("compare-photo-1").innerHTML =
    '<img src="./products/images/' +
    product1[0].Image +
    '" style="width: 200px; height: 200px">';
  document.getElementById("compare-photo-2").innerHTML =
    '<img src="./products/images/' +
    product2[0].Image +
    '" style="width: 200px; height: 200px">';

  document.getElementById("compare-name-1").innerHTML =
    "<p>" + product1[0].Name + "</p>";
  document.getElementById("compare-name-2").innerHTML =
    "<p>" + product2[0].Name + "</p>";

  document.getElementById("compare-category-1").innerHTML =
    "<p>" + product1[0].Category + "</p>";
  document.getElementById("compare-category-2").innerHTML =
    "<p>" + product2[0].Category + "</p>";

  document.getElementById("compare-brand-1").innerHTML =
    "<p>" + product1[0].Brand + "</p>";
  document.getElementById("compare-brand-2").innerHTML =
    "<p>" + product2[0].Brand + "</p>";

  document.getElementById("compare-price-1").innerHTML =
    "<p>" + product1[0].Price + " USD</p>";
  document.getElementById("compare-price-2").innerHTML =
    "<p>" + product2[0].Price + " USD</p>";

  compareID = [];
}

// Add function to make all product cards have equal height

// (function ($) {
//   // preload object array to gain performance
//   var $items = $(".item");

//   // run at resize
//   $(window).resize(function () {
//     $.fn.setHeight(0);
//   });

//   $.fn.setHeight = function (height) {
//     // reset to auto or else we can't check height
//     $($items).css({ height: "auto" });

//     // get highest value
//     $($items).each(function (i, obj) {
//       height = Math.max(height, $(obj).outerHeight());
//     });

//     // set the height
//     $($items).css({ height: height + "px" });
//   };

//   // run at load
//   $.fn.setHeight(0);
// })(jQuery);
