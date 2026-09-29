/* =========================================
   NIRAI E-COMMERCE JAVASCRIPT
========================================= */


/* PRODUCTS */

const products = [

    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        category: "electronics",
        price: 2499,
        oldPrice: 4999,
        discount: 50,
        rating: 4.7,
        reviews: 324,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
        description: "Experience immersive sound with powerful bass, active noise cancellation and all-day comfort.",
        features: [
            "Active Noise Cancellation",
            "40 Hours Battery",
            "Bluetooth 5.3",
            "Fast Charging"
        ]
    },

    {
        id: 2,
        name: "Premium Smart Watch",
        category: "electronics",
        price: 1899,
        oldPrice: 3999,
        discount: 53,
        rating: 4.5,
        reviews: 218,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
        description: "Track your everyday activities, notifications and workouts with a stylish smart watch.",
        features: [
            "Heart Rate Monitor",
            "Fitness Tracking",
            "Water Resistant",
            "7 Day Battery"
        ]
    },

    {
        id: 3,
        name: "Minimal White Sneakers",
        category: "fashion",
        price: 1299,
        oldPrice: 2499,
        discount: 48,
        rating: 4.6,
        reviews: 187,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        description: "Clean, comfortable sneakers designed for everyday casual style.",
        features: [
            "Lightweight",
            "Cushioned Sole",
            "Breathable",
            "Everyday Comfort"
        ]
    },

    {
        id: 4,
        name: "Classic Denim Jacket",
        category: "fashion",
        price: 1599,
        oldPrice: 2999,
        discount: 47,
        rating: 4.4,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        description: "A timeless denim jacket with a modern fit for everyday outfits.",
        features: [
            "Premium Denim",
            "Regular Fit",
            "Soft Finish",
            "Durable"
        ]
    },

    {
        id: 5,
        name: "Hydrating Face Serum",
        category: "beauty",
        price: 699,
        oldPrice: 999,
        discount: 30,
        rating: 4.8,
        reviews: 451,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
        description: "Lightweight hydrating serum designed to refresh and moisturize your skin.",
        features: [
            "Hydrating Formula",
            "Lightweight",
            "Daily Use",
            "Dermatologically Tested"
        ]
    },

    {
        id: 6,
        name: "Modern Table Lamp",
        category: "home",
        price: 899,
        oldPrice: 1599,
        discount: 44,
        rating: 4.5,
        reviews: 132,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
        description: "Add a warm and elegant touch to your room with this modern table lamp.",
        features: [
            "Warm Light",
            "Modern Design",
            "Energy Efficient",
            "Easy Setup"
        ]
    },

    {
        id: 7,
        name: "Premium Coffee Maker",
        category: "home",
        price: 2199,
        oldPrice: 3499,
        discount: 37,
        rating: 4.6,
        reviews: 164,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
        description: "Brew rich and delicious coffee from the comfort of your home.",
        features: [
            "Fast Brewing",
            "Easy Cleaning",
            "Large Capacity",
            "Compact Design"
        ]
    },

    {
        id: 8,
        name: "Fresh Organic Avocados",
        category: "grocery",
        price: 299,
        oldPrice: 399,
        discount: 25,
        rating: 4.7,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=900&q=85",
        description: "Fresh and delicious avocados selected for everyday healthy meals.",
        features: [
            "Fresh Produce",
            "Naturally Nutritious",
            "Carefully Selected",
            "Fast Delivery"
        ]
    },

    {
        id: 9,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 999,
        oldPrice: 1799,
        discount: 44,
        rating: 4.5,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
        description: "Compact wireless speaker with powerful sound and long-lasting battery.",
        features: [
            "Deep Bass",
            "12 Hours Battery",
            "Bluetooth",
            "Portable"
        ]
    },

    {
        id: 10,
        name: "Everyday Cotton T-Shirt",
        category: "fashion",
        price: 499,
        oldPrice: 799,
        discount: 38,
        rating: 4.3,
        reviews: 542,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        description: "Soft cotton t-shirt designed for comfort and everyday wear.",
        features: [
            "100% Cotton",
            "Soft Fabric",
            "Regular Fit",
            "Machine Wash"
        ]
    },

    {
        id: 11,
        name: "Premium Skincare Set",
        category: "beauty",
        price: 1499,
        oldPrice: 2499,
        discount: 40,
        rating: 4.7,
        reviews: 205,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
        description: "Complete skincare essentials for your everyday self-care routine.",
        features: [
            "Complete Set",
            "Daily Skincare",
            "Gentle Formula",
            "Travel Friendly"
        ]
    },

    {
        id: 12,
        name: "Ergonomic Office Chair",
        category: "home",
        price: 5499,
        oldPrice: 7999,
        discount: 31,
        rating: 4.8,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
        description: "Comfortable ergonomic chair designed for long working and study sessions.",
        features: [
            "Ergonomic Support",
            "Adjustable Height",
            "Comfort Cushion",
            "Strong Frame"
        ]
    }

];


