/**
 * FitForge — Luxury Editorial Athletic & Nutrition Telemetry Engine
 * Aesthetic: Vibe-Coded, Midnight OLED Black, Champagne Gold & Cyber Lime Accents
 * Core Logic: Navigation Pill Dock, Preloader, Telemetry Charts, Workout Tracker,
 *             Calorie Diary, High-Protein Food Vault (85+ MyFitnessPal Dishes),
 *             Session Archive Edit & Delete, Auth (Login/Signup), ForgeAI & Reports
 */

// 1. Comprehensive High-Protein & Everyday Dishes Database (MyFitnessPal Grade)
const FOOD_DB = [
    // --- POPULAR RESTAURANT & EVERYDAY MEALS ---
    { id: 1, name: "Chicken Burrito Bowl (Brown Rice, Black Beans & Corn)", calories: 650, protein: 48, carbs: 65, fat: 18, serving: 1, category: "meals", img: "🌯" },
    { id: 2, name: "Steak Burrito Bowl with Guacamole & Fajita Veggies", calories: 720, protein: 45, carbs: 64, fat: 26, serving: 1, category: "meals", img: "🥑" },
    { id: 3, name: "Grilled Chicken Caesar Salad (Romaine & Parmesan)", calories: 390, protein: 38, carbs: 14, fat: 18, serving: 1, category: "meals", img: "🥗" },
    { id: 4, name: "Artisanal Margherita Pizza (2 Slices)", calories: 480, protein: 22, carbs: 58, fat: 16, serving: 2, category: "meals", img: "🍕" },
    { id: 5, name: "Crispy Pepperoni Pizza (2 Slices)", calories: 580, protein: 26, carbs: 56, fat: 26, serving: 2, category: "meals", img: "🍕" },
    { id: 6, name: "Lean Beef Cheeseburger on Brioche Bun", calories: 540, protein: 36, carbs: 42, fat: 22, serving: 1, category: "meals", img: "🍔" },
    { id: 7, name: "Double Cheeseburger with Aged Cheddar", calories: 780, protein: 54, carbs: 44, fat: 38, serving: 1, category: "meals", img: "🍔" },
    { id: 8, name: "Classic Pasta Bolognese with Lean Ground Beef", calories: 520, protein: 34, carbs: 68, fat: 12, serving: 1, category: "meals", img: "🍝" },
    { id: 9, name: "Creamy Spaghetti Carbonara with Pancetta", calories: 610, protein: 26, carbs: 64, fat: 28, serving: 1, category: "meals", img: "🍝" },
    { id: 10, name: "Chicken Tikka Masala with Fragrant Basmati Rice", calories: 640, protein: 42, carbs: 70, fat: 18, serving: 1, category: "meals", img: "🍛" },
    { id: 11, name: "Butter Chicken with Charred Garlic Naan", calories: 710, protein: 38, carbs: 68, fat: 30, serving: 1, category: "meals", img: "🥘" },
    { id: 12, name: "Wok-Fired Chicken Fried Rice with Egg & Scallions", calories: 510, protein: 32, carbs: 66, fat: 12, serving: 1, category: "meals", img: "🍚" },
    { id: 13, name: "Teriyaki Chicken Bowl with Steamed Jasmine Rice", calories: 540, protein: 42, carbs: 68, fat: 10, serving: 1, category: "meals", img: "🍱" },
    { id: 14, name: "Atlantic Salmon Teriyaki with Broccoli & Rice", calories: 580, protein: 38, carbs: 62, fat: 16, serving: 1, category: "meals", img: "🍣" },
    { id: 15, name: "Fresh Salmon Nigiri & Avocado Sushi Roll (8 Pcs)", calories: 380, protein: 22, carbs: 52, fat: 9, serving: 8, category: "meals", img: "🍱" },
    { id: 16, name: "Ahi Tuna Poke Bowl (Sushi Rice, Edamame, Ponzu)", calories: 520, protein: 36, carbs: 60, fat: 14, serving: 1, category: "meals", img: "🥗" },
    { id: 17, name: "Authentic Chicken Pad Thai with Crushed Peanuts", calories: 560, protein: 28, carbs: 74, fat: 16, serving: 1, category: "meals", img: "🍜" },
    { id: 18, name: "Beef & Tender Broccoli Stir-Fry with Rice", calories: 480, protein: 38, carbs: 48, fat: 14, serving: 1, category: "meals", img: "🥦" },
    { id: 19, name: "Smoked Turkey, Bacon & Avocado Club Wrap", calories: 420, protein: 32, carbs: 36, fat: 16, serving: 1, category: "meals", img: "🌯" },
    { id: 20, name: "Chicken Shawarma Plate with Garlic Sauce & Yellow Rice", calories: 620, protein: 45, carbs: 58, fat: 20, serving: 1, category: "meals", img: "🥙" },
    { id: 21, name: "Homemade Beef Lasagna with Ricotta & Mozzarella", calories: 560, protein: 38, carbs: 48, fat: 22, serving: 1, category: "meals", img: "🧀" },
    { id: 22, name: "Japanese Tonkotsu Ramen with Chashu & Soft Boiled Egg", calories: 640, protein: 30, carbs: 72, fat: 24, serving: 1, category: "meals", img: "🍜" },
    { id: 23, name: "Street Tacos with Seasoned Beef & Pico (3 Tacos)", calories: 490, protein: 32, carbs: 42, fat: 18, serving: 3, category: "meals", img: "🌮" },
    { id: 24, name: "Pan-Seared Salmon with Roasted Potatoes & Asparagus", calories: 460, protein: 38, carbs: 28, fat: 18, serving: 1, category: "meals", img: "🐟" },
    { id: 25, name: "Crispy Oven-Baked Chicken Tenders (4 Pcs)", calories: 380, protein: 36, carbs: 24, fat: 12, serving: 4, category: "meals", img: "🍗" },
    { id: 26, name: "Korean Beef Bibimbap with Gochujang & Fried Egg", calories: 590, protein: 34, carbs: 76, fat: 16, serving: 1, category: "meals", img: "🍲" },
    { id: 27, name: "Chicken Souvlaki Skewers with Tzatziki & Warm Pita", calories: 510, protein: 42, carbs: 40, fat: 16, serving: 1, category: "meals", img: "🍢" },

    // --- BREAKFASTS & MORNING FUEL ---
    { id: 28, name: "Rolled Oatmeal with Whey Protein & Fresh Blueberries", calories: 360, protein: 32, carbs: 48, fat: 5, serving: 1, category: "breakfast", img: "🥣" },
    { id: 29, name: "Avocado Sourdough Toast with 2 Poached Eggs", calories: 420, protein: 19, carbs: 34, fat: 22, serving: 1, category: "breakfast", img: "🥑" },
    { id: 30, name: "Protein Fluffy Pancakes with Sugar-Free Maple Syrup (3 Stack)", calories: 380, protein: 35, carbs: 44, fat: 4, serving: 3, category: "breakfast", img: "🥞" },
    { id: 31, name: "Scrambled Eggs with Baby Spinach & Feta (3 Eggs)", calories: 290, protein: 22, carbs: 4, fat: 20, serving: 1, category: "breakfast", img: "🍳" },
    { id: 32, name: "High-Protein Breakfast Burrito with Turkey Bacon & Eggs", calories: 460, protein: 34, carbs: 38, fat: 18, serving: 1, category: "breakfast", img: "🌯" },
    { id: 33, name: "Toasted Bagel with Smoked Salmon & Light Cream Cheese", calories: 420, protein: 28, carbs: 52, fat: 10, serving: 1, category: "breakfast", img: "🥯" },
    { id: 34, name: "Greek Yogurt Bowl with Honey, Walnuts & Berries", calories: 310, protein: 24, carbs: 38, fat: 6, serving: 1, category: "breakfast", img: "🥛" },
    { id: 35, name: "Açaí Superfood Bowl with Banana, Strawberries & Granola", calories: 390, protein: 9, carbs: 68, fat: 11, serving: 1, category: "breakfast", img: "🫐" },
    { id: 36, name: "Cinnamon Brioche French Toast with Maple Drizzle (2 Slices)", calories: 360, protein: 16, carbs: 52, fat: 9, serving: 2, category: "breakfast", img: "🍞" },
    { id: 37, name: "Whole Wheat Toast with Creamy Peanut Butter & Sliced Banana", calories: 320, protein: 12, carbs: 42, fat: 14, serving: 1, category: "breakfast", img: "🍌" },
    { id: 38, name: "Fluffy Egg White Omelette with Mushrooms & Herbs", calories: 180, protein: 26, carbs: 6, fat: 3, serving: 1, category: "breakfast", img: "🍳" },

    // --- MEATS, POULTRY & SEAFOOD ---
    { id: 39, name: "Grilled Lemon Herb Chicken Breast (150g)", calories: 245, protein: 46, carbs: 0, fat: 5, serving: 150, category: "animal", img: "🍗" },
    { id: 40, name: "Extra Lean Ground Turkey 93/7 (150g Cooked)", calories: 225, protein: 33, carbs: 0, fat: 9, serving: 150, category: "animal", img: "🦃" },
    { id: 41, name: "USDA Choice Sirloin Steak (180g Grilled)", calories: 360, protein: 50, carbs: 0, fat: 16, serving: 180, category: "animal", img: "🥩" },
    { id: 42, name: "Pan-Seared Atlantic Salmon Fillet (180g)", calories: 375, protein: 36, carbs: 0, fat: 23, serving: 180, category: "animal", img: "🍣" },
    { id: 43, name: "Grilled Jumbo Garlic Shrimp (150g / 10-12 Pcs)", calories: 145, protein: 34, carbs: 1, fat: 1, serving: 150, category: "animal", img: "🍤" },
    { id: 44, name: "Chunk Light Tuna in Spring Water (1 Can / 140g Drained)", calories: 150, protein: 33, carbs: 0, fat: 1.5, serving: 140, category: "animal", img: "🐟" },
    { id: 45, name: "Baked Lemon Pepper Tilapia Fillet (160g)", calories: 170, protein: 34, carbs: 0, fat: 3, serving: 160, category: "animal", img: "🐠" },
    { id: 46, name: "Boneless Center Cut Pork Tenderloin (160g)", calories: 230, protein: 42, carbs: 0, fat: 6, serving: 160, category: "animal", img: "🥩" },
    { id: 47, name: "Hard Boiled Pasture-Raised Eggs (2 Large)", calories: 140, protein: 12, carbs: 1, fat: 10, serving: 2, category: "animal", img: "🥚" },
    { id: 48, name: "Liquid Egg Whites (200g / 3/4 Cup)", calories: 105, protein: 22, carbs: 1.5, fat: 0.4, serving: 200, category: "animal", img: "🍳" },
    { id: 49, name: "Crispy Sliced Turkey Bacon (4 Slices)", calories: 140, protein: 12, carbs: 2, fat: 9, serving: 4, category: "animal", img: "🥓" },
    { id: 50, name: "Grilled Skinless Chicken Thigh (150g)", calories: 280, protein: 38, carbs: 0, fat: 13, serving: 150, category: "animal", img: "🍗" },

    // --- PLANT-BASED & VEGETARIAN ---
    { id: 51, name: "Crispy Sesame Tofu & Mixed Garden Vegetable Stir-Fry", calories: 360, protein: 22, carbs: 28, fat: 16, serving: 1, category: "plant", img: "🧊" },
    { id: 52, name: "Golden Red Lentil Dal with Cumin & Turmeric (1 Bowl)", calories: 280, protein: 18, carbs: 44, fat: 3, serving: 1, category: "plant", img: "🍲" },
    { id: 53, name: "Chickpea Chana Masala with Spiced Tomato Gravy", calories: 320, protein: 16, carbs: 48, fat: 6, serving: 1, category: "plant", img: "🥙" },
    { id: 54, name: "High-Protein Soy Chunks Sautéed with Bell Peppers", calories: 345, protein: 52, carbs: 33, fat: 1, serving: 100, category: "plant", img: "🫘" },
    { id: 55, name: "Organic Extra Firm Tofu Block (150g)", calories: 120, protein: 14, carbs: 3, fat: 7, serving: 150, category: "plant", img: "🧊" },
    { id: 56, name: "Crispy Falafel Wrap with Garlic Hummus & Tahini", calories: 480, protein: 17, carbs: 62, fat: 19, serving: 1, category: "plant", img: "🧆" },
    { id: 57, name: "Steamed Edamame in Sea Salt Pods (150g)", calories: 180, protein: 17, carbs: 14, fat: 8, serving: 150, category: "plant", img: "🌱" },
    { id: 58, name: "Pan-Fried Marinated Tempeh Strips (120g)", calories: 230, protein: 24, carbs: 11, fat: 13, serving: 120, category: "plant", img: "🌱" },
    { id: 59, name: "High-Protein Seitan Wheat Meat Cutlet (120g)", calories: 180, protein: 36, carbs: 6, fat: 2, serving: 120, category: "plant", img: "🥩" },
    { id: 60, name: "Black Bean & Quinoa Fiesta Salad Bowl", calories: 440, protein: 18, carbs: 78, fat: 6, serving: 1, category: "plant", img: "🥗" },
    { id: 61, name: "Artisanal Low-Fat Paneer Cubes (100g)", calories: 265, protein: 18, carbs: 2, fat: 20, serving: 100, category: "plant", img: "🧀" },

    // --- DAIRY, WHEY & SHAKES ---
    { id: 62, name: "Whey Protein Isolate Shake (1 Scoop + Water)", calories: 120, protein: 27, carbs: 1, fat: 1, serving: 1, category: "dairy", img: "🥤" },
    { id: 63, name: "Whey Protein Shake with Unsweetened Almond Milk", calories: 150, protein: 28, carbs: 2, fat: 3.5, serving: 1, category: "dairy", img: "🥤" },
    { id: 64, name: "High-Calorie Mass Gainer Hypertrophy Shake", calories: 650, protein: 50, carbs: 95, fat: 8, serving: 1, category: "dairy", img: "🥤" },
    { id: 65, name: "Fairlife Core Power Elite Protein Shake (42g Protein)", calories: 230, protein: 42, carbs: 7, fat: 3.5, serving: 1, category: "dairy", img: "🥛" },
    { id: 66, name: "Chobani Zero Sugar Non-Fat Greek Yogurt (1 Cup / 150g)", calories: 85, protein: 16, carbs: 5, fat: 0, serving: 150, category: "dairy", img: "🥛" },
    { id: 67, name: "Low-Fat Cottage Cheese (200g / 1 Cup)", calories: 180, protein: 24, carbs: 8, fat: 4, serving: 200, category: "dairy", img: "🥣" },
    { id: 68, name: "Part-Skim Mozzarella String Cheese (1 Stick)", calories: 80, protein: 7, carbs: 1, fat: 6, serving: 1, category: "dairy", img: "🧀" },
    { id: 69, name: "Micellar Casein Slow-Release Bedtime Shake", calories: 130, protein: 26, carbs: 2, fat: 1.5, serving: 1, category: "dairy", img: "🌙" },

    // --- GRAINS & HEALTHY CARBS ---
    { id: 70, name: "Steamed Jasmine White Rice (1 Cup Cooked / 160g)", calories: 210, protein: 4, carbs: 45, fat: 0.5, serving: 160, category: "carbs", img: "🍚" },
    { id: 71, name: "Steamed Brown Rice (1 Cup Cooked / 195g)", calories: 218, protein: 5, carbs: 46, fat: 1.6, serving: 195, category: "carbs", img: "🌾" },
    { id: 72, name: "Roasted Sweet Potato with Sea Salt (150g)", calories: 135, protein: 3, carbs: 31, fat: 0.2, serving: 150, category: "carbs", img: "🍠" },
    { id: 73, name: "Fluffy Baked Russet Potato (200g)", calories: 190, protein: 4.5, carbs: 43, fat: 0.2, serving: 200, category: "carbs", img: "🥔" },
    { id: 74, name: "Cooked Organic Quinoa (1 Cup / 185g)", calories: 222, protein: 8, carbs: 39, fat: 3.6, serving: 185, category: "carbs", img: "🌾" },
    { id: 75, name: "Artisanal Sourdough Bread (2 Slices)", calories: 180, protein: 8, carbs: 36, fat: 1.5, serving: 2, category: "carbs", img: "🍞" },
    { id: 76, name: "Whole Wheat Penne Pasta (1.5 Cups Cooked)", calories: 240, protein: 9, carbs: 48, fat: 1.5, serving: 1, category: "carbs", img: "🍝" },

    // --- SNACKS, BARS & QUICK FUEL ---
    { id: 77, name: "Barebells Caramel Cashew Protein Bar", calories: 200, protein: 20, carbs: 16, fat: 8, serving: 1, category: "snacks", img: "🍫" },
    { id: 78, name: "Quest Chocolate Chip Cookie Dough Protein Bar", calories: 200, protein: 21, carbs: 21, fat: 9, serving: 1, category: "snacks", img: "🍪" },
    { id: 79, name: "Raw California Almonds (1 oz / 28g / 23 Nuts)", calories: 164, protein: 6, carbs: 6, fat: 14, serving: 28, category: "snacks", img: "🌰" },
    { id: 80, name: "Natural Creamy Peanut Butter (2 Tbsp / 32g)", calories: 190, protein: 8, carbs: 7, fat: 16, serving: 32, category: "snacks", img: "🥜" },
    { id: 81, name: "Crisp Honeycrisp Apple with 1 Tbsp Peanut Butter", calories: 190, protein: 4.5, carbs: 28, fat: 8, serving: 1, category: "snacks", img: "🍎" },
    { id: 82, name: "Fresh Ripe Banana (Medium / 118g)", calories: 105, protein: 1.3, carbs: 27, fat: 0.3, serving: 118, category: "snacks", img: "🍌" },
    { id: 83, name: "Dark Chocolate 85% Cocoa (3 Squares / 30g)", calories: 180, protein: 3, carbs: 12, fat: 14, serving: 30, category: "snacks", img: "🍫" },
    { id: 84, name: "Original Smoked Beef Jerky (1 oz / 28g)", calories: 80, protein: 12, carbs: 3, fat: 1.5, serving: 28, category: "snacks", img: "🥩" },
    { id: 85, name: "Roasted Garlic Hummus with Crunchy Baby Carrots", calories: 160, protein: 5, carbs: 18, fat: 8, serving: 1, category: "snacks", img: "🥕" }
];

