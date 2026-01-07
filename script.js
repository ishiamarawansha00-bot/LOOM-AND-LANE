/* ===== Loom & Lane Embedded Data ===== */
const products = [
  {
    id: 1,
    name: "Handwoven Cotton Throw",
    category: "Home Decor",
    price: 50.00,
    popularity: 95,
    imageURL: "pictures/4to12.jpg.jpeg",
    description: " A soft, handwoven cotton throw in neutral tones, perfect for layering.",
    variants:   [
      { type: "material", options: ["Terecotta"] },
      { type: "Color", options: ["Natural", "White"] }
    
    ]
  },
  {
    id: 2,
    name: "Terracotta Artisan Vase",
    category: "Home Decor",
    price: 65.00,
    popularity: 90,
    imageURL: "pictures/4to13.jpg.jpeg",
    description: " A handcrafted terracotta vase with a matte finish and organic silhouette.",
    variants: [
      { type: "Finish", options: ["Porcelain", "Gloss"] },
      { type: "Color", options: ["Gray", "Black"] }
    
    ]
  },
  {
    id: 3,
    name: "Linen Table Runner",
    category: "Accessories",
    price: 32.00,
    popularity: 72,
    imageURL: "pictures/4to4.jpg.jpeg",
    description: "Soft linen runner that elevates dining spaces with effortless elegance.",
    variants:[
      { type: "Finish", options: ["Linen", ] },
      { type: "Color", options: ["Sand", "Slate"] }
    
    ]
  },
  {
    id: 4,
    name: "Rattan Storage Basket",
    category: "Home Decor",
    price: 28.00,
    popularity: 91,
    imageURL: "pictures/4to5.jpg.jpeg",
    description: "Handcrafted rattan basket, both functional and artful.",
    variants: [
      { type: "Size", options: ["Small", "Medium", "Large"] }
      
    ]
  },

  {
    id: 5,
    name: "Artisanal Wall Hanging",
    category: "Home Decor",
    price: 60.00,
    popularity: 65,
    imageURL: "pictures/4to6.jpg.jpeg",
    description: "Textile wall art with geometric motifs and warm hues.",
    variants: [
      { type: "Color" , options : ["Rust" , "Ochre" , "Indigo"]}
    ]
  },
  {
    id: 6,
    name: "Coconut Shell Bowl Set",
    category: "Crafts",
    price: 22.00,
    popularity: 76,
    imageURL: "pictures/4to7.jpg.jpg",
    description: "Eco-friendly bowls made from upcycled coconut shells.",
    variants: [
      { type: "Finish", options: ["Matte", "Gloss"] }
    ]
  },
  {
    id: 7,
    name: "Batik Throw Blanket",
    category: "Home Decor",
    price: 54.00,
    popularity: 84,
    imageURL: "pictures/4to8.jpg.jpg",
    description: "Hand-dyed batik throw, cozy and visually striking.",
    variants: [
      { type: "Color", options: ["Saffron", "Teal"] }
      
    ]
  },
  {
    id: 8,
    name: "Teak Coasters (Set of 4)",
    category: "Accessories",
    price: 18.00,
    popularity: 70,
    imageURL: "pictures/4to9.jpg.jpeg",
    description: "Durable teak coasters, smooth finished with beveled edges.",
    variants: [
      { type: "Finish", options: ["Natural", "Oiled"] }
    ]
  },
  {
    id: 9,
    name: "Spice Storage Jars",
    category: "Crafts",
    price: 30.00,
    popularity: 73,
    imageURL: "pictures/4to10.jpg.jpeg",
    description: "Glass jars with carved wooden lids for elegant spice storage.",
    variants: [
      { type: "Wood", options: ["Teak", "Mahogany"] }
    ]
  },
  {
    id: 10,
    name: "Handloom Tote Bag",
    category: "Accessories",
    price: 38.00,
    popularity: 89,
    imageURL: "pictures/4to11.jpg.jpeg",
    description: "Sturdy handloom tote for everyday use, made in Sri Lanka.",
    variants: [
      { type: "Color", options: ["Charcoal", "Mustard"] }
    ]
  },
  {
    id: 11,
    name: "Coastal Shell Placemat Set",
    category: "Crafts",
    price: 48.00,
    popularity: 89,
    imageURL: "pictures/4to15.jpg.jpg",
    description: "A set of handwoven straw placemats bordered with natural seashells, perfect for a beach-inspired table setting.",
    variants:  [
      { type: "shape", options: ["Round", "Oval"] },
      { type: "Color", options: ["Sand", "Shell White", "Ocean Mist"] }
    
    ]
  },
  {
  id: 12,
  name: "Traditional Raksha Mask",
  category: "Home Decor",
  price: 65.00,
  popularity: 94,
  imageURL: "pictures/4to16.jpg.jpg",
  description: "A handcrafted Sri Lankan Raksha mask featuring a fierce black face and cobra-like headdress, traditionally used to ward off evil and bring protection.",
  variants: [
    { type: "Size", options: ["Small", "Medium", "Large"] },
    { type: "Color Theme", options: ["Classic Black", "Festival Red", "Mystic Blue"] }
  ]
 },
 {
  id: 13,
  name: "Coconut Shell Crafts",
  category: "Home Decor",
  price: 65.00,
  popularity: 70,
  imageURL: "pictures/4to17.jpg.jpg",
  description: "Handmade coconut shell craft with natural rustic charm.",
  variants: [
    { type: "Size", options: ["Small", "Medium", "Large"] },
    { type: "Color Theme", options: ["Natural Brown", "Dark Gloss", "Golden Tint"] }
  ]
},
{
  id: 14,   
  name: "Buddha Framed Picture",
  category: "Home Decor",
  price: 58.00,
  popularity: 88,
  imageURL: "pictures/4to18.jpg.jpg", 
  description: "A serene Buddha framed picture, handcrafted with traditional Sri Lankan artistry, perfect for meditation spaces or living rooms.",
  variants: [
    { type: "Frame Material", options: ["Teak Wood", "Mahogany", "Coconut Shell"] },
    { type: "Size", options: ["Small", "Medium", "Large"] },
    { type: "Color Theme", options: ["Golden Aura", "Classic Black", "Natural Wood"] }
  ]
},
{
  id: 15,   
  name: "Palm-Leaf Hand Fan",
  category: "Accessories",
  price: 22.00,
  popularity: 72,
  imageURL: "pictures/4to19.jpg.jpg", 
  description: "A handcrafted palm-leaf hand fan (Visiri), woven by Sri Lankan artisans. Lightweight, eco-friendly, and perfect for traditional ceremonies or everyday use.",
  variants: [
    { type: "Design", options: ["Plain Weave", "Colorful Thread Pattern", "Floral Motif"] },
    { type: "Size", options: ["Small", "Medium", "Large"] },
    { type: "Handle", options: ["Wooden", "Cane", "Palm Leaf"] }
  ]
},
{
  id: 17,   
  name: "Brassware Decorative Box",
  category: "Crafts",
  price: 65.00,
  popularity: 84,
  imageURL: "pictures/4to20.jpg.jpg", 
  description: "A handcrafted brassware box with intricate carvings, made by Sri Lankan artisans. Ideal for storing jewelry, keepsakes, or as a timeless décor piece.",
  variants: [
    { type: "Design", options: ["Floral Engraving", "Geometric Pattern", "Traditional Motif"] },
    { type: "Size", options: ["Small", "Medium", "Large"] },
    { type: "Finish", options: ["Polished Brass", "Antique Matte", "Silver-Plated"] }
  ]
}

];
/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  setupThemeToggle();
  updateCartCount();
  setupSearch(); // IMPORTANT: Add this line!

  // Page-specific bootstrapping
  if (document.getElementById('featuredGrid')) renderFeatured();
  if (document.getElementById('spinner')) loadListing();
  if (document.getElementById('productDetail')) loadProductDetails();
  if (document.getElementById('cartItems')) renderCartPage();
  if (document.getElementById('checkoutForm')) setupCheckout();
});
/* ===== Theme Toggle ===== */
function applySavedTheme() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', isDark);
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) toggle.checked = isDark;
}
function setupThemeToggle() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
}