/* =========================================
   LOCAL STORAGE
========================================= */

let cart = JSON.parse(
    localStorage.getItem("niraiCart")
) || [];

let wishlist = JSON.parse(
    localStorage.getItem("niraiWishlist")
) || [];

let currentRating = 5;


/* =========================================
   DOM READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }

    }, 700);


    updateCartUI();
    updateWishlistUI();

    if (document.getElementById("productGrid")) {
        renderProducts(products);
    }

    if (document.getElementById("productDetails")) {
        loadProductDetails();
    }

    startCountdown();

});


/* =========================================
   HOME
========================================= */

function goHome() {
    window.location.href = "index.html";
}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                color:#667085;
            ">
                <div style="font-size:50px;">🔎</div>
                <h3>No products found</h3>
                <p>Try searching something else.</p>
            </div>
        `;

        return;
    }


    list.forEach((product, index) => {

        const isWishlisted =
            wishlist.includes(product.id);

        const card = document.createElement("div");

        card.className = "product-card";

        card.style.animationDelay =
            `${index * 0.05}s`;


        card.innerHTML = `

            <div
                class="product-image"
                onclick="openProduct(${product.id})"
                style="cursor:pointer"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="discount-label">
                    ${product.discount}% OFF
                </span>

                <button
                    class="wishlist"
                    onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3
                    class="product-name"
                    onclick="openProduct(${product.id})"
                    style="cursor:pointer"
                >
                    ${product.name}
                </h3>

                <div class="rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <small>
                        ${product.rating} (${product.reviews})
                    </small>

                </div>

                <div class="price-row">

                    <span class="price">
                        ₹${product.price.toLocaleString()}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString()}
                    </span>

                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory(category) {

    if (!document.getElementById("productGrid")) {

        window.location.href =
            `index.html?category=${category}`;

        return;
    }

    const filtered = products.filter(
        product =>
            product.category === category
    );

    renderProducts(filtered);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showAllProducts() {

    if (!document.getElementById("productGrid")) {
        goHome();
        return;
    }

    renderProducts(products);

}


/* =========================================
   SEARCH
========================================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const query =
        input.value.trim().toLowerCase();


    if (!query) {

        if (document.getElementById("productGrid")) {
            renderProducts(products);
        }

        return;
    }


    const results = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(query)

        ||

        product.category
            .toLowerCase()
            .includes(query)

    );


    if (!document.getElementById("productGrid")) {

        window.location.href =
            "index.html?search=" +
            encodeURIComponent(query);

        return;
    }


    renderProducts(results);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function handleSearch(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

}


/* =========================================
   OPEN PRODUCT
========================================= */

function openProduct(id) {

    window.location.href =
        `product.html?id=${id}`;

}


/* =========================================
   PRODUCT DETAILS
========================================= */

function loadProductDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(params.get("id"));

    const product =
        products.find(
            item => item.id === id
        );


    const container =
        document.getElementById(
            "productDetails"
        );

    if (!container) return;


    if (!product) {

        container.innerHTML = `
            <div class="empty-cart">
                <div>😕</div>
                <h2>Product not found</h2>
                <br>
                <button
                    class="primary-btn"
                    onclick="goHome()"
                >
                    Back to NIRAI
                </button>
            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="product-detail">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="discount-label">
                    ${product.discount}% OFF
                </span>

            </div>


            <div class="detail-content">

                <div class="product-category">
                    ${product.category}
                </div>

                <h1>
                    ${product.name}
                </h1>

                <div class="detail-rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <span>
                        ${product.rating}
                    </span>

                    <span>
                        ${product.reviews} ratings
                    </span>

                </div>


                <div>

                    <span class="detail-price">
                        ₹${product.price.toLocaleString()}
                    </span>

                    <span class="detail-old-price">
                        ₹${product.oldPrice.toLocaleString()}
                    </span>

                </div>


                <p class="detail-description">
                    ${product.description}
                </p>


                <div class="feature-list">

                    ${product.features
                        .map(
                            feature =>
                                `<div>✓ ${feature}</div>`
                        )
                        .join("")
                    }

                </div>


                <div class="detail-buttons">

                    <button
                        class="primary-btn"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="buy-now"
                        onclick="buyNow(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>


                <button
                    class="outline-btn"
                    style="width:100%;margin-top:12px"
                    onclick="openReview()"
                >
                    ⭐ Write a Review
                </button>


                <div style="
                    margin-top:25px;
                    padding:15px;
                    background:#f8fafc;
                    border-radius:10px;
                    font-size:12px;
                ">

                    🚚 Free delivery on orders above ₹499
                    <br><br>
                    🔒 Secure payment
                    <br><br>
                    ↩️ 7 day easy returns

                </div>

            </div>

        </div>

    `;

}


/* =========================================
   CART
========================================= */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveCart();

    updateCartUI();

    showToast(
        "🛒 Added to your cart!"
    );

}


