<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mobile Phones E-Commerce</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <style>
    body {
      padding-bottom: 70px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #fafafa;
    }
    .product-card {
      cursor: pointer;
      transition: box-shadow 0.3s ease;
    }
    .product-card:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
    .nav-bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
      background-color: #fff;
      z-index: 1030;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .nav-bottom a {
      color: #555;
      font-size: 1.3rem;
      text-align: center;
      flex-grow: 1;
      padding: 0.5rem;
      transition: color 0.3s ease;
    }
    .nav-bottom a.active,
    .nav-bottom a:hover {
      color: #0d6efd;
    }
    .filter-sort {
      margin-bottom: 1rem;
    }
    .cart-badge {
      position: absolute;
      top: 2px;
      right: 10px;
      font-size: 0.7rem;
    }
    .add-to-cart-btn {
      transition: transform 0.2s ease;
    }
    .add-to-cart-btn:active {
      transform: scale(0.9);
    }
  </style>
</head>
<body>

<div class="container pt-3" id="main-app">

  <!-- Header -->
  <header class="mb-3">
    <h1 class="h4 text-center mb-0">Mobile Phones Store</h1>
    <p class="text-center text-muted small">Shop the latest mobile phones</p>
  </header>

  <!-- Filter & Sort -->
  <div class="d-flex justify-content-between filter-sort">
    <select class="form-select w-auto" id="filterBrand" aria-label="Filter by brand">
      <option value="">All Brands</option>
      <option value="Apple">Apple</option>
      <option value="Samsung">Samsung</option>
      <option value="Google">Google</option>
      <option value="OnePlus">OnePlus</option>
    </select>

    <select class="form-select w-auto" id="sortPrice" aria-label="Sort by price">
      <option value="default">Sort By Price</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  </div>

  <!-- Product Catalog Grid -->
  <div class="row g-3" id="productCatalog" aria-live="polite" aria-label="Product catalog">
    <!-- Products injected by JS -->
  </div>

</div>

<!-- Product Detail Modal -->
<div class="modal fade" id="productDetailModal" tabindex="-1" aria-labelledby="productDetailLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="productDetailLabel">Product Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-md-6" id="productImageGallery" role="region" aria-label="Product images">
            <!-- Image gallery carousel -->
            <div id="carouselImages" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" id="carouselInner">
                <!-- Gallery images loaded by JS -->
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselImages" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselImages" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <h3 id="detailName"></h3>
            <p id="detailBrand" class="text-muted"></p>
            <p><strong>Price: </strong><span id="detailPrice"></span></p>
            <p><strong>Availability: </strong><span id="detailStock"></span></p>
            <p><strong>Description:</strong></p>
            <p id="detailDescription"></p>
            <button type="button" id="addToCartDetail" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Shopping Cart Offcanvas -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartLabel">
  <div class="offcanvas-header">
    <h5 id="cartLabel" class="offcanvas-title">Shopping Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body d-flex flex-column">
    <ul class="list-group mb-3" id="cartItems" role="region" aria-live="polite" aria-label="Cart items">
      <!-- Cart items dynamically added -->
    </ul>
    <div class="mt-auto">
      <h5 class="d-flex justify-content-between">
        <span>Total:</span>
        <span id="cartTotal">$0.00</span>
      </h5>
      <button type="button" id="checkoutBtn" class="btn btn-success w-100 mt-2" data-bs-toggle="modal" data-bs-target="#checkoutModal" disabled>Proceed to Checkout</button>
    </div>
  </div>
</div>

<!-- Checkout Modal -->
<div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content needs-validation" id="checkoutForm" novalidate>
      <div class="modal-header">
        <h5 class="modal-title" id="checkoutLabel">Checkout</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name *</label>
            <input type="text" id="fullName" class="form-control" required aria-describedby="fullNameHelp" />
            <div class="invalid-feedback">Please enter your full name</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email *</label>
            <input type="email" id="email" class="form-control" required aria-describedby="emailHelp" />
            <div class="invalid-feedback">Please enter a valid email address</div>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address *</label>
            <textarea id="address" class="form-control" rows="2" required></textarea>
            <div class="invalid-feedback">Please provide a shipping address</div>
          </div>
          <div class="mb-3">
            <label for="paymentMethod" class="form-label">Payment Method *</label>
            <select id="paymentMethod" class="form-select" required>
              <option value="" disabled selected>Select a payment method</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Google Pay</option>
              <option>Apple Pay</option>
            </select>
            <div class="invalid-feedback">Please select a payment method</div>
          </div>
          <div id="checkoutError" class="text-danger mb-2 visually-hidden" role="alert"></div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary w-100">Confirm Purchase</button>
      </div>
    </form>
  </div>
