// let listProductsforCart = []; //read from json
// fetch("./products/product-data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     listProductsforCart = data;
//   });

//function displaying product detail

// read from session storage

let displayYourProduct = [];
let selectedProduct = [];

$(document).ready(function () {
  if (localStorage["display-product"] != null) {
    displayYourProduct = JSON.parse(localStorage["display-product"].toString());
  }
  displayProduct();
});

function productDetail(ID) {
  selectedProduct.push(ID);

  let getProduct = listProductsforCart.filter(
    (item) => item.ID === selectedProduct[selectedProduct.length - 1]
  ); // read list product from json data

  let newProduct = {};
  for (var i = 0; i < getProduct.length; i++) {
    newProduct.ID = getProduct[i].ID;
    newProduct.Category = getProduct[i].Category;
    newProduct.Name = getProduct[i].Name;
    newProduct.Image = getProduct[i].Image;
    newProduct.Image2 = getProduct[i].Image2;
    newProduct.Image3 = getProduct[i].Image3;
    newProduct.Brand = getProduct[i].Brand;
    newProduct.Price = getProduct[i].Price;
    newProduct.Detail = getProduct[i].Detail;
    newProduct.Quantity = 1;
  }
  displayYourProduct.push(newProduct);
  console.log(displayYourProduct);
  localStorage["display-product"] = JSON.stringify(displayYourProduct);

  displayProduct();
}