function saveCart() {

    localStorage.setItem(
        "niraiCart",
        JSON.stringify(cart)
    );

}


function updateCartUI() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const countElement =
        document.getElementById(
            "cartCount"
        );

    if (countElement) {
        countElement.textContent = count;
    }


    renderCart();

}


function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>
                    Add something you love!
                </p>

            </div>

        `;

        updateTotal(0);

        return;
    }


    container.innerHTML = "";


    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id === item.id
            );

        if (!product) return;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-price">
                    ₹${(
                        product.price *
                        item.quantity
                    ).toLocaleString()}
                </div>

                <div class="quantity">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${product.id})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;


        container.appendChild(div);

    });


    const total =
        cart.reduce(
            (sum, item) => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                return sum +
                    product.price *
                    item.quantity;

            },
            0
        );


    updateTotal(total);

}


function updateTotal(total) {

    const element =
        document.getElementById(
            "cartTotal"
        );

    if (element) {

        element.textContent =
            "₹" +
            total.toLocaleString();

    }

}


function changeQuantity(id, change) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    saveCart();

    updateCartUI();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    updateCartUI();

    showToast("Product removed");

}


function openCart() {

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (overlay) {
        overlay.classList.add("show");
    }

    renderCart();

}


function closeCart(event) {

    if (
        event &&
        event.target !== event.currentTarget
    ) {
        return;
    }

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (overlay) {
        overlay.classList.remove("show");
    }

}


/* =========================================
   BUY NOW
========================================= */

function buyNow(id) {

    addToCart(id);

    setTimeout(() => {
        proceedToBuy();
    }, 400);

}


/* =========================================
   LOGIN
========================================= */

function openLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    if (modal) {
        modal.classList.add("show");
    }

}


function closeLogin() {

    const modal =
        document.getElementById(
            "loginModal"
        );

    if (modal) {
        modal.classList.remove("show");
    }

}


function loginUser() {

    const name =
        document.getElementById(
            "loginName"
        )?.value.trim();

    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim();

    const password =
        document.getElementById(
            "loginPassword"
        )?.value.trim();


    if (!name || !email || !password) {

        showToast(
            "⚠️ Please fill all fields"
        );

        return;
    }


    localStorage.setItem(
        "niraiUser",
        JSON.stringify({
            name,
            email
        })
    );


    closeLogin();

    showToast(
        `Welcome to NIRAI, ${name}! 🎉`
    );

}


/* =========================================
   CHECK LOGIN
========================================= */

function isLoggedIn() {

    return Boolean(
        localStorage.getItem(
            "niraiUser"
        )
    );

}


/* =========================================
   PROCEED TO BUY
========================================= */

function proceedToBuy() {

    if (cart.length === 0) {

        showToast(
            "🛒 Your cart is empty"
        );

        return;
    }


    if (!isLoggedIn()) {

        showToast(
            "Please login before checkout"
        );

        closeCart();

        setTimeout(() => {
            openLogin();
        }, 400);

        return;
    }


    showCheckout();

}


/* =========================================
   CHECKOUT
========================================= */

function showCheckout() {

    const total =
        cart.reduce(
            (sum, item) => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                return sum +
                    product.price *
                    item.quantity;

            },
            0
        );


    const checkout =
        document.createElement("div");

    checkout.className =
        "modal-overlay show";


    checkout.innerHTML = `

        <div
            class="modal"
            style="width:520px"
        >

            <button
                class="close-btn"
                onclick="this.parentElement.parentElement.remove()"
            >
                ×
            </button>


            <div class="login-logo">
                N<span>IRAI</span>
            </div>

            <h2>
                Secure Checkout 🔒
            </h2>

            <p>
                Complete your order securely.
            </p>


            <div style="
                background:#f8fafc;
                padding:15px;
                border-radius:10px;
                margin:15px 0;
            ">

                <div style="
                    display:flex;
                    justify-content:space-between;
                ">
                    <span>Order Total</span>
                    <strong style="color:#0756c9">
                        ₹${total.toLocaleString()}
                    </strong>
                </div>

            </div>


            <h4 style="margin-bottom:10px">
                Delivery Address
            </h4>

            <input
                id="address"
                placeholder="House / Street / City / PIN"
            >


            <h4 style="margin:8px 0 10px">
                Payment Method
            </h4>


            <select
                id="paymentMethod"
                style="
                    width:100%;
                    padding:13px;
                    border:1px solid #e4e7ec;
                    border-radius:8px;
                    margin-bottom:12px;
                "
            >

                <option value="upi">
                    UPI
                </option>

                <option value="card">
                    Credit / Debit Card
                </option>

                <option value="cod">
                    Cash on Delivery
                </option>

            </select>


            <div id="paymentFields">

                <input
                    id="paymentNumber"
                    placeholder="Enter UPI ID / Card Number"
                >

            </div>


            <button
                class="primary-btn full"
                onclick="placeOrder(this)"
            >
                Pay ₹${total.toLocaleString()} →
            </button>


            <small style="
                display:block;
                text-align:center;
                color:#667085;
                margin-top:12px;
            ">
                🔐 Your payment information is protected.
            </small>

        </div>

    `;


    document.body.appendChild(
        checkout
    );

}


/* =========================================
   PLACE ORDER
========================================= */

function placeOrder(button) {

    const address =
        document.getElementById(
            "address"
        )?.value.trim();


    if (!address) {

        showToast(
            "Please enter delivery address"
        );

        return;
    }


    button.disabled = true;

    button.textContent =
        "Processing...";


    setTimeout(() => {

        cart = [];

        saveCart();

        updateCartUI();


        const modal =
            button.closest(
                ".modal-overlay"
            );

        if (modal) {
            modal.remove();
        }


        showOrderSuccess();

    }, 1800);

}


/* =========================================
   ORDER SUCCESS
========================================= */

function showOrderSuccess() {

    const success =
        document.createElement("div");

    success.className =
        "modal-overlay show";


    success.innerHTML = `

        <div
            class="modal"
            style="text-align:center"
        >

            <div style="
                width:85px;
                height:85px;
                margin:auto;
                border-radius:50%;
                background:#ecfdf3;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:45px;
                animation:pulse 1s infinite;
            ">
                ✓
            </div>


            <h2 style="margin-top:20px">
                Order Confirmed! 🎉
            </h2>


            <p>
                Thank you for shopping with NIRAI.
            </p>


            <div style="
                background:#f8fafc;
                padding:15px;
                border-radius:10px;
                margin:20px 0;
                font-size:13px;
            ">

                Your order has been placed successfully.
                <br><br>
                Estimated delivery: <b>2–5 days</b>

            </div>


            <button
                class="primary-btn full"
                onclick="this.parentElement.parentElement.remove()"
            >
                Continue Shopping
            </button>

        </div>

    `;


    document.body.appendChild(
        success
    );

}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        showToast(
            "❤️ Added to wishlist"
        );

    }


    localStorage.setItem(
        "niraiWishlist",
        JSON.stringify(wishlist)
    );


    updateWishlistUI();


    if (document.getElementById("productGrid")) {
        renderProducts(products);
    }

}


function updateWishlistUI() {

    const count =
        document.getElementById(
            "wishCount"
        );

    if (count) {
        count.textContent =
            wishlist.length;
    }

}


function showWishlist() {

    if (wishlist.length === 0) {

        showToast(
            "♡ Your wishlist is empty"
        );

        return;
    }


    const names =
        wishlist
            .map(id => {

                const product =
                    products.find(
                        p => p.id === id
                    );

                return product?.name;

            })
            .filter(Boolean);


    alert(
        "❤️ Your NIRAI Wishlist:\n\n" +
        names.join("\n")
    );

}


/* =========================================
   REVIEW
========================================= */

function openReview() {

    const modal =
        document.getElementById(
            "reviewModal"
        );

    if (!modal) return;

    modal.classList.add("show");

    currentRating = 5;

    updateRatingButtons();

}


function closeReview() {

    const modal =
        document.getElementById(
            "reviewModal"
        );

    if (modal) {
        modal.classList.remove("show");
    }

}


function setRating(value) {

    currentRating = value;

    updateRatingButtons();

}


function updateRatingButtons() {

    const buttons =
        document.querySelectorAll(
            ".rating-select button"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index < currentRating
            );

        }
    );

}


function submitReview() {

    const text =
        document.getElementById(
            "reviewText"
        )?.value.trim();


    if (!text) {

        showToast(
            "Please write your review"
        );

        return;
    }


    closeReview();

    showToast(
        `⭐ ${currentRating}/5 review submitted!`
    );


    const textarea =
        document.getElementById(
            "reviewText"
        );

    if (textarea) {
        textarea.value = "";
    }

}


/* =========================================
   NEWSLETTER
========================================= */

function subscribeNewsletter() {

    const input =
        document.getElementById(
            "newsletterEmail"
        );

    if (!input) return;


    const email =
        input.value.trim();


    if (!email ||
        !email.includes("@")) {

        showToast(
            "Please enter a valid email"
        );

        return;
    }


    input.value = "";

    showToast(
        "🎉 You're subscribed to NIRAI!"
    );

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) return;


    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================
   SCROLL
========================================= */

function scrollToProducts() {

    const section =
        document.getElementById(
            "products"
        );

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


function scrollToCategories() {

    const section =
        document.getElementById(
            "categories"
        );

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   COUNTDOWN
========================================= */

function startCountdown() {

    let end =
        Date.now() +
        (8 * 60 * 60 * 1000) +
        (42 * 60 * 1000);


    setInterval(() => {

        let distance =
            end - Date.now();


        if (distance <= 0) {

            end =
                Date.now() +
                8 * 60 * 60 * 1000;

            distance =
                end - Date.now();

        }


        const hours =
            Math.floor(
                distance /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                (1000 * 60)) /
                1000
            );


        const h =
            document.getElementById(
                "hours"
            );

        const m =
            document.getElementById(
                "minutes"
            );

        const s =
            document.getElementById(
                "seconds"
            );


        if (h) {
            h.textContent =
                String(hours)
                .padStart(2,"0");
        }

        if (m) {
            m.textContent =
                String(minutes)
                .padStart(2,"0");
        }

        if (s) {
            s.textContent =
                String(seconds)
                .padStart(2,"0");
        }

    },1000);

}


/* =========================================
   URL FILTER
========================================= */

window.addEventListener(
    "load",
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );


        const category =
            params.get("category");


        const search =
            params.get("search");


        if (
            category &&
            document.getElementById(
                "productGrid"
            )
        ) {

            const filtered =
                products.filter(
                    p =>
                        p.category ===
                        category
                );

            renderProducts(filtered);

        }


        if (
            search &&
            document.getElementById(
                "productGrid"
            )
        ) {

            const results =
                products.filter(
                    p =>
                        p.name
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            )
                );

            renderProducts(results);

        }

    }
);