</div>

<!-- User Authentication Modal -->
<div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="authLabel" class="modal-title">Sign In</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="authBody">
        <form id="loginForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="loginEmail" class="form-label">Email address</label>
            <input type="email" id="loginEmail" class="form-control" required />
            <div class="invalid-feedback">Please enter a valid email</div>
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Password</label>
            <input type="password" id="loginPassword" class="form-control" required minlength="6" />
            <div class="invalid-feedback">Password must be at least 6 characters</div>
          </div>
          <div id="loginError" class="text-danger visually-hidden" role="alert"></div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <hr />
        <p class="text-center">Don't have an account? <a href="#" id="showRegister">Register</a></p>
      </div>
      <div class="modal-body d-none" id="registerBody">
        <form id="registerForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="regEmail" class="form-label">Email address</label>
            <input type="email" id="regEmail" class="form-control" required />
            <div class="invalid-feedback">Please enter a valid email</div>
          </div>
          <div class="mb-3">
            <label for="regPassword" class="form-label">Password</label>
            <input type="password" id="regPassword" class="form-control" required minlength="6" />
            <div class="invalid-feedback">Password must be at least 6 characters</div>
          </div>
          <div id="registerError" class="text-danger visually-hidden" role="alert"></div>
          <button type="submit" class="btn btn-success w-100">Register</button>
        </form>
        <hr />
        <p class="text-center">Already have an account? <a href="#" id="showLogin">Login</a></p>
      </div>
    </div>
  </div>
</div>

<!-- Bottom Navigation -->
<nav class="nav-bottom" role="navigation" aria-label="Bottom menu">
  <a href="#" id="navHome" class="active" aria-current="page"><i class="bi bi-house"></i><br>Home</a>
  <a href="#" id="navCart" aria-controls="cartOffcanvas" data-bs-toggle="offcanvas"><i class="bi bi-cart"></i><span class="badge rounded-pill bg-danger cart-badge d-none" id="cartCount">0</span><br>Cart</a>
  <a href="#" id="navUser" data-bs-toggle="modal" data-bs-target="#authModal"><i class="bi bi-person"></i><br>Account</a>