/* ===== Cart Utilities (localStorage) ===== */
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (!countEl) return;
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  countEl.textContent = count;
}
function addToCart(productId, selections = {}, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const key = JSON.stringify({ id: productId, selections });
  let cart = getCart();
  const idx = cart.findIndex(i => JSON.stringify({ id: i.id, selections: i.selections }) === key);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      selections,
      qty
    });
  }
  saveCart(cart);
}
function removeFromCart(productId, selections = {}) {
  const key = JSON.stringify({ id: productId, selections });
  let cart = getCart().filter(i => JSON.stringify({ id: i.id, selections: i.selections }) !== key);
  saveCart(cart);
}
function updateQuantity(productId, selections = {}, qty = 1) {
  let cart = getCart();
  const key = JSON.stringify({ id: productId, selections });
  const idx = cart.findIndex(i => JSON.stringify({ id: i.id, selections: i.selections }) === key);
  if (idx > -1) {
    cart[idx].qty = Math.max(1, qty);
  }
  saveCart(cart);
}

/* ===== Listing: Load + Filter + Sort ===== */
function formatPriceUSD(price) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

function uniqueCategories() {
  return [...new Set(products.map(p => p.category))];
}

function renderProducts(list, mountId = 'productGrid') {
  const grid = document.getElementById(mountId);
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3 mb-4';
    col.innerHTML = `
      <div class="card h-100 product-card">
        <img src="${p.imageURL}" alt="${p.name}" class="card-img-top">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title">${p.name}</h5>
            <span class="badge-cat">${p.category}</span>
          </div>
          <p class="card-text mb-2"> ${formatPriceUSD(p.price)}</p>
          <div class="mt-auto d-flex gap-2">
            <a class="btn btn-outline-secondary w-50" href="product.html?id=${p.id}">View</a>
            <button class="btn-accent w-50" onclick="addToCart(${p.id}, {}, 1)">Quick add</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

async function loadListing() {
  const spinner = document.getElementById('spinner');
  spinner && spinner.classList.add('show');

  // Get search query from URL if exists
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  
  // Simulate async fetch from embedded data
  const data = await new Promise(resolve => setTimeout(() => resolve(products), 600));
  
  spinner && spinner.classList.remove('show');
  const catSelect = document.getElementById('filterCategory');
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const sortSelect = document.getElementById('sortSelect');
  
  // Populate categories
  if (catSelect) {
    catSelect.innerHTML = `<option value="">All categories</option>` +
      uniqueCategories().map(c => `<option value="${c}">${c}</option>`).join('');
  }
  
  // Pre-fill search input if query exists
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchQuery) {
    searchInput.value = decodeURIComponent(searchQuery);
  }

  function applyFilters() {
    let list = [...data];
    
    // Apply search filter if query exists in input OR URL
    const currentSearch = searchInput ? searchInput.value.toLowerCase() : '';
    if (currentSearch) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(currentSearch) ||
        p.category.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch)
      );
    }
    
    // Apply other filters
    const cat = catSelect ? catSelect.value : '';
    const min = priceMin && priceMin.value ? parseFloat(priceMin.value) : 0;
    const max = priceMax && priceMax.value ? parseFloat(priceMax.value) : Infinity;
    
    if (cat) list = list.filter(p => p.category === cat);
    list = list.filter(p => p.price >= min && p.price <= max);
    
    const sort = sortSelect ? sortSelect.value : '';
    if (sort === 'popularity') list.sort((a,b) => b.popularity - a.popularity);
    else if (sort === 'priceAsc') list.sort((a,b) => a.price - b.price);
    else if (sort === 'priceDesc') list.sort((a,b) => b.price - a.price);
    
    renderProducts(list);
  }

  // Add search input to filter events
  ['change', 'input'].forEach(ev => {
    catSelect && catSelect.addEventListener(ev, applyFilters);
    priceMin && priceMin.addEventListener(ev, applyFilters);
    priceMax && priceMax.addEventListener(ev, applyFilters);
    sortSelect && sortSelect.addEventListener(ev, applyFilters);
    searchInput && searchInput.addEventListener(ev, applyFilters);
  });

  applyFilters(); // Initial render with filters
}

/* ===== Product Details ===== */
function getQueryParam(key) {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}
function loadProductDetails() {
  const id = parseInt(getQueryParam('id'), 10);
  const product = products.find(p => p.id === id);
  const mount = document.getElementById('productDetail');
  if (!product || !mount) {
    mount && (mount.innerHTML = `<p>Product not found.</p>`);
    return;
  }

  const variantSelectors = Array.isArray(product.variants)
    ? product.variants.map(v => `
      <div class="col-6 col-md-4">
        <label class="form-label">${v.type}</label>
        <select class="form-select variant-select" data-type="${v.type}">
          ${v.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
        </select>
      </div>
    `).join('')
    : '';

  mount.innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card">
          <img src="${product.imageURL}" class="product-detail-image" alt="${product.name}">
        </div>
      </div>
      <div class="col-md-6">
        <h2 class="mb-2">${product.name}</h2>
        <p class="text-muted mb-2">${product.category}</p>
        <h3 class="mb-3"> ${formatPriceUSD(product.price)}</h3>
        <p class="mb-3">${product.description}</p>
        <div class="row g-3 mb-3">
          ${variantSelectors}
          <div class="col-6 col-md-4">
            <label class="form-label">Quantity</label>
            <input type="number" id="detailQty" class="form-control quantity-input" value="1" min="1">
          </div>
        </div>
        <button id="detailAdd" class="btn-accent">Add to cart</button>
      </div>
    </div>
  `;

  document.getElementById('detailAdd').addEventListener('click', () => {
    const qty = parseInt(document.getElementById('detailQty').value, 10) || 1;
    const selections = {};
    document.querySelectorAll('.variant-select').forEach(sel => {
      selections[sel.dataset.type] = sel.value;
    });
    addToCart(product.id, selections, qty);
    alert('Added to cart!');
  });
}


/* ===== Cart Page ===== */
function renderCartPage() {
  const listEl = document.getElementById('cartItems');
  const sumEl = document.getElementById('cartSummary');
  const cart = getCart();
  if (!listEl || !sumEl) return;
  if (cart.length === 0) {
    listEl.innerHTML = `<p>Your cart is empty.</p>`;
    sumEl.innerHTML = '';
    return;
  }
  listEl.innerHTML = '';
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'row align-items-center mb-3';
    const selectionsText = Object.keys(item.selections || {}).length
      ? Object.entries(item.selections).map(([k,v]) => `${k}: ${v}`).join(', ')
      : '—';
    row.innerHTML = `
      <div class="col-3">
        <img src="${item.imageURL}" alt="${item.name}" class="img-fluid rounded">
      </div>
      <div class="col-3">
        <strong>${item.name}</strong>
        <div class="text-muted small">Variants: ${selectionsText}</div>
        <div class="mt-1">$${item.price.toFixed(2)}</div>
      </div>
      <div class="col-3">
        <input type="number" class="form-control quantity-input" min="1" value="${item.qty}">
      </div>
      <div class="col-3 text-end">
        <button class="btn btn-outline-danger btn-sm">Remove</button>
      </div>
    `;
    const qtyInput = row.querySelector('input[type="number"]');
    qtyInput.addEventListener('change', () => {
      updateQuantity(item.id, item.selections, parseInt(qtyInput.value, 10) || 1);
      renderCartPage();
    });
    const removeBtn = row.querySelector('button.btn-outline-danger');
    removeBtn.addEventListener('click', () => {
      removeFromCart(item.id, item.selections);
      renderCartPage();
    });
    listEl.appendChild(row);
  });
  const tax = +(subtotal * 0.08).toFixed(2);      // estimated 8% tax
  const shipping = subtotal > 60 ? 0 : 5;         // free shipping over $60
  const total = +(subtotal + tax + shipping).toFixed(2);
  sumEl.innerHTML = `
    <div class="total-box">
      <div class="d-flex justify-content-between">
        <span>Subtotal</span><strong>$${subtotal.toFixed(2)}</strong>
      </div>
      <div class="d-flex justify-content-between">
        <span>Estimated tax</span><strong>$${tax.toFixed(2)}</strong>
      </div>
      <div class="d-flex justify-content-between">
        <span>Estimated shipping</span><strong>$${shipping.toFixed(2)}</strong>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <span>Total</span><strong>$${total.toFixed(2)}</strong>
      </div>
      <a href="checkout.html" class="btn-accent w-100 mt-3">Proceed to checkout</a>
    </div>
  `;
}

