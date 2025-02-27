const products = [
    { id: 1, name: "Men's Watch", price: 10, image: "https://via.placeholder.com/150/92c952" },
    { id: 2, name: "Wireless Headphones", price: 20, image: "https://via.placeholder.com/150/771796" },
    { id: 3, name: "Laptop", price: 30, image: "https://via.placeholder.com/150/24f355" },
    { id: 4, name: "Smartphone", price: 40, image: "https://via.placeholder.com/150/d32776" },
  ];
  
  let cart = [];
  
  const displayProducts = () => {
    const productsContainer = document.getElementById("products");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productCard);
    });
  };
  
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    alert(`${product.name} added to cart!`);
  };
  
  const viewCart = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
  
    const cartSection = document.getElementById("cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    cartItemsContainer.innerHTML = "";
  
    let total = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `<p>${item.name} - $${item.price} x ${item.quantity}</p>`;
      cartItemsContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartSection.style.display = "block";
  };
  
  const hideCart = () => {
    const cartSection = document.getElementById("cart");
    cartSection.style.display = "none";
  };
  
  displayProducts();