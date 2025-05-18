let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
};

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// ---- CART FUNCTIONALITY ----

let cartItemsContainer = document.querySelector('.shopping-cart .cart-items'); // Add this div in your HTML
let cartTotal = document.getElementById('cart-total'); // Make sure you have <span id="cart-total">0</span>
let totalAmount = 0;

// ADD TO CART
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
        const img = button.dataset.img;

        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('data-price', price);
        box.innerHTML = `
            <i class="fa fa-trash"></i>
            <img src="${img}" height="100" width="100">
            <div class="content">
                <h3>${name}</h3>
                <span class="price">₹${price}/-</span>
                <span class="quantity">Qty : 1 </span>
            </div>
        `;

        // Add box to cart
        cartItemsContainer.appendChild(box);
        totalAmount += price;
        updateCartTotal();
    });
});

// DELETE ITEM FROM CART (Event Delegation)
document.querySelector('.shopping-cart').addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-trash')) {
        const box = e.target.closest('.box');
        const price = parseInt(box.getAttribute('data-price'));
        box.remove();
        totalAmount -= price;
        updateCartTotal();
    }
});

function updateCartTotal() {
    cartTotal.textContent = totalAmount;
}


var swiper = new Swiper(".product-slider", {
  loop:true,
      spaceBetween: 20,
      autoplay: {
      delay: 7500,
      disableOnInteraction: false,
      },
      breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1020: {
          slidesPerView: 3,
      },
      },
  });
  
  var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay: {
          delay: 7500,
          disableOnInteraction: false,
      },
      breakpoints: {
          0: {
          slidesPerView: 1,
          },
          768: {
          slidesPerView: 2,
          },
          1020: {
          slidesPerView: 3,
          },
      },
  });