// 2. Personal Trainers & Elite Coaches
const TRAINERS = [
    { id: 1, name: "Coach Mike Vance", specialty: "Max Strength & Powerlifting (SBD)", bio: "10+ years coaching national powerlifters. Specialized in periodization, biomechanics, and unlocking elite PRs with zero wasted movement.", img: "🏋️" },
    { id: 2, name: "Sarah Fitzpatrick, RD", specialty: "Metabolic Hypertrophy & Fat Loss", bio: "Certified sports nutritionist & elite physique coach. Focuses on lean mass retention during aggressive caloric cuts with precision refeeds.", img: "🏃‍♀️" },
    { id: 3, name: "Alex ‘Iron’ Rivera", specialty: "Natural Bodybuilding & Symmetry", bio: "Hypertrophy specialist focusing on mechanical tension, lengthened partials, peak muscular density, and stage-ready aesthetics.", img: "💪" },
    { id: 4, name: "Elena Chen", specialty: "Mobility, Posture & Joint Longevity", bio: "Physical therapy specialist & biomechanics analyst. Bulletproofing hip, shoulder, and spinal health for pain-free lifelong lifting.", img: "🧘" }
];

// 3. Preloader Animation (Video 0:00)
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const lineFill = document.getElementById('preloader-line');
    const percentEl = document.getElementById('preloader-percent');

    if (!preloader) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            if (lineFill) lineFill.style.width = '100%';
            if (percentEl) percentEl.innerText = '100%';

            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
            }, 320);
        } else {
            if (lineFill) lineFill.style.width = `${progress}%`;
            if (percentEl) percentEl.innerText = `${progress}%`;
        }
    }, 20);
}

// 4. FitForge Application Engine
class FitForgeApp {
    constructor() {
        this.editingWorkoutIndex = null;
        this.initData();
        this.initDOM();
        this.initAuth();
        this.initGlobalChartDefaults();
        this.initCharts();
        this.initEventListeners();
        this.updateUI();
        this.startTime = Date.now();
    }

    // Initialize/Load Local Storage
    initData() {
        const defaultData = {
            profile: { name: "Athlete", weight: 75, targetWeight: 80 },
            goals: { calories: 2500, protein: 180, carbs: 250, fat: 70 },
            logs: {
                calories: { breakfast: [], lunch: [], dinner: [], snack: [] },
                water: 0,
                workouts: [],
                weightHistory: [{ date: new Date().toISOString().split('T')[0], weight: 75 }]
            },
            settings: { darkMode: true, units: 'metric' }
        };

        const stored = localStorage.getItem('fitforge_data');
        if (stored) {
            try {
                this.data = JSON.parse(stored);
                if (!this.data.profile) this.data.profile = defaultData.profile;
                if (!this.data.goals) this.data.goals = defaultData.goals;
                if (!this.data.logs) this.data.logs = defaultData.logs;
                if (!this.data.logs.calories) this.data.logs.calories = defaultData.logs.calories;
                if (!this.data.logs.workouts) this.data.logs.workouts = defaultData.logs.workouts;
                if (!this.data.logs.weightHistory) this.data.logs.weightHistory = defaultData.logs.weightHistory;
            } catch (e) {
                this.data = defaultData;
            }
        } else {
            this.data = defaultData;
        }

        this.currentSection = 'dashboard';
        this.activeWorkout = null;
        this.restTimerInterval = null;
    }

    saveData() {
        localStorage.setItem('fitforge_data', JSON.stringify(this.data));
    }