/* ===== Checkout Validation ===== */
function validateName(val) { return /^[A-Za-z\s]+$/.test(val.trim()); }
function validateEmail(val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); }
function validatePhone(val) { return /^[0-9]{7,15}$/.test(val.trim()); }
function validateNotEmpty(val) { return val.trim().length > 0; }

function showError(input, message) {
  const help = input.nextElementSibling;
  input.classList.add('input-error');
  if (help && help.classList.contains('error-text')) {
    help.textContent = message;
  }
}
function clearError(input) {
  const help = input.nextElementSibling;
  input.classList.remove('input-error');
  if (help && help.classList.contains('error-text')) {
    help.textContent = '';
  }
}

function setupCheckout() {
  const fName = document.getElementById('cName');
  const fEmail = document.getElementById('cEmail');
  const fPhone = document.getElementById('cPhone');
  const fAddress = document.getElementById('cAddress');
  const shipOptions = document.getElementsByName('shipping');
  const payName = document.getElementById('pName');
  const payCard = document.getElementById('pCard');
  const payExp = document.getElementById('pExp');
  const form = document.getElementById('checkoutForm');
  const confirmBtn = document.getElementById('confirmOrder');

  if (!form) return;

  function validateAll() {
    let ok = true;
    if (!validateName(fName.value)) { showError(fName, 'Name should contain letters and spaces only.'); ok = false; } else { clearError(fName); }
    if (!validateEmail(fEmail.value)) { showError(fEmail, 'Enter a valid email.'); ok = false; } else { clearError(fEmail); }
    if (!validatePhone(fPhone.value)) { showError(fPhone, 'Enter a valid phone number (7–15 digits).'); ok = false; } else { clearError(fPhone); }
    if (!validateNotEmpty(fAddress.value)) { showError(fAddress, 'Address cannot be empty.'); ok = false; } else { clearError(fAddress); }

    const shipSelected = Array.from(shipOptions).some(r => r.checked);
    if (!shipSelected) ok = false;

    if (!validateNotEmpty(payName.value)) { showError(payName, 'Name on card is required.'); ok = false; } else { clearError(payName); }
    if (!/^[0-9]{12,19}$/.test(payCard.value.trim())) { showError(payCard, 'Enter a mock card number (12–19 digits).'); ok = false; } else { clearError(payCard); }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(payExp.value.trim())) { showError(payExp, 'Use MM/YY format.'); ok = false; } else { clearError(payExp); }

    confirmBtn.disabled = !ok;
    return ok;
  }

  ['input', 'change'].forEach(ev => {
    [fName, fEmail, fPhone, fAddress, payName, payCard, payExp].forEach(i => i.addEventListener(ev, validateAll));
    shipOptions.forEach(r => r.addEventListener(ev, validateAll));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    // Mock success
    localStorage.setItem('lastOrder', JSON.stringify({
      cart: getCart(),
      name: fName.value, email: fEmail.value, phone: fPhone.value, address: fAddress.value,
      shipping: Array.from(shipOptions).find(r => r.checked)?.value || 'standard',
      totalAtCheckout: getCart().reduce((s,i) => s + i.price * i.qty, 0)
    }));
    saveCart([]); // clear cart
    window.location.href = 'index.html#order-confirmation'; // show banner on home
    alert('Order confirmed! Thank you.');
  });

  validateAll();
}

