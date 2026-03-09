// ===== Product System - Shared Module =====
// All product data, inventory, and review management

const DEFAULT_PRODUCTS = [
  {
    sku: "LS-Z85F-001",
    id: "z85f",
    name: "G-Cycle Z85F",
    category: "Electric Scooters",
    price: 299,
    originalPrice: 499,
    stock: 611,
    shortDesc: "The perfect daily commuter. Lightweight city commuter — foldable, fast, and fun.",
    description: "The G-Cycle Z85F is the ultimate daily commuter scooter. With a powerful 350W brushless motor, 8.5-inch honeycomb tires, and a range of up to 25 miles, it handles your daily rides with ease. The foldable design makes it perfect for last-mile commuting, and the dual brake system ensures safe stops every time. UL2272 certified for your peace of mind.",
    images: [
      "https://img.staticdj.com/68efa7cb7de2cb5decf0655f0858be33_750x.png",
      "https://img.staticdj.com/9662c14fba4f50ee5ddc8715b7faeb17_750x.png",
      "https://img.staticdj.com/5c8da533ebf13362aa357b1927f71460_750x.png",
      "https://img.staticdj.com/c97221444b48cfea25dced0594685271_750x.png",
      "https://img.staticdj.com/0d9a78fb6010f341632ff9c563875cc3_750x.png",
      "https://img.staticdj.com/58549b9f6eac92d5c641eee686957de7_750x.png"
    ],
    specs: {
      "Motor": "350W Brushless",
      "Battery": "36V 10Ah",
      "Range": "25 miles",
      "Max Speed": "18 mph",
      "Weight": "33 lbs",
      "Wheel Size": "8.5 inch",
      "Max Load": "220 lbs",
      "Charge Time": "4-5 hours"
    },
    tags: ["500W Motor", "18.6 mi Range", "15.5 MPH", "8.5\" Tires", "UL2272 Certified"],
    rating: 4.5,
    reviewCount: 127
  },
  {
    sku: "LS-ALPHA-001",
    id: "alpha",
    name: "Atomi Alpha Lite",
    category: "Electric Scooters",
    price: 289,
    originalPrice: 449,
    stock: 196,
    shortDesc: "Best value. Tubeless tires, app control, long range.",
    description: "The Atomi Alpha Lite delivers incredible value with tubeless tires, smartphone app control, and an impressive 25-mile range. Supporting up to 265 lbs and charging in just 6 hours, it's built for everyday riders who want reliability without breaking the bank. The app lets you lock your scooter, track rides, and customize settings.",
    images: [
      "https://www.atomiscooters.com/cdn/shop/files/ALPHA_LITE_5_1800x1800.png",
      "https://www.atomiscooters.com/cdn/shop/files/ALPHA_LITE_1_1800x1800.png",
      "https://www.atomiscooters.com/cdn/shop/files/ALPHA_LITE_4_1800x1800.png",
      "https://www.atomiscooters.com/cdn/shop/files/ALPHA_LITE_6_1800x1800.png",
      "https://www.atomiscooters.com/cdn/shop/files/ALPHA_LITE_2_1800x1800.png",
      "https://www.atomiscooters.com/cdn/shop/files/Z9L_1800x1800.png"
    ],
    specs: {
      "Motor": "350W Brushless",
      "Battery": "36V 10Ah",
      "Range": "25 miles",
      "Max Speed": "15.5 mph",
      "Weight": "30 lbs",
      "Wheel Size": "9 inch",
      "Max Load": "265 lbs",
      "Charge Time": "6 hours"
    },
    tags: ["25 mi Range", "Tubeless Tires", "App Lock", "265 lbs Max"],
    rating: 4.3,
    reviewCount: 89
  },
  {
    sku: "LS-Z14-001",
    id: "z14",
    name: "G-Cycle Z14",
    category: "Electric Scooters",
    price: 599,
    originalPrice: 899,
    stock: 149,
    shortDesc: "The premium choice. Seat, basket, big wheels, max comfort.",
    description: "The G-Cycle Z14 is our premium offering with a detachable seat, front basket, and massive 14-inch tires for the smoothest ride possible. The 800W peak motor powers you up to 27 miles on a single charge, while dual brakes and suspension keep you comfortable on any terrain. Features an LCD display, foldable frame, and everything you need for serious riding.",
    images: [
      "https://img.staticdj.com/ac709f17e72605f8825569bdb4c060e8_750x.png",
      "https://img.staticdj.com/e699c9060409cd63158ebaf3b881027a_750x.png",
      "https://img.staticdj.com/b4602a73b3661486a6d16e119c40685b_750x.png",
      "https://img.staticdj.com/67c6eb1289c0a3a0d29dff60ee1ce354_750x.png",
      "https://img.staticdj.com/311bb294b0f7ae82c3bd57a384cc7429_750x.png",
      "https://img.staticdj.com/9332ed3c53ddcfc96579a62c1fa2a6f0_750x.png"
    ],
    specs: {
      "Motor": "800W Peak",
      "Battery": "48V 12Ah",
      "Range": "27 miles",
      "Max Speed": "20 mph",
      "Weight": "55 lbs",
      "Wheel Size": "14 inch",
      "Max Load": "330 lbs",
      "Charge Time": "5-6 hours"
    },
    tags: ["800W Motor", "27 mi Range", "14\" Tires", "With Seat & Basket"],
    rating: 4.7,
    reviewCount: 64
  }
];

