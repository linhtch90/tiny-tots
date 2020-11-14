let listProducts = null;
let compareCount = 0;
let compareID = [];

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
        '<div class="col-xs-12 col-sm-6 col-md-4 flex" data-aos="flip-left">\n' +
        '   <div class="thumbnail">\n' +
        '       <img src="./products/images/' +
        listProducts[i].Image +
        '" >\n' +
        '       <div class="caption">\n' +
        '           <h3 class="text-danger">' +
        listProducts[i].Name +
        "</h3>\n" +
        '           <h4 class="text-success">' +
        listProducts[i].Price.toString() +
        " USD</h4>\n" +
        '           <p class="text-mute">Brand: ' +
        listProducts[i].Brand +
        "</p>" +
        '           <button class="btn btn-warning add-to-cart"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
        '           <button class="btn bg-light select-to-compare" onclick="addToCompare(' +
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
        '<div class="col-xs-12 col-sm-6 col-md-4 flex" data-aos="flip-left">\n' +
        '   <div class="thumbnail">\n' +
        '       <img src="./products/images/' +
        listProducts[i].Image +
        '" >\n' +
        '       <div class="caption">\n' +
        '           <h3 class="text-danger">' +
        listProducts[i].Name +
        "</h3>\n" +
        '           <h4 class="text-success">' +
        listProducts[i].Price.toString() +
        " USD</h4>\n" +
        '           <p class="text-mute">Brand: ' +
        listProducts[i].Brand +
        "</p>" +
        '           <button class="btn btn-warning add-to-cart"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
        '           <button class="btn bg-light select-to-compare" onclick="addToCompare(' +
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
      '<div class="col-xs-12 col-sm-6 col-md-4 flex" data-aos="flip-left">\n' +
      '   <div class="thumbnail">\n' +
      '       <img src="./products/images/' +
      listProducts[i].Image +
      '" >\n' +
      '       <div class="caption">\n' +
      '           <h3 class="text-danger">' +
      listProducts[i].Name +
      "</h3>\n" +
      '           <h4 class="text-success">' +
      listProducts[i].Price.toString() +
      " USD</h4>" +
      '           <p class="text-mute">Brand: ' +
      listProducts[i].Brand +
      "</p>" +
      '           <button class="btn btn-info add-to-cart"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
      '           <button class="btn btn-light select-to-compare" onclick="addToCompare(' +
      "'" +
      listProducts[i].ID +
      "'" +
      ')">Select to Compare</button>\n' +
      "       </div>\n" +
      "   </div>\n" +
      "</div>";
  }
}

function addToCompare(ID) {
  compareCount += 1;
  console.log(compareCount);
  compareID.push(ID);
  console.log(compareID);
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