    // --- Custom Foods (MyFitnessPal Style) ---
    getCustomFoods() {
        try {
            const stored = localStorage.getItem('fitforge_custom_foods');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    }

    getAllFoods() {
        return [...this.getCustomFoods(), ...FOOD_DB];
    }

    openCustomFoodModal(prefillName = "") {
        const modal = document.getElementById('custom-food-modal');
        if (!modal) return;
        const nameInput = document.getElementById('cf-name');
        if (nameInput && prefillName) {
            nameInput.value = prefillName;
        }
        modal.style.display = 'block';
    }

    saveCustomFood(e) {
        if (e) e.preventDefault();
        const name = document.getElementById('cf-name')?.value.trim();
        const cal = parseInt(document.getElementById('cf-cal')?.value) || 0;
        const protein = parseInt(document.getElementById('cf-protein')?.value) || 0;
        const carbs = parseInt(document.getElementById('cf-carbs')?.value) || 0;
        const fat = parseInt(document.getElementById('cf-fat')?.value) || 0;
        const category = document.getElementById('cf-category')?.value || 'meals';
        const img = document.getElementById('cf-emoji')?.value.trim() || '🍲';

        if (!name) {
            this.showToast('Please specify a dish name', 'triangle-exclamation');
            return;
        }

        const customFoods = this.getCustomFoods();
        const newFood = {
            id: Date.now(),
            name,
            calories: cal,
            protein,
            carbs,
            fat,
            serving: 1,
            category,
            img
        };

        customFoods.unshift(newFood);
        localStorage.setItem('fitforge_custom_foods', JSON.stringify(customFoods));

        const modal = document.getElementById('custom-food-modal');
        if (modal) modal.style.display = 'none';

        const form = document.getElementById('form-custom-food');
        if (form) form.reset();

        this.renderFoodLibrary();
        this.showToast(`"${name}" added to Protein Vault!`, 'circle-check');

        // If food search modal was open, refresh results
        const modalSearch = document.getElementById('modal-food-search');
        if (modalSearch && document.getElementById('food-search-modal')?.style.display === 'block') {
            this.searchInModal(modalSearch.value || "");
        }
    }

    // --- Authentication Engine (Login & Sign Up) ---
    initAuth() {
        const storedAuth = localStorage.getItem('fitforge_auth');
        if (storedAuth) {
            try {
                this.currentUser = JSON.parse(storedAuth);
            } catch (e) {
                this.currentUser = null;
            }
        } else {
            this.currentUser = null;
        }
        this.updateAuthUI();
    }

    openAuthModal(tab = 'login') {
        const modal = document.getElementById('auth-modal');
        if (!modal) return;
        this.switchAuthTab(tab);
        modal.style.display = 'block';
    }

    closeAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) modal.style.display = 'none';
    }

    switchAuthTab(tab) {
        const loginTab = document.getElementById('auth-tab-login');
        const signupTab = document.getElementById('auth-tab-signup');
        const loginView = document.getElementById('auth-view-login');
        const signupView = document.getElementById('auth-view-signup');

        if (tab === 'login') {
            if (loginTab) loginTab.classList.add('active');
            if (signupTab) signupTab.classList.remove('active');
            if (loginView) loginView.classList.remove('hidden');
            if (signupView) signupView.classList.add('hidden');
        } else {
            if (signupTab) signupTab.classList.add('active');
            if (loginTab) loginTab.classList.remove('active');
            if (signupView) signupView.classList.remove('hidden');
            if (loginView) loginView.classList.add('hidden');
        }
    }

    handleLogin(e) {
        if (e) e.preventDefault();
        const email = document.getElementById('login-email')?.value.trim();
        if (!email) return;

        const namePart = email.split('@')[0];
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        const name = this.data.profile.name || formattedName;

        this.currentUser = { name, email };
        localStorage.setItem('fitforge_auth', JSON.stringify(this.currentUser));

        this.closeAuthModal();
        this.updateAuthUI();
        this.showToast(`Welcome back, ${name}! Telemetry synchronized.`, 'circle-check');
    }

    handleSignup(e) {
        if (e) e.preventDefault();
        const name = document.getElementById('signup-name')?.value.trim();
        const email = document.getElementById('signup-email')?.value.trim();

        if (!name || !email) return;

        this.currentUser = { name, email };
        this.data.profile.name = name;
        this.saveData();
        localStorage.setItem('fitforge_auth', JSON.stringify(this.currentUser));

        this.closeAuthModal();
        this.updateAuthUI();
        this.updateSettingsFields();
        this.showToast(`Athlete profile created! Welcome to FitForge, ${name}.`, 'circle-check');
    }

    // --- Google Identity Services (GIS) OAuth 2.0 Token Client Flow ---
    initGoogleGIS() {
        this.tokenClient = null;
        this.gisInitialized = false;

        const setupTokenClient = () => {
            if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
                return;
            }

            const clientId = this.getGoogleClientId();
            if (!clientId) return;

            try {
                // Official Google Identity Services OAuth 2.0 Token Client (No One Tap overlay)
                this.tokenClient = google.accounts.oauth2.initTokenClient({
                    client_id: clientId,
                    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
                    callback: async (tokenResponse) => {
                        if (tokenResponse.error) {
                            console.error("Google OAuth token error:", tokenResponse);
                            this.showToast('Google OAuth request was cancelled or blocked.', 'triangle-exclamation');
                            return;
                        }

                        this.accessToken = tokenResponse.access_token;

                        // Access Token received! Query Google's official userinfo endpoint
                        try {
                            const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                                headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
                            });
                            const profile = await res.json();
                            this.handleGoogleProfileSuccess(profile);
                        } catch (err) {
                            console.error("Failed to query Google userinfo:", err);
                            this.showToast('Failed to retrieve Google profile data', 'triangle-exclamation');
                        }
                    }
                });
                this.gisInitialized = true;
            } catch (err) {
                console.warn("GIS Token Client setup notice:", err);
            }
        };

        if (window.google?.accounts?.oauth2) {
            setupTokenClient();
        } else {
            window.addEventListener('load', () => {
                setTimeout(setupTokenClient, 350);
            });
        }
    }

    getGoogleClientId() {
        return localStorage.getItem('fitforge_google_client_id') || GOOGLE_CLIENT_ID_CONFIG || '';
    }

    // Triggered on 'Sign in with Google' button click (Official Google OAuth 2.0 Flow)
    requestGoogleSignIn() {
        let clientId = this.getGoogleClientId();

        if (!clientId) {
            const promptId = window.prompt(
                "FitForge connects directly to Google Identity Services.\n\nPlease enter your Google OAuth 2.0 Client ID (from Google Cloud Console, e.g. xxxxx.apps.googleusercontent.com):"
            );
            if (promptId && promptId.trim()) {
                clientId = promptId.trim();
                localStorage.setItem('fitforge_google_client_id', clientId);
                const input = document.getElementById('set-google-client-id');
                if (input) input.value = clientId;
                this.initGoogleGIS();
            } else {
                this.showToast('Google OAuth 2.0 Client ID required to open Google Account Chooser.', 'circle-info');
                return;
            }
        }

        if (!this.tokenClient) {
            this.initGoogleGIS();
        }

        if (this.tokenClient) {
            // prompt: 'select_account' forces the genuine Google account chooser popup consent screen (accounts.google.com)
            this.tokenClient.requestAccessToken({ prompt: 'select_account' });
        } else {
            this.showToast('Connecting to Google Identity Services...', 'circle-info');
        }
    }

    handleGoogleProfileSuccess(profile) {
        if (!profile || !profile.email) return;

        const email = profile.email;
        const name = profile.name || email.split('@')[0];
        const picture = profile.picture || '';

        this.loginWithGoogleUser(name, email, picture);
    }

    decodeGoogleJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            if (!base64Url) return null;
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error("Failed to decode Google JWT token:", e);
            return null;
        }
    }

    handleGoogleCredentialResponse(response) {
        if (!response || !response.credential) return;
        const payload = this.decodeGoogleJwt(response.credential);
        if (!payload) return;

        const email = payload.email || 'athlete@gmail.com';
        const name = payload.name || email.split('@')[0];
        const picture = payload.picture || '';

        this.loginWithGoogleUser(name, email, picture);
    }

    loginWithGoogleUser(name, email, picture = '') {
        this.currentUser = { name, email, picture, authMethod: 'google' };
        this.data.profile.name = name;
        this.saveData();
        localStorage.setItem('fitforge_auth', JSON.stringify(this.currentUser));

        this.closeAuthModal();
        this.updateAuthUI();
        this.updateSettingsFields();
        this.showToast(`Signed in as ${name} (${email}) via Google`, 'circle-check');
    }
    saveGoogleClientId() {
        const input = document.getElementById('set-google-client-id');
        const val = input ? input.value.trim() : '';
        if (val) {
            localStorage.setItem('fitforge_google_client_id', val);
            this.showToast('Google OAuth Client ID saved & reinitialized', 'circle-check');
            this.initGoogleGIS();
        } else {
            localStorage.removeItem('fitforge_google_client_id');
            this.showToast('Default Google OAuth configuration restored', 'circle-check');
            this.initGoogleGIS();
        }
    }

    logoutUser() {
        if (this.accessToken && window.google?.accounts?.oauth2?.revoke) {
            try {
                window.google.accounts.oauth2.revoke(this.accessToken, () => {
                    console.log("OAuth2 access token revoked");
                });
            } catch (e) {}
        }
        this.accessToken = null;
        this.currentUser = null;
        localStorage.removeItem('fitforge_auth');
        this.updateAuthUI();
        this.showToast('Signed out of athlete session.', 'arrow-right-from-bracket');
    }

    updateAuthUI() {
        const authButtonsGroup = document.getElementById('auth-buttons-group');
        const authUserGroup = document.getElementById('auth-user-group');
        const navAvatar = document.getElementById('nav-user-avatar');
        const navName = document.getElementById('nav-user-name');

        if (this.currentUser) {
            if (authButtonsGroup) authButtonsGroup.classList.add('hidden');
            if (authUserGroup) authUserGroup.classList.remove('hidden');

            const initials = this.currentUser.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2) || 'FF';

            if (navAvatar) {
                if (this.currentUser.picture) {
                    navAvatar.innerHTML = `<img src="${this.currentUser.picture}" alt="${this.currentUser.name}" class="nav-avatar-img">`;
                } else {
                    navAvatar.innerText = initials;
                }
            }
            if (navName) navName.innerText = this.currentUser.name;
        } else {
            if (authButtonsGroup) authButtonsGroup.classList.remove('hidden');
            if (authUserGroup) authUserGroup.classList.add('hidden');
        }
    }

    // DOM Element References
    initDOM() {
        this.sections = document.querySelectorAll('.content-section');
        this.navItems = document.querySelectorAll('.nav-item');
        this.sectionTitle = document.getElementById('section-title');
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebar-toggle');
        this.currentDateEl = document.getElementById('current-date');

        // Calorie Tracker Modal
        this.modal = document.getElementById('food-search-modal');
        this.closeModal = document.querySelectorAll('.close-modal');

        // Set Realtime Date in Header Ribbon
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        if (this.currentDateEl) {
            this.currentDateEl.innerText = new Date().toLocaleDateString('en-US', options).toUpperCase();
        }

        // Render ingredients into custom meal blueprint selector
        this.renderMealIngredientsSelector();
    }

    // Global Chart.js Vibe-Coded Defaults (No grid clutter, smooth curves, custom tooltips)
    initGlobalChartDefaults() {
        if (typeof Chart === 'undefined') return;

        Chart.defaults.color = '#a89f91';
        Chart.defaults.font.family = "'Plus Jakarta Sans', -apple-system, sans-serif";
        Chart.defaults.font.size = 11;
        Chart.defaults.font.weight = '500';

        // Custom Frosted Glass Tooltips
        Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(12, 10, 8, 0.95)';
        Chart.defaults.plugins.tooltip.borderColor = 'rgba(229, 184, 105, 0.3)';
        Chart.defaults.plugins.tooltip.borderWidth = 1;
        Chart.defaults.plugins.tooltip.padding = 12;
        Chart.defaults.plugins.tooltip.cornerRadius = 12;
        Chart.defaults.plugins.tooltip.titleColor = '#ffffff';
        Chart.defaults.plugins.tooltip.bodyColor = '#e5b869';
        Chart.defaults.plugins.tooltip.titleFont = { family: "'Playfair Display', Georgia, serif", weight: '700', size: 13 };
        Chart.defaults.plugins.tooltip.bodyFont = { family: "'JetBrains Mono', monospace", weight: '600', size: 11 };
        Chart.defaults.plugins.tooltip.displayColors = false;
    }

    // Chart.js Modern Initializations
    initCharts() {
        // 1. Dashboard Calories Donut Ring
        const dashCanvas = document.getElementById('calories-summary-chart');
        if (dashCanvas) {
            const dashCtx = dashCanvas.getContext('2d');
            const stats = this.getTodayStats();
            const remaining = Math.max(0, this.data.goals.calories - stats.calories);

            this.dashCalChart = new Chart(dashCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Consumed', 'Remaining'],
                    datasets: [{
                        data: [Math.round(stats.calories), Math.round(remaining)],
                        backgroundColor: ['#e5b869', 'rgba(255, 255, 255, 0.05)'],
                        borderWidth: 0,
                        cutout: '84%',
                        borderRadius: 20
                    }]
                },
                options: {
                    plugins: { legend: { display: false } },
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: { duration: 800, easing: 'easeOutQuart' }
                }
            });
        }

        // 2. Dashboard Weight Trend Line with Golden Halo Gradient Fill
        const weightCanvas = document.getElementById('weight-trend-chart');
        if (weightCanvas) {
            const weightCtx = weightCanvas.getContext('2d');
            const gradient = weightCtx.createLinearGradient(0, 0, 0, 220);
            gradient.addColorStop(0, 'rgba(229, 184, 105, 0.28)');
            gradient.addColorStop(1, 'rgba(229, 184, 105, 0.0)');

            this.weightTrendChart = new Chart(weightCtx, {
                type: 'line',
                data: {
                    labels: this.data.logs.weightHistory.map(h => h.date),
                    datasets: [{
                        label: 'Weight (kg)',
                        data: this.data.logs.weightHistory.map(h => h.weight),
                        borderColor: '#e5b869',
                        borderWidth: 2.5,
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.45,
                        pointBackgroundColor: '#e5b869',
                        pointBorderColor: '#000000',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            grid: { color: 'rgba(255, 255, 255, 0.04)' },
                            border: { display: false },
                            ticks: { color: '#6e6659', font: { family: "'JetBrains Mono', monospace" } }
                        },
                        x: {
                            grid: { display: false },
                            border: { display: false },
                            ticks: { color: '#6e6659' }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }

    initAnalyticsCharts() {
        if (typeof Chart === 'undefined') return;

        // Chart 1: Macros per 100g
        const ctx1 = document.getElementById('chart-macros-100g')?.getContext('2d');
        if (ctx1 && !this.analyticsChart1) {
            const topFoods = FOOD_DB.slice(0, 7);
            this.analyticsChart1 = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: topFoods.map(f => f.name.split(' (')[0].slice(0, 18)),
                    datasets: [
                        { label: 'Protein (g)', data: topFoods.map(f => f.protein), backgroundColor: '#e5b869', borderRadius: 6 },
                        { label: 'Carbs (g)', data: topFoods.map(f => f.carbs), backgroundColor: '#38bdf8', borderRadius: 6 },
                        { label: 'Fats (g)', data: topFoods.map(f => f.fat), backgroundColor: '#fbbf24', borderRadius: 6 }
                    ]
                },
                options: this.getChartOptions()
            });
        }

        // Chart 2: Protein per Serving (Horizontal Bar)
        const ctx2 = document.getElementById('chart-protein-serving')?.getContext('2d');
        if (ctx2 && !this.analyticsChart2) {
            const topFoods = FOOD_DB.slice(0, 10);
            this.analyticsChart2 = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: topFoods.map(f => f.name.split(' (')[0].slice(0, 18)),
                    datasets: [{
                        label: 'Protein (g)',
                        data: topFoods.map(f => f.protein),
                        backgroundColor: '#e5b869',
                        borderRadius: 6
                    }]
                },
                options: {
                    indexAxis: 'y',
                    ...this.getChartOptions()
                }
            });
        }

        // Chart 3: Calories vs Protein (Scatter)
        const ctx3 = document.getElementById('chart-cal-vs-protein')?.getContext('2d');
        if (ctx3 && !this.analyticsChart3) {
            this.analyticsChart3 = new Chart(ctx3, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Foods',
                        data: FOOD_DB.slice(0, 25).map(f => ({ x: f.calories, y: f.protein, label: f.name.split(' (')[0] })),
                        backgroundColor: '#e5b869',
                        borderColor: 'rgba(229, 184, 105, 0.4)',
                        pointRadius: 6,
                        pointHoverRadius: 9
                    }]
                },
                options: {
                    ...this.getChartOptions(),
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.raw.label}: ${ctx.raw.x} cal, ${ctx.raw.y}g Protein`
                            }
                        }
                    }
                }
            });
        }

        // Chart 4: Energy Distribution (Donut)
        const ctx4 = document.getElementById('chart-energy-dist')?.getContext('2d');
        if (ctx4 && !this.analyticsChart4) {
            const stats = this.getTodayStats();
            this.analyticsChart4 = new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Protein', 'Carbs', 'Fats'],
                    datasets: [{
                        data: [
                            stats.protein > 0 ? stats.protein * 4 : 180 * 4,
                            stats.carbs > 0 ? stats.carbs * 4 : 250 * 4,
                            stats.fat > 0 ? stats.fat * 9 : 70 * 9
                        ],
                        backgroundColor: ['#e5b869', '#38bdf8', '#fbbf24'],
                        borderWidth: 0,
                        borderRadius: 8,
                        cutout: '78%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: '#a89f91', font: { weight: '600' }, padding: 16 }
                        }
                    }
                }
            });
        }

        // Chart 5: Protein Density (P per 100 Cal)
        const ctx5 = document.getElementById('chart-protein-density')?.getContext('2d');
        if (ctx5 && !this.analyticsChart5) {
            const topFoods = FOOD_DB.slice(0, 12);
            this.analyticsChart5 = new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: topFoods.map(f => f.name.split(' (')[0].slice(0, 16)),
                    datasets: [{
                        label: 'P per 100 Cal',
                        data: topFoods.map(f => (f.protein / f.calories * 100).toFixed(1)),
                        backgroundColor: '#ccff00',
                        borderRadius: 6
                    }]
                },
                options: this.getChartOptions()
            });
        }
    }

    getChartOptions() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.04)' },
                    border: { display: false },
                    ticks: { color: '#6e6659', font: { family: "'JetBrains Mono', monospace" } }
                },
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { color: '#6e6659' }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#a89f91', font: { weight: '600' } }
                }
            }
        };
    }

    // Event Listeners
    initEventListeners() {
        // Navigation clicks
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-section');
                if (target) this.navigateTo(target);
            });
        });

        // Close More Dropdown on outside click
        document.addEventListener('click', (e) => {
            const moreDropdown = document.querySelector('.nav-more-dropdown');
            if (moreDropdown && !moreDropdown.contains(e.target)) {
                this.closeMoreMenu();
            }
        });

        // Sidebar Toggle (Mobile)
        if (this.sidebarToggle && this.sidebar) {
            this.sidebarToggle.addEventListener('click', () => {
                this.sidebar.classList.toggle('collapsed');
            });
        }

        // Food Library Filter/Search
        const foodSearch = document.getElementById('food-search');
        if (foodSearch) foodSearch.addEventListener('input', (e) => this.renderFoodLibrary(e.target.value));

        const foodSort = document.getElementById('food-sort');
        if (foodSort) foodSort.addEventListener('change', () => this.renderFoodLibrary());

        const foodCat = document.getElementById('food-category');
        if (foodCat) foodCat.addEventListener('change', () => this.renderFoodLibrary());

        // Calorie Tracker - Add Food Modal Triggers
        document.querySelectorAll('.add-food-btn').forEach(btn => {
            btn.addEventListener('click', () => this.openFoodModal(btn.getAttribute('data-meal')));
        });

        // Close Modal
        this.closeModal.forEach(btn => btn.onclick = () => {
            if (this.modal) this.modal.style.display = 'none';
            const trainerModal = document.getElementById('trainer-modal');
            if (trainerModal) trainerModal.style.display = 'none';
            const authModal = document.getElementById('auth-modal');
            if (authModal) authModal.style.display = 'none';
            const customFoodModal = document.getElementById('custom-food-modal');
            if (customFoodModal) customFoodModal.style.display = 'none';
        });

        window.onclick = (e) => {
            if (e.target === this.modal) this.modal.style.display = 'none';
            const trainerModal = document.getElementById('trainer-modal');
            if (e.target === trainerModal) trainerModal.style.display = 'none';
            const authModal = document.getElementById('auth-modal');
            if (e.target === authModal) authModal.style.display = 'none';
            const customFoodModal = document.getElementById('custom-food-modal');
            if (e.target === customFoodModal) customFoodModal.style.display = 'none';
        };

        const modalFoodSearch = document.getElementById('modal-food-search');
        if (modalFoodSearch) modalFoodSearch.addEventListener('input', (e) => this.searchInModal(e.target.value));

        // Workout Tracker Buttons
        const btnNewWorkout = document.getElementById('btn-new-workout');
        if (btnNewWorkout) btnNewWorkout.addEventListener('click', () => this.startNewWorkout());

        const btnAddEx = document.getElementById('btn-add-exercise');
        if (btnAddEx) btnAddEx.addEventListener('click', () => this.addExerciseToWorkout());

        const btnCancelWorkout = document.getElementById('btn-cancel-workout');
        if (btnCancelWorkout) btnCancelWorkout.addEventListener('click', () => this.cancelWorkout());

        const btnSaveWorkout = document.getElementById('btn-save-workout');
        if (btnSaveWorkout) btnSaveWorkout.addEventListener('click', () => this.saveWorkout());

        // Settings Buttons
        const btnSaveSettings = document.getElementById('btn-save-settings');
        if (btnSaveSettings) btnSaveSettings.addEventListener('click', () => this.saveSettings());

        const btnResetData = document.getElementById('btn-reset-data');
        if (btnResetData) {
            btnResetData.addEventListener('click', () => {
                if (confirm('Are you sure you want to PURGE all biometric and workout data? This cannot be undone.')) {
                    localStorage.removeItem('fitforge_data');
                    localStorage.removeItem('fitforge_custom_foods');
                    localStorage.removeItem('fitforge_auth');
                    location.reload();
                }
            });
        }

        // Assistant Buttons & Input
        const btnSendAssistant = document.getElementById('btn-send-assistant');
        if (btnSendAssistant) btnSendAssistant.addEventListener('click', () => this.handleAssistantInput());

        const assistantInput = document.getElementById('assistant-input');
        if (assistantInput) {
            assistantInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleAssistantInput();
            });
        }

        // Custom Meal Blueprint Form
        const customMealForm = document.getElementById('custom-meal-form');
        if (customMealForm) {
            customMealForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('meal-name').value;
                const checked = customMealForm.querySelectorAll('input[type="checkbox"]:checked');
                if (checked.length === 0) {
                    this.showToast('Please select at least one ingredient!', 'triangle-exclamation');
                    return;
                }

                let totalCal = 0, totalP = 0, totalC = 0, totalF = 0;
                checked.forEach(box => {
                    totalCal += parseFloat(box.getAttribute('data-cal')) || 0;
                    totalP += parseFloat(box.getAttribute('data-p')) || 0;
                    totalC += parseFloat(box.getAttribute('data-c')) || 0;
                    totalF += parseFloat(box.getAttribute('data-f')) || 0;
                });

                this.addMealTemplate(name, Math.round(totalCal), Math.round(totalP), Math.round(totalC), Math.round(totalF));
                customMealForm.reset();
            });
        }

        // Trainer Consultation Inquiry Form
        const trainerForm = document.getElementById('trainer-inquiry-form');
        if (trainerForm) {
            trainerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const modal = document.getElementById('trainer-modal');
                if (modal) modal.style.display = 'none';
                this.showToast('Inquiry transmitted! Coach will contact you shortly.', 'paper-plane');
                trainerForm.reset();
            });
        }
    }

    // Modern Toast Notification System (replaces disruptive browser alerts)
    showToast(message, icon = 'circle-check') {
        const container = document.getElementById('toast-container');
        if (!container) {
            alert(message);
            return;
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-${icon} toast-icon"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-out');
            setTimeout(() => toast.remove(), 350);
        }, 2800);
    }

    // Navigation Logic
    navigateTo(sectionId) {
        this.sections.forEach(s => s.classList.remove('active'));
        this.navItems.forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.nav-more-item').forEach(m => m.classList.remove('active'));

        const targetSection = document.getElementById(sectionId);
        if (targetSection) targetSection.classList.add('active');

        const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
        const moreBtn = document.getElementById('nav-more-btn');
        const activeMoreItem = document.querySelector(`.nav-more-item[data-section="${sectionId}"]`);

        if (activeNavItem) {
            activeNavItem.classList.add('active');
            if (moreBtn) moreBtn.classList.remove('active');
        } else if (activeMoreItem) {
            activeMoreItem.classList.add('active');
            if (moreBtn) moreBtn.classList.add('active');
        }

        this.currentSection = sectionId;
        const navSpan = document.querySelector(`[data-section="${sectionId}"] span`);
        if (navSpan && this.sectionTitle) {
            this.sectionTitle.innerText = navSpan.innerText;
        } else if (sectionId === 'settings' && this.sectionTitle) {
            this.sectionTitle.innerText = 'Athlete Settings';
        }

        // Scroll to top of content smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });

        this.updateSectionUI(sectionId);
    }

    toggleMoreMenu(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        const menu = document.getElementById('nav-more-menu');
        if (menu) menu.classList.toggle('show');
    }

    closeMoreMenu() {
        const menu = document.getElementById('nav-more-menu');
        if (menu) menu.classList.remove('show');
    }

    // UI Updates
    updateUI() {
        this.updateDashboard();
        this.renderFoodLibrary();
        this.renderCalorieTracker();
        this.renderTrainers();
        this.renderSuggestedMeals();
        this.updateSettingsFields();
        this.renderWorkoutHistory();
        this.updateAuthUI();
    }

    updateSectionUI(sectionId) {
        if (sectionId === 'dashboard') this.updateDashboard();
        if (sectionId === 'calorie-tracker') this.renderCalorieTracker();
        if (sectionId === 'macro-analytics') this.updateAnalytics();
        if (sectionId === 'reports') this.renderReports();
        if (sectionId === 'workout-tracker') this.renderWorkoutHistory();
        if (sectionId === 'settings') this.updateSettingsFields();
    }

    // Dashboard Telemetry Updates
    updateDashboard() {
        const stats = this.getTodayStats();

        // 1. Calories Calculation
        const remaining = Math.max(0, this.data.goals.calories - stats.calories);
        const dashRemainingEl = document.getElementById('dash-calories-remaining');
        if (dashRemainingEl) dashRemainingEl.innerText = Math.round(remaining).toLocaleString();

        const dashGoalEl = document.getElementById('dash-calories-goal');
        if (dashGoalEl) dashGoalEl.innerText = this.data.goals.calories.toLocaleString();

        // Hero Stats
        const heroCalGoal = document.getElementById('stat-hero-cal-goal');
        if (heroCalGoal) heroCalGoal.innerText = this.data.goals.calories.toLocaleString();

        const heroProtGoal = document.getElementById('stat-hero-protein-goal');
        if (heroProtGoal) heroProtGoal.innerText = `${this.data.goals.protein}g`;

        // Update Donut Chart
        if (this.dashCalChart) {
            this.dashCalChart.data.datasets[0].data = [Math.round(stats.calories), Math.round(remaining)];
            this.dashCalChart.update();
        }

        // 2. Macronutrient Progress Bars
        this.updateProgressBar('protein', stats.protein, this.data.goals.protein);
        this.updateProgressBar('carbs', stats.carbs, this.data.goals.carbs);
        this.updateProgressBar('fats', stats.fat, this.data.goals.fat);

        // 3. Hydration
        const waterAmountEl = document.getElementById('water-amount');
        if (waterAmountEl) waterAmountEl.innerText = this.data.logs.water.toFixed(1);

        const waterMirrorEl = document.getElementById('hero-water-mirror');
        if (waterMirrorEl) waterMirrorEl.innerText = this.data.logs.water.toFixed(1);

        // 4. Monthly Workout Count Badge
        const monthCountEl = document.getElementById('stats-month-count');
        if (monthCountEl) monthCountEl.innerText = this.data.logs.workouts.length;

        // 5. Workout Preview
        this.updateWorkoutPreview();

        // 6. Recent Activity
        this.renderRecentActivity();
    }

    updateWorkoutPreview() {
        const previewEl = document.getElementById('dash-workout-preview');
        if (!previewEl) return;

        if (this.data.logs.workouts.length === 0) {
            previewEl.innerHTML = `
                <div class="empty-workout-state">
                    <div class="empty-pulse-ring"><i class="fas fa-bolt"></i></div>
                    <p class="empty-title">Ready for today's session?</p>
                    <p class="empty-msg">No workout scheduled yet today.</p>
                </div>
                <button class="btn btn-pill-white btn-block" onclick="app.navigateTo('workout-tracker')">
                    <i class="fas fa-play"></i> Initialize Workout
                </button>
            `;
        } else {
            const last = this.data.logs.workouts[this.data.logs.workouts.length - 1];
            const dateStr = new Date(last.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            previewEl.innerHTML = `
                <div class="empty-workout-state">
                    <div class="empty-pulse-ring"><i class="fas fa-dumbbell"></i></div>
                    <p class="empty-title">${last.name}</p>
                    <p class="empty-msg">${last.exercises.length} movements completed on ${dateStr}</p>
                </div>
                <button class="btn btn-pill-white btn-block" onclick="app.navigateTo('workout-tracker')">
                    <i class="fas fa-plus"></i> New Session
                </button>
            `;
        }
    }

    updateProgressBar(id, current, goal) {
        const percent = Math.min(100, Math.round((current / goal) * 100));
        const statusEl = document.getElementById(`dash-${id}-status`);
        if (statusEl) statusEl.innerText = `${Math.round(current)}/${goal}g (${percent}%)`;

        const fillEl = document.querySelector(`.${id}-fill`);
        if (fillEl) fillEl.style.width = `${percent}%`;
    }

    getTodayStats() {
        const stats = { calories: 0, protein: 0, carbs: 0, fat: 0 };
        const meals = this.data.logs.calories;
        for (let meal in meals) {
            if (Array.isArray(meals[meal])) {
                meals[meal].forEach(food => {
                    stats.calories += Number(food.calories) || 0;
                    stats.protein += Number(food.protein) || 0;
                    stats.carbs += Number(food.carbs) || 0;
                    stats.fat += Number(food.fat) || 0;
                });
            }
        }
        return stats;
    }

    updateWater(amount) {
        this.data.logs.water = Math.max(0, parseFloat((this.data.logs.water + amount).toFixed(2)));
        const waterAmountEl = document.getElementById('water-amount');
        if (waterAmountEl) waterAmountEl.innerText = this.data.logs.water.toFixed(1);

        const waterMirrorEl = document.getElementById('hero-water-mirror');
        if (waterMirrorEl) waterMirrorEl.innerText = this.data.logs.water.toFixed(1);

        this.saveData();
    }

    renderRecentActivity() {
        const list = document.getElementById('recent-activities');
        if (!list) return;

        list.innerHTML = '';
        const activities = [];

        // Last 3 workouts
        this.data.logs.workouts.slice(-3).forEach(w => {
            activities.push({ text: `Completed ${w.name}`, icon: 'dumbbell', time: w.date });
        });

        // Last 3 meals logged
        const meals = this.data.logs.calories;
        for (let m in meals) {
            if (Array.isArray(meals[m])) {
                meals[m].slice(-2).forEach(f => {
                    activities.push({ text: `Logged ${f.name} (${f.calories} kcal)`, icon: 'fire-flame-curved', time: f.date || new Date().toISOString() });
                });
            }
        }

        if (activities.length === 0) {
            list.innerHTML = '<li class="activity-item"><i class="fas fa-circle-info"></i> <span>No recent activity logged.</span></li>';
            return;
        }

        activities.sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 4).forEach(act => {
            const li = document.createElement('li');
            li.className = 'activity-item';
            li.innerHTML = `<i class="fas fa-${act.icon}"></i> <span>${act.text}</span>`;
            list.appendChild(li);
        });
    }

    // --- Food Library Logic (Full MyFitnessPal Dishes) ---
    renderFoodLibrary(searchTerm = "") {
        const grid = document.getElementById('food-grid');
        if (!grid) return;

        const sortEl = document.getElementById('food-sort');
        const catEl = document.getElementById('food-category');
        const sort = sortEl ? sortEl.value : 'name';
        const category = catEl ? catEl.value : 'all';

        const allFoods = this.getAllFoods();

        let filtered = allFoods.filter(f =>
            (f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (category === 'all' || f.category === category)
        );

        if (sort === 'protein-desc') filtered.sort((a, b) => b.protein - a.protein);
        if (sort === 'calories-asc') filtered.sort((a, b) => a.calories - b.calories);
        if (sort === 'efficiency') filtered.sort((a, b) => (b.protein / Math.max(1, b.calories)) - (a.protein / Math.max(1, a.calories)));

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px;">
                    <p style="color: var(--text-secondary); margin-bottom: 16px;">No dishes or foods found matching your search.</p>
                    <button class="btn btn-pill-gold btn-sm" onclick="app.openCustomFoodModal('${searchTerm.replace(/'/g, "\\'")}')">
                        <i class="fas fa-plus"></i> Add "${searchTerm || 'New Dish'}" as Custom Food
                    </button>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(food => {
            const ratio = (food.protein / Math.max(1, food.calories) * 100).toFixed(1);
            return `
            <div class="food-card">
                <div class="food-img">${food.img}</div>
                <div class="food-content">
                    <div style="display:flex; justify-content:space-between; align-items:baseline;">
                        <h4>${food.name}</h4>
                        <span class="badge-pill" style="font-size:0.65rem;">${ratio}% P/Cal</span>
                    </div>
                    <div class="food-stat-row"><span>Energy</span> <strong>${food.calories} kcal</strong></div>
                    <div class="food-stat-row"><span>Protein</span> <strong class="gold-text">${food.protein}g</strong></div>
                    <div class="food-stat-row"><span>Carbohydrates</span> <strong>${food.carbs}g</strong></div>
                    <div class="food-stat-row"><span>Healthy Fats</span> <strong>${food.fat}g</strong></div>
                    <button class="btn btn-pill-white btn-sm mt-10" onclick="app.quickAddFood(${food.id})">
                        <i class="fas fa-plus"></i> Quick Log Food
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    quickAddFood(foodId) {
        const food = this.getAllFoods().find(f => f.id === foodId);
        if (!food) return;

        this.data.logs.calories.snack.push({ ...food, date: new Date().toISOString() });
        this.saveData();
        this.showToast(`${food.name.split(' (')[0]} added to snacks!`, 'utensils');
        this.updateUI();
    }

    // --- Calorie Tracker ---
    renderCalorieTracker() {
        const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
        let totalEaten = 0;

        meals.forEach(meal => {
            const list = document.getElementById(`list-${meal}`);
            if (!list) return;

            const items = this.data.logs.calories[meal] || [];
            list.innerHTML = items.map((food, idx) => {
                totalEaten += food.calories;
                return `
                <li class="food-item">
                    <div class="food-info">
                        <span class="food-name">${food.name}</span>
                        <span class="food-macros">${food.calories} kcal | P: ${food.protein}g | C: ${food.carbs}g | F: ${food.fat}g</span>
                    </div>
                    <button class="btn-icon" onclick="app.removeFood('${meal}', ${idx})" title="Remove Item">
                        <i class="fas fa-xmark"></i>
                    </button>
                </li>`;
            }).join('');
        });

        const totalEatenEl = document.getElementById('cal-total-eaten');
        if (totalEatenEl) totalEatenEl.innerText = Math.round(totalEaten);

        const remainingEl = document.getElementById('cal-net-remaining');
        if (remainingEl) remainingEl.innerText = Math.round(this.data.goals.calories - totalEaten);
    }

    openFoodModal(meal) {
        this.currentMeal = meal || 'snack';
        const modalMealName = document.getElementById('modal-meal-name');
        if (modalMealName) {
            modalMealName.innerText = this.currentMeal.charAt(0).toUpperCase() + this.currentMeal.slice(1);
        }

        const entryForm = document.getElementById('food-entry-form');
        if (entryForm) entryForm.classList.add('hidden');

        if (this.modal) {
            this.modal.style.display = 'block';
            this.searchInModal("");
        }
    }

    searchInModal(query) {
        const allFoods = this.getAllFoods();
        const results = allFoods.filter(f =>
            f.name.toLowerCase().includes(query.toLowerCase()) ||
            f.category.toLowerCase().includes(query.toLowerCase())
        );
        const list = document.getElementById('modal-food-results');
        if (!list) return;

        if (results.length === 0) {
            list.innerHTML = `
                <div class="empty-search-msg">
                    <p style="margin-bottom: 10px;">No foods found matching "${query}".</p>
                    <button class="btn btn-pill-gold btn-sm" onclick="app.openCustomFoodModal('${query.replace(/'/g, "\\'")}')">
                        <i class="fas fa-plus"></i> Add "${query}" as Custom Dish
                    </button>
                </div>
            `;
            return;
        }

        list.innerHTML = results.map(f => `
            <div class="modal-list-item" onclick="app.selectModalFood(${f.id})">
                <div class="modal-food-title">
                    <strong>${f.img} ${f.name}</strong>
                    <span class="badge-pill">${f.category.toUpperCase()}</span>
                </div>
                <div class="modal-food-macros">
                    <span>${f.calories} kcal</span> • <span class="gold-text">${f.protein}g P</span> • <span>${f.carbs}g C</span> • <span>${f.fat}g F</span>
                </div>
            </div>
        `).join('');
    }

    selectModalFood(foodId) {
        const food = this.getAllFoods().find(f => f.id === foodId);
        if (!food) return;

        const entryForm = document.getElementById('food-entry-form');
        if (entryForm) {
            entryForm.classList.remove('hidden');
            const nameEl = document.getElementById('selected-food-name');
            if (nameEl) nameEl.innerText = `${food.img} ${food.name}`;

            const qtyInput = document.getElementById('food-qty');
            // If the item specifies a serving count of 1 (like a burrito bowl or burger), default quantity is 1 serving or 100g
            if (food.serving === 1 || food.serving === 2 || food.serving === 3 || food.serving === 4 || food.serving === 8) {
                if (qtyInput) qtyInput.value = 1;
            } else {
                if (qtyInput) qtyInput.value = food.serving || 100;
            }

            const updatePreview = () => {
                const qty = parseFloat(qtyInput.value) || 1;
                const baseServing = food.serving || 100;
                const ratio = qty / baseServing;
                const calsEl = document.getElementById('preview-cals');
                const protEl = document.getElementById('preview-protein');
                if (calsEl) calsEl.innerText = Math.round(food.calories * ratio);
                if (protEl) protEl.innerText = Math.round(food.protein * ratio);
            };

            updatePreview();
            qtyInput.oninput = updatePreview;

            const confirmBtn = document.getElementById('btn-confirm-add-food');
            if (confirmBtn) {
                confirmBtn.onclick = () => {
                    const qty = parseFloat(qtyInput.value) || 1;
                    const baseServing = food.serving || 100;
                    const ratio = qty / baseServing;
                    const cleanName = food.name.split(' (')[0];
                    const label = (food.serving <= 8) ? `${cleanName} (${qty} serving)` : `${cleanName} (${qty}g)`;

                    this.data.logs.calories[this.currentMeal].push({
                        name: label,
                        calories: Math.round(food.calories * ratio),
                        protein: Math.round(food.protein * ratio),
                        carbs: Math.round(food.carbs * ratio),
                        fat: Math.round(food.fat * ratio),
                        date: new Date().toISOString()
                    });
                    this.saveData();
                    this.modal.style.display = 'none';
                    entryForm.classList.add('hidden');
                    this.renderCalorieTracker();
                    this.updateDashboard();
                    this.showToast(`${cleanName} logged to ${this.currentMeal}!`, 'circle-check');
                };
            }
        } else {
            this.data.logs.calories[this.currentMeal].push({ ...food, date: new Date().toISOString() });
            this.saveData();
            this.modal.style.display = 'none';
            this.renderCalorieTracker();
            this.updateDashboard();
            this.showToast(`${food.name.split(' (')[0]} logged to ${this.currentMeal}!`, 'circle-check');
        }
    }

    removeFood(meal, idx) {
        this.data.logs.calories[meal].splice(idx, 1);
        this.saveData();
        this.renderCalorieTracker();
        this.updateDashboard();
        this.showToast('Item removed from diary', 'trash-can');
    }

    // --- Workout Tracker & Session Archive (With Full Edit & Delete) ---
    startNewWorkout() {
        this.editingWorkoutIndex = null;
        const editor = document.getElementById('workout-editor');
        const history = document.getElementById('workout-history');
        const btnNew = document.getElementById('btn-new-workout');
        const saveBtn = document.getElementById('btn-save-workout');
        const nameInput = document.getElementById('workout-name-input');

        if (editor) editor.classList.remove('hidden');
        if (history) history.classList.add('hidden');
        if (btnNew) btnNew.classList.add('hidden');
        if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-check"></i> Save &amp; Finish Workout';
        if (nameInput) nameInput.value = "";

        this.activeWorkout = {
            name: "",
            exercises: [],
            date: new Date().toISOString()
        };

        const list = document.getElementById('exercise-list');
        if (list) list.innerHTML = '';
        this.addExerciseToWorkout();
        this.startRestTimer();
    }

    editWorkout(index) {
        const workout = this.data.logs.workouts[index];
        if (!workout) return;

        this.editingWorkoutIndex = index;

        const editor = document.getElementById('workout-editor');
        const history = document.getElementById('workout-history');
        const btnNew = document.getElementById('btn-new-workout');
        const nameInput = document.getElementById('workout-name-input');
        const saveBtn = document.getElementById('btn-save-workout');

        if (editor) editor.classList.remove('hidden');
        if (history) history.classList.remove('hidden');
        if (btnNew) btnNew.classList.add('hidden');

        if (nameInput) nameInput.value = workout.name;
        if (saveBtn) {
            saveBtn.innerHTML = '<i class="fas fa-check"></i> Update Workout Session';
        }

        // Repopulate exercises
        const list = document.getElementById('exercise-list');
        if (list) {
            list.innerHTML = '';
            workout.exercises.forEach(ex => {
                this.addExerciseWithData(ex.name, ex.sets);
            });
        }

        this.startRestTimer();
        this.showToast(`Loaded "${workout.name}" for editing`, 'pen-to-square');
        editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    deleteWorkout(index) {
        const workout = this.data.logs.workouts[index];
        if (!workout) return;

        if (confirm(`Delete "${workout.name}" from your session archive?`)) {
            this.data.logs.workouts.splice(index, 1);
            this.saveData();
            this.renderWorkoutHistory();
            this.updateDashboard();
            this.showToast(`"${workout.name}" removed from archive`, 'trash-can');
        }
    }

    addExerciseToWorkout() {
        this.addExerciseWithData("Barbell Bench Press", [{ weight: "60", reps: "10", done: true }]);
    }

    addExerciseWithData(name, sets = []) {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        const div = document.createElement('div');
        div.className = 'exercise-item';
        div.id = `ex-${id}`;

        const exerciseOptions = [
            "Barbell Bench Press", "Back Squats", "Deadlifts", "Overhead Press",
            "Lat Pulldowns", "Incline Dumbbell Press", "Barbell Bicep Curls",
            "Tricep Pushdowns", "Leg Press", "Romanian Deadlifts", "Cable Rows",
            "Dumbbell Lateral Raises", "Leg Extensions", "Hamstring Curls"
        ];

        const optionsHtml = exerciseOptions.map(opt =>
            `<option value="${opt}" ${opt === name ? 'selected' : ''}>${opt}</option>`
        ).join('');

        div.innerHTML = `
            <div class="exercise-header">
                <select class="exercise-select">
                    ${optionsHtml}
                    ${!exerciseOptions.includes(name) ? `<option value="${name}" selected>${name}</option>` : ''}
                </select>
                <button class="btn-icon" onclick="this.closest('.exercise-item').remove()" title="Delete Movement">
                    <i class="fas fa-trash-can"></i>
                </button>
            </div>
            <div class="exercise-sets">
                <div class="set-row header">
                    <span>SET</span><span>WEIGHT (KG)</span><span>REPS</span><span>DONE</span>
                </div>
                ${(sets && sets.length > 0) ? sets.map((s, idx) => `
                    <div class="set-row">
                        <span>${idx + 1}</span>
                        <input type="number" value="${s.weight || 60}">
                        <input type="number" value="${s.reps || 10}">
                        <input type="checkbox" class="set-check" ${s.done ? 'checked' : ''}>
                    </div>
                `).join('') : `
                    <div class="set-row">
                        <span>1</span>
                        <input type="number" value="60">
                        <input type="number" value="10">
                        <input type="checkbox" class="set-check" checked>
                    </div>
                `}
            </div>
            <button class="btn btn-sm btn-hero-glass mt-10" onclick="app.addSetToExercise('${id}')">
                <i class="fas fa-plus"></i> Add Set
            </button>
        `;
        const list = document.getElementById('exercise-list');
        if (list) list.appendChild(div);
    }

    addSetToExercise(exId) {
        const setsContainer = document.querySelector(`#ex-${exId} .exercise-sets`);
        if (!setsContainer) return;

        const setNum = setsContainer.querySelectorAll('.set-row:not(.header)').length + 1;
        const row = document.createElement('div');
        row.className = 'set-row';
        row.innerHTML = `<span>${setNum}</span><input type="number" value="60"> <input type="number" value="10"> <input type="checkbox" class="set-check" checked>`;
        setsContainer.appendChild(row);
    }

    startRestTimer() {
        let seconds = 0;
        const display = document.getElementById('rest-timer');
        if (this.restTimerInterval) clearInterval(this.restTimerInterval);
        this.restTimerInterval = setInterval(() => {
            seconds++;
            const m = Math.floor(seconds / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            if (display) display.innerHTML = `<i class="fas fa-stopwatch"></i> <span>Session: ${m}:${s}</span>`;
        }, 1000);
    }

    saveWorkout() {
        const nameInput = document.getElementById('workout-name-input');
        const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Hypertrophy Session";
        const exercises = [];

        document.querySelectorAll('.exercise-item').forEach(el => {
            const selectEl = el.querySelector('.exercise-select');
            const exName = selectEl ? selectEl.value : 'Movement';
            const sets = [];
            el.querySelectorAll('.set-row:not(.header)').forEach(row => {
                const inputs = row.querySelectorAll('input');
                if (inputs.length >= 3) {
                    sets.push({ weight: inputs[0].value, reps: inputs[1].value, done: inputs[2].checked });
                }
            });
            exercises.push({ name: exName, sets });
        });

        if (this.editingWorkoutIndex !== null && this.editingWorkoutIndex !== undefined) {
            // Update existing workout
            this.data.logs.workouts[this.editingWorkoutIndex].name = name;
            this.data.logs.workouts[this.editingWorkoutIndex].exercises = exercises;
            this.saveData();
            this.showToast(`"${name}" updated successfully!`, 'circle-check');
            this.editingWorkoutIndex = null;
        } else {
            // Add new workout
            this.data.logs.workouts.push({ name, exercises, date: new Date().toISOString() });
            this.saveData();
            this.showToast('Workout successfully saved to archive!', 'dumbbell');
        }

        const saveBtn = document.getElementById('btn-save-workout');
        if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-check"></i> Save &amp; Finish Workout';

        this.cancelWorkout();
        this.renderWorkoutHistory();
        this.updateDashboard();
    }

    cancelWorkout() {
        this.editingWorkoutIndex = null;
        const editor = document.getElementById('workout-editor');
        const history = document.getElementById('workout-history');
        const btnNew = document.getElementById('btn-new-workout');
        const saveBtn = document.getElementById('btn-save-workout');

        if (editor) editor.classList.add('hidden');
        if (history) history.classList.remove('hidden');
        if (btnNew) btnNew.classList.remove('hidden');
        if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-check"></i> Save &amp; Finish Workout';
        if (this.restTimerInterval) clearInterval(this.restTimerInterval);
    }

    renderWorkoutHistory() {
        const history = document.getElementById('workout-history');
        if (!history) return;

        if (this.data.logs.workouts.length === 0) {
            history.innerHTML = '<p class="empty-msg" style="grid-column: 1/-1; text-align:center; padding: 40px 0;">No workout history recorded yet.</p>';
            return;
        }

        history.innerHTML = this.data.logs.workouts.map((w, realIndex) => ({ w, realIndex })).reverse().map(({ w, realIndex }) => `
            <div class="card history-card" id="history-card-${realIndex}">
                <div class="history-card-header">
                    <div>
                        <h4 class="history-card-title">${w.name}</h4>
                        <span class="badge-pill">${new Date(w.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</span>
                    </div>
                    <div class="history-actions-row">
                        <button class="btn-action-icon edit-btn" onclick="app.editWorkout(${realIndex})" title="Edit Workout Session">
                            <i class="fas fa-pen-to-square"></i>
                        </button>
                        <button class="btn-action-icon delete-btn" onclick="app.deleteWorkout(${realIndex})" title="Delete Workout Session">
                            <i class="fas fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <ul class="history-exercise-list">
                    ${w.exercises.map(ex => `
                        <li class="history-exercise-item">
                            <span><i class="fas fa-check gold-text"></i> ${ex.name}</span>
                            <strong>${ex.sets.length} sets</strong>
                        </li>
                    `).join('')}
                </ul>
                <div class="history-card-footer">
                    <button class="btn btn-sm btn-hero-glass" onclick="app.editWorkout(${realIndex})">
                        <i class="fas fa-pen-to-square"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger-glass" onclick="app.deleteWorkout(${realIndex})">
                        <i class="fas fa-trash-can"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Personal Trainers
    renderTrainers() {
        const grid = document.getElementById('trainers-grid');
        if (!grid) return;

        grid.innerHTML = TRAINERS.map(t => `
            <div class="card trainer-card">
                <div class="trainer-img">${t.img}</div>
                <h3>${t.name}</h3>
                <span class="badge-pill mt-10" style="color:var(--gold); border-color:var(--gold-border);">${t.specialty}</span>
                <p class="trainer-bio">${t.bio}</p>
                <button class="btn btn-pill-white btn-block" onclick="app.openTrainerInquiry(${t.id})">
                    <i class="fas fa-calendar-check"></i> Book Consultation
                </button>
            </div>
        `).join('');
    }

    openTrainerInquiry(id) {
        const trainer = TRAINERS.find(t => t.id === id);
        if (!trainer) return;

        const titleEl = document.getElementById('modal-trainer-name');
        if (titleEl) titleEl.innerText = `Consult with ${trainer.name}`;

        const inputId = document.getElementById('inquiry-trainer-id');
        if (inputId) inputId.value = id;

        const modal = document.getElementById('trainer-modal');
        if (modal) modal.style.display = 'block';
    }

    // Assistant AI Chat (ForgeAI)
    handleAssistantInput() {
        const input = document.getElementById('assistant-input');
        if (!input) return;

        const text = input.value.trim();
        if (!text) return;

        this.addChatMessage('user', text);
        input.value = '';

        setTimeout(() => this.processAssistantQuery(text), 450);
    }

    askAssistant(text) {
        this.addChatMessage('user', text);
        setTimeout(() => this.processAssistantQuery(text), 450);
    }

    addChatMessage(sender, text) {
        const history = document.getElementById('chat-history');
        if (!history) return;

        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        if (sender === 'bot') {
            msg.innerHTML = `<div class="msg-author">ForgeAI</div><div class="msg-body">${text}</div>`;
        } else {
            msg.innerText = text;
        }
        history.appendChild(msg);
        history.scrollTop = history.scrollHeight;
    }

    processAssistantQuery(query) {
        let response = "I'm monitoring your athletic biometrics. Try asking about your protein ceiling, daily calories, or workout volume!";
        const q = query.toLowerCase();
        const stats = this.getTodayStats();

        if (q.includes('protein')) {
            const left = Math.max(0, this.data.goals.protein - stats.protein);
            response = `You have consumed ${Math.round(stats.protein)}g of protein so far today. You need ${Math.round(left)}g more to hit your optimal ${this.data.goals.protein}g hypertrophy ceiling.`;
        } else if (q.includes('workout') || q.includes('progress') || q.includes('lift')) {
            const count = this.data.logs.workouts.length;
            const last = this.data.logs.workouts[count - 1];
            response = `You have completed ${count} total recorded training sessions. Your latest session was "${last?.name || 'Workout'}" on ${new Date(last?.date).toLocaleDateString()}. Outstanding work staying disciplined!`;
        } else if (q.includes('vegetarian') || q.includes('plant') || q.includes('veggie')) {
            response = "For an ultra-clean plant-based meal, I recommend a 150g Soy Chunk Stir-Fry with Tofu and Lentils. That delivers over 45g of complete protein with minimal saturated fat.";
        } else if (q.includes('eat') || q.includes('calorie') || q.includes('fuel')) {
            const left = this.data.goals.calories - stats.calories;
            response = `You have ${Math.round(left)} calories remaining today. You could consume 200g of Greek Yogurt or a scoop of Whey Protein to easily bridge your macro targets.`;
        }

        this.addChatMessage('bot', response);
    }

    // --- Floating AI Agent (Matching Image 3) ---
    toggleAIChat() {
        const popup = document.getElementById('ai-chat-popup');
        const trigger = document.getElementById('ai-agent-trigger-pill');
        if (!popup) return;

        const isHidden = popup.classList.contains('hidden');
        if (isHidden) {
            popup.classList.remove('hidden');
            if (trigger) trigger.classList.add('active');
            const input = document.getElementById('ai-popup-input');
            if (input) setTimeout(() => input.focus(), 120);
        } else {
            popup.classList.add('hidden');
            if (trigger) trigger.classList.remove('active');
        }
    }

    askFloatingAI(query) {
        this.addFloatingAIMessage('user', query);
        setTimeout(() => this.processFloatingAIQuery(query), 350);
    }

    handleFloatingAISubmit() {
        const input = document.getElementById('ai-popup-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;
        this.askFloatingAI(text);
        input.value = '';
    }

    addFloatingAIMessage(sender, text) {
        const history = document.getElementById('ai-popup-history');
        if (!history) return;

        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        if (sender === 'bot') {
            msg.innerHTML = `<div class="msg-author">ForgeAI Coach</div><div class="msg-body">${text}</div>`;
        } else {
            msg.innerText = text;
        }
        history.appendChild(msg);
        history.scrollTop = history.scrollHeight;
    }

    processFloatingAIQuery(query) {
        let response = "I'm monitoring your athletic biometrics. Try asking about your protein ceiling, daily calories, or workout volume!";
        const q = query.toLowerCase();
        const stats = this.getTodayStats();

        if (q.includes('protein')) {
            const left = Math.max(0, this.data.goals.protein - stats.protein);
            response = `You have consumed ${Math.round(stats.protein)}g of protein so far today. You need ${Math.round(left)}g more to hit your optimal ${this.data.goals.protein}g hypertrophy ceiling.`;
        } else if (q.includes('workout') || q.includes('progress') || q.includes('lift') || q.includes('exercise')) {
            const count = this.data.logs.workouts.length;
            const last = this.data.logs.workouts[count - 1];
            response = `You have completed ${count} total recorded training sessions. Your latest session was "${last?.name || 'Workout'}" on ${new Date(last?.date || Date.now()).toLocaleDateString()}. Outstanding work staying disciplined!`;
        } else if (q.includes('vegetarian') || q.includes('plant') || q.includes('veggie')) {
            response = "For an ultra-clean plant-based meal, I recommend a 150g Soy Chunk Stir-Fry with Tofu and Lentils. That delivers over 45g of complete protein with minimal saturated fat.";
        } else if (q.includes('meal') || q.includes('eat') || q.includes('dish') || q.includes('recipe')) {
            response = "For peak hypertrophy, try: 200g Grilled Chicken Breast + 1 cup Jasmine Rice + charred broccoli. That delivers 58g protein and 650 kcal.";
        } else if (q.includes('calorie') || q.includes('fuel')) {
            const left = this.data.goals.calories - stats.calories;
            response = `You have ${Math.round(left)} calories remaining today against your ${this.data.goals.calories} kcal ceiling. A scoop of Whey or 200g Greek Yogurt will bridge your targets seamlessly!`;
        }

        this.addFloatingAIMessage('bot', response);
    }

    // Meal Planner Blueprint Generator
    renderSuggestedMeals() {
        const meals = [
            { name: "Post-Workout Anabolic Power", cal: 650, p: 58, c: 45, f: 12, veg: false, desc: "Grilled chicken breast, steamed jasmine rice, and charred broccoli with pink salt." },
            { name: "Vegan Muscle Hyper-Bowl", cal: 520, p: 42, c: 60, f: 14, veg: true, desc: "Crispy soy chunks, roasted chickpeas, organic quinoa, and baby spinach." },
            { name: "Morning Metabolic Charge", cal: 450, p: 40, c: 28, f: 16, veg: false, desc: "3 pasture-raised whole eggs, 100g Greek yogurt with fresh blueberries." }
        ];

        const grid = document.getElementById('suggested-meals-grid');
        if (!grid) return;

        grid.innerHTML = meals.map(m => `
            <div class="meal-suggestion-card">
                <div style="display:flex; justify-content:space-between; align-items:baseline;">
                    <strong style="font-size:0.98rem; font-family:var(--font-serif);">${m.name} ${m.veg ? '🥗' : '🥩'}</strong>
                    <span class="gold-text" style="font-family:var(--font-mono); font-weight:700;">${m.p}g P</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 6px 0;">${m.desc}</p>
                <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted);">${m.cal} kcal | C: ${m.c}g | F: ${m.f}g</div>
                <button class="btn btn-pill-white btn-sm mt-10" onclick="app.addMealTemplate('${m.name}', ${m.cal}, ${m.p}, ${m.c}, ${m.f})">
                    <i class="fas fa-plus"></i> Log Blueprint to Lunch
                </button>
            </div>
        `).join('');
    }

    renderMealIngredientsSelector() {
        const container = document.getElementById('meal-ingredients-selector');
        if (!container) return;

        container.innerHTML = this.getAllFoods().slice(0, 30).map(f => `
            <label class="ingredient-check-item">
                <input type="checkbox" value="${f.id}" data-name="${f.name}" data-cal="${f.calories}" data-p="${f.protein}" data-c="${f.carbs}" data-f="${f.fat}">
                <span>${f.img} ${f.name.split(' (')[0]} — <strong class="gold-text">${f.protein}g P</strong> (${f.calories} kcal)</span>
            </label>
        `).join('');
    }

    addMealTemplate(name, cal, p, c, f) {
        this.data.logs.calories.lunch.push({ name, calories: cal, protein: p, carbs: c, fat: f, date: new Date().toISOString() });
        this.saveData();
        this.showToast(`${name} logged to Lunch!`, 'utensils');
        this.updateUI();
    }

    // Analytics & Progress Reports
    updateAnalytics() {
        if (!this.analyticsChart1) {
            this.initAnalyticsCharts();
        } else {
            if (this.analyticsChart1) this.analyticsChart1.resize();
            if (this.analyticsChart2) this.analyticsChart2.resize();
            if (this.analyticsChart3) this.analyticsChart3.resize();
            if (this.analyticsChart4) {
                const stats = this.getTodayStats();
                this.analyticsChart4.data.datasets[0].data = [stats.protein * 4, stats.carbs * 4, stats.fat * 9];
                this.analyticsChart4.resize();
                this.analyticsChart4.update();
            }
            if (this.analyticsChart5) this.analyticsChart5.resize();
        }
    }

    renderReports() {
        if (typeof Chart === 'undefined') return;

        // Chart 1: Volume vs Intensity Trend
        const ctx = document.getElementById('chart-volume-intensity')?.getContext('2d');
        if (ctx) {
            if (this.reportsChart) this.reportsChart.destroy();
            const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            this.reportsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Volume Load (kg)',
                            data: [2000, 2600, 0, 3100, 2800, 0, 1900],
                            borderColor: '#e5b869',
                            borderWidth: 2.5,
                            backgroundColor: 'transparent',
                            tension: 0.45,
                            yAxisID: 'y'
                        },
                        {
                            label: 'Average Intensity (%)',
                            data: [70, 85, 0, 92, 78, 0, 65],
                            borderColor: '#38bdf8',
                            borderWidth: 2.5,
                            backgroundColor: 'transparent',
                            tension: 0.45,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    ...this.getChartOptions(),
                    scales: {
                        y: {
                            type: 'linear',
                            position: 'left',
                            grid: { color: 'rgba(255, 255, 255, 0.04)' },
                            border: { display: false }
                        },
                        y1: {
                            type: 'linear',
                            position: 'right',
                            grid: { display: false },
                            border: { display: false }
                        },
                        x: {
                            grid: { display: false },
                            border: { display: false }
                        }
                    }
                }
            });
        }

        // Chart 2: 7-Day Macro Consistency
        const macroCtx = document.getElementById('chart-macro-consistency')?.getContext('2d');
        if (macroCtx) {
            if (this.macroReportChart) this.macroReportChart.destroy();
            this.macroReportChart = new Chart(macroCtx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        { label: 'Protein (g)', data: [175, 185, 180, 190, 178, 165, 182], backgroundColor: '#e5b869', borderRadius: 6 },
                        { label: 'Carbs (g)', data: [240, 260, 230, 255, 245, 220, 250], backgroundColor: '#38bdf8', borderRadius: 6 },
                        { label: 'Fats (g)', data: [68, 72, 70, 75, 69, 65, 71], backgroundColor: '#fbbf24', borderRadius: 6 }
                    ]
                },
                options: this.getChartOptions()
            });
        }
    }

    // Settings
    updateSettingsFields() {
        const setName = document.getElementById('set-name');
        if (setName) setName.value = this.data.profile.name;

        const setWeight = document.getElementById('set-weight');
        if (setWeight) setWeight.value = this.data.profile.weight;

        const setTargetWeight = document.getElementById('set-target-weight');
        if (setTargetWeight) setTargetWeight.value = this.data.profile.targetWeight;

        const setCal = document.getElementById('set-cal-goal');
        if (setCal) setCal.value = this.data.goals.calories;

        const setProtein = document.getElementById('set-protein-goal');
        if (setProtein) setProtein.value = this.data.goals.protein;

        const setCarbs = document.getElementById('set-carbs-goal');
        if (setCarbs) setCarbs.value = this.data.goals.carbs;

        const setFats = document.getElementById('set-fats-goal');
        if (setFats) setFats.value = this.data.goals.fat;

        const setGoogleClientId = document.getElementById('set-google-client-id');
        if (setGoogleClientId) {
            setGoogleClientId.value = localStorage.getItem('fitforge_google_client_id') || '';
        }
    }

    saveSettings() {
        const nameVal = document.getElementById('set-name')?.value;
        const weightVal = parseFloat(document.getElementById('set-weight')?.value);
        const targetWeightVal = parseFloat(document.getElementById('set-target-weight')?.value);

        if (nameVal) {
            this.data.profile.name = nameVal;
            if (this.currentUser) {
                this.currentUser.name = nameVal;
                localStorage.setItem('fitforge_auth', JSON.stringify(this.currentUser));
                this.updateAuthUI();
            }
        }
        if (!isNaN(weightVal)) this.data.profile.weight = weightVal;
        if (!isNaN(targetWeightVal)) this.data.profile.targetWeight = targetWeightVal;

        const calVal = parseInt(document.getElementById('set-cal-goal')?.value);
        const pVal = parseInt(document.getElementById('set-protein-goal')?.value);
        const cVal = parseInt(document.getElementById('set-carbs-goal')?.value);
        const fVal = parseInt(document.getElementById('set-fats-goal')?.value);

        if (!isNaN(calVal)) this.data.goals.calories = calVal;
        if (!isNaN(pVal)) this.data.goals.protein = pVal;
        if (!isNaN(cVal)) this.data.goals.carbs = cVal;
        if (!isNaN(fVal)) this.data.goals.fat = fVal;

        // Weight tracking history
        const history = this.data.logs.weightHistory;
        const lastEntry = history[history.length - 1];
        if (lastEntry && lastEntry.weight !== this.data.profile.weight) {
            history.push({
                date: new Date().toISOString().split('T')[0],
                weight: this.data.profile.weight
            });
        }

        this.saveData();
        this.updateUI();
        this.showToast('Biometric parameters and goals saved!', 'sliders');
    }
}

// 5. Instantiate FitForge & Preloader on DOM Ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    app = new FitForgeApp();
    window.app = app;
});
