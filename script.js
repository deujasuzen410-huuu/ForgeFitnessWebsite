/**
 * MahaProtein Nepal — Nepali Gym Rat's High-Protein Guide
 * Aesthetic: Vibe-Coded, Midnight OLED Black, Champagne Gold & Cyber Lime Accents
 * Core Logic: Navigation Pill Dock, Preloader, Telemetry Charts, Workout Tracker,
 *             Calorie Diary, Nepali Protein Vault, Session Archive Edit & Delete,
 *             Auth (Login/Signup), ForgeAI & Reports
 */

// 1. Comprehensive Nepali Household Protein Database
const FOOD_DB = [
    // --- NEPALI DAILY MAINS & MEALS ---
    { id: 1, name: "Dal Bhat Power Bowl (Daal, Bhat, Anda, Saag)", calories: 620, protein: 38, carbs: 82, fat: 14, serving: 1, category: "meals", img: "🍛" },
    { id: 2, name: "Local Chicken Curry with Rice", calories: 580, protein: 44, carbs: 60, fat: 14, serving: 1, category: "meals", img: "🥘" },
    { id: 3, name: "Buff Sukuti Fry with Chiura & Bhatmas", calories: 520, protein: 54, carbs: 42, fat: 15, serving: 1, category: "meals", img: "🍽️" },
    { id: 4, name: "Kwati Soup (Mixed Sprouted Beans) with 2 Boiled Eggs", calories: 420, protein: 32, carbs: 50, fat: 10, serving: 1, category: "meals", img: "🍲" },
    { id: 5, name: "Soya Chunk Curry (Bhatmas ko Soya Badi)", calories: 380, protein: 48, carbs: 32, fat: 6, serving: 1, category: "meals", img: "🫘" },
    { id: 6, name: "Rajma Chawal (Kidney Bean Curry with Rice)", calories: 510, protein: 24, carbs: 82, fat: 8, serving: 1, category: "meals", img: "🍛" },
    { id: 7, name: "Paneer Butter Masala with 2 Whole Wheat Roti", calories: 560, protein: 28, carbs: 48, fat: 26, serving: 1, category: "meals", img: "🥘" },
    { id: 8, name: "Nepali Fish Curry (Rahu Machha) with Rice", calories: 490, protein: 40, carbs: 55, fat: 10, serving: 1, category: "meals", img: "🐟" },
    { id: 9, name: "Khichdi (Moong Dal + Rice + Ghee + Boiled Eggs)", calories: 480, protein: 26, carbs: 65, fat: 12, serving: 1, category: "meals", img: "🥣" },
    { id: 10, name: "Buff Choila with Roasted Chiura", calories: 460, protein: 46, carbs: 38, fat: 14, serving: 1, category: "meals", img: "🍽️" },
    { id: 11, name: "Chicken Momo (10 Pcs Steamed)", calories: 480, protein: 36, carbs: 54, fat: 12, serving: 10, category: "meals", img: "🥟" },
    { id: 12, name: "Buff Momo (10 Pcs Steamed)", calories: 510, protein: 40, carbs: 52, fat: 14, serving: 10, category: "meals", img: "🥟" },
    { id: 13, name: "Egg Curry (2 Eggs with Spiced Gravy & Rice)", calories: 510, protein: 26, carbs: 68, fat: 15, serving: 1, category: "meals", img: "🍛" },
    { id: 14, name: "Chana Anda Masala with 2 Rotis", calories: 460, protein: 30, carbs: 54, fat: 12, serving: 1, category: "meals", img: "🥙" },
    { id: 15, name: "Mutton Sekuwa with Salad", calories: 540, protein: 42, carbs: 12, fat: 24, serving: 1, category: "meals", img: "🍢" },

    // --- BREAKFASTS & MORNING FUEL ---
    { id: 16, name: "Nepali Gym Breakfast (4 Boiled Eggs + 2 Rotis)", calories: 420, protein: 32, carbs: 30, fat: 18, serving: 1, category: "breakfast", img: "🍳" },
    { id: 17, name: "Sattu Shake (Sattu + Milk + Banana + Honey)", calories: 450, protein: 28, carbs: 62, fat: 8, serving: 1, category: "breakfast", img: "🥤" },
    { id: 18, name: "Bhatmas & Chiura (Roasted Soybeans & Beaten Rice)", calories: 390, protein: 30, carbs: 46, fat: 10, serving: 1, category: "breakfast", img: "🥣" },
    { id: 19, name: "Chana-Andaa Khaja (Boiled Black Chana + 2 Boiled Eggs)", calories: 380, protein: 26, carbs: 40, fat: 12, serving: 1, category: "breakfast", img: "🍳" },
    { id: 20, name: "Oats Doodh Banana Peanut Butter Bowl", calories: 480, protein: 24, carbs: 65, fat: 14, serving: 1, category: "breakfast", img: "🥣" },
    { id: 21, name: "Paneer Parautha with Dahi (Curd)", calories: 520, protein: 24, carbs: 56, fat: 22, serving: 1, category: "breakfast", img: "🥞" },
    { id: 22, name: "Boiled Anda & Peanut Butter Bread", calories: 410, protein: 26, carbs: 36, fat: 16, serving: 1, category: "breakfast", img: "🥪" },
    { id: 23, name: "Besan Chilla (Gram Flour Pancakes with Paneer)", calories: 340, protein: 22, carbs: 38, fat: 10, serving: 1, category: "breakfast", img: "🥞" },

    // --- ANIMAL PROTEIN ---
    { id: 24, name: "Local Chicken Breast (200g Cooked)", calories: 330, protein: 60, carbs: 0, fat: 7, serving: 200, category: "animal", img: "🍗" },
    { id: 25, name: "Boiled Eggs (4 Whole Eggs)", calories: 280, protein: 24, carbs: 2, fat: 20, serving: 4, category: "animal", img: "🥚" },
    { id: 26, name: "Egg Whites (6 Whites / Scramble)", calories: 100, protein: 22, carbs: 1, fat: 0, serving: 6, category: "animal", img: "🍳" },
    { id: 27, name: "Lean Boiled/Grilled Buff (200g)", calories: 310, protein: 56, carbs: 0, fat: 6, serving: 200, category: "animal", img: "🥩" },
    { id: 28, name: "Fresh River Fish / Rahu Machha (200g)", calories: 240, protein: 42, carbs: 0, fat: 6, serving: 200, category: "animal", img: "🐟" },
    { id: 29, name: "Mutton Sukuti (Dried Goat Meat - 100g)", calories: 380, protein: 58, carbs: 0, fat: 14, serving: 100, category: "animal", img: "🥩" },
    { id: 30, name: "Local Duck Meat (Hans ko Maasu - 150g)", calories: 340, protein: 32, carbs: 0, fat: 22, serving: 150, category: "animal", img: "🍗" },

    // --- PLANT-BASED PROTEIN ---
    { id: 31, name: "Hard Chhurpi (Durkha - 100g)", calories: 390, protein: 62, carbs: 4, fat: 14, serving: 100, category: "plant", img: "🧀" },
    { id: 32, name: "Soya Chunks / Soya Badi (100g Dry)", calories: 345, protein: 52, carbs: 33, fat: 1, serving: 100, category: "plant", img: "🫘" },
    { id: 33, name: "Roasted Bhatmas / Black Soybeans (100g)", calories: 420, protein: 38, carbs: 28, fat: 18, serving: 100, category: "plant", img: "🫘" },
    { id: 34, name: "Fresh Paneer (150g)", calories: 390, protein: 27, carbs: 4, fat: 28, serving: 150, category: "plant", img: "🧀" },
    { id: 35, name: "Kalo Dal / Black Lentil Maa ko Dal (1 Bowl)", calories: 240, protein: 16, carbs: 38, fat: 2, serving: 1, category: "plant", img: "🍲" },
    { id: 36, name: "Sprouted Chana / Mung (1 Bowl)", calories: 210, protein: 15, carbs: 34, fat: 2, serving: 1, category: "plant", img: "🌱" },
    { id: 37, name: "Tofu / Soy Paneer (200g)", calories: 160, protein: 18, carbs: 4, fat: 8, serving: 200, category: "plant", img: "🧊" },
    { id: 38, name: "Gundruk Bhatmas Soup (1 Bowl)", calories: 180, protein: 14, carbs: 20, fat: 5, serving: 1, category: "plant", img: "🍲" },

    // --- DAIRY ---
    { id: 39, name: "Mechi/Mahakali Fresh Dahi / Curd (300g)", calories: 180, protein: 11, carbs: 14, fat: 9, serving: 300, category: "dairy", img: "🥛" },
    { id: 40, name: "Full Cream Cow Milk (500ml)", calories: 310, protein: 16, carbs: 24, fat: 16, serving: 500, category: "dairy", img: "🥛" },
    { id: 41, name: "Lassi with Dahi & Nuts", calories: 260, protein: 10, carbs: 34, fat: 8, serving: 1, category: "dairy", img: "🥛" },
    { id: 42, name: "Whey Protein (1 Scoop in Water)", calories: 120, protein: 25, carbs: 2, fat: 1, serving: 1, category: "dairy", img: "🥤" },
    { id: 43, name: "Homemade Mass Gainer (Sattu + Milk + Oats + PB + Banana)", calories: 680, protein: 38, carbs: 92, fat: 18, serving: 1, category: "dairy", img: "🥤" },
    { id: 44, name: "Paneer Water / Chhena Whey Drink", calories: 60, protein: 8, carbs: 4, fat: 1, serving: 1, category: "dairy", img: "🥤" },

    // --- CARBS ---
    { id: 45, name: "White Rice / Taichin Bhat (1 Plate - 250g)", calories: 320, protein: 6, carbs: 70, fat: 1, serving: 250, category: "carbs", img: "🍚" },
    { id: 46, name: "Beaten Rice / Chiura (100g Dry)", calories: 360, protein: 7, carbs: 78, fat: 1, serving: 100, category: "carbs", img: "🌾" },
    { id: 47, name: "Kodo ko Dhindo (Millet Porridge - 200g)", calories: 240, protein: 6, carbs: 50, fat: 1.5, serving: 200, category: "carbs", img: "🥣" },
    { id: 48, name: "Whole Wheat Roti (2 Rotis)", calories: 160, protein: 6, carbs: 32, fat: 1.5, serving: 2, category: "carbs", img: "🍞" },
    { id: 49, name: "Bhuteko Makai & Bhatmas (Roasted Corn & Soybeans)", calories: 280, protein: 14, carbs: 45, fat: 5, serving: 1, category: "carbs", img: "🌽" },
    { id: 50, name: "Boiled Sweet Potato / Sakarkhandi (200g)", calories: 170, protein: 3, carbs: 39, fat: 0.4, serving: 200, category: "carbs", img: "🍠" },

    // --- SNACKS ---
    { id: 51, name: "Fried Chana Chatpate with Boiled Eggs", calories: 320, protein: 20, carbs: 36, fat: 10, serving: 1, category: "snacks", img: "🥘" },
    { id: 52, name: "Roasted Peanuts / Bhuteko Badam (50g)", calories: 290, protein: 13, carbs: 8, fat: 24, serving: 50, category: "snacks", img: "🥜" },
    { id: 53, name: "Peanut Butter on Whole Wheat Toast (2 Slices)", calories: 320, protein: 14, carbs: 34, fat: 16, serving: 1, category: "snacks", img: "🥪" },
    { id: 54, name: "Almonds & Sukuti Mix", calories: 340, protein: 28, carbs: 12, fat: 18, serving: 1, category: "snacks", img: "🌰" },
    { id: 55, name: "Chhurpi Slice (50g)", calories: 195, protein: 31, carbs: 2, fat: 7, serving: 50, category: "snacks", img: "🧀" }
];

