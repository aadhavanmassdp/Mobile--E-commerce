# 📱 Basic E-Commerce Website (Mobile Store)

A simple **e-commerce web app** for mobile phones built using **HTML, CSS, and JavaScript**.  
This project demonstrates the basic concept of an online store with a shopping cart feature.  

---

## 🚀 Features
- Display a list of mobile phones with price & image  
- "Add to Cart" button functionality  
- Updates total dynamically  
- Beginner-friendly project  

---

## 🛠️ Tech Stack
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

---

## 📂 Project Structure
Got it 👍 You want a **basic e-commerce project for mobiles** (front-end only). I’ll give you a simple **HTML + CSS + JavaScript** template and also a **README.md** so it’s like a mini-project.

---

### 📂 Project Structure

```
ecommerce-mobile/
│
├── index.html   # Main file
├── style.css    # Stylesheet
├── script.js    # Basic interactivity
└── README.md    # Documentation
```

---

### ✅ Example Code

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile E-Commerce</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>📱 Mobile Store</h1>
  </header>

  <main>
    <section class="products">
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="iPhone">
        <h2>iPhone 15</h2>
        <p>$999</p>
        <button onclick="addToCart('iPhone 15', 999)">Add to Cart</button>
      </div>

      <div class="product">
        <img src="https://via.placeholder.com/150" alt="Samsung Galaxy">
        <h2>Samsung Galaxy S23</h2>
        <p>$899</p>
        <button onclick="addToCart('Samsung Galaxy S23', 899)">Add to Cart</button>
      </div>

      <div class="product">
        <img src="https://via.placeholder.com/150" alt="OnePlus">
        <h2>OnePlus 11</h2>
        <p>$699</p>
        <button onclick="addToCart('OnePlus 11', 699)">Add to Cart</button>
      </div>
    </section>

    <section class="cart">
      <h2>🛒 Shopping Cart</h2>
      <ul id="cartItems"></ul>
      <p id="total">Total: $0</p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

**style.css**

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f8f8f8;
}

header {
  background: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.products {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}

.product {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  width: 200px;
}

.product img {
  max-width: 100%;
  border-radius: 8px;
}

.cart {
  background: white;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
}
```

**script.js**

```javascript
let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalElement = document.getElementById('total');
  
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = `Total: $${total}`;
}
```

---

### 📘 README.md

```markdown
# 📱 Basic E-Commerce Website (Mobile Store)

A simple **e-commerce web app** for mobile phones built using **HTML, CSS, and JavaScript**.  
This project demonstrates the basic concept of an online store with a shopping cart feature.  

---

## 🚀 Features
- Display a list of mobile phones with price & image  
- "Add to Cart" button functionality  
- Updates total dynamically  
- Beginner-friendly project  

---

## 🛠️ Tech Stack
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

---

## 📂 Project Structure
```

ecommerce-mobile/
│
├── index.html   # Main UI
├── style.css    # Styling
├── script.js    # Shopping cart logic
└── README.md    # Documentation


## 🔮 Future Enhancements

* Add **Remove from Cart** feature
* Store cart items in **localStorage**
* Add a **checkout page**
* Connect to a **backend API / database**