const PRODUCT_CATEGORIES = ["Electric Scooters", "Accessories", "Parts & Upgrades"];

// ===== Product Data Access =====
function initProducts() {
  if (!localStorage.getItem('ls_products')) {
    localStorage.setItem('ls_products', JSON.stringify(DEFAULT_PRODUCTS));
  }
}

function getProducts() {
  initProducts();
  return JSON.parse(localStorage.getItem('ls_products'));
}

function getProductBySku(sku) {
  return getProducts().find(p => p.sku === sku);
}

function getProductById(id) {
  return getProducts().find(p => p.id === id || p.sku === id);
}

function saveProducts(products) {
  localStorage.setItem('ls_products', JSON.stringify(products));
}

function saveProduct(product) {
  const products = getProducts();
  const idx = products.findIndex(p => p.sku === product.sku);
  if (idx >= 0) products[idx] = product;
  else products.push(product);
  saveProducts(products);
}

function deleteProduct(sku) {
  saveProducts(getProducts().filter(p => p.sku !== sku));
}

// ===== Stock =====
function getStockBadge(stock) {
  if (stock === 0) return '<span class="stock-badge stock-out">Out of Stock</span>';
  if (stock < 10) return `<span class="stock-badge stock-low">Low Stock (${stock} left)</span>`;
  return `<span class="stock-badge stock-in">In Stock (${stock} available)</span>`;
}

function getStockBadgeSmall(stock) {
  if (stock === 0) return '<span class="stock-badge-sm stock-out">Out of Stock</span>';
  if (stock < 10) return `<span class="stock-badge-sm stock-low">Low Stock</span>`;
  return '<span class="stock-badge-sm stock-in">In Stock</span>';
}

function decrementStock(sku, qty) {
  const products = getProducts();
  const p = products.find(p => p.sku === sku);
  if (p) {
    p.stock = Math.max(0, p.stock - qty);
    saveProducts(products);
  }
}

// ===== Reviews =====
function getReviews(sku) {
  const all = JSON.parse(localStorage.getItem('ls_reviews') || '{}');
  return all[sku] || [];
}

function addReview(sku, review) {
  const all = JSON.parse(localStorage.getItem('ls_reviews') || '{}');
  if (!all[sku]) all[sku] = [];
  review.date = new Date().toISOString();
  review.id = Date.now();
  all[sku].push(review);
  localStorage.setItem('ls_reviews', JSON.stringify(all));
  // Update product rating
  const reviews = all[sku];
  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const products = getProducts();
  const p = products.find(p => p.sku === sku);
  if (p) {
    p.rating = Math.round(avgRating * 10) / 10;
    p.reviewCount = reviews.length;
    saveProducts(products);
  }
}

function renderStars(rating, size) {
  size = size || 16;
  const full = Math.floor(rating);
  const half = rating - full >= 0.25;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += `<span style="color:#f59e0b;font-size:${size}px">★</span>`;
    else if (i === full && half) html += `<span style="color:#f59e0b;font-size:${size}px">★</span>`;
    else html += `<span style="color:#ddd;font-size:${size}px">★</span>`;
  }
  return html;
}

// ===== Stock Badge CSS (inject once) =====
function injectProductStyles() {
  if (document.getElementById('product-system-styles')) return;
  const style = document.createElement('style');
  style.id = 'product-system-styles';
  style.textContent = `
    .stock-badge, .stock-badge-sm { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; }
    .stock-badge-sm { padding: 3px 8px; font-size: 11px; }
    .stock-in { background: #d1fae5; color: #065f46; }
    .stock-low { background: #fef3c7; color: #92400e; }
    .stock-out { background: #fee2e2; color: #991b1b; }
    .category-filters { display: flex; gap: 8px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap; }
    .category-btn { padding: 8px 20px; border: 1px solid #ddd; background: #fff; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .category-btn:hover, .category-btn.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
    .product-search { max-width: 400px; margin: 0 auto 24px; }
    .product-search input { width: 100%; padding: 12px 20px; border: 1px solid #ddd; border-radius: 12px; font-size: 15px; font-family: inherit; }
    .product-search input:focus { outline: none; border-color: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,0.1); }
  `;
  document.head.appendChild(style);
}
