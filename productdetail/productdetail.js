// let allProducts = []; //read from json
// fetch("./products/product-data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     allProducts = data;
//   });

//function displaying product detail

// let selectProduct = [];
// let getProduct = [];

// function productDetail(ID) {
//   selectProduct.push(ID);
//   console.log(selectProduct);
//   getProduct = allProducts.filter(
//     (item) => item.ID === selectProduct[selectProduct.length - 1]
//   ); // read list product from json data

// document.getElementById("product-detail").innerHTML =
//   '<div class="row">\n' +
//   '  <div class="col-md-5 col-sm-12 mb-4 ml-5 pl-4 d-flex justify-content-center align-item-center">\n' +
//   '     <div id="myCarousel" class="carousel slide" data-ride="carousel">\n' +
//   '  	  <div class="carousel-inner">\n' +
//   '    	   <div class="item active">\n' +
//   '    	 		<img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '">\n' +
//   "    		</div>\n" +
//   '    	 		<img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '">\n' +
//   "    		</div>\n" +
//   '    	 		<img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '">\n' +
//   "    		</div>\n" +
//   " 	  </div> \n" +
//   '    <a class="left carousel-control" href="#myCarousel" data-slide="prev"> \n' +
//   '    	   <span class="glyphicon glyphicon-chevron-left"></span> \n' +
//   '    		<span class="sr-only">Previous</span> \n' +
//   "    </a> \n" +
//   '    <a class="left carousel-control" href="#myCarousel" data-slide="prev"> \n' +
//   '    	   <span class="glyphicon glyphicon-chevron-left"></span> \n' +
//   '    		<span class="sr-only">Previous</span> \n' +
//   "    </a> \n" +
//   '    <ol class="carousel-indicators"> \n' +
//   '       <li data-target="#myCarousel" data-slide-to="0" class="active" ><img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '"><li>\n' +
//   '       <li data-target="#myCarousel" data-slide-to="0" class="active" ><img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '"><li>\n' +
//   '       <li data-target="#myCarousel" data-slide-to="0" class="active" ><img src="./products/images/' +
//   getProduct[getProduct.length - 1].Image +
//   '"><li>\n' +
//   "    </ol>\n" +
//   "	</div>";

//

//   const productDetailName = document.getElementById("product-detail-name");
//   productDetailName.innerHTML = getProduct[getProduct.length - 1].Name;
// }

// Fetch data from a local JSON

const showSelectedProduct = () => {
  let allProducts = [];
  fetch("./products/product-data.json")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      console.log(allProducts);
      let checkedProduct = localStorage.getItem("checkDetail");
      console.log(checkedProduct);
      let selectedProduct = allProducts.filter((item) => {
        return item.ID === checkedProduct;
      });
      console.log(selectedProduct[0]);

      document.getElementById("product-detail-image").innerHTML =
        '<img src="./products/images/' + selectedProduct[0].Image + '">';
      // document.getElementById("product-detail-image2").innerHTML =
      //   '<img src="./products/images/' + selectedProduct[0].Image + '">';
      // document.getElementById("product-detail-image3").innerHTML =
      //   '<img src="./products/images/' + selectedProduct[0].Image + '">';

      // document.getElementById("product-detail-li-image1").innerHTML =
      //   '<img src="./products/images/' + selectedProduct[0].Image + '">';
      // document.getElementById("product-detail-li-image2").innerHTML =
      //   '<img src="./products/images/' + selectedProduct[0].Image + '">';
      // document.getElementById("product-detail-li-image3").innerHTML =
      //   '<img src="./products/images/' + selectedProduct[0].Image + '">';

      document.getElementById("product-detail-name").innerHTML =
        selectedProduct[0].Name;
      document.getElementById("product-detail-price").innerHTML =
        "Price: " + selectedProduct[0].Price + " USD";
      document.getElementById("compare-brand-1").innerHTML =
        selectedProduct[0].Brand;
      document.getElementById("compare-category-1").innerHTML =
        selectedProduct[0].Category;
    });
};