/* ===== Home: Featured Products ===== */
function renderFeatured() {
  const mount = document.getElementById('featuredGrid');
  if (!mount) return;
  const featured = [...products].sort((a,b) => b.popularity - a.popularity).slice(0, 4);
  renderProducts(featured, 'featuredGrid');
  const banner = document.getElementById('orderConfirmBanner');
  const lastOrder = localStorage.getItem('lastOrder');
  if (banner && lastOrder && window.location.hash === '#order-confirmation') {
    banner.classList.remove('d-none');
  }
}

/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  setupThemeToggle();
  updateCartCount();

  // Page-specific bootstrapping
  if (document.getElementById('featuredGrid')) renderFeatured();
  if (document.getElementById('spinner')) loadListing();
  if (document.getElementById('productDetail')) loadProductDetails();
  if (document.getElementById('cartItems')) renderCartPage();
  if (document.getElementById('checkoutForm')) setupCheckout();
});
document.getElementById("searchBtn").addEventListener("click", function() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  alert("You searched for: " + query);
  // Later: filter products or redirect to search page
  const searchBox = document.getElementById("searchInput");
});
/* ===== SEARCH FUNCTIONALITY ===== */
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchForm = document.getElementById('searchForm');
  
  if (!searchInput) return;
  
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
      // If empty search, show all products
      if (window.location.pathname.includes('listing.html')) {
        renderProducts(products);
      }
      return;
    }
    
    // Filter products based on search query
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    
    // If on listing page, show filtered results
    if (window.location.pathname.includes('listing.html')) {
      renderProducts(filtered);
    } else {
      // If on other pages, redirect to listing with search query
      window.location.href = `listing.html?search=${encodeURIComponent(query)}`;
    }
  }
  
  // Search button click
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      performSearch();
    });
  }
  
  // Enter key in search input
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });
  
  // Form submission prevention
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      performSearch();
    });
  }
}