</nav>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  (() => {
    // Sample product data with price and stock
    const products = [
      {
        id: 1,
        name: "Apple iPhone 14",
        brand: "Apple",
        price: 799.99,
        image: "https://dummyimage.com/300x300/000/fff&text=iPhone+14",
        gallery: [
          "https://dummyimage.com/600x600/000/fff&text=iPhone+14-1",
          "https://dummyimage.com/600x600/111/eee&text=iPhone+14-2",
          "https://dummyimage.com/600x600/222/ddd&text=iPhone+14-3"
        ],
        rating: 4.7,
        stock: 10,
        description: "The latest iPhone 14 with enhanced camera and performance."
      },
      {
        id: 2,
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: 749.99,
        image: "https://dummyimage.com/300x300/0033cc/fff&text=Galaxy+S23",
        gallery: [
          "https://dummyimage.com/600x600/0033cc/fff&text=Galaxy+S23-1",
          "https://dummyimage.com/600x600/0044dd/eee&text=Galaxy+S23-2"
        ],
        rating: 4.5,
        stock: 15,
        description: "Samsung's flagship Galaxy S23 with stunning display."
      },
      {
        id: 3,
        name: "Google Pixel 8",
        brand: "Google",
        price: 699.99,
        image: "https://dummyimage.com/300x300/444/fff&text=Pixel+8",
        gallery: [
          "https://dummyimage.com/600x600/444/fff&text=Pixel+8-1",
          "https://dummyimage.com/600x600/555/eee&text=Pixel+8-2"
        ],
        rating: 4.3,
        stock: 7,
        description: "Google Pixel 8 with pure Android experience."
      },
      {
        id: 4,
        name: "OnePlus 11",
        brand: "OnePlus",
        price: 649.99,
        image: "https://dummyimage.com/300x300/222/fff&text=OnePlus+11",
        gallery: [
          "https://dummyimage.com/600x600/222/fff&text=OnePlus+11-1",
          "https://dummyimage.com/600x600/333/eee&text=OnePlus+11-2"
        ],
        rating: 4.2,
        stock: 5,
        description: "OnePlus 11 with fast charging and smooth display."
      }
    ];

    let cart = [];

    // DOM elements
    const productCatalog = document.getElementById("productCatalog");
    const detailModal = new bootstrap.Modal(document.getElementById("productDetailModal"));
    const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById("cartOffcanvas"));
    const authModal = new bootstrap.Modal(document.getElementById("authModal"));
    const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));

    // Render product cards with filter and sort
    function renderProducts() {
      const filterBrand = document.getElementById("filterBrand").value;
      const sortPrice = document.getElementById("sortPrice").value;
      let filteredProducts = [...products];

      if (filterBrand) {
        filteredProducts = filteredProducts.filter(product => product.brand === filterBrand);
      }

      if (sortPrice === "asc") {
        filteredProducts.sort((a,b) => a.price - b.price);
      } else if (sortPrice === "desc") {
        filteredProducts.sort((a,b) => b.price - a.price);
      }

      productCatalog.innerHTML = filteredProducts
        .map(product => `
          <div class="col-6 col-md-4" role="listitem">
            <div class="card product-card h-100" tabindex="0" aria-label="${product.name}, price $${product.price.toFixed(2)}">
              <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="mb-1 text-muted small">${product.brand}</p>
                <p class="mb-1 fw-bold">$${product.price.toFixed(2)}</p>
                <p class="mb-2 small">Rating: ${product.rating.toFixed(1)} ★</p>
                <p class="mb-2 small ${product.stock > 0 ? 'text-success' : 'text-danger'}">${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                <button class="btn btn-outline-primary mt-auto add-to-cart-btn" data-id="${product.id}" aria-label="Add ${product.name} to cart">Add to Cart</button>
              </div>
            </div>
          </div>
        `)
        .join("");
    }

    // Load product detail modal content
    function showProductDetail(id) {
      const product = products.find(p => p.id === id);
      if (!product) return;

      document.getElementById("productDetailLabel").innerText = product.name;
      document.getElementById("detailName").innerText = product.name;
      document.getElementById("detailBrand").innerText = product.brand;
      document.getElementById("detailPrice").innerText = `$${product.price.toFixed(2)}`;
      document.getElementById("detailStock").innerText = product.stock > 0 ? "In Stock" : "Out of Stock";
      document.getElementById("detailStock").className = product.stock > 0 ? "text-success" : "text-danger";
      document.getElementById("detailDescription").innerText = product.description;
      document.getElementById("addToCartDetail").setAttribute("data-id", product.id);
      document.getElementById("addToCartDetail").disabled = product.stock === 0;

      // Populate gallery carousel
      const carouselInner = document.getElementById("carouselInner");
      carouselInner.innerHTML = product.gallery.map((img, i) => `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <img src="${img}" class="d-block w-100" alt="${product.name} image ${i+1}" loading="lazy" />
        </div>
      `).join("");
      
      detailModal.show();
    }

    // Add product to cart
    function addToCart(productId, quantity = 1) {
      const product = products.find(p => p.id === productId);
      if (!product || product.stock === 0) {
        alert("Sorry, this product is out of stock.");
        return;
      }

      const itemIndex = cart.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        let newQty = cart[itemIndex].quantity + quantity;
        if (newQty > product.stock) {
          alert(`Cannot add more than ${product.stock} items.`);
          return;
        }
        cart[itemIndex].quantity = newQty;
      } else {
        cart.push({ id: productId, quantity });
      }

      updateCartUI();
      detailModal.hide();
    }

    // Update cart UI list and badge, enable/disable checkout
    function updateCartUI() {
      const cartItems = document.getElementById("cartItems");
      const cartCount = document.getElementById("cartCount");
      const checkoutBtn = document.getElementById("checkoutBtn");

      if (cart.length === 0) {
        cartItems.innerHTML = `<li class="list-group-item">Your cart is empty.</li>`;
        cartCount.classList.add("d-none");
        checkoutBtn.disabled = true;
        document.getElementById("cartTotal").innerText = "$0.00";
        return;
      }

      cartCount.classList.remove("d-none");
      let totalQuantity = 0;
      let totalPrice = 0;

      cartItems.innerHTML = cart.map(({id, quantity}) => {
        const product = products.find(p => p.id === id);
        totalQuantity += quantity;
        const itemTotal = product.price * quantity;
        totalPrice += itemTotal;

        return `
          <li class="list-group-item d-flex justify-content-between align-items-center" aria-label="${product.name} in cart, quantity ${quantity}">
            <div>
              <strong>${product.name}</strong><br/>
              <small>${quantity} x $${product.price.toFixed(2)}</small>
            </div>
            <div>
              <button class="btn btn-sm btn-outline-danger btn-remove" data-id="${id}" aria-label="Remove one ${product.name} from cart">&minus;</button>
              <span class="mx-1">${quantity}</span>
              <button class="btn btn-sm btn-outline-primary btn-add" data-id="${id}" aria-label="Add one more ${product.name} to cart">+</button>
            </div>
          </li>
        `;
      }).join("");

      cartCount.innerText = totalQuantity;
      document.getElementById("cartTotal").innerText = `$${totalPrice.toFixed(2)}`;
      checkoutBtn.disabled = false;
    }

    // Remove one quantity or entire product from cart
    function removeOneFromCart(id) {
      const itemIndex = cart.findIndex(item => item.id === id);
      if (itemIndex < 0) return;

      cart[itemIndex].quantity--;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }

      updateCartUI();
    }

    // Add one quantity to cart product
    function addOneToCart(id) {
      const product = products.find(p => p.id === id);
      if (!product) return;

      const itemIndex = cart.findIndex(item => item.id === id);
      if (itemIndex > -1 && cart[itemIndex].quantity < product.stock) {
        cart[itemIndex].quantity++;
      } else if (itemIndex === -1) {
        cart.push({id, quantity: 1});
      }

      updateCartUI();
    }

    // Checkout form validation and submission
    function handleCheckoutSubmit(event) {
      event.preventDefault();
      const form = event.target;
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      if (cart.length === 0) {
        showCheckoutError("Your cart is empty.");
        return;
      }

      // Simulate purchase success
      alert("Thank you for your purchase!");
      cart = [];
      updateCartUI();
      form.reset();
      form.classList.remove("was-validated");
      checkoutModal.hide();
      cartOffcanvas.hide();
    }

    function showCheckoutError(message) {
      const errorDiv = document.getElementById("checkoutError");
      errorDiv.textContent = message;
      errorDiv.classList.remove("visually-hidden");
    }

    function hideCheckoutError() {
      document.getElementById("checkoutError").classList.add("visually-hidden");
    }

    // User authentication form toggle and simple validation (demo only)
    const authModalEl = document.getElementById("authModal");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginError = document.getElementById("loginError");
    const registerError = document.getElementById("registerError");
    const authBody = document.getElementById("authBody");
    const registerBody = document.getElementById("registerBody");

    document.getElementById("showRegister").addEventListener("click", (e) => {
      e.preventDefault();
      authBody.classList.add("d-none");
      registerBody.classList.remove("d-none");
      document.getElementById("authLabel").textContent = "Register";
    });

    document.getElementById("showLogin").addEventListener("click", (e) => {
      e.preventDefault();
      registerBody.classList.add("d-none");
      authBody.classList.remove("d-none");
      document.getElementById("authLabel").textContent = "Sign In";
    });

    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      loginError.classList.add("visually-hidden");
      if (!loginForm.checkValidity()) {
        e.stopPropagation();
        loginForm.classList.add("was-validated");
        return;
      }
      // Simulated login success
      alert("Login successful!");
      authModal.hide();
      loginForm.reset();
      loginForm.classList.remove("was-validated");
    });

    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      registerError.classList.add("visually-hidden");
      if (!registerForm.checkValidity()) {
        e.stopPropagation();
        registerForm.classList.add("was-validated");
        return;
      }
      // Simulated registration success
      alert("Registration successful!");
      authModal.hide();
      registerForm.reset();
      registerForm.classList.remove("was-validated");
    });

    // Event delegation for product cards: open detail or add to cart
    productCatalog.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-to-cart-btn")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        addToCart(id);
      } else {
        // Find product card container
        let el = e.target;
        while (el && !el.classList.contains("product-card")) {
          el = el.parentElement;
        }
        if (el) {
          const cards = [...productCatalog.querySelectorAll(".product-card")];
          const index = cards.indexOf(el);
          if (index > -1) {
            const productId = parseInt(el.querySelector(".add-to-cart-btn").getAttribute("data-id"));
            showProductDetail(productId);
          }
        }
      }
    });

    // Add to cart from product detail modal
    document.getElementById("addToCartDetail").addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      addToCart(id);
    });

    // Cart control buttons: add/remove quantity
    document.getElementById("cartItems").addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-remove")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        removeOneFromCart(id);
      }
      if (e.target.classList.contains("btn-add")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        addOneToCart(id);
      }
    });

    // Checkout form submit handler
    document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);
    document.getElementById("checkoutForm").addEventListener("input", hideCheckoutError);

    // Filter and sort dropdown change listener
    document.getElementById("filterBrand").addEventListener("change", renderProducts);
    document.getElementById("sortPrice").addEventListener("change", renderProducts);

    // Initial rendering
    renderProducts();
    updateCartUI();

  })();
</script>
</body>
</html>