// 2. Nepali Fitness Personalities & Coaches
const TRAINERS = [
    { id: 1, name: "Bikram 'Dai' Shrestha", specialty: "Hypertrophy & Dal-Bhat Macro Specialist", bio: "12 years in local gyms across Kathmandu. Teaches you how to reach 150g protein on a Nepali diet without expensive supplements.", img: "💪" },
    { id: 2, name: "Sunita Gurung, CSCS", specialty: "Female Strength & Protein Nutritionist", bio: "Specialized in natural strength, high-protein household recipes, and muscle retention for Nepali women.", img: "🏃‍♀️" },
    { id: 3, name: "Rohan Maharjan", specialty: "Calisthenics & Budget Protein Coach", bio: "Pokhara-based street workout & bodyweight hypertrophy coach. Expert in high-protein student meal plans on Rs. 200/day.", img: "🤸" },
    { id: 4, name: "Dr. Anup Sharma", specialty: "Sports Biomechanics & Digestion Specialist", bio: "Optimizing digestive health for high-protein grains (Bhatmas, Kwati, Dal) and injury recovery.", img: "👨‍⚕️" }
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

// 4. MahaProtein Nepal Application Engine
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
            profile: { name: "Nepali Gym Rat", weight: 70, targetWeight: 75 },
            goals: { calories: 2400, protein: 140, carbs: 300, fat: 70 },
            logs: {
                calories: { breakfast: [], lunch: [], dinner: [], snack: [] },
                water: 0,
                workouts: [],
                weightHistory: [{ date: new Date().toISOString().split('T')[0], weight: 70 }]
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
        const img = document.getElementById('cf-emoji')?.value.trim() || '🥘';

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
        this.showToast(`"${name}" added to Nepali Protein Vault!`, 'circle-check');

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
        this.showToast(`Namaste, ${name}! Telemetry synchronized.`, 'circle-check');
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
        this.showToast(`Welcome to MahaProtein Nepal, ${name}.`, 'circle-check');
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
        return localStorage.getItem('fitforge_google_client_id') || '';
    }

    requestGoogleSignIn() {
        let clientId = this.getGoogleClientId();

        if (!clientId) {
            const promptId = window.prompt(
                "FitForge connects directly to Google Identity Services.\n\nPlease enter your Google OAuth 2.0 Client ID:"
            );
            if (promptId && promptId.trim()) {
                clientId = promptId.trim();
                localStorage.setItem('fitforge_google_client_id', clientId);
                const input = document.getElementById('set-google-client-id');
                if (input) input.value = clientId;
                this.initGoogleGIS();
            } else {
                this.showToast('Google OAuth 2.0 Client ID required.', 'circle-info');
                return;
            }
        }

        if (!this.tokenClient) {
            this.initGoogleGIS();
        }

        if (this.tokenClient) {
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

    loginWithGoogleUser(name, email, picture = '') {
        this.currentUser = { name, email, picture, authMethod: 'google' };
        this.data.profile.name = name;
        this.saveData();
        localStorage.setItem('fitforge_auth', JSON.stringify(this.currentUser));

        this.closeAuthModal();
        this.updateAuthUI();
        this.updateSettingsFields();
        this.showToast(`Namaste ${name}!`, 'circle-check');
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
            this.showToast('Google OAuth configuration reset', 'circle-check');
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
                .slice(0, 2) || 'NP';

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

        this.modal = document.getElementById('food-search-modal');
        this.closeModal = document.querySelectorAll('.close-modal');

        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        if (this.currentDateEl) {
            this.currentDateEl.innerText = new Date().toLocaleDateString('en-US', options).toUpperCase();
        }

        this.renderMealIngredientsSelector();
    }

    initGlobalChartDefaults() {
        if (typeof Chart === 'undefined') return;
        Chart.defaults.color = '#a89f91';
        Chart.defaults.font.family = "'Plus Jakarta Sans', -apple-system, sans-serif";
        Chart.defaults.font.size = 11;
        Chart.defaults.font.weight = '500';
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

    initCharts() {
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
                options: { indexAxis: 'y', ...this.getChartOptions() }
            });
        }
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
                options: { ...this.getChartOptions(), plugins: { tooltip: { callbacks: { label: (ctx) => `${ctx.raw.label}: ${ctx.raw.x} cal, ${ctx.raw.y}g Protein` } } } }
            });
        }
        const ctx4 = document.getElementById('chart-energy-dist')?.getContext('2d');
        if (ctx4 && !this.analyticsChart4) {
            const stats = this.getTodayStats();
            this.analyticsChart4 = new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Protein', 'Carbs', 'Fats'],
                    datasets: [{
                        data: [
                            stats.protein > 0 ? stats.protein * 4 : 140 * 4,
                            stats.carbs > 0 ? stats.carbs * 4 : 300 * 4,
                            stats.fat > 0 ? stats.fat * 9 : 70 * 9
                        ],
                        backgroundColor: ['#e5b869', '#38bdf8', '#fbbf24'],
                        borderWidth: 0,
                        borderRadius: 8,
                        cutout: '78%'
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#a89f91', font: { weight: '600' }, padding: 16 } } } }
            });
        }
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
                y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, border: { display: false }, ticks: { color: '#6e6659', font: { family: "'JetBrains Mono', monospace" } } },
                x: { grid: { display: false }, border: { display: false }, ticks: { color: '#6e6659' } }
            },
            plugins: { legend: { labels: { color: '#a89f91', font: { weight: '600' } } } }
        };
    }

    initEventListeners() {
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-section');
                if (target) this.navigateTo(target);
            });
        });

        document.addEventListener('click', (e) => {
            const moreDropdown = document.querySelector('.nav-more-dropdown');
            if (moreDropdown && !moreDropdown.contains(e.target)) this.closeMoreMenu();
        });

        if (this.sidebarToggle && this.sidebar) {
            this.sidebarToggle.addEventListener('click', () => this.sidebar.classList.toggle('collapsed'));
        }

        const foodSearch = document.getElementById('food-search');
        if (foodSearch) foodSearch.addEventListener('input', (e) => this.renderFoodLibrary(e.target.value));

        const foodSort = document.getElementById('food-sort');
        if (foodSort) foodSort.addEventListener('change', () => this.renderFoodLibrary());

        const foodCat = document.getElementById('food-category');
        if (foodCat) foodCat.addEventListener('change', () => this.renderFoodLibrary());

        document.querySelectorAll('.add-food-btn').forEach(btn => {
            btn.addEventListener('click', () => this.openFoodModal(btn.getAttribute('data-meal')));
        });

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

        const btnNewWorkout = document.getElementById('btn-new-workout');
        if (btnNewWorkout) btnNewWorkout.addEventListener('click', () => this.startNewWorkout());

        const btnAddEx = document.getElementById('btn-add-exercise');
        if (btnAddEx) btnAddEx.addEventListener('click', () => this.addExerciseToWorkout());

        const btnCancelWorkout = document.getElementById('btn-cancel-workout');
        if (btnCancelWorkout) btnCancelWorkout.addEventListener('click', () => this.cancelWorkout());

        const btnSaveWorkout = document.getElementById('btn-save-workout');
        if (btnSaveWorkout) btnSaveWorkout.addEventListener('click', () => this.saveWorkout());

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

        const btnSendAssistant = document.getElementById('btn-send-assistant');
        if (btnSendAssistant) btnSendAssistant.addEventListener('click', () => this.handleAssistantInput());

        const assistantInput = document.getElementById('assistant-input');
        if (assistantInput) {
            assistantInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.handleAssistantInput(); });
        }

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.updateSectionUI(sectionId);
    }

    toggleMoreMenu(e) {
        if (e) { e.stopPropagation(); e.preventDefault(); }
        const menu = document.getElementById('nav-more-menu');
        if (menu) menu.classList.toggle('show');
    }

    closeMoreMenu() {
        const menu = document.getElementById('nav-more-menu');
        if (menu) menu.classList.remove('show');
    }

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

    updateDashboard() {
        const stats = this.getTodayStats();
        const remaining = Math.max(0, this.data.goals.calories - stats.calories);
        const dashRemainingEl = document.getElementById('dash-calories-remaining');
        if (dashRemainingEl) dashRemainingEl.innerText = Math.round(remaining).toLocaleString();
        const dashGoalEl = document.getElementById('dash-calories-goal');
        if (dashGoalEl) dashGoalEl.innerText = this.data.goals.calories.toLocaleString();
        const heroCalGoal = document.getElementById('stat-hero-cal-goal');
        if (heroCalGoal) heroCalGoal.innerText = this.data.goals.calories.toLocaleString();
        const heroProtGoal = document.getElementById('stat-hero-protein-goal');
        if (heroProtGoal) heroProtGoal.innerText = `${this.data.goals.protein}g`;
        if (this.dashCalChart) {
            this.dashCalChart.data.datasets[0].data = [Math.round(stats.calories), Math.round(remaining)];
            this.dashCalChart.update();
        }
        this.updateProgressBar('protein', stats.protein, this.data.goals.protein);
        this.updateProgressBar('carbs', stats.carbs, this.data.goals.carbs);
        this.updateProgressBar('fats', stats.fat, this.data.goals.fat);
        const waterAmountEl = document.getElementById('water-amount');
        if (waterAmountEl) waterAmountEl.innerText = this.data.logs.water.toFixed(1);
        const waterMirrorEl = document.getElementById('hero-water-mirror');
        if (waterMirrorEl) waterMirrorEl.innerText = this.data.logs.water.toFixed(1);
        const monthCountEl = document.getElementById('stats-month-count');
        if (monthCountEl) monthCountEl.innerText = this.data.logs.workouts.length;
        this.updateWorkoutPreview();
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
        this.data.logs.workouts.slice(-3).forEach(w => {
            activities.push({ text: `Completed ${w.name}`, icon: 'dumbbell', time: w.date });
        });
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
                    <p style="color: var(--text-secondary); margin-bottom: 16px;">No foods found matching "${searchTerm}".</p>
                    <button class="btn btn-pill-gold btn-sm" onclick="app.openCustomFoodModal('${searchTerm.replace(/'/g, "\\'")}')">
                        <i class="fas fa-plus"></i> Add "${searchTerm || 'New Dish'}"
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
        if (modalMealName) modalMealName.innerText = this.currentMeal.charAt(0).toUpperCase() + this.currentMeal.slice(1);
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
            if (qtyInput) qtyInput.value = food.serving || 100;

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
                    const label = `${cleanName} (${qty}${food.serving <= 8 ? ' servings' : 'g'})`;
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
        }
    }

    removeFood(meal, idx) {
        this.data.logs.calories[meal].splice(idx, 1);
        this.saveData();
        this.renderCalorieTracker();
        this.updateDashboard();
        this.showToast('Item removed from diary', 'trash-can');
    }

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
        if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-check"></i> Save & Finish Workout';
        if (nameInput) nameInput.value = "";
        this.activeWorkout = { name: "", exercises: [], date: new Date().toISOString() };
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
        if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-check"></i> Update Workout Session';
        const list = document.getElementById('exercise-list');
        if (list) {
            list.innerHTML = '';
            workout.exercises.forEach(ex => this.addExerciseWithData(ex.name, ex.sets));
        }
        this.startRestTimer();
        this.showToast(`Loaded "${workout.name}"`, 'pen-to-square');
        editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    deleteWorkout(index) {
        const workout = this.data.logs.workouts[index];
        if (!workout) return;
        if (confirm(`Delete "${workout.name}"?`)) {
            this.data.logs.workouts.splice(index, 1);
            this.saveData();
            this.renderWorkoutHistory();
            this.updateDashboard();
            this.showToast(`"${workout.name}" removed`, 'trash-can');
        }
    }

    addExerciseToWorkout() { this.addExerciseWithData("Back Squats", [{ weight: "60", reps: "10", done: true }]); }

    addExerciseWithData(name, sets = []) {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        const div = document.createElement('div');
        div.className = 'exercise-item';
        div.id = `ex-${id}`;
        const options = ["Back Squats", "Deadlifts", "Bench Press", "Overhead Press", "Pullups", "Dips", "Barbell Row", "Leg Press"].map(o => `<option value="${o}" ${o === name ? 'selected' : ''}>${o}</option>`).join('');
        div.innerHTML = `
            <div class="exercise-header">
                <select class="exercise-select">${options}</select>
                <button class="btn-icon" onclick="this.closest('.exercise-item').remove()"><i class="fas fa-trash-can"></i></button>
            </div>
            <div class="exercise-sets">
                <div class="set-row header"><span>SET</span><span>WEIGHT (KG)</span><span>REPS</span><span>DONE</span></div>
                ${sets.map((s, idx) => `<div class="set-row"><span>${idx + 1}</span><input type="number" value="${s.weight}"> <input type="number" value="${s.reps}"> <input type="checkbox" class="set-check" ${s.done ? 'checked' : ''}></div>`).join('')}
            </div>
            <button class="btn btn-sm btn-hero-glass mt-10" onclick="app.addSetToExercise('${id}')"><i class="fas fa-plus"></i> Add Set</button>
        `;
        const list = document.getElementById('exercise-list');
        if (list) list.appendChild(div);
    }

    addSetToExercise(exId) {
        const cont = document.querySelector(`#ex-${exId} .exercise-sets`);
        if (!cont) return;
        const row = document.createElement('div');
        row.className = 'set-row';
        row.innerHTML = `<span>${cont.querySelectorAll('.set-row:not(.header)').length + 1}</span><input type="number" value="60"> <input type="number" value="10"> <input type="checkbox" class="set-check" checked>`;
        cont.appendChild(row);
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
        const name = document.getElementById('workout-name-input')?.value.trim() || "Workout Session";
        const exercises = [];
        document.querySelectorAll('.exercise-item').forEach(el => {
            const exName = el.querySelector('.exercise-select').value;
            const sets = [];
            el.querySelectorAll('.set-row:not(.header)').forEach(row => {
                const ins = row.querySelectorAll('input');
                sets.push({ weight: ins[0].value, reps: ins[1].value, done: ins[2].checked });
            });
            exercises.push({ name: exName, sets });
        });
        if (this.editingWorkoutIndex !== null) {
            this.data.logs.workouts[this.editingWorkoutIndex] = { name, exercises, date: new Date().toISOString() };
            this.editingWorkoutIndex = null;
        } else {
            this.data.logs.workouts.push({ name, exercises, date: new Date().toISOString() });
        }
        this.saveData();
        this.cancelWorkout();
        this.renderWorkoutHistory();
        this.updateDashboard();
        this.showToast('Workout saved!', 'dumbbell');
    }

    cancelWorkout() {
        this.editingWorkoutIndex = null;
        const editor = document.getElementById('workout-editor');
        const history = document.getElementById('workout-history');
        const btnNew = document.getElementById('btn-new-workout');
        if (editor) editor.classList.add('hidden');
        if (history) history.classList.remove('hidden');
        if (btnNew) btnNew.classList.remove('hidden');
        if (this.restTimerInterval) clearInterval(this.restTimerInterval);
    }

    renderWorkoutHistory() {
        const history = document.getElementById('workout-history');
        if (!history) return;
        history.innerHTML = this.data.logs.workouts.map((w, i) => `
            <div class="card history-card">
                <h4>${w.name}</h4>
                <p>${new Date(w.date).toLocaleDateString()}</p>
                <button class="btn btn-sm btn-hero-glass" onclick="app.editWorkout(${i})">Edit</button>
            </div>
        `).join('');
    }

    renderTrainers() {
        const grid = document.getElementById('trainers-grid');
        if (!grid) return;
        grid.innerHTML = TRAINERS.map(t => `
            <div class="card trainer-card">
                <div class="trainer-img">${t.img}</div>
                <h3>${t.name}</h3>
                <span class="badge-pill">${t.specialty}</span>
                <p>${t.bio}</p>
            </div>
        `).join('');
    }

    renderSuggestedMeals() {
        const meals = [
            { name: "Post-Workout Anabolic Power", cal: 650, p: 48, c: 65, f: 12, veg: false, desc: "Chicken Curry with brown rice and saag." },
            { name: "Nepali Muscle Bowl", cal: 520, p: 42, c: 60, f: 14, veg: true, desc: "Crispy Soya Chunks with Kwati and quinoa." },
            { name: "Morning Metabolic Charge", cal: 450, p: 40, c: 28, f: 16, veg: false, desc: "4 Boiled Eggs, Sattu shake and Dahi." }
        ];
        const grid = document.getElementById('suggested-meals-grid');
        if (!grid) return;
        grid.innerHTML = meals.map(m => `
            <div class="meal-suggestion-card">
                <strong>${m.name}</strong>
                <p>${m.desc}</p>
                <div class="gold-text">${m.p}g P | ${m.cal} kcal</div>
            </div>
        `).join('');
    }

    processAssistantQuery(query) {
        let response = "Try asking about your daily protein progress or Nepali gym tips.";
        const q = query.toLowerCase();
        if (q.includes('protein')) response = "Make sure to hit your daily goal with Soya chunks, eggs, or chicken!";
        else if (q.includes('dal bhat')) response = "Dal-Bhat is king, but pair it with extra eggs or chicken to spike that protein count.";
        this.addChatMessage('bot', response);
    }
    processFloatingAIQuery(query) {
        let response = "Gym Dai here, keep lifting!";
        this.addFloatingAIMessage('bot', response);
    }

    renderMealIngredientsSelector() {
        const container = document.getElementById('meal-ingredients-selector');
        if (!container) return;
        const allFoods = this.getAllFoods();
        container.innerHTML = allFoods.slice(0, 15).map(f => `
            <label class="ingredient-checkbox">
                <input type="checkbox" data-id="${f.id}" data-cal="${f.calories}" data-p="${f.protein}" data-c="${f.carbs}" data-f="${f.fat}">
                <span>${f.img} ${f.name}</span>
            </label>
        `).join('');
    }

    addMealTemplate(name, cal, p, c, f) {
        const food = {
            id: Date.now(),
            name: `${name} (Blueprint)`,
            calories: cal,
            protein: p,
            carbs: c,
            fat: f,
            serving: 1,
            category: 'meals',
            img: '🍱'
        };
        const customFoods = this.getCustomFoods();
        customFoods.unshift(food);
        localStorage.setItem('fitforge_custom_foods', JSON.stringify(customFoods));
        this.renderFoodLibrary();
        this.renderSuggestedMeals();
        this.showToast(`Blueprint "${name}" saved!`, 'box-archive');
    }

    handleAssistantInput() {
        const input = document.getElementById('assistant-input');
        if (!input || !input.value.trim()) return;
        const query = input.value.trim();
        this.addChatMessage('user', query);
        input.value = '';
        setTimeout(() => this.processAssistantQuery(query), 600);
    }

    addChatMessage(sender, message) {
        const chatBox = document.getElementById('assistant-chat-box');
        if (!chatBox) return;
        const div = document.createElement('div');
        div.className = `chat-msg msg-${sender}`;
        div.innerHTML = `<div class="msg-content">${message}</div>`;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    addFloatingAIMessage(sender, message) {
        // Optional floating AI UI
    }

    updateAnalytics() {
        this.initAnalyticsCharts();
        if (this.analyticsChart4) {
            const stats = this.getTodayStats();
            this.analyticsChart4.data.datasets[0].data = [
                stats.protein > 0 ? stats.protein * 4 : 140 * 4,
                stats.carbs > 0 ? stats.carbs * 4 : 300 * 4,
                stats.fat > 0 ? stats.fat * 9 : 70 * 9
            ];
            this.analyticsChart4.update();
        }
    }

    renderReports() {
        const container = document.getElementById('reports-container');
        if (!container) return;
        const stats = this.getTodayStats();
        container.innerHTML = `
            <div class="report-summary card">
                <h3>Today's Performance Report</h3>
                <div class="report-grid">
                    <div class="report-item"><span>Total Protein</span><strong>${stats.protein}g</strong></div>
                    <div class="report-item"><span>Calorie Efficiency</span><strong>${((stats.protein * 4 / (stats.calories || 1)) * 100).toFixed(1)}%</strong></div>
                    <div class="report-item"><span>Workouts Done</span><strong>${this.data.logs.workouts.length}</strong></div>
                </div>
            </div>
        `;
    }

    updateSettingsFields() {
        if (document.getElementById('set-name')) document.getElementById('set-name').value = this.data.profile.name;
        if (document.getElementById('set-weight')) document.getElementById('set-weight').value = this.data.profile.weight;
        if (document.getElementById('set-target-weight')) document.getElementById('set-target-weight').value = this.data.profile.targetWeight;
        if (document.getElementById('set-cal-goal')) document.getElementById('set-cal-goal').value = this.data.goals.calories;
        if (document.getElementById('set-protein-goal')) document.getElementById('set-protein-goal').value = this.data.goals.protein;
        if (document.getElementById('set-carbs-goal')) document.getElementById('set-carbs-goal').value = this.data.goals.carbs;
        if (document.getElementById('set-fats-goal')) document.getElementById('set-fats-goal').value = this.data.goals.fat;
    }

    saveSettings() {
        this.data.profile.name = document.getElementById('set-name').value;
        this.data.profile.weight = parseFloat(document.getElementById('set-weight').value);
        this.data.profile.targetWeight = parseFloat(document.getElementById('set-target-weight').value);
        this.data.goals.calories = parseInt(document.getElementById('set-cal-goal').value);
        this.data.goals.protein = parseInt(document.getElementById('set-protein-goal').value);
        this.data.goals.carbs = parseInt(document.getElementById('set-carbs-goal').value);
        this.data.goals.fat = parseInt(document.getElementById('set-fats-goal').value);
        this.saveData();
        this.updateUI();
        this.showToast('Athlete profile updated!', 'user-gear');
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    app = new FitForgeApp();
    window.app = app;
});