/////////////////////////////////
let a = "";
function displayProduct() {
  if (localStorage["display-product"] != null) {
    displayYourProduct = JSON.parse(localStorage["display-product"].toString());
    ////
    a = displayYourProduct[displayYourProduct.length - 1].Category;
    let related = "";
    for (let i in listProducts) {
      if (listProducts[i].Category == a) {
        related +=
          '<div class="col-xs-12 col-sm-6 col-md-4 d-flex item p-4" data-aos="flip-left">\n' +
          '   <div class="thumbnail pb-3">\n' +
          '       <a href="./productdetail.html" onclick="productDetail(' +
          "'" +
          listProducts[i].ID +
          "'" +
          ')"><img class="img-fluid" src="./products/images/' +
          listProducts[i].Image +
          '" ></a>\n' +
          '       <div class="caption">\n' +
          '           <a href="./productdetail.html" onclick="productDetail(' +
          "'" +
          listProducts[i].ID +
          "'" +
          ')"><h3 class="" style="color:#ff6a5f;">' +
          listProducts[i].Name +
          "</h3></a>\n" +
          '           <h4 class="text-success">' +
          listProducts[i].Price.toString() +
          " USD</h4>" +
          '           <p class="text-mute">Brand: ' +
          listProducts[i].Brand +
          "</p>" +
          '           <button class="btn btn-info add-to-cart" onclick="addToCart(' +
          "'" +
          listProducts[i].ID +
          "'" +
          ')"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
          '           <button class="btn btn-light" onclick="addToCompare(' +
          "'" +
          listProducts[i].ID +
          "'" +
          ')">Select to Compare</button>\n' +
          "       </div>\n" +
          "   </div>\n" +
          "</div>";
      }
    }

    ////

    let tempVar = displayYourProduct[displayYourProduct.length - 1];
    let size = "";
    if (tempVar.Category == "Fashion") {
      size =
        '		<div class=" mt-3 mb-3 "> \n' +
        "       <p><small> Select Size</small> </p> \n" +
        '       <div class="form-check form-check-inline pl-4"> \n' +
        '          <input type="radio" class="form-check-input"  name="materialExampleRadios" > \n' +
        '          <label class="form-check-label small  card-link-secondary">1 - 3 yrs.</label>\n' +
        "       </div> \n" +
        '       <div class="form-check form-check-inline pl-4"> \n' +
        '           <input type="radio" class="form-check-input" name="materialExampleRadios" > \n' +
        '           <label class="form-check-label small  card-link-secondary">3 - 5 yrs.</label> \n' +
        "       </div> \n" +
        '       <div class="form-check form-check-inline pl-4"> \n' +
        '           <input type="radio" class="form-check-input" name="materialExampleRadios"> \n' +
        '           <label class="form-check-label small  card-link-secondary">5 - 7 yrs.</label> \n' +
        "       </div> \n" +
        '       <div class="form-check form-check-inline pl-4"> \n' +
        '           <input type="radio" class="form-check-input" name="materialExampleRadios"> \n' +
        '           <label class="form-check-label small  card-link-secondary">7 - 10 yrs.</label> \n' +
        "       </div> \n" +
        '       <div class="form-check form-check-inline pl-4"> \n' +
        '           <input type="radio" class="form-check-input" name="materialExampleRadios"> \n' +
        '           <label class="form-check-label small  card-link-secondary">10 - 12 yrs.</label> \n' +
        "       </div> \n" +
        "    </div>   \n";
    }

    document.getElementById("productdetail").innerHTML =
      "<hr>" +
      "<br>" +
      "<br>" +
      "<br>" +
      '<div class="row w-100">\n' +
      '  <div class="col-md-5 col-sm-12 mb-4 ml-4 pl-4 justify-content-center align-items-center">\n' +
      '     <div id="myCarousel" class="row carousel slide" data-ride="carousel">\n' +
      '  	  <div class="row carousel-inner">\n' +
      '    	   <div class="carousel-item active">\n' +
      '    	 		<img class="img-fluid d-block w-100" src="./products/images/' +
      tempVar.Image +
      '">\n' +
      "    		</div>\n" +
      '    	   <div class="carousel-item img-fluid justify-content-center align-items-center">\n' +
      '    	 		<img class="img-fluid d-block w-100" src="./products/images/' +
      tempVar.Image2 +
      '">\n' +
      "    		</div>\n" +
      '    	   <div class="carousel-item img-fluid">\n' +
      '    	 		<img class="img-fluid d-block w-100" src="./products/images/' +
      tempVar.Image3 +
      '">\n' +
      "    		</div>\n" +
      " 	  </div> \n" +
      '    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> \n' +
      '    	   <span class="glyphicon glyphicon-chevron-left"></span> \n' +
      '    		<span class="sr-only">Previous</span> \n' +
      "    </a> \n" +
      '    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> \n' +
      '    	   <span class="glyphicon glyphicon-chevron-right"></span> \n' +
      '    		<span class="sr-only">Next</span> \n' +
      "    </a> \n" +
      '    <ol class="carousel-indicators"> \n' +
      '       <li data-target="#myCarousel" data-slide-to="0" class="active" ><img class="img-fluid"  src="./products/images/' +
      tempVar.Image +
      '"></li>\n' +
      '       <li data-target="#myCarousel" data-slide-to="1"  ><img class="img-fluid"  src="./products/images/' +
      tempVar.Image2 +
      '"></li>\n' +
      '       <li data-target="#myCarousel" data-slide-to="2"  ><img class="img-fluid"  src="./products/images/' +
      tempVar.Image3 +
      '"></li>\n' +
      "    </ol>\n" +
      "	</div>\n" +
      "</div>\n" +
      '<div class="col-md-6 ml-4">\n' +
      '	<div class=" container mb-3 ml-4 col-md-12  col-sm-12">\n' +
      '  	<h3 class="" style="color:#ff6a5f;"><strong>' +
      tempVar.Name +
      "</strong></h3>\n" +
      '    <p><span class="mr-1"><strong>' +
      tempVar.Price +
      " USD</strong></span></p>\n" +
      size +
      '     <div class="mt-3 mb-3 ">   \n' +
      "        <p><small>Select Quantity </small><p>   \n" +
      '        <button type="button" class="btn btn-default btn-sm" onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown(); changeQuantityMinus();"><strong><i class="fas fa-minus-circle"></i></strong>   \n' +
      "        </button>   \n" +
      '        <input min="1" type="number" value="1" class="productdetail-quantity">   \n' +
      '        <button type="button" class="btn btn-default btn-sm" onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp(); changeQuantityAdd();"><strong><i class="fas fa-plus-circle"></i></strong>   \n' +
      "        </button>   \n" +
      "      </div>   \n" +
      "      <div>   \n" +
      '         <button class="btn btn-info add-to-cart mt-4 mb-4" onclick="addToCart2()"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>   \n' +
      "      </div>    \n" +
      "      <div>   \n" +
      '         <a href="./productdetail/product-detail.docx"><button class="btn btn-warning add-to-cart mb-4"><i class="far fa-file-word"></i> Download Product Information (.docx) </button></a>   \n' +
      "      </div>    \n" +
      "    </div>    \n" +
      "  </div>    \n" +
      "</div>     \n" +
      "<hr>     \n" +
      '<div class="container">     \n' +
      '    <div class="container classic-tabs">     \n' +
      '			<ul class="nav tabs-primary nav-justified" id="advancedTab" role="tablist">     \n' +
      '      	<li class="nav-item">     \n' +
      '       		 <a class="nav-link active show" id="description-tab" data-toggle="tab" href="#description" role="tab"     \n' +
      '          	aria-controls="description" aria-selected="true">Description</a>     \n' +
      "     	  </li>     \n" +
      '      	<li class="nav-item">     \n' +
      '        	<a class="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info"     \n' +
      '          	aria-selected="false">Information</a>     \n' +
      "      	</li>     \n" +
      "    	</ul>      \n" +
      '    <div class="tab-content container" id="advancedTabContent">     \n' +
      '      <div class="tab-pane fade show active col-xs-12" id="description" role="tabpanel" aria-labelledby="description-tab">     \n' +
      "        <br>     \n" +
      '        <p class="pt-1">' +
      tempVar.Detail +
      "</p>\n" +
      "      </div> \n" +
      '      <div class="tab-pane fade col-xs-12" id="info" role="tabpanel" aria-labelledby="info-tab"> \n' +
      "        <br> \n" +
      '         <table class="table comparing-table"> \n' +
      "           <thead></thead>  \n" +
      "           <tbody>  \n" +
      "					    <tr>  \n" +
      '         				<th scope="row">Brand</th>  \n' +
      "          			<td >" +
      tempVar.Brand +
      "</td>  \n" +
      "        			</tr>   \n" +
      "		          <tr>   \n" +
      '          			<th scope="row">Category</th>   \n' +
      "          			<td >" +
      tempVar.Category +
      "</td>  \n" +
      "        			</tr>  \n" +
      "      		</tbody>  \n" +
      "   			 </table>    \n" +
      "       </div>  \n" +
      "    </div>   \n" +
      " </div>   \n" +
      " </div>   \n" +
      " <hr>   \n" +
      "<br>  \n";
    ////
    // '<div class="container" > \n' +
    // ' <div class="row" > \n' +
    // ' <h3 style="color: #029899;"><strong>RELATED PRODUCTS</strong></h3> \n' +
    // ' <div class="content_product row d-flex flex-wrap text-center">\n' +
    // related +
    // ' </div>\n' +
    // ' </div>\n' +
    // '</div>\n';
  }
  checkCart();
}

