// Default number of products
let numberProduct = 4;
// Save the right number of items in the stock (in the json file)
let count;

// Choose the number of products to show
function getValue() {
  let valueNum = document.getElementById("button").value;
  numberProduct = valueNum;
  // clean the list of products and load the new
  document.getElementById("wrapper1").innerHTML = "";
  xhttp.open("GET", "js/example.json", true);
  xhttp.send();
}
function getValue1() {
  let valueNum = document.getElementById("button1").value;
  numberProduct = valueNum;
  document.getElementById("wrapper1").innerHTML = "";
  xhttp.open("GET", "js/example.json", true);
  xhttp.send();
}
function getValue2() {
  let valueNum = document.getElementById("button2").value;
  // Check if the number of products is greater than asked
  // Prevents from js errors
  if(count < valueNum) {
    numberProduct = count;
    document.getElementById("wrapper1").innerHTML = "";
    xhttp.open("GET", "js/example.json", true);
    xhttp.send();
  } else {
    numberProduct = valueNum;
    document.getElementById("wrapper1").innerHTML = "";
    xhttp.open("GET", "js/example.json", true);
    xhttp.send();
  }
}
// Parsing JSON file and request the data
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  // Check the status of requests
  if (this.readyState == 4 && this.status == 200) {
     let response = JSON.parse(xhttp.responseText);
     // Save correct number from json to global variable (later work on removing globals from js code)
     count = response.count;
     let items = response.list;
     // Loading each item and showing the right data
     for (let i = 0; i < numberProduct; i++) {
      // Showing items in one div just to not repeat it in html code
      document.getElementById("wrapper1").innerHTML +=
        "<div class=\"item\"> <div class=\"topinfo\"> <div class=\"quantity\"> <p><img src=\"img/bascket.png\" alt=\"bascket\" /> sztuk: <span>" + items[i].availability.name + "</span></p> </div> <div class=\"pricetosave\"> <p>oszcz\u0119dzasz: <span id=\"save_number\">" + (items[i].price.gross.base_float - items[i].price.gross.promo_float) + " z\u0142</span></p> </div> </div> <div id=\"productimage\"> <img src=\"https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_" + items[i].main_image + ".jpg\" alt=\"product image\" /> </div> <div class=\"price\"> <h3 id=\"price_tag\">" + items[i].price.gross.promo_float + " z\u0142 <span id=\"price_crossed\">" + items[i].price.gross.base_float + " z\u0142 </span></h3> <p>" + items[i].name + "</p> <p>" + items[i].producer.name + "</p></div>";
    }
  }
};

// Sending the http request
xhttp.open("GET", "js/example.json", true);
xhttp.send();

//code ES6 converted to es5 for a correct usage in ie11
/*
`<div class="item"> <div class="topinfo"> <div class="quantity"> <p><img src="img/bascket.png" alt="bascket" /> sztuk: <span>${items[i].availability.name}</span></p> </div> <div class="pricetosave"> <p>oszczędzasz: <span id="save_number">${items[i].price.gross.base_float - items[i].price.gross.promo_float} zł</span></p> </div> </div> <div id="productimage"> <img src="https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_${items[i].main_image}.jpg" alt="product image" /> </div> <div class="price"> <h3 id="price_tag">${items[i].price.gross.promo_float} zł <span id="price_crossed">${items[i].price.gross.base_float} zł </span></h3> <p>${items[i].name}</p> <p>${items[i].producer.name}</p> </div> </div>`;
*/
