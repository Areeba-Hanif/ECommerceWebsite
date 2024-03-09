$(document).ready(function() {

      //nav bar hover
  $(".dropdown").hover(function() {
      $(this).find('.dropdown-toggle').css({
          "background-color": "white",
          "color": "black"
      });
      $(this).find('.dropdown-menu').addClass('show');
  }, function() {
      $(this).find('.dropdown-toggle').css({
          "background-color": "transparent",
          "color": "white"
      });
      $(this).find('.dropdown-menu').removeClass('show');
  });

 

  $(".theme-icon").click(function() {
     
      $("body").toggleClass("dark-mode");
  
     
      var currentColor = $("body").css("background-color");
  
     
      if (currentColor === "rgb(255, 255, 255)") { 
          $(this).css({
              "background-color": "black",
              "color": "yellow" 
          });
      } else { 
          $(this).css({
              "background-color": "white",
              "color": "yellow" 
          });
      }
  });
  
  //image hover effects
  
  $('.main-image').hover(function() {
      
    $(this).css({
      "transition": "0.9s"
  });
      $(this).hide(); 
      $(this).siblings('.hover-image').show();
      $(this).siblings('.hover-image').css({
          "transition": "0.9s"
      });
    
  }, function() {

    
    $(this).siblings('.hover-image').css({
      "transition": "0.9s"
  });
      $(this).siblings('.hover-image').hide(); 
   
      $(this).show(); 
      $(this).siblings('.hover-image').css({
          "transition": "0.9s"
      });
  });
  
  
  
  
  });

// payments card hovers
$(".payments").hover(function() {
  $(this).find('img').css({
      "transform": "translateY(-12%)",
      "transition": "0.6s"
  });
  
}, function() {
  $(this).find('img').css({
    "transform": "translateY(12%)",
    "transition": "0.2s"
  });
  
});




//   filters code

const data = [
    {
      id: 1,
      name: "Full SLeeves Shirt",
      img: "IMAGES/products/img4.jpg",
      price: 1599,
      seller: "Bolt Store",
      catagory: "Shirt",
      color:"Blue",
    },
  
    {
      id: 2,
      name: "Simple Lines T-Shirt",
      img: "IMAGES/products/img7.jpg",
      price: 1300,
      seller: "Noise Store",
      catagory: "T-Shirt",
      color:"Blue",
    },
  
    {
      id: 3,
      name: "White Jeans with Coat",
      img: "IMAGES/products/img17.jpg",
      price: 2799,
      seller: "Rajesh Jeans",
      catagory: "Jeans",
      color:"White",
    },
    {
      id: 4,
      name: "Front Knit Sweater",
      img: "IMAGES/products/img15.jpg",
      price: 9270,
      seller: "Stone Retail",
      catagory: "Sweater",
      color:"Wheat",
    },
    {
      id: 5,
      name: "Block Striped Daped",
      img: "IMAGES/products/img10.jpg",
      price: 12999,
      seller: "Honor Store",
      catagory: "Shirt",
      color:"White",
      
    },
  
    {
      id: 6,
      name: "Printed Frock",
      img: "IMAGES/products/img9.jpg",
      price: 3999,
      seller: "IKALL Store",
      catagory: "Frock",
      color:"Red",
    },
  
    {
      id: 7,
      name: "Fleece Shirt",
      img: "IMAGES/products/img11.jpg",
      price: 15999,
      seller: "Oppy Store",
      catagory: "Shirt",
      color:"Wheat",
    },
    {
      id: 8,
      name: "Women's Shirt",
      img: "IMAGES/products/img14.jpg",
      price: 6249,
      seller: "Acced Store",
      catagory: "T-Shirt",
      color:"White",
    },
    {
      id: 9,
      name: "Girl's Down-Neck",
      img: "IMAGES/products/img13.jpg",
      price: 9799,
      seller: "SamStore",
      catagory: "Down-Neck Shirt",
      color:"Black",
    },
  
    {
      id: 10,
      name: "Grey T-Shirt",
      img: "IMAGES/products/img18.jpg",
      price: 12799,
      seller: "ZEBRICS Store",
      catagory: "T-Shirt",
      color:"Grey",
    },
    {
      id: 11,
      name: "Pink Sleece",
      img: "IMAGES/products/img-hover8.jpg",
      price: 12799,
      seller: "ZEBRICS Store",
      catagory: "Shirt",
      color:"Pink",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const categoryList = document.querySelector(".category-list");
  
  function displayProducts(products) {
    if (products.length > 0) {
      const product_details = products
        .map(
          (product) => `
    <div class="product">
    <div class="img">
      <img src="${product.img}" alt="${product.name}" />
    </div>
    <div class="product-details">
      <h6 class="name">${product.name}</h6>
      <h6 class="price">Rs.${product.price}</h6>
      <span class="addtocart"> <i class="fa-solid fa-cart-arrow-down "> </i><a href="Cart.html">Add to Cart -></a></span>
      <h6 class="seller">${product.seller}</h6>
    </div>
  </div>`
        )
        .join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  
  function setCategories() {
    const allCategories = data.map((product) => product.catagory);
    //console.log(allCategories);
    const catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];
    console.log(catagories);
    categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
  
    categoryList.addEventListener("click", (e) => {
      const selectedCatagory = e.target.textContent;
      selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
    });
  }
  const priceRange = document.querySelector("#priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  function setPrices() {
    const priceList = data.map((product) => product.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "Rs." + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "Rs." + e.target.value;
      displayProducts(data.filter((product) => product.price <= e.target.value));
    });
  }
  
  const txtSearch = document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
      displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  function setColorFilter() {
    const allColors = data.map((product) => product.color);
    const uniqueColors = [...new Set(allColors)];
  
    const colorList = document.querySelector(".color-list");
    colorList.innerHTML = uniqueColors.map(color => `<li class="color-option" data-color="${color}" style="background-color: ${color};"></li>`).join("");
  
    colorList.addEventListener("click", (e) => {
      const selectedColor = e.target.getAttribute("data-color"); 
      selectedColor === "All" ?
        displayProducts(data) :
        displayProducts(data.filter((product) => product.color === selectedColor));
    });
  }
  

  displayProducts(data);
  setCategories();
  setPrices();
  setColorFilter();
  
  