console.log(a);
////
function loadingProductsRelated() {
  for (let i in listProducts) {
    if (listProducts[i].Category == a) {
      document.getElementById("product-related-list").innerHTML +=
        '<div class="col-xs-12 col-sm-6 col-md-4 d-flex item p-4" data-aos="flip-left">\n' +
        '   <div class="thumbnail pb-3">\n' +
        '       <a href="./productdetail.html" onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')"><img class="img-fluid" src="./products/images/' +
        listProducts[i].Image +
        '" ></a>\n' +
        '       <div class="caption">\n' +
        '           <a href="./productdetail.html" onclick="productDetail(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')"><h3 class="" style="color:#ff6a5f;">' +
        listProducts[i].Name +
        "</h3></a>\n" +
        '           <h4 class="text-success">' +
        listProducts[i].Price.toString() +
        " USD</h4>" +
        '           <p class="text-mute">Brand: ' +
        listProducts[i].Brand +
        "</p>" +
        '           <button class="btn btn-info add-to-cart" onclick="addToCart(' +
        "'" +
        listProducts[i].ID +
        "'" +
        ')"> <i class="fas fa-shopping-cart"></i> Add to Cart</button>\n' +
        "       </div>\n" +
        "   </div>\n" +
        "</div>";
    }
  }
}

//////
function changeQuantityMinus() {
  var a = displayYourProduct[displayYourProduct.length - 1].Quantity;
  if (a == 1) return;
  a--;
  displayYourProduct[displayYourProduct.length - 1].Quantity = a;
  localStorage["display-product"] = JSON.stringify(displayYourProduct);
  displayYourProduct = JSON.parse(localStorage["display-product"].toString());
  //console.log(a);
  checkCart();
}

function changeQuantityAdd() {
  var b = displayYourProduct[displayYourProduct.length - 1].Quantity;
  b++;
  displayYourProduct[displayYourProduct.length - 1].Quantity = b;
  localStorage["display-product"] = JSON.stringify(displayYourProduct);
  displayYourProduct = JSON.parse(localStorage["display-product"].toString());
  //console.log(b);
  checkCart();
}

//Add to cart 2
let cartItems2 = [];

$(document).ready(function () {
  if (localStorage["cart-items"] != null) {
    cartItems2 = JSON.parse(localStorage["cart-items"].toString());
  }
  displayCartItems();
});

function addToCart2() {
  console.log("addToCart2 is running");
  toastr[
    "success"
  ](
    "</i><a href='' style='font-size: 1.2rem'>You have selected one item</a>",
    "",
    { timeOut: 1000 }
  );

  //addCartItems.push(ID);
  let addItem = displayYourProduct[displayYourProduct.length - 1];
  //console.log(addItem);

  var exists = false;
  if (cartItems2.length > 0) {
    $.each(cartItems2, function (index, value) {
      //if exist, increase quantity
      if (value.ID == addItem.ID) {
        value.Quantity += addItem.Quantity;
        exists = true;
        return false;
      }
    });
  }

  if (!exists) {
    cartItems2.push(addItem);
  }
  //console.log(cartItems2);
  localStorage["cart-items"] = JSON.stringify(cartItems2);
  checkCart();
  //console.log(cartItems2);

  displayCartItems();
}
