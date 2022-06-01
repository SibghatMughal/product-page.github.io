const productts = [
  {
    Image: "images/sofa.jpg",
    title: "High-Back Bench",
    price: 9.99,
    type: "ikea",
  },
  {
    Image: "images/albany.jpg",
    title: "Albany Table",
    price: 79.99,
    type: "marcos",
  },
  {
    Image: "images/accent.jpg",
    title: "Accent Chair",
    price: 25.99,
    type: "liddy",
  },
  {
    Image: "images/wooden.jpg",
    title: "Wooden Table",
    price: 45.99,
    type: "ikea",
  },
  {
    Image: "images/dining.jpg",
    title: "Dining Table",
    price: 6.99,
    type: "marcos",
  },
  {
    Image: "images/sofaset.jpg",
    title: "Sofa Set",
    price: 69.99,
    type: "ikea",
  },
  {
    Image: "images/modren.jpg",
    title: "Modern Bookshelf",
    price: 8.99,
    type: "caressa",
  },
  {
    Image: "images/emperor.jpg",
    title: "Emperor Bed",
    price: 21.99,
    type: "liddy",
  },
  {
    Image: "images/interior.jpg",
    title: "Utopia Sofa",
    price: 39.95,
    type: "caressa",
  },
  {
    Image: "images/interior.jpg",
    title: "Entertainment Center",
    price: 29.98,
    type: "caressa",
  },
  {
    Image: "images/sectional.jpg",
    title: "Albany Sectional",
    price: 10.99,
    type: "liddy",
  },
  {
    Image: "images/leather.jpg",
    title: "Leather Sofa",
    price: 9.99,
    type: "caressa",
  },
];

function showContent(productss) {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product");
  newProduct.innerHTML = `<img src="${productss.Image}" alt="interior">
                         <h2>${productss.title}</h2>
                          <p>$${productss.price}</p>`;
  productdiv.appendChild(newProduct);
}

let btns = document.querySelectorAll(".btnn");
let productdiv = document.querySelector(".products");
// console.log(btns);

// filter products with buttons

btns.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.currentTarget.textContent);
    if (btn.textContent === "all") {
      productdiv.innerHTML = "";
      productts.map(function (item) {
        // console.log(item)
        return showContent(item);
      });
    } else if (btn.textContent === e.currentTarget.textContent) {
      productdiv.innerHTML = "";
      const ikeaProduct = productts
        .filter(function (item) {
          return item.type == btn.textContent;
        })
        .map(function (item) {
          // console.log(item);
          return showContent(item);
        });
    }
  });
});

// for range input value price

let priceRange = document.querySelector(".range");
// console.log(priceRange.value);
priceRange.addEventListener("change", function () {
  priceRange.nextElementSibling.textContent = priceRange.value;

  productdiv.innerHTML = "";
  const priceFilter = productts
    .filter(function (item) {
      return Math.floor(item.price) < priceRange.nextElementSibling.textContent;
    })
    .map(function (filteritems) {
      return showContent(filteritems);
    });
});

// filter product through input search term

let searchTerm = document.querySelector(".searchterm");

searchTerm.addEventListener("keyup", function (e) {
  productdiv.innerHTML = "";
  // console.log(searchTerm.value)

  // for(let i =0;i<productts.length;i++){
  //     // console.log(productts[i].title.toUpperCase().indexOf(searchTerm.value));
  //     if(productts[i].title.toUpperCase().indexOf(searchTerm.value)>-1){
  //         console.log(productts[i]);
  //     }
  // }
  productts
    .filter(function (item) {
      return (
        item.title.toUpperCase().indexOf(searchTerm.value.toUpperCase()) > -1
      );
    })
    .map(function (filteritems) {
      // console.log(filteritems);
      return showContent(filteritems);
    });
  // console.log("your value completed")
});

window.addEventListener("DOMContentLoaded", () => {
  productts.map(function (item) {
    // console.log(item);

    return showContent(item);
  });
});
