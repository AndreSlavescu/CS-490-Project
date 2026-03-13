// ===== DATA =====
const restaurants = [
    {
        id: 0, name: "Pho Dau Bo", cuisine: "Vietnamese", tags: ["halal"],
        rating: 4.7, distance: 0.2, time: 12, emoji: "\ud83c\udf5c",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
        hours: "11 AM - 9 PM", address: "123 King St W, Waterloo",
        menu: [
            { name: "Pho Dac Biet", desc: "Special combination pho with rare beef, brisket, and meatballs", price: 16.99, cal: 520, protein: 38, carbs: 45, fat: 18, emoji: "\ud83c\udf5c", ingredients: ["Rice Noodles","Beef Brisket","Rare Beef","Basil","Bean Sprouts","Lime"], bg: "linear-gradient(135deg, #ff9a56, #ff6b6b)", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop" },
            { name: "Bun Bo Hue", desc: "Spicy beef noodle soup with lemongrass and shrimp paste", price: 15.99, cal: 480, protein: 32, carbs: 52, fat: 14, emoji: "\ud83c\udf36\ufe0f", ingredients: ["Thick Noodles","Beef Shank","Lemongrass","Chili Oil","Herbs"], bg: "linear-gradient(135deg, #f093fb, #f5576c)", image: "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=400&h=300&fit=crop" },
            { name: "Grilled Pork Vermicelli", desc: "Chargrilled pork with vermicelli, herbs, and fish sauce", price: 14.99, cal: 580, protein: 35, carbs: 60, fat: 20, emoji: "\ud83c\udf56", ingredients: ["Vermicelli","Grilled Pork","Lettuce","Pickled Carrot","Fish Sauce"], bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=400&h=300&fit=crop" }
        ]
    },
    {
        id: 1, name: "Shawarma Plus", cuisine: "Middle Eastern", tags: ["halal","high-protein"],
        rating: 4.5, distance: 0.3, time: 8, emoji: "\ud83e\udd59",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
        hours: "10 AM - 11 PM", address: "256 University Ave, Waterloo",
        menu: [
            { name: "Grilled Chicken Bowl", desc: "Grilled chicken with rice, hummus, tabbouleh, and garlic sauce", price: 13.99, cal: 580, protein: 42, carbs: 48, fat: 22, emoji: "\ud83c\udf57", ingredients: ["Chicken Breast","Basmati Rice","Hummus","Tabbouleh","Garlic Sauce"], bg: "linear-gradient(135deg, #4facfe, #00f2fe)", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
            { name: "Beef Shawarma Wrap", desc: "Seasoned beef with pickles, tahini, and fresh veggies in pita", price: 12.99, cal: 620, protein: 36, carbs: 55, fat: 26, emoji: "\ud83e\udd59", ingredients: ["Beef","Pita","Tahini","Pickles","Tomato","Lettuce"], bg: "linear-gradient(135deg, #f093fb, #f5576c)", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&h=300&fit=crop" },
            { name: "Falafel Plate", desc: "Crispy falafel with salad, hummus, and pita bread", price: 11.99, cal: 450, protein: 18, carbs: 52, fat: 20, emoji: "\ud83e\uddc6", ingredients: ["Chickpeas","Herbs","Hummus","Pita","Salad"], bg: "linear-gradient(135deg, #43e97b, #38f9d7)", image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=400&h=300&fit=crop" }
        ]
    },
    {
        id: 2, name: "Bao Sandwich Bar", cuisine: "Asian Fusion", tags: ["vegan"],
        rating: 4.6, distance: 0.4, time: 15, emoji: "\ud83e\udd5f",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
        hours: "11:30 AM - 8 PM", address: "89 King St N, Waterloo",
        menu: [
            { name: "Pork Belly Bao", desc: "Braised pork belly with pickled vegetables in steamed bao", price: 10.99, cal: 420, protein: 22, carbs: 38, fat: 20, emoji: "\ud83e\udd5f", ingredients: ["Pork Belly","Bao Bun","Pickled Daikon","Cilantro","Hoisin"], bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", image: "https://images.unsplash.com/photo-1613564834820-2e7f88d94ee9?w=400&h=300&fit=crop" },
            { name: "Tofu Bao (Vegan)", desc: "Crispy tofu with slaw and spicy mayo in steamed bao", price: 9.99, cal: 340, protein: 16, carbs: 42, fat: 12, emoji: "\ud83c\udf31", ingredients: ["Tofu","Bao Bun","Slaw","Vegan Mayo","Sriracha"], bg: "linear-gradient(135deg, #43e97b, #38f9d7)", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
            { name: "Korean Fried Chicken Bao", desc: "Crispy fried chicken with gochujang glaze", price: 11.99, cal: 510, protein: 28, carbs: 45, fat: 24, emoji: "\ud83c\udf57", ingredients: ["Chicken","Gochujang","Bao Bun","Slaw","Sesame"], bg: "linear-gradient(135deg, #f5576c, #ff6b6b)", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" }
        ]
    },
    {
        id: 3, name: "The Grill Master", cuisine: "American", tags: ["high-protein"],
        rating: 4.3, distance: 0.5, time: 20, emoji: "\ud83c\udf54",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
        hours: "11 AM - 10 PM", address: "45 Weber St N, Waterloo",
        menu: [
            { name: "Double Smash Burger", desc: "Two smashed patties with American cheese, pickles, special sauce", price: 15.99, cal: 780, protein: 48, carbs: 42, fat: 45, emoji: "\ud83c\udf54", ingredients: ["Beef Patties","American Cheese","Brioche Bun","Pickles","Special Sauce"], bg: "linear-gradient(135deg, #667eea, #764ba2)", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
            { name: "Grilled Chicken Sandwich", desc: "Herb-marinated chicken breast with avocado and arugula", price: 14.49, cal: 520, protein: 40, carbs: 35, fat: 22, emoji: "\ud83c\udf57", ingredients: ["Chicken Breast","Avocado","Arugula","Sourdough","Aioli"], bg: "linear-gradient(135deg, #43e97b, #38f9d7)", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop" },
            { name: "Protein Power Bowl", desc: "Grilled chicken and steak with quinoa, black beans, corn", price: 16.99, cal: 650, protein: 52, carbs: 55, fat: 20, emoji: "\ud83e\udd57", ingredients: ["Chicken","Steak","Quinoa","Black Beans","Corn","Avocado"], bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" }
        ]
    },
    {
        id: 4, name: "Green Bowl Co.", cuisine: "Health Food", tags: ["vegan","low-cal"],
        rating: 4.8, distance: 0.6, time: 10, emoji: "\ud83e\udd57",
        gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
        hours: "8 AM - 7 PM", address: "15 Bridgeport Rd, Waterloo",
        menu: [
            { name: "Acai Power Bowl", desc: "Organic acai blended with banana, topped with granola and berries", price: 12.99, cal: 380, protein: 12, carbs: 58, fat: 10, emoji: "\ud83c\udf53", ingredients: ["Acai","Banana","Granola","Blueberries","Chia Seeds","Honey"], bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop" },
            { name: "Mediterranean Salad", desc: "Mixed greens, quinoa, feta, olives, sun-dried tomatoes", price: 13.99, cal: 320, protein: 18, carbs: 30, fat: 16, emoji: "\ud83e\udd57", ingredients: ["Mixed Greens","Quinoa","Feta","Olives","Tomatoes","Vinaigrette"], bg: "linear-gradient(135deg, #43e97b, #38f9d7)", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" },
            { name: "Grilled Salmon Bowl", desc: "Atlantic salmon with brown rice, edamame, avocado", price: 17.99, cal: 520, protein: 38, carbs: 42, fat: 22, emoji: "\ud83c\udf63", ingredients: ["Salmon","Brown Rice","Edamame","Avocado","Soy Glaze"], bg: "linear-gradient(135deg, #ffecd2, #fcb69f)", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop" }
        ]
    }
];

let favorites = new Set();
let loggedMeals = [
    { name: "Avocado Toast", restaurant: "Morning Cafe", cal: 380, protein: 12, emoji: "\ud83e\udd51", time: "8:30 AM", bg: "linear-gradient(135deg, #43e97b, #38f9d7)" },
    { name: "Grilled Chicken Bowl", restaurant: "Shawarma Plus", cal: 580, protein: 42, emoji: "\ud83c\udf57", time: "12:15 PM", bg: "linear-gradient(135deg, #4facfe, #00f2fe)" },
    { name: "Protein Bar", restaurant: "Snack", cal: 160, protein: 14, emoji: "\ud83c\udf6b", time: "3:00 PM", bg: "linear-gradient(135deg, #ffecd2, #fcb69f)" }
];
let currentFilter = 'all';
let navHistory = ['home'];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    renderNearbyList();
    renderSearchResults();
    renderFavorites();
    renderLoggedMeals();
    updateTrackerDate();
    // Pre-select some favorites for demo
    favorites.add('0-0'); // Pho Dac Biet
    favorites.add('1-0'); // Grilled Chicken Bowl
    renderFavorites();
});

function updateGreeting() {
    const h = new Date().getHours();
    let g = 'Good morning';
    if (h >= 12 && h < 17) g = 'Good afternoon';
    else if (h >= 17) g = 'Good evening';
    document.getElementById('greeting-text').textContent = g;
}

function updateTrackerDate() {
    const d = new Date();
    document.getElementById('tracker-date').textContent = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

// ===== NAVIGATION =====
function navigateTo(page, addHistory = true) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');

    // Show/hide bottom nav
    const hideNav = ['restaurant', 'food-detail', 'ai-chat'];
    document.getElementById('bottom-nav').style.display = hideNav.includes(page) ? 'none' : 'flex';

    if (addHistory) navHistory.push(page);
}

function goBack() {
    navHistory.pop();
    const prev = navHistory[navHistory.length - 1] || 'home';
    navigateTo(prev, false);
}

// ===== LOGIN =====
function handleLogin() {
    document.getElementById('splash-screen').classList.remove('active');
    document.getElementById('onboarding-screen').classList.add('active');
}

function handleLogout() {
    document.getElementById('app-shell').classList.remove('active');
    document.getElementById('splash-screen').classList.add('active');
}

// ===== ONBOARDING =====
let onboardStep = 1;
function togglePref(el) { el.classList.toggle('selected'); }
function updateSliderLabel(slider, labelId, suffix, prefix='') {
    document.getElementById(labelId).textContent = prefix + slider.value + suffix;
}
function nextOnboardStep() {
    document.getElementById('onboard-step-' + onboardStep).classList.remove('active');
    onboardStep++;
    document.getElementById('onboard-step-' + onboardStep).classList.add('active');
    document.getElementById('onboarding-progress-bar').style.width = (onboardStep * 33) + '%';
}
function finishOnboarding() {
    document.getElementById('onboarding-screen').classList.remove('active');
    document.getElementById('app-shell').classList.add('active');
}

// ===== RENDER NEARBY LIST =====
function renderNearbyList() {
    const container = document.getElementById('nearby-list');
    container.innerHTML = restaurants.slice(0, 4).map(r => `
        <div class="rest-card" onclick="showRestaurant(${r.id})">
            <div class="rest-card-img" style="background:url('${r.image}') center/cover, ${r.gradient}">
                <span class="rest-card-badge"><i class="fas fa-star"></i> ${r.rating}</span>
            </div>
            <div class="rest-card-body">
                <div class="rest-card-name">${r.name}</div>
                <div class="rest-card-cuisine">${r.cuisine}</div>
                <div class="rest-card-tags">
                    <span class="tag cal">~${r.menu[0].cal} cal</span>
                    <span class="tag dist">${r.distance} mi</span>
                    <span class="tag rating">${r.time} min</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER SEARCH RESULTS =====
function renderSearchResults(filtered = null) {
    const list = filtered || restaurants;
    const container = document.getElementById('search-results');
    container.innerHTML = list.map(r => `
        <div class="search-card" onclick="showRestaurant(${r.id})">
            <div class="search-card-img" style="background:url('${r.image}') center/cover, ${r.gradient}">
                <span class="search-card-badge"><i class="fas fa-star"></i> ${r.rating}</span>
            </div>
            <div class="search-card-body">
                <div class="search-card-name">${r.name}</div>
                <div class="search-card-cuisine">${r.cuisine} &bull; ${r.menu.length} items</div>
                <div class="search-card-stats">
                    <span class="stat"><i class="fas fa-fire"></i> ~${avgCal(r)} cal avg</span>
                    <span class="stat"><i class="fas fa-dumbbell"></i> ${avgProt(r)}g protein</span>
                    <span class="stat"><i class="fas fa-location-dot"></i> ${r.distance} mi</span>
                    <span class="stat"><i class="fas fa-clock"></i> ${r.time} min</span>
                </div>
            </div>
        </div>
    `).join('');
}

function avgCal(r) { return Math.round(r.menu.reduce((s,m) => s+m.cal, 0) / r.menu.length); }
function avgProt(r) { return Math.round(r.menu.reduce((s,m) => s+m.protein, 0) / r.menu.length); }

function setFilter(el, filter) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentFilter = filter;
    filterRestaurants();
}

function filterRestaurants() {
    const query = (document.getElementById('search-input').value || '').toLowerCase();
    let filtered = restaurants.filter(r => {
        const matchQuery = !query || r.name.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query) || r.menu.some(m => m.name.toLowerCase().includes(query));
        let matchFilter = true;
        if (currentFilter === 'low-cal') matchFilter = avgCal(r) <= 500;
        else if (currentFilter === 'high-protein') matchFilter = r.tags.includes('high-protein') || avgProt(r) >= 30;
        else if (currentFilter === 'vegan') matchFilter = r.tags.includes('vegan');
        else if (currentFilter === 'halal') matchFilter = r.tags.includes('halal');
        else if (currentFilter === 'under-15') matchFilter = r.menu.some(m => m.price < 15);
        return matchQuery && matchFilter;
    });

    const sort = document.getElementById('sort-select').value;
    if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    else if (sort === 'distance') filtered.sort((a,b) => a.distance - b.distance);
    else if (sort === 'calories') filtered.sort((a,b) => avgCal(a) - avgCal(b));
    else if (sort === 'protein') filtered.sort((a,b) => avgProt(b) - avgProt(a));

    renderSearchResults(filtered);
}

// ===== RESTAURANT DETAIL =====
function showRestaurant(id) {
    const r = restaurants[id];
    const container = document.getElementById('restaurant-detail');
    container.innerHTML = `
        <div class="rest-detail-hero" style="background:url('${r.image}') center/cover, ${r.gradient}">
            <button class="back-btn" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        </div>
        <div class="rest-detail-body">
            <div class="rest-detail-name">${r.name}</div>
            <div class="rest-detail-cuisine">${r.cuisine}</div>
            <div class="rest-detail-stats">
                <span class="stat"><i class="fas fa-star" style="color:#ffc107"></i> ${r.rating}</span>
                <span class="stat"><i class="fas fa-location-dot" style="color:#667eea"></i> ${r.distance} mi</span>
                <span class="stat"><i class="fas fa-clock" style="color:#ff9800"></i> ${r.time} min</span>
            </div>
            <div class="rest-detail-info">
                <div class="info-chip"><i class="fas fa-clock"></i> ${r.hours}</div>
                <div class="info-chip"><i class="fas fa-map-marker-alt"></i> ${r.address}</div>
            </div>
            <div class="menu-section-title">Menu</div>
            ${r.menu.map((m, idx) => `
                <div class="menu-item" onclick="showFoodDetail(${id}, ${idx})">
                    <div class="menu-item-img" style="background:url('${m.image}') center/cover, ${m.bg || r.gradient}"></div>
                    <div class="menu-item-info">
                        <div class="menu-item-name">${m.name}</div>
                        <div class="menu-item-desc">${m.desc}</div>
                        <div class="menu-item-bottom">
                            <span class="menu-item-price">$${m.price.toFixed(2)}</span>
                            <div class="menu-item-macros">
                                <span class="tag cal">${m.cal} cal</span>
                                <span class="tag protein">${m.protein}g prot</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
            <div style="height:30px"></div>
        </div>
    `;
    navigateTo('restaurant');
}

// ===== FOOD DETAIL =====
function showFoodDetail(restId, menuIdx) {
    const r = restaurants[restId];
    const m = r.menu[menuIdx];
    const favKey = restId + '-' + menuIdx;
    const isFav = favorites.has(favKey);
    const container = document.getElementById('food-detail');
    container.innerHTML = `
        <div class="food-hero" style="background:url('${m.image}') center/cover, ${m.bg || r.gradient}">
            <button class="back-btn" onclick="goBack()" style="position:absolute;top:15px;left:15px;"><i class="fas fa-arrow-left"></i></button>
            <button class="fav-btn-food ${isFav ? 'liked' : ''}" onclick="toggleFavorite('${favKey}', this)" style="position:absolute;top:15px;right:15px;">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="food-body">
            <div class="food-name">${m.name}</div>
            <div class="food-restaurant">${r.name}</div>
            <div class="food-price">$${m.price.toFixed(2)}</div>
            <div class="nutrition-grid">
                <div class="nutrition-item highlight">
                    <div class="nutrition-value">${m.cal}</div>
                    <div class="nutrition-label">Calories</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${m.protein}g</div>
                    <div class="nutrition-label">Protein</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${m.carbs}g</div>
                    <div class="nutrition-label">Carbs</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${m.fat}g</div>
                    <div class="nutrition-label">Fat</div>
                </div>
            </div>
            <div class="food-section-title">Description</div>
            <p class="food-description">${m.desc}</p>
            <div class="food-section-title">Ingredients</div>
            <div class="food-ingredients">
                ${m.ingredients.map(i => `<span class="ingredient">${i}</span>`).join('')}
            </div>
            <div style="height:80px"></div>
        </div>
        <div class="food-actions">
            <button class="btn-add-meal" onclick="addToTracker(${restId}, ${menuIdx})">
                <i class="fas fa-plus"></i> Add to Meal Tracker
            </button>
        </div>
    `;
    navigateTo('food-detail');
}

// ===== FAVORITES =====
function toggleFavorite(key, el) {
    if (favorites.has(key)) {
        favorites.delete(key);
        if (el) el.classList.remove('liked');
        showToast('Removed from favorites');
    } else {
        favorites.add(key);
        if (el) el.classList.add('liked');
        showToast('Added to favorites!');
    }
    renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById('favorites-list');
    const emptyEl = document.getElementById('fav-empty');
    if (favorites.size === 0) {
        container.style.display = 'none';
        emptyEl.style.display = 'block';
        return;
    }
    container.style.display = 'flex';
    emptyEl.style.display = 'none';

    container.innerHTML = Array.from(favorites).map(key => {
        const [rId, mIdx] = key.split('-').map(Number);
        const r = restaurants[rId];
        const m = r.menu[mIdx];
        return `
            <div class="fav-item" onclick="showFoodDetail(${rId}, ${mIdx})">
                <div class="fav-item-img" style="background:url('${m.image}') center/cover, ${m.bg || r.gradient}"></div>
                <div class="fav-item-info">
                    <div class="fav-item-name">${m.name}</div>
                    <div class="fav-item-rest">${r.name}</div>
                    <div class="fav-item-tags">
                        <span class="tag cal">${m.cal} cal</span>
                        <span class="tag protein">${m.protein}g protein</span>
                        <span class="tag dist">$${m.price.toFixed(2)}</span>
                    </div>
                </div>
                <i class="fas fa-heart fav-item-remove" onclick="event.stopPropagation(); toggleFavorite('${key}')"></i>
            </div>
        `;
    }).join('');
}

// ===== MEAL TRACKER =====
function addToTracker(restId, menuIdx) {
    const r = restaurants[restId];
    const m = r.menu[menuIdx];
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    loggedMeals.push({
        name: m.name, restaurant: r.name, cal: m.cal, protein: m.protein,
        emoji: m.emoji, time: timeStr, bg: m.bg || r.gradient
    });
    renderLoggedMeals();
    updateTrackerNumbers();
    showToast(`${m.name} added to tracker!`);
    goBack();
}

function renderLoggedMeals() {
    const container = document.getElementById('logged-meals');
    container.innerHTML = loggedMeals.map(m => `
        <div class="logged-meal">
            <div class="logged-meal-icon" style="background:${m.bg}"><span>${m.emoji}</span></div>
            <div class="logged-meal-info">
                <div class="logged-meal-name">${m.name}</div>
                <div class="logged-meal-meta">${m.restaurant} &bull; ${m.time}</div>
            </div>
            <div class="logged-meal-cal">${m.cal} cal</div>
        </div>
    `).join('');
}

function updateTrackerNumbers() {
    const totalCal = loggedMeals.reduce((s, m) => s + m.cal, 0);
    const totalProt = loggedMeals.reduce((s, m) => s + m.protein, 0);
    document.getElementById('tracker-cal').textContent = totalCal.toLocaleString() + ' / 2,200';
    document.getElementById('tracker-prot').textContent = totalProt + 'g / 120g';

    // Update bar widths
    const calPct = Math.min(100, (totalCal / 2200) * 100);
    const protPct = Math.min(100, (totalProt / 120) * 100);
    document.querySelector('.macro-bar-fill.cal').style.width = calPct + '%';
    document.querySelector('.macro-bar-fill.prot').style.width = protPct + '%';
}

// ===== AI CHAT =====
const aiResponses = [
    {
        keywords: ['protein', 'high protein'],
        response: `Great choice focusing on protein! Based on your location, here are my top picks:`,
        dishes: [
            { restId: 3, menuIdx: 2 },
            { restId: 1, menuIdx: 0 }
        ]
    },
    {
        keywords: ['low cal', 'low calorie', 'diet', 'healthy', 'light'],
        response: `Looking for something lighter? Here are some nutritious options nearby:`,
        dishes: [
            { restId: 4, menuIdx: 1 },
            { restId: 4, menuIdx: 0 }
        ]
    },
    {
        keywords: ['best', 'rated', 'popular', 'top'],
        response: `Here are the highest-rated spots near you right now:`,
        dishes: [
            { restId: 4, menuIdx: 2 },
            { restId: 0, menuIdx: 0 }
        ]
    },
    {
        keywords: ['vegan', 'plant', 'vegetarian'],
        response: `I found some great plant-based options for you:`,
        dishes: [
            { restId: 2, menuIdx: 1 },
            { restId: 1, menuIdx: 2 }
        ]
    },
    {
        keywords: ['burger', 'american'],
        response: `Craving a burger? The Grill Master has you covered:`,
        dishes: [
            { restId: 3, menuIdx: 0 },
            { restId: 3, menuIdx: 1 }
        ]
    },
    {
        keywords: ['cheap', 'budget', 'under', 'affordable'],
        response: `Here are some great meals that won't break the bank:`,
        dishes: [
            { restId: 2, menuIdx: 0 },
            { restId: 1, menuIdx: 2 }
        ]
    }
];

function sendQuickPrompt(text) {
    document.getElementById('chat-input').value = text;
    sendChat();
}

function sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;
    input.value = '';

    const container = document.getElementById('chat-messages');

    // Add user message
    container.innerHTML += `<div class="chat-msg user"><div class="msg-bubble">${escapeHtml(msg)}</div></div>`;

    // Typing indicator
    container.innerHTML += `<div class="chat-msg bot" id="typing"><div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div></div>`;
    container.scrollTop = container.scrollHeight;

    // Find matching response
    const lower = msg.toLowerCase();
    let match = aiResponses.find(r => r.keywords.some(k => lower.includes(k)));
    if (!match) {
        match = {
            response: `Based on your preferences and current location, I'd recommend checking out these dishes that match your nutritional goals:`,
            dishes: [
                { restId: 1, menuIdx: 0 },
                { restId: 0, menuIdx: 0 },
                { restId: 4, menuIdx: 2 }
            ]
        };
    }

    setTimeout(() => {
        const typingEl = document.getElementById('typing');
        if (typingEl) typingEl.remove();

        let dishCards = match.dishes.map(d => {
            const r = restaurants[d.restId];
            const m = r.menu[d.menuIdx];
            return `<div class="dish-card-inline" onclick="showFoodDetail(${d.restId}, ${d.menuIdx})">
                <div class="dish-name">${m.emoji} ${m.name}</div>
                <div class="dish-meta">${r.name} &bull; ${r.distance} mi</div>
                <div class="dish-tags">
                    <span class="tag cal">${m.cal} cal</span>
                    <span class="tag protein">${m.protein}g protein</span>
                    <span class="tag dist">$${m.price.toFixed(2)}</span>
                </div>
            </div>`;
        }).join('');

        container.innerHTML += `<div class="chat-msg bot"><div class="msg-bubble">${match.response}${dishCards}</div></div>`;
        container.scrollTop = container.scrollHeight;
    }, 1200);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== TOAST =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}
