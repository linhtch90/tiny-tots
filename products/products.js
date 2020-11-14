let listProducts = null;

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
        '           <button class="btn bg-light select-to-compare">Select to Compare</button>\n' +
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
        '           <button class="btn bg-light select-to-compare">Select to Compare</button>\n' +
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
      '           <button class="btn btn-light select-to-compare">Select to Compare</button>\n' +
      "       </div>\n" +
      "   </div>\n" +
      "</div>";
  }
}
