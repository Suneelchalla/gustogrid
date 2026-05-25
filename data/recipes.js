/**
 * GustoGrid — Recipe Data Layer
 *
 * Exposes `window.GG_RECIPES` as a map keyed by recipe ID.
 * Each recipe has either:
 *   - `isStub: true` + basic metadata + hero info  (12 stubs)
 *   - Full data: ingredients[] + steps[] + nutrition  (6 deep)
 *
 * Pricing is in INR. Ingredient prices reflect approximate metro retail.
 * Recipes are reference-grade — verify timing & quantities for your equipment.
 */

(function () {
  'use strict';

  // Shared YouTube search URL builder
  const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q + ' recipe restaurant style')}`;

  // ============================================================
  // DEEP RECIPES (6)
  // ============================================================

  const RECIPES = {

    // -------------------------------------------------------
    // 1. BUTTER CHICKEN (anchor recipe)
    // -------------------------------------------------------
    'butter-chicken': {
      id: 'butter-chicken',
      title: 'Butter Chicken',
      sub: 'Creamy, smoky, restaurant-style',
      cuisine: 'Indian · Non-Vegetarian',
      emoji: '🍛',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6B35 0%, #C93D1F 35%, #4D1F1F 75%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 45,
      difficulty: 'Medium',
      youtube: yt('butter chicken'),
      nutrition: { calories: 480, protein: 32, carbs: 22, fats: 28, fiber: 4 },
      ingredients: [
        { id: 1, name: 'Chicken thigh', qty: 500, unit: 'g', price: 180, cat: 'Protein', emoji: '🍗' },
        { id: 2, name: 'Tomato', qty: 4, unit: '', price: 30, cat: 'Produce', emoji: '🍅' },
        { id: 3, name: 'Onion', qty: 2, unit: '', price: 15, cat: 'Produce', emoji: '🧅' },
        { id: 4, name: 'Garlic', qty: 8, unit: 'cloves', price: 10, cat: 'Produce', emoji: '🧄' },
        { id: 5, name: 'Ginger', qty: 20, unit: 'g', price: 8, cat: 'Produce', emoji: '🫚' },
        { id: 6, name: 'Butter', qty: 60, unit: 'g', price: 45, cat: 'Dairy', emoji: '🧈' },
        { id: 7, name: 'Heavy cream', qty: 100, unit: 'ml', price: 60, cat: 'Dairy', emoji: '🥛' },
        { id: 8, name: 'Yogurt', qty: 100, unit: 'ml', price: 20, cat: 'Dairy', emoji: '🥥' },
        { id: 9, name: 'Cashews', qty: 30, unit: 'g', price: 25, cat: 'Pantry', emoji: '🥜' },
        { id: 10, name: 'Garam masala', qty: 2, unit: 'tsp', price: 15, cat: 'Spice', emoji: '🌿' },
        { id: 11, name: 'Kasuri methi', qty: 1, unit: 'tbsp', price: 8, cat: 'Spice', emoji: '🌿' },
        { id: 12, name: 'Lemon', qty: 1, unit: '', price: 4, cat: 'Produce', emoji: '🍋' },
      ],
      steps: [
        { n: 1, title: 'Marinate the chicken', secs: 600, heat: 'off',
          ings: [{ e: '🍗', n: 'Chicken', q: '500g' }, { e: '🥥', n: 'Yogurt', q: '100ml' }, { e: '🌿', n: 'Garam masala', q: '1 tsp' }],
          desc: 'Cube chicken into 2cm pieces. Whisk yogurt with half the garam masala, salt, a pinch of turmeric. Coat chicken; rest 10 min minimum.' },
        { n: 2, title: 'Sear on screaming heat', secs: 360, heat: 'high',
          ings: [{ e: '🍗', n: 'Marinated chicken' }, { e: '🧈', n: 'Butter', q: '20g' }],
          desc: 'Heat a heavy pan until smoking. Add butter, then chicken in a single layer. Sear undisturbed 90 sec per side until charred edges form. Remove.' },
        { n: 3, title: 'Bloom the aromatics', secs: 180, heat: 'medium',
          ings: [{ e: '🧈', n: 'Butter', q: '20g' }, { e: '🧅', n: 'Onion', q: '2' }, { e: '🧄', n: 'Garlic', q: '8' }, { e: '🫚', n: 'Ginger', q: '20g' }],
          desc: 'Lower flame. Melt butter, add onion, garlic, ginger paste. Stir constantly until golden and aroma blooms — about 3 min.' },
        { n: 4, title: 'Build the gravy base', secs: 480, heat: 'medium',
          ings: [{ e: '🍅', n: 'Tomato', q: '4' }, { e: '🥜', n: 'Cashews', q: '30g' }],
          desc: 'Add chopped tomatoes and soaked cashews. Cook 8 min, mashing as you go, until tomatoes collapse and oil separates at edges.' },
        { n: 5, title: 'Blend until silky', secs: 120, heat: 'off',
          ings: [],
          desc: 'Cool slightly. Transfer to blender, puree until completely smooth. Strain back into pan through a fine mesh for restaurant-grade texture.' },
        { n: 6, title: 'Simmer with cream', secs: 600, heat: 'low',
          ings: [{ e: '🥛', n: 'Cream', q: '50ml' }, { e: '🧈', n: 'Butter', q: '20g' }],
          desc: 'Return puree to low heat. Stir in cream and remaining butter. Simmer gently — never boil — 10 min until glossy and unified.' },
        { n: 7, title: 'Reunite and finish', secs: 300, heat: 'low',
          ings: [{ e: '🍗', n: 'Seared chicken' }, { e: '🌿', n: 'Kasuri methi', q: '1 tbsp' }, { e: '🥛', n: 'Cream', q: '50ml' }],
          desc: 'Slide chicken back into the gravy. Crush kasuri methi between palms over the pan. Final cream swirl. Cover, cook 5 min.' },
        { n: 8, title: 'Rest and serve', secs: 120, heat: 'off',
          ings: [{ e: '🍋', n: 'Lemon wedge' }],
          desc: 'Rest off heat 2 min. Squeeze lemon. Serve hot with naan, basmati, or jeera rice. Reserve a methi crumb for the garnish.' },
      ],
    },

    // -------------------------------------------------------
    // 2. TANDOORI CHICKEN
    // -------------------------------------------------------
    'tandoori': {
      id: 'tandoori',
      title: 'Tandoori Chicken',
      sub: 'Yogurt-marinated, char-grilled',
      cuisine: 'Indian · Non-Vegetarian',
      emoji: '🍗',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #E8A53D 0%, #C2521F 35%, #5C2818 75%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 60,
      difficulty: 'Medium',
      youtube: yt('tandoori chicken'),
      nutrition: { calories: 410, protein: 38, carbs: 8, fats: 22, fiber: 2 },
      ingredients: [
        { id: 1, name: 'Chicken (bone-in)', qty: 800, unit: 'g', price: 240, cat: 'Protein', emoji: '🍗' },
        { id: 2, name: 'Hung yogurt', qty: 200, unit: 'ml', price: 40, cat: 'Dairy', emoji: '🥥' },
        { id: 3, name: 'Ginger-garlic paste', qty: 2, unit: 'tbsp', price: 15, cat: 'Produce', emoji: '🧄' },
        { id: 4, name: 'Kashmiri chili powder', qty: 2, unit: 'tbsp', price: 15, cat: 'Spice', emoji: '🌶️' },
        { id: 5, name: 'Garam masala', qty: 1, unit: 'tsp', price: 8, cat: 'Spice', emoji: '🌿' },
        { id: 6, name: 'Cumin powder', qty: 1, unit: 'tsp', price: 6, cat: 'Spice', emoji: '🌿' },
        { id: 7, name: 'Coriander powder', qty: 1, unit: 'tsp', price: 6, cat: 'Spice', emoji: '🌿' },
        { id: 8, name: 'Mustard oil', qty: 2, unit: 'tbsp', price: 12, cat: 'Pantry', emoji: '🪔' },
        { id: 9, name: 'Kasuri methi', qty: 1, unit: 'tsp', price: 8, cat: 'Spice', emoji: '🌿' },
        { id: 10, name: 'Lemon', qty: 1, unit: '', price: 4, cat: 'Produce', emoji: '🍋' },
        { id: 11, name: 'Onion (sliced)', qty: 1, unit: '', price: 8, cat: 'Produce', emoji: '🧅' },
        { id: 12, name: 'Butter (basting)', qty: 30, unit: 'g', price: 18, cat: 'Dairy', emoji: '🧈' },
      ],
      steps: [
        { n: 1, title: 'Score the chicken', secs: 180, heat: 'off',
          ings: [{ e: '🍗', n: 'Chicken', q: '800g' }],
          desc: 'Pat chicken dry. Make 3-4 deep diagonal slashes across each piece down to the bone — this lets marinade soak in and the meat cook evenly.' },
        { n: 2, title: 'First marinade — lemon + salt', secs: 900, heat: 'off',
          ings: [{ e: '🍋', n: 'Lemon', q: '1' }, { e: '🌶️', n: 'Chili powder', q: '1 tbsp' }],
          desc: 'Rub chicken with lemon juice, salt, and half the Kashmiri chili powder. Massage into the slashes. Rest 15 min at room temp.' },
        { n: 3, title: 'Build the yogurt marinade', secs: 300, heat: 'off',
          ings: [{ e: '🥥', n: 'Hung yogurt', q: '200ml' }, { e: '🧄', n: 'Ginger-garlic paste', q: '2 tbsp' }, { e: '🌿', n: 'Garam masala', q: '1 tsp' }, { e: '🪔', n: 'Mustard oil', q: '2 tbsp' }],
          desc: 'Whisk hung yogurt with ginger-garlic paste, remaining chili powder, cumin, coriander, garam masala, crushed kasuri methi, and mustard oil. Salt to taste.' },
        { n: 4, title: 'Deep marinate', secs: 1800, heat: 'off',
          ings: [{ e: '🍗', n: 'Chicken' }],
          desc: 'Coat chicken thoroughly — work marinade into every slash. Cover and refrigerate 30 min minimum. Overnight is dramatically better.' },
        { n: 5, title: 'High-heat sear', secs: 600, heat: 'high',
          ings: [{ e: '🍗', n: 'Marinated chicken' }],
          desc: 'Preheat oven to 220°C (or grill on max). Place chicken on a rack over a tray. Roast 10 min — you want visible char marks forming.' },
        { n: 6, title: 'Baste and finish', secs: 480, heat: 'high',
          ings: [{ e: '🧈', n: 'Butter', q: '30g' }],
          desc: 'Brush chicken with melted butter and any leftover marinade. Roast another 8 min until juices run clear when pierced at the thickest point.' },
        { n: 7, title: 'Rest and garnish', secs: 300, heat: 'off',
          ings: [{ e: '🧅', n: 'Onion rings' }, { e: '🍋', n: 'Lemon wedges' }],
          desc: 'Rest chicken 5 min off heat — critical for juicy meat. Squeeze lemon over the top. Serve with raw onion rings and mint chutney.' },
      ],
    },

    // -------------------------------------------------------
    // 3. CHICKEN TIKKA MASALA
    // -------------------------------------------------------
    'tikka-masala': {
      id: 'tikka-masala',
      title: 'Chicken Tikka Masala',
      sub: 'Tomato-cream gravy, charred bites',
      cuisine: 'Indian · Non-Vegetarian',
      emoji: '🥘',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6B35 0%, #A82E18 35%, #4D1F26 75%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 50,
      difficulty: 'Medium',
      youtube: yt('chicken tikka masala'),
      nutrition: { calories: 520, protein: 35, carbs: 18, fats: 32, fiber: 3 },
      ingredients: [
        { id: 1, name: 'Boneless chicken', qty: 600, unit: 'g', price: 200, cat: 'Protein', emoji: '🍗' },
        { id: 2, name: 'Yogurt', qty: 100, unit: 'ml', price: 20, cat: 'Dairy', emoji: '🥥' },
        { id: 3, name: 'Tomato puree', qty: 250, unit: 'ml', price: 40, cat: 'Produce', emoji: '🍅' },
        { id: 4, name: 'Onion', qty: 2, unit: '', price: 15, cat: 'Produce', emoji: '🧅' },
        { id: 5, name: 'Ginger-garlic paste', qty: 2, unit: 'tbsp', price: 15, cat: 'Produce', emoji: '🧄' },
        { id: 6, name: 'Heavy cream', qty: 80, unit: 'ml', price: 50, cat: 'Dairy', emoji: '🥛' },
        { id: 7, name: 'Butter', qty: 40, unit: 'g', price: 30, cat: 'Dairy', emoji: '🧈' },
        { id: 8, name: 'Garam masala', qty: 1.5, unit: 'tsp', price: 12, cat: 'Spice', emoji: '🌿' },
        { id: 9, name: 'Kashmiri chili powder', qty: 1, unit: 'tbsp', price: 10, cat: 'Spice', emoji: '🌶️' },
        { id: 10, name: 'Cumin powder', qty: 1, unit: 'tsp', price: 6, cat: 'Spice', emoji: '🌿' },
        { id: 11, name: 'Kasuri methi', qty: 1, unit: 'tsp', price: 8, cat: 'Spice', emoji: '🌿' },
        { id: 12, name: 'Cashews', qty: 20, unit: 'g', price: 15, cat: 'Pantry', emoji: '🥜' },
        { id: 13, name: 'Coriander leaves', qty: 2, unit: 'tbsp', price: 5, cat: 'Produce', emoji: '🌿' },
      ],
      steps: [
        { n: 1, title: 'Marinate the tikka', secs: 900, heat: 'off',
          ings: [{ e: '🍗', n: 'Chicken', q: '600g' }, { e: '🥥', n: 'Yogurt', q: '100ml' }, { e: '🌶️', n: 'Chili powder', q: '1 tsp' }],
          desc: 'Cube chicken. Mix with yogurt, half the ginger-garlic paste, half the chili powder, half the garam masala, salt. Rest 15 min minimum.' },
        { n: 2, title: 'Char the tikka', secs: 360, heat: 'high',
          ings: [{ e: '🍗', n: 'Marinated chicken' }],
          desc: 'Crank pan to high. Sear chicken in oil — single layer, undisturbed — 3 min per side until edges blacken. Don\'t fully cook through. Set aside.' },
        { n: 3, title: 'Sweat the aromatics', secs: 240, heat: 'medium',
          ings: [{ e: '🧈', n: 'Butter', q: '40g' }, { e: '🧅', n: 'Onion', q: '2' }, { e: '🧄', n: 'Ginger-garlic paste' }],
          desc: 'Same pan, lower heat. Melt butter. Add chopped onions, cook to golden — 3 min. Stir in remaining ginger-garlic paste, cook another minute.' },
        { n: 4, title: 'Build the masala', secs: 300, heat: 'medium',
          ings: [{ e: '🍅', n: 'Tomato puree', q: '250ml' }, { e: '🥜', n: 'Cashews', q: '20g' }, { e: '🌿', n: 'Cumin + coriander' }],
          desc: 'Add tomato puree, remaining chili powder, cumin, cashews. Cook 5 min, stirring often, until raw smell goes and oil separates.' },
        { n: 5, title: 'Blend smooth', secs: 120, heat: 'off',
          ings: [],
          desc: 'Cool slightly. Blend with a splash of water until completely silky. Strain back into the pan through a fine sieve for restaurant texture.' },
        { n: 6, title: 'Cream simmer', secs: 480, heat: 'low',
          ings: [{ e: '🥛', n: 'Heavy cream', q: '80ml' }],
          desc: 'Return strained masala to low heat. Stir in cream. Simmer gently — bubbles should be lazy — for 8 min. Taste, adjust salt.' },
        { n: 7, title: 'Reunite and finish', secs: 300, heat: 'low',
          ings: [{ e: '🍗', n: 'Charred chicken' }, { e: '🌿', n: 'Kasuri methi' }, { e: '🌿', n: 'Coriander' }],
          desc: 'Add the chicken with any resting juices. Crush kasuri methi between palms over the pan. Cover, cook 5 min. Garnish coriander. Serve with naan.' },
      ],
    },

    // -------------------------------------------------------
    // 4. HONEY GARLIC WINGS
    // -------------------------------------------------------
    'honey-wings': {
      id: 'honey-wings',
      title: 'Honey Garlic Wings',
      sub: 'Sticky, glossy, finger-licking',
      cuisine: 'Asian-American · Non-Vegetarian',
      emoji: '🍗',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FFC233 0%, #E8A53D 35%, #5C2818 75%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 30,
      difficulty: 'Easy',
      youtube: yt('honey garlic chicken wings'),
      nutrition: { calories: 380, protein: 26, carbs: 24, fats: 20, fiber: 1 },
      ingredients: [
        { id: 1, name: 'Chicken wings', qty: 600, unit: 'g', price: 150, cat: 'Protein', emoji: '🍗' },
        { id: 2, name: 'Honey', qty: 60, unit: 'ml', price: 35, cat: 'Pantry', emoji: '🍯' },
        { id: 3, name: 'Soy sauce', qty: 30, unit: 'ml', price: 15, cat: 'Pantry', emoji: '🥢' },
        { id: 4, name: 'Garlic (minced)', qty: 8, unit: 'cloves', price: 10, cat: 'Produce', emoji: '🧄' },
        { id: 5, name: 'Ginger (grated)', qty: 15, unit: 'g', price: 6, cat: 'Produce', emoji: '🫚' },
        { id: 6, name: 'Cornstarch', qty: 2, unit: 'tbsp', price: 8, cat: 'Pantry', emoji: '🌾' },
        { id: 7, name: 'Sesame oil', qty: 1, unit: 'tsp', price: 8, cat: 'Pantry', emoji: '🪔' },
        { id: 8, name: 'Red chili flakes', qty: 1, unit: 'tsp', price: 6, cat: 'Spice', emoji: '🌶️' },
        { id: 9, name: 'Sesame seeds', qty: 1, unit: 'tsp', price: 5, cat: 'Pantry', emoji: '🌰' },
        { id: 10, name: 'Spring onion', qty: 2, unit: '', price: 8, cat: 'Produce', emoji: '🌿' },
        { id: 11, name: 'Vegetable oil', qty: 200, unit: 'ml', price: 12, cat: 'Pantry', emoji: '🪔' },
      ],
      steps: [
        { n: 1, title: 'Prep and dry the wings', secs: 120, heat: 'off',
          ings: [{ e: '🍗', n: 'Wings', q: '600g' }],
          desc: 'Pat wings extremely dry with paper towels. Trim tips if you like. The drier they are, the crispier the fry.' },
        { n: 2, title: 'Cornstarch coat', secs: 120, heat: 'off',
          ings: [{ e: '🌾', n: 'Cornstarch', q: '2 tbsp' }],
          desc: 'Toss wings in a bowl with cornstarch, generous salt, and pepper. Every wing should be lightly dusted — shake off excess.' },
        { n: 3, title: 'Fry until crisp', secs: 480, heat: 'high',
          ings: [{ e: '🪔', n: 'Oil', q: '200ml' }],
          desc: 'Heat oil to 175°C. Fry wings in two batches, 8 min each, until deep golden and crackly. Drain on a rack — not paper, you\'ll lose the crisp.' },
        { n: 4, title: 'Build the glaze', secs: 180, heat: 'medium',
          ings: [{ e: '🍯', n: 'Honey', q: '60ml' }, { e: '🥢', n: 'Soy sauce', q: '30ml' }, { e: '🧄', n: 'Garlic + ginger' }, { e: '🌶️', n: 'Chili flakes' }],
          desc: 'Clean pan. Medium heat. Add sesame oil, then garlic and ginger — 30 sec until fragrant. Pour in honey, soy, chili flakes. Bubble 2 min until syrupy.' },
        { n: 5, title: 'Toss to coat', secs: 120, heat: 'medium',
          ings: [{ e: '🍗', n: 'Fried wings' }],
          desc: 'Tip wings into the glaze. Toss vigorously for a full 2 min — every piece should be slick, glossy, evenly coated.' },
        { n: 6, title: 'Garnish and serve', secs: 60, heat: 'off',
          ings: [{ e: '🌰', n: 'Sesame seeds' }, { e: '🌿', n: 'Spring onion' }],
          desc: 'Off heat. Plate immediately while sticky. Shower with sesame seeds and finely sliced spring onion greens.' },
      ],
    },

    // -------------------------------------------------------
    // 5. GARLIC BUTTER PRAWNS
    // -------------------------------------------------------
    'garlic-prawns': {
      id: 'garlic-prawns',
      title: 'Garlic Butter Prawns',
      sub: 'Pan-seared, parsley-flecked',
      cuisine: 'Mediterranean · Non-Vegetarian',
      emoji: '🦐',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #4DD4FF 0%, #1F4D5C 35%, #1F2D3D 75%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 20,
      difficulty: 'Easy',
      youtube: yt('garlic butter prawns shrimp'),
      nutrition: { calories: 320, protein: 28, carbs: 4, fats: 22, fiber: 0 },
      ingredients: [
        { id: 1, name: 'Prawns (peeled)', qty: 500, unit: 'g', price: 400, cat: 'Protein', emoji: '🦐' },
        { id: 2, name: 'Butter', qty: 60, unit: 'g', price: 45, cat: 'Dairy', emoji: '🧈' },
        { id: 3, name: 'Garlic (minced)', qty: 10, unit: 'cloves', price: 12, cat: 'Produce', emoji: '🧄' },
        { id: 4, name: 'Lemon', qty: 1, unit: '', price: 4, cat: 'Produce', emoji: '🍋' },
        { id: 5, name: 'Parsley', qty: 3, unit: 'tbsp', price: 10, cat: 'Produce', emoji: '🌿' },
        { id: 6, name: 'Red chili flakes', qty: 1, unit: 'tsp', price: 6, cat: 'Spice', emoji: '🌶️' },
        { id: 7, name: 'Olive oil', qty: 1, unit: 'tbsp', price: 8, cat: 'Pantry', emoji: '🪔' },
        { id: 8, name: 'Black pepper', qty: 1, unit: 'tsp', price: 5, cat: 'Spice', emoji: '⚫' },
      ],
      steps: [
        { n: 1, title: 'Prep and dry', secs: 180, heat: 'off',
          ings: [{ e: '🦐', n: 'Prawns', q: '500g' }, { e: '🧄', n: 'Garlic', q: '10 cloves' }],
          desc: 'Pat prawns extremely dry — wet prawns steam, dry prawns sear. Season with salt and pepper. Mince garlic fine.' },
        { n: 2, title: 'Bloom garlic in butter', secs: 120, heat: 'medium',
          ings: [{ e: '🧈', n: 'Butter', q: '30g' }, { e: '🪔', n: 'Olive oil' }, { e: '🌶️', n: 'Chili flakes' }],
          desc: 'Medium heat. Melt half the butter with olive oil. Add garlic and chili flakes. 90 sec until fragrant — do not let garlic brown.' },
        { n: 3, title: 'Sear the prawns', secs: 180, heat: 'high',
          ings: [{ e: '🦐', n: 'Prawns' }],
          desc: 'Crank to high. Add prawns in a single layer — no overcrowding, work in batches if needed. 90 sec per side until pink and just opaque.' },
        { n: 4, title: 'Mount with butter', secs: 60, heat: 'medium',
          ings: [{ e: '🧈', n: 'Butter', q: '30g' }, { e: '🍋', n: 'Lemon' }],
          desc: 'Lower heat. Add remaining butter, swirl until glossy and emulsified. Squeeze in half the lemon. Taste, season.' },
        { n: 5, title: 'Plate and garnish', secs: 60, heat: 'off',
          ings: [{ e: '🌿', n: 'Parsley', q: '3 tbsp' }, { e: '🍋', n: 'Lemon wedge' }],
          desc: 'Off heat. Plate with all that golden butter. Shower with parsley. Lemon wedge on the side. Serve with crusty bread immediately.' },
      ],
    },

    // -------------------------------------------------------
    // 6. PAN-SEARED SALMON
    // -------------------------------------------------------
    'pan-salmon': {
      id: 'pan-salmon',
      title: 'Pan-Seared Salmon',
      sub: 'Crispy skin, lemon-dill butter',
      cuisine: 'Continental · Non-Vegetarian',
      emoji: '🐟',
      heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6B35 0%, #FF8B43 30%, #3D7A8C 70%, #0A0A0B 100%)',
      baseServings: 4,
      totalMin: 25,
      difficulty: 'Medium',
      youtube: yt('pan seared salmon crispy skin'),
      nutrition: { calories: 420, protein: 36, carbs: 4, fats: 28, fiber: 0 },
      ingredients: [
        { id: 1, name: 'Salmon fillet (skin-on)', qty: 600, unit: 'g', price: 500, cat: 'Protein', emoji: '🐟' },
        { id: 2, name: 'Butter', qty: 40, unit: 'g', price: 30, cat: 'Dairy', emoji: '🧈' },
        { id: 3, name: 'Garlic', qty: 4, unit: 'cloves', price: 5, cat: 'Produce', emoji: '🧄' },
        { id: 4, name: 'Lemon', qty: 1, unit: '', price: 4, cat: 'Produce', emoji: '🍋' },
        { id: 5, name: 'Fresh dill', qty: 3, unit: 'tbsp', price: 15, cat: 'Produce', emoji: '🌿' },
        { id: 6, name: 'Olive oil', qty: 2, unit: 'tbsp', price: 12, cat: 'Pantry', emoji: '🪔' },
        { id: 7, name: 'Capers', qty: 1, unit: 'tbsp', price: 15, cat: 'Pantry', emoji: '🫒' },
        { id: 8, name: 'Honey', qty: 1, unit: 'tsp', price: 8, cat: 'Pantry', emoji: '🍯' },
        { id: 9, name: 'Black pepper', qty: 1, unit: 'tsp', price: 5, cat: 'Spice', emoji: '⚫' },
        { id: 10, name: 'Flaky salt', qty: 1, unit: 'tsp', price: 5, cat: 'Spice', emoji: '🧂' },
      ],
      steps: [
        { n: 1, title: 'Dry and season', secs: 300, heat: 'off',
          ings: [{ e: '🐟', n: 'Salmon', q: '600g' }, { e: '🧂', n: 'Flaky salt' }],
          desc: 'Pat fillets aggressively dry with paper towels — wet skin will never crisp. Salt the skin side generously. Rest 5 min, pat dry again.' },
        { n: 2, title: 'Heat the pan ripping hot', secs: 120, heat: 'high',
          ings: [{ e: '🪔', n: 'Olive oil', q: '2 tbsp' }],
          desc: 'Heavy cast-iron or stainless pan — never non-stick for this. Dry heat to smoking. Add olive oil — it should shimmer the instant it hits.' },
        { n: 3, title: 'Sear skin-side down', secs: 240, heat: 'high',
          ings: [{ e: '🐟', n: 'Salmon (skin down)' }],
          desc: 'Place fillets skin-down. Press flat with a spatula for the first 30 sec — prevents curling. Then leave alone. 4 min until skin is deep golden and crisp.' },
        { n: 4, title: 'Flip and baste', secs: 120, heat: 'medium',
          ings: [{ e: '🧈', n: 'Butter', q: '40g' }, { e: '🧄', n: 'Garlic', q: '4 cloves' }, { e: '🍋', n: 'Lemon peel' }],
          desc: 'Flip carefully. Drop in butter, smashed garlic, lemon peel. Tilt pan, spoon foaming butter over the flesh continuously for 2 min.' },
        { n: 5, title: 'Glaze', secs: 60, heat: 'low',
          ings: [{ e: '🍯', n: 'Honey', q: '1 tsp' }, { e: '🫒', n: 'Capers', q: '1 tbsp' }],
          desc: 'Drop heat. Drizzle honey, add capers. Swirl. Internal temp should read 50°C at the thickest point for medium — pull it now, it\'ll climb on the plate.' },
        { n: 6, title: 'Rest and plate', secs: 120, heat: 'off',
          ings: [{ e: '🌿', n: 'Dill', q: '3 tbsp' }, { e: '🍋', n: 'Lemon' }],
          desc: 'Rest 2 min off heat — non-negotiable. Plate skin-side up. Spoon all that butter sauce around (never over the crispy skin). Shower with dill.' },
      ],
    },

  };

  // ============================================================
  // STUB RECIPES — 12 Non-Veg (deep recipes above carry no
  // category field; we default missing category to 'non').
  // ============================================================

  const NON_STUBS = [
    { id: 'coq-vin', title: 'Coq au Vin', sub: 'French chicken braised in red wine', cuisine: 'French · Non-Vegetarian', emoji: '🍷', baseServings: 4, totalMin: 90, difficulty: 'Hard', baseCost: 540, nutrition: { calories: 580, protein: 38, carbs: 12, fats: 32, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #6B1F2D 0%, #4D1A26 40%, #2D1A1A 75%, #0A0A0B 100%)' },
    { id: 'lemon-pepper', title: 'Lemon Pepper Chicken', sub: 'Zesty pan-fried thighs', cuisine: 'American · Non-Vegetarian', emoji: '🍋', baseServings: 4, totalMin: 25, difficulty: 'Easy', baseCost: 220, nutrition: { calories: 340, protein: 32, carbs: 6, fats: 18, fiber: 1 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FFC233 0%, #E8A53D 35%, #5C3818 75%, #0A0A0B 100%)' },
    { id: 'goan-fish', title: 'Goan Fish Curry', sub: 'Coconut-tamarind, kingfish', cuisine: 'Indian · Non-Vegetarian', emoji: '🐠', baseServings: 4, totalMin: 40, difficulty: 'Medium', baseCost: 460, nutrition: { calories: 380, protein: 30, carbs: 14, fats: 22, fiber: 3 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6B35 0%, #C2521F 35%, #2A1F4D 75%, #0A0A0B 100%)' },
    { id: 'shrimp-padthai', title: 'Shrimp Pad Thai', sub: 'Wok-tossed rice noodles, tamarind', cuisine: 'Thai · Non-Vegetarian', emoji: '🍜', baseServings: 4, totalMin: 30, difficulty: 'Medium', baseCost: 380, nutrition: { calories: 510, protein: 24, carbs: 62, fats: 18, fiber: 3 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #E8A53D 0%, #C97A3D 35%, #3D5A4D 75%, #0A0A0B 100%)' },
    { id: 'tuna-tartare', title: 'Tuna Tartare', sub: 'Sushi-grade, avocado, soy-lime', cuisine: 'Japanese-Continental · Non-Vegetarian', emoji: '🍣', baseServings: 4, totalMin: 15, difficulty: 'Hard', baseCost: 720, nutrition: { calories: 290, protein: 28, carbs: 8, fats: 16, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6FB5 0%, #B97BFF 30%, #2A1F4D 75%, #0A0A0B 100%)' },
    { id: 'wellington', title: 'Beef Wellington', sub: 'Tenderloin, mushroom duxelles, puff pastry', cuisine: 'British · Non-Vegetarian', emoji: '🥩', baseServings: 6, totalMin: 150, difficulty: 'Hard', baseCost: 1200, nutrition: { calories: 720, protein: 42, carbs: 24, fats: 48, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #8C2A35 0%, #5C1F26 40%, #2D1A1A 75%, #0A0A0B 100%)' },
    { id: 'rogan-josh', title: 'Lamb Rogan Josh', sub: 'Kashmiri spices, slow-braised lamb', cuisine: 'Indian · Non-Vegetarian', emoji: '🍖', baseServings: 4, totalMin: 120, difficulty: 'Medium', baseCost: 680, nutrition: { calories: 590, protein: 38, carbs: 14, fats: 38, fiber: 3 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #C92A47 0%, #8C2A35 35%, #4D1F26 75%, #0A0A0B 100%)' },
    { id: 'pork-bao', title: 'Pork Belly Bao', sub: 'Pillowy buns, glazed five-spice belly', cuisine: 'Chinese · Non-Vegetarian', emoji: '🥟', baseServings: 4, totalMin: 80, difficulty: 'Hard', baseCost: 520, nutrition: { calories: 480, protein: 22, carbs: 38, fats: 28, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #B97BFF 0%, #6B3D8C 35%, #2A1F2D 75%, #0A0A0B 100%)' },
    { id: 'bourguignon', title: 'Beef Bourguignon', sub: 'Burgundy-stewed, pearl onions', cuisine: 'French · Non-Vegetarian', emoji: '🍲', baseServings: 6, totalMin: 180, difficulty: 'Hard', baseCost: 780, nutrition: { calories: 640, protein: 40, carbs: 18, fats: 38, fiber: 3 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #6B1F2D 0%, #4D1A22 40%, #2D1A1A 75%, #0A0A0B 100%)' },
    { id: 'lamb-shank', title: 'Slow Lamb Shank', sub: 'Fall-off-the-bone, rosemary jus', cuisine: 'Mediterranean · Non-Vegetarian', emoji: '🍖', baseServings: 4, totalMin: 240, difficulty: 'Medium', baseCost: 720, nutrition: { calories: 610, protein: 44, carbs: 8, fats: 40, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #C2521F 0%, #6B2A1F 40%, #3D1F26 75%, #0A0A0B 100%)' },
    { id: 'chicken-65', title: 'Chicken 65', sub: 'Curry leaf, fiery red, crispy', cuisine: 'Indian · Non-Vegetarian', emoji: '🌶️', baseServings: 4, totalMin: 35, difficulty: 'Medium', baseCost: 280, nutrition: { calories: 360, protein: 28, carbs: 14, fats: 20, fiber: 2 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF3D5A 0%, #C2521F 35%, #5C2818 75%, #0A0A0B 100%)' },
    { id: 'fish-fingers', title: 'Crispy Fish Fingers', sub: 'Panko-crusted, tartare dip', cuisine: 'British · Non-Vegetarian', emoji: '🐟', baseServings: 4, totalMin: 25, difficulty: 'Easy', baseCost: 240, nutrition: { calories: 310, protein: 22, carbs: 22, fats: 14, fiber: 1 }, heroGradient: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FFC233 0%, #E8A53D 35%, #4D421F 75%, #0A0A0B 100%)' },
  ];

  // Flatten Non-Veg stubs
  NON_STUBS.forEach(s => {
    RECIPES[s.id] = { ...s, category: 'non', isStub: true, youtube: yt(s.title) };
  });

  // ============================================================
  // SCAFFOLDED STUBS — 6 categories × 35 dishes = 210
  // Each stub renders the "Detailed recipe in development" screen.
  // Compact tuple format: [id, title, sub, subcat, emoji, totalMin,
  //                        difficulty, baseCost, cal, prot, carb, fat, fib]
  // ============================================================

  const CAT_HERO = {
    veg: 'radial-gradient(ellipse 80% 60% at 50% 60%, #3DDC97 0%, #1F7A4E 40%, #0F3D26 75%, #0A0A0B 100%)',
    con: 'radial-gradient(ellipse 80% 60% at 50% 60%, #E8A53D 0%, #B26F1F 40%, #4D3D1F 75%, #0A0A0B 100%)',
    chi: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6B35 0%, #C2521F 40%, #4D1F1F 75%, #0A0A0B 100%)',
    des: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FF6FB5 0%, #B97BFF 35%, #3D1F4D 75%, #0A0A0B 100%)',
    sna: 'radial-gradient(ellipse 80% 60% at 50% 60%, #FFC233 0%, #E89A1F 40%, #4D421F 75%, #0A0A0B 100%)',
    dri: 'radial-gradient(ellipse 80% 60% at 50% 60%, #4DD4FF 0%, #1F8FB2 40%, #1F3D4D 75%, #0A0A0B 100%)',
  };

  const CAT_CUISINE = {
    veg: 'Indian · Vegetarian',
    con: 'European · Continental',
    chi: 'Chinese · Indo-Chinese',
    des: 'Dessert',
    sna: 'Snack · Street Food',
    dri: 'Beverage',
  };

  const STUBS_BY_CAT = {
    // ---------- VEGETARIAN (35) — Indian-focused ----------
    veg: [
      ['paneer-tikka', 'Paneer Tikka', 'Tandoor-grilled cottage cheese cubes', 'Starters', '🧀', 35, 'Medium', 260, 320, 18, 12, 22, 3],
      ['palak-paneer', 'Palak Paneer', 'Cottage cheese in creamed spinach', 'Curries', '🥬', 40, 'Medium', 280, 340, 18, 14, 24, 4],
      ['aloo-gobi', 'Aloo Gobi', 'Potato-cauliflower stir-fry with cumin', 'Mains', '🥔', 30, 'Easy', 160, 220, 6, 32, 8, 5],
      ['chana-masala', 'Chana Masala', 'Chickpea curry with onion-tomato base', 'Curries', '🫘', 45, 'Medium', 180, 320, 14, 42, 8, 8],
      ['dal-makhani', 'Dal Makhani', 'Slow-cooked black lentils with cream', 'Curries', '🫘', 90, 'Medium', 240, 380, 16, 32, 18, 8],
      ['dal-tadka', 'Dal Tadka', 'Yellow lentils with cumin tempering', 'Curries', '🫘', 30, 'Easy', 140, 240, 14, 28, 6, 6],
      ['rajma', 'Rajma', 'Punjabi kidney bean curry', 'Curries', '🫘', 60, 'Medium', 180, 340, 16, 38, 10, 10],
      ['bhindi-masala', 'Bhindi Masala', 'Stir-fried okra with onions and spice', 'Mains', '🌶️', 30, 'Easy', 160, 180, 4, 16, 10, 4],
      ['baingan-bharta', 'Baingan Bharta', 'Smoke-roasted eggplant mash', 'Mains', '🍆', 45, 'Medium', 140, 220, 4, 14, 14, 6],
      ['malai-kofta', 'Malai Kofta', 'Paneer dumplings in creamy gravy', 'Curries', '🍡', 60, 'Hard', 320, 480, 16, 32, 30, 4],
      ['veg-biryani', 'Vegetable Biryani', 'Fragrant layered rice with vegetables', 'Rice', '🍚', 75, 'Hard', 260, 420, 10, 64, 12, 6],
      ['jeera-rice', 'Jeera Rice', 'Basmati rice with cumin tempering', 'Rice', '🍚', 25, 'Easy', 100, 280, 6, 52, 6, 2],
      ['aloo-paratha', 'Aloo Paratha', 'Stuffed potato flatbread', 'Breads', '🥖', 45, 'Medium', 140, 320, 8, 48, 10, 4],
      ['methi-thepla', 'Methi Thepla', 'Fenugreek-laced flatbread', 'Breads', '🥖', 30, 'Easy', 120, 240, 6, 32, 8, 4],
      ['plain-naan', 'Plain Naan', 'Tandoor-baked leavened bread', 'Breads', '🫓', 90, 'Medium', 100, 260, 8, 44, 6, 2],
      ['garlic-naan', 'Garlic Naan', 'Garlic-studded tandoor bread', 'Breads', '🫓', 90, 'Medium', 120, 280, 8, 44, 8, 2],
      ['aloo-tikki', 'Aloo Tikki', 'Pan-fried spiced potato patties', 'Starters', '🥔', 25, 'Easy', 100, 240, 4, 38, 8, 4],
      ['samosa', 'Samosa', 'Fried pastry with spiced potato filling', 'Starters', '🥟', 60, 'Medium', 140, 280, 6, 36, 12, 4],
      ['veg-pakora', 'Vegetable Pakora', 'Chickpea-battered vegetable fritters', 'Starters', '🧅', 25, 'Easy', 120, 260, 8, 28, 14, 4],
      ['pav-bhaji', 'Pav Bhaji', 'Spiced vegetable mash with buttered buns', 'Mains', '🍔', 45, 'Medium', 180, 420, 12, 56, 16, 8],
      ['masala-dosa', 'Masala Dosa', 'Fermented rice crepe with potato filling', 'Mains', '🥞', 60, 'Hard', 160, 380, 10, 60, 10, 5],
      ['idli-sambar', 'Idli Sambar', 'Steamed rice cakes with lentil stew', 'Mains', '🍙', 60, 'Medium', 140, 260, 10, 48, 4, 6],
      ['rava-upma', 'Rava Upma', 'Semolina savory porridge', 'Mains', '🍲', 25, 'Easy', 100, 240, 8, 36, 8, 3],
      ['veg-pulao', 'Vegetable Pulao', 'One-pot spiced rice with vegetables', 'Rice', '🍚', 40, 'Easy', 160, 320, 8, 54, 8, 4],
      ['mushroom-masala', 'Mushroom Masala', 'Sautéed mushrooms in spiced gravy', 'Mains', '🍄', 35, 'Medium', 220, 280, 10, 18, 18, 4],
      ['mutter-paneer', 'Mutter Paneer', 'Peas and paneer in tomato gravy', 'Curries', '🫛', 40, 'Medium', 260, 360, 16, 22, 22, 6],
      ['kadai-paneer', 'Kadai Paneer', 'Wok-tossed paneer with bell peppers', 'Curries', '🌶️', 40, 'Medium', 280, 380, 18, 18, 26, 4],
      ['aloo-methi', 'Aloo Methi', 'Potatoes with fenugreek leaves', 'Mains', '🥔', 30, 'Easy', 160, 240, 6, 32, 10, 6],
      ['bhel-puri', 'Bhel Puri', 'Puffed rice chaat with tamarind', 'Starters', '🍚', 20, 'Easy', 80, 220, 6, 38, 6, 4],
      ['pani-puri', 'Pani Puri', 'Crispy shells with tangy spiced water', 'Starters', '🥟', 45, 'Medium', 100, 260, 6, 42, 8, 5],
      ['veg-korma', 'Vegetable Korma', 'Coconut-cashew vegetable curry', 'Curries', '🥥', 50, 'Medium', 260, 420, 10, 28, 30, 5],
      ['stuffed-capsicum', 'Stuffed Capsicum', 'Bell peppers with spiced potato', 'Mains', '🫑', 50, 'Medium', 200, 280, 8, 38, 10, 6],
      ['lauki-kofta', 'Lauki Kofta', 'Bottle gourd dumplings in curry', 'Curries', '🥒', 70, 'Hard', 220, 320, 10, 30, 18, 5],
      ['sarson-saag', 'Sarson Ka Saag', 'Punjabi mustard greens stew', 'Curries', '🥬', 90, 'Medium', 180, 260, 10, 18, 16, 8],
      ['mixed-veg', 'Mixed Vegetable Curry', 'Mixed vegetables in tomato gravy', 'Curries', '🥗', 35, 'Easy', 180, 240, 8, 28, 10, 6],
    ],

    // ---------- CONTINENTAL (35) — European classics ----------
    con: [
      ['spaghetti-carbonara', 'Spaghetti Carbonara', 'Egg, pancetta, pecorino, pepper', 'Pasta', '🍝', 25, 'Medium', 320, 540, 22, 58, 22, 3],
      ['fettuccine-alfredo', 'Fettuccine Alfredo', 'Butter-parmesan cream pasta', 'Pasta', '🍝', 25, 'Easy', 280, 560, 18, 56, 30, 2],
      ['penne-arrabiata', 'Penne Arrabiata', 'Spicy tomato-garlic pasta', 'Pasta', '🍝', 25, 'Easy', 220, 420, 12, 64, 12, 4],
      ['lasagna', 'Classic Lasagna', 'Layered pasta, beef ragù, béchamel', 'Pasta', '🍱', 90, 'Hard', 480, 620, 30, 48, 32, 4],
      ['margherita-pizza', 'Margherita Pizza', 'Tomato, mozzarella, basil', 'Pizza', '🍕', 45, 'Medium', 280, 480, 20, 56, 18, 3],
      ['pepperoni-pizza', 'Pepperoni Pizza', 'Spicy salami, cheese, oregano', 'Pizza', '🍕', 45, 'Medium', 360, 540, 22, 54, 26, 3],
      ['four-cheese-pizza', 'Four Cheese Pizza', 'Mozzarella, gorgonzola, fontina, parmesan', 'Pizza', '🍕', 50, 'Medium', 420, 580, 26, 52, 32, 2],
      ['caesar-salad', 'Caesar Salad', 'Romaine, anchovy dressing, croutons', 'Salads', '🥗', 20, 'Easy', 240, 280, 8, 14, 22, 3],
      ['greek-salad', 'Greek Salad', 'Feta, olives, cucumber, oregano', 'Salads', '🥗', 15, 'Easy', 220, 240, 8, 12, 18, 4],
      ['caprese-salad', 'Caprese Salad', 'Tomato, mozzarella, basil, balsamic', 'Salads', '🥗', 10, 'Easy', 260, 260, 14, 8, 20, 2],
      ['french-onion-soup', 'French Onion Soup', 'Caramelized onion, gruyère crust', 'Soups', '🍲', 90, 'Medium', 220, 320, 12, 28, 18, 4],
      ['minestrone', 'Minestrone', 'Hearty vegetable-bean soup', 'Soups', '🍲', 50, 'Easy', 180, 240, 10, 36, 6, 8],
      ['tomato-soup', 'Cream of Tomato', 'Roasted tomato, basil, cream', 'Soups', '🍅', 35, 'Easy', 160, 220, 6, 22, 14, 4],
      ['mushroom-risotto', 'Mushroom Risotto', 'Arborio rice, porcini, parmesan', 'Mains', '🍚', 40, 'Medium', 360, 480, 14, 64, 16, 3],
      ['seafood-risotto', 'Seafood Risotto', 'Saffron, prawns, mussels, white wine', 'Mains', '🦐', 50, 'Hard', 560, 540, 28, 58, 20, 2],
      ['ratatouille', 'Ratatouille', 'Provençal stewed summer vegetables', 'Mains', '🍆', 60, 'Medium', 240, 260, 6, 28, 14, 8],
      ['coq-au-vin-blanc', 'Chicken in White Wine', 'Riesling-braised chicken, mushrooms', 'Mains', '🍗', 80, 'Hard', 460, 520, 36, 12, 28, 3],
      ['ossobuco', 'Ossobuco', 'Veal shanks, gremolata', 'Mains', '🍖', 180, 'Hard', 780, 680, 48, 14, 38, 2],
      ['french-toast', 'French Toast', 'Brioche, vanilla custard, maple', 'Sides', '🍞', 20, 'Easy', 160, 380, 10, 48, 16, 2],
      ['garlic-bread', 'Garlic Bread', 'Baguette, garlic-herb butter', 'Sides', '🥖', 15, 'Easy', 120, 280, 6, 36, 12, 2],
      ['mashed-potatoes', 'Mashed Potatoes', 'Cream, butter, chives', 'Sides', '🥔', 30, 'Easy', 140, 320, 6, 42, 14, 4],
      ['roasted-vegetables', 'Roasted Root Vegetables', 'Carrot, parsnip, rosemary', 'Sides', '🥕', 45, 'Easy', 180, 220, 4, 32, 8, 8],
      ['ratatouille-tart', 'Ratatouille Tart', 'Layered vegetables on puff pastry', 'Mains', '🥧', 75, 'Hard', 280, 380, 8, 32, 22, 6],
      ['quiche-lorraine', 'Quiche Lorraine', 'Bacon, egg, gruyère in pastry', 'Mains', '🥧', 75, 'Medium', 360, 480, 18, 28, 32, 2],
      ['moussaka', 'Moussaka', 'Layered eggplant, lamb, béchamel', 'Mains', '🍱', 120, 'Hard', 520, 580, 28, 32, 36, 5],
      ['paella', 'Paella Valenciana', 'Saffron rice, rabbit, beans', 'Mains', '🍚', 75, 'Hard', 560, 580, 32, 62, 18, 4],
      ['spaghetti-bolognese', 'Spaghetti Bolognese', 'Slow-cooked meat ragù', 'Pasta', '🍝', 90, 'Medium', 340, 580, 28, 56, 22, 4],
      ['pesto-genovese', 'Pesto Genovese', 'Basil, pine nut, garlic pasta', 'Pasta', '🍝', 20, 'Easy', 280, 540, 14, 56, 28, 3],
      ['mac-and-cheese', 'Mac and Cheese', 'Macaroni, cheddar mornay sauce', 'Pasta', '🧀', 35, 'Easy', 260, 580, 22, 56, 28, 2],
      ['tortellini-broth', 'Tortellini in Broth', 'Stuffed pasta in chicken consommé', 'Pasta', '🍜', 60, 'Hard', 320, 380, 18, 42, 14, 2],
      ['herb-roasted-chicken', 'Herb-Roasted Chicken', 'Whole bird, lemon, thyme, garlic', 'Mains', '🍗', 90, 'Medium', 460, 540, 42, 4, 36, 1],
      ['beef-stroganoff', 'Beef Stroganoff', 'Tenderloin, mushroom, sour cream', 'Mains', '🥩', 50, 'Medium', 560, 580, 36, 22, 36, 3],
      ['veal-piccata', 'Veal Piccata', 'Lemon-caper butter sauce', 'Mains', '🍖', 35, 'Medium', 620, 460, 38, 6, 30, 1],
      ['risotto-milanese', 'Risotto Milanese', 'Saffron-perfumed arborio rice', 'Mains', '🍚', 45, 'Medium', 340, 460, 12, 64, 14, 2],
      ['caponata', 'Sicilian Caponata', 'Sweet-sour eggplant relish', 'Sides', '🍆', 50, 'Medium', 180, 220, 4, 24, 12, 6],
    ],

    // ---------- CHINESE (35) — Indo-Chinese + classic ----------
    chi: [
      ['veg-fried-rice', 'Vegetable Fried Rice', 'Wok-tossed rice with carrots, peas, egg', 'Rice', '🍚', 20, 'Easy', 180, 380, 10, 56, 12, 4],
      ['chicken-fried-rice', 'Chicken Fried Rice', 'Smoky soy-glazed rice with chicken', 'Rice', '🍚', 25, 'Easy', 220, 440, 22, 54, 14, 3],
      ['egg-fried-rice', 'Egg Fried Rice', 'Classic wok-fried rice with scrambled egg', 'Rice', '🍚', 18, 'Easy', 140, 380, 14, 54, 12, 3],
      ['schezwan-rice', 'Schezwan Fried Rice', 'Fiery red, garlic-laced, chili oil', 'Rice', '🍚', 25, 'Medium', 220, 420, 10, 58, 16, 4],
      ['veg-hakka-noodles', 'Veg Hakka Noodles', 'Wok-tossed noodles with julienned veg', 'Noodles', '🍜', 25, 'Easy', 180, 380, 8, 56, 12, 4],
      ['chicken-hakka-noodles', 'Chicken Hakka Noodles', 'Wok-fried noodles with chicken', 'Noodles', '🍜', 30, 'Easy', 220, 440, 22, 54, 14, 3],
      ['schezwan-noodles', 'Schezwan Noodles', 'Spicy red chili sauce, garlic', 'Noodles', '🍜', 25, 'Medium', 220, 420, 10, 58, 14, 4],
      ['chowmein', 'Chow Mein', 'Crispy fried noodles, vegetables, soy', 'Noodles', '🍜', 25, 'Easy', 220, 460, 12, 60, 18, 4],
      ['singapore-noodles', 'Singapore Noodles', 'Curry-spiced rice vermicelli', 'Noodles', '🍜', 30, 'Medium', 240, 440, 14, 58, 16, 4],
      ['chilli-paneer', 'Chilli Paneer', 'Crispy paneer in soy-chili sauce', 'Starters', '🌶️', 30, 'Medium', 280, 460, 22, 22, 30, 3],
      ['chilli-chicken', 'Chilli Chicken', 'Indo-Chinese chicken in red sauce', 'Starters', '🌶️', 35, 'Medium', 320, 480, 32, 22, 26, 2],
      ['honey-chilli-potato', 'Honey Chilli Potato', 'Sticky-sweet crispy potato', 'Starters', '🥔', 30, 'Easy', 180, 380, 4, 56, 16, 4],
      ['veg-manchurian-dry', 'Veg Manchurian Dry', 'Cabbage balls in soy-ginger glaze', 'Starters', '🥬', 40, 'Medium', 220, 380, 8, 42, 20, 4],
      ['gobi-manchurian', 'Gobi Manchurian', 'Crispy cauliflower in sticky sauce', 'Starters', '🥦', 35, 'Medium', 220, 360, 8, 38, 20, 4],
      ['chicken-manchurian', 'Chicken Manchurian', 'Crispy chicken in tangy sauce', 'Gravies', '🍗', 40, 'Medium', 320, 460, 28, 28, 24, 2],
      ['veg-manchurian-gravy', 'Veg Manchurian Gravy', 'Veg balls in soy-ginger gravy', 'Gravies', '🥬', 45, 'Medium', 240, 380, 8, 44, 18, 4],
      ['kung-pao-chicken', 'Kung Pao Chicken', 'Sichuan peanut-chili stir-fry', 'Gravies', '🥜', 30, 'Medium', 340, 480, 32, 18, 28, 3],
      ['mapo-tofu', 'Mapo Tofu', 'Sichuan tofu in chili bean sauce', 'Gravies', '🌶️', 30, 'Medium', 260, 360, 22, 14, 22, 3],
      ['sweet-sour-chicken', 'Sweet and Sour Chicken', 'Battered chicken in pineapple sauce', 'Gravies', '🍍', 40, 'Medium', 340, 540, 28, 48, 22, 2],
      ['orange-chicken', 'Orange Chicken', 'Crispy chicken in citrus glaze', 'Gravies', '🍊', 40, 'Medium', 360, 540, 28, 46, 24, 2],
      ['beef-broccoli', 'Beef and Broccoli', 'Stir-fried beef with garlic-oyster sauce', 'Gravies', '🥩', 25, 'Medium', 460, 460, 34, 18, 26, 4],
      ['veg-spring-rolls', 'Vegetable Spring Rolls', 'Crispy rolls with cabbage-carrot filling', 'Starters', '🥬', 45, 'Medium', 180, 320, 6, 38, 16, 4],
      ['dim-sum-veg', 'Vegetable Dim Sum', 'Steamed translucent dumplings', 'Dim Sum', '🥟', 60, 'Hard', 240, 320, 8, 48, 8, 3],
      ['dim-sum-chicken', 'Chicken Dim Sum', 'Steamed chicken-mushroom dumplings', 'Dim Sum', '🥟', 60, 'Hard', 280, 360, 18, 42, 10, 2],
      ['pork-dumplings', 'Pork Dumplings', 'Pan-fried potstickers', 'Dim Sum', '🥟', 75, 'Hard', 320, 420, 18, 38, 18, 2],
      ['wonton-soup', 'Wonton Soup', 'Shrimp wontons in clear broth', 'Soups', '🍲', 50, 'Medium', 220, 280, 18, 32, 6, 2],
      ['hot-and-sour-soup', 'Hot and Sour Soup', 'Tangy-spicy mushroom-tofu broth', 'Soups', '🍲', 30, 'Easy', 160, 180, 10, 18, 6, 3],
      ['sweet-corn-soup', 'Sweet Corn Veg Soup', 'Creamed corn, julienned vegetables', 'Soups', '🌽', 30, 'Easy', 140, 220, 6, 38, 4, 4],
      ['manchow-soup', 'Manchow Soup', 'Spicy broth with crispy noodle topping', 'Soups', '🍜', 35, 'Medium', 160, 220, 8, 30, 6, 3],
      ['mushroom-soup', 'Mushroom Clear Soup', 'Light mushroom-celery broth', 'Soups', '🍄', 25, 'Easy', 160, 140, 6, 14, 4, 2],
      ['szechuan-prawns', 'Szechuan Prawns', 'Fiery wok-tossed prawns', 'Gravies', '🦐', 30, 'Medium', 460, 380, 28, 18, 22, 2],
      ['lemon-chicken', 'Crispy Lemon Chicken', 'Battered chicken in lemon sauce', 'Gravies', '🍋', 40, 'Medium', 340, 520, 28, 44, 22, 2],
      ['kung-pao-paneer', 'Kung Pao Paneer', 'Paneer with peanuts and chili', 'Gravies', '🌶️', 30, 'Medium', 280, 440, 20, 16, 30, 3],
      ['drums-of-heaven', 'Drums of Heaven', 'Frenched chicken wings in spicy glaze', 'Starters', '🍗', 50, 'Medium', 340, 440, 28, 18, 26, 2],
      ['crispy-corn', 'Crispy Corn', 'Battered sweet corn with chili-pepper', 'Starters', '🌽', 25, 'Easy', 160, 280, 6, 38, 12, 4],
    ],

    // ---------- DESSERTS (35) ----------
    des: [
      ['gulab-jamun', 'Gulab Jamun', 'Khoya dumplings in cardamom syrup', 'Indian Sweets', '🍡', 60, 'Medium', 180, 320, 6, 48, 14, 1],
      ['rasgulla', 'Rasgulla', 'Spongy cottage cheese balls in syrup', 'Indian Sweets', '⚪', 60, 'Medium', 160, 260, 8, 42, 8, 0],
      ['ras-malai', 'Rasmalai', 'Paneer discs in saffron-cardamom milk', 'Indian Sweets', '🥛', 90, 'Medium', 220, 340, 12, 38, 16, 1],
      ['jalebi', 'Jalebi', 'Crispy spirals in rose syrup', 'Indian Sweets', '🥨', 45, 'Medium', 140, 360, 4, 56, 14, 1],
      ['kheer', 'Rice Kheer', 'Slow-cooked rice pudding with cardamom', 'Puddings', '🍚', 60, 'Easy', 140, 280, 8, 42, 10, 1],
      ['gajar-halwa', 'Gajar Halwa', 'Carrot pudding with khoya and nuts', 'Indian Sweets', '🥕', 90, 'Medium', 220, 380, 8, 42, 20, 4],
      ['moong-dal-halwa', 'Moong Dal Halwa', 'Yellow lentil pudding with ghee', 'Indian Sweets', '🟡', 75, 'Hard', 220, 440, 10, 48, 24, 4],
      ['besan-laddu', 'Besan Laddu', 'Roasted chickpea flour balls', 'Indian Sweets', '🟡', 45, 'Easy', 140, 320, 6, 38, 16, 2],
      ['coconut-laddu', 'Coconut Laddu', 'Condensed milk and coconut balls', 'Indian Sweets', '🥥', 30, 'Easy', 160, 280, 4, 32, 16, 3],
      ['kaju-katli', 'Kaju Katli', 'Cashew-fudge diamonds', 'Indian Sweets', '💎', 60, 'Hard', 320, 360, 8, 36, 20, 1],
      ['mysore-pak', 'Mysore Pak', 'Ghee-rich gram flour sweet', 'Indian Sweets', '🟡', 60, 'Hard', 220, 380, 4, 42, 22, 1],
      ['shrikhand', 'Shrikhand', 'Hung yogurt with saffron and nuts', 'Indian Sweets', '🥥', 30, 'Easy', 140, 280, 8, 36, 12, 1],
      ['chocolate-cake', 'Chocolate Cake', 'Dense, fudgy, ganache-glazed', 'Cakes', '🍰', 75, 'Medium', 320, 480, 6, 56, 28, 3],
      ['red-velvet-cake', 'Red Velvet Cake', 'Cocoa sponge, cream cheese frosting', 'Cakes', '🍰', 90, 'Hard', 360, 460, 6, 58, 24, 1],
      ['tiramisu', 'Tiramisu', 'Coffee-soaked sponge, mascarpone', 'Cakes', '🍰', 240, 'Medium', 360, 420, 8, 38, 26, 1],
      ['cheesecake', 'New York Cheesecake', 'Dense baked cream cheese, graham crust', 'Cakes', '🍰', 360, 'Medium', 420, 460, 8, 38, 30, 1],
      ['carrot-cake', 'Carrot Cake', 'Spiced, walnut-studded, cream cheese frost', 'Cakes', '🥕', 90, 'Medium', 280, 440, 8, 52, 22, 3],
      ['lemon-cake', 'Lemon Drizzle Cake', 'Citrus sponge, sugar glaze', 'Cakes', '🍋', 75, 'Easy', 220, 380, 6, 54, 16, 1],
      ['brownies', 'Fudgy Brownies', 'Dense, dark, crackly-top', 'Cakes', '🍫', 50, 'Easy', 220, 380, 4, 44, 22, 2],
      ['tres-leches', 'Tres Leches', 'Three-milk soaked sponge', 'Cakes', '🥛', 240, 'Medium', 260, 380, 8, 42, 18, 1],
      ['vanilla-icecream', 'Vanilla Ice Cream', 'Custard-based, vanilla bean', 'Frozen', '🍦', 300, 'Medium', 220, 260, 4, 28, 14, 0],
      ['chocolate-icecream', 'Chocolate Ice Cream', 'Cocoa-rich custard base', 'Frozen', '🍫', 300, 'Medium', 240, 280, 4, 32, 16, 2],
      ['mango-kulfi', 'Mango Kulfi', 'Reduced milk, mango pulp, no-churn', 'Frozen', '🥭', 360, 'Easy', 180, 260, 6, 34, 10, 1],
      ['pista-kulfi', 'Pistachio Kulfi', 'Reduced milk, ground pistachio', 'Frozen', '🥜', 360, 'Easy', 200, 280, 8, 32, 14, 2],
      ['falooda', 'Falooda', 'Rose syrup, vermicelli, ice cream, basil seeds', 'Frozen', '🌹', 30, 'Easy', 180, 360, 6, 60, 12, 2],
      ['apple-pie', 'Apple Pie', 'Spiced apples, butter-lattice crust', 'Pastries', '🥧', 120, 'Hard', 320, 420, 4, 56, 18, 3],
      ['eclairs', 'Chocolate Éclairs', 'Choux pastry, cream filling, ganache', 'Pastries', '🍫', 75, 'Hard', 240, 340, 6, 32, 20, 1],
      ['profiteroles', 'Profiteroles', 'Cream-filled puffs, warm chocolate sauce', 'Pastries', '🍫', 90, 'Hard', 260, 380, 6, 32, 24, 1],
      ['baklava', 'Baklava', 'Filo, pistachio, honey syrup', 'Pastries', '🥮', 90, 'Hard', 280, 380, 6, 38, 22, 1],
      ['macarons', 'French Macarons', 'Almond meringue, ganache center', 'Pastries', '🍪', 180, 'Hard', 320, 280, 4, 32, 14, 1],
      ['creme-brulee', 'Crème Brûlée', 'Vanilla custard, torched sugar crust', 'Puddings', '🥄', 240, 'Medium', 240, 380, 6, 36, 26, 0],
      ['panna-cotta', 'Panna Cotta', 'Vanilla cream set with gelatin', 'Puddings', '🥄', 240, 'Easy', 220, 320, 4, 28, 22, 0],
      ['chocolate-mousse', 'Dark Chocolate Mousse', 'Whipped 70% chocolate, no flour', 'Puddings', '🍫', 60, 'Medium', 260, 360, 6, 24, 28, 3],
      ['caramel-custard', 'Caramel Custard', 'Steamed egg custard with caramel', 'Puddings', '🍮', 90, 'Easy', 180, 280, 8, 38, 10, 0],
      ['mango-mousse', 'Mango Mousse', 'Whipped cream and mango pulp', 'Puddings', '🥭', 30, 'Easy', 220, 280, 4, 30, 16, 2],
    ],

    // ---------- SNACKS (35) — Street food + quick bites ----------
    sna: [
      ['samosa-chaat', 'Samosa Chaat', 'Crushed samosa, yogurt, chutneys', 'Street Food', '🥟', 20, 'Easy', 100, 340, 8, 42, 16, 5],
      ['dahi-puri', 'Dahi Puri', 'Crispy shells, yogurt, sev', 'Street Food', '🥣', 25, 'Easy', 100, 280, 6, 38, 12, 4],
      ['ragda-pattice', 'Ragda Pattice', 'Potato patties in white pea curry', 'Street Food', '🥔', 60, 'Medium', 140, 380, 10, 56, 12, 8],
      ['sev-puri', 'Sev Puri', 'Flat puris, potato, chutney, sev', 'Street Food', '🍘', 20, 'Easy', 100, 320, 6, 42, 14, 4],
      ['dabeli', 'Dabeli', 'Spiced potato in pav with pomegranate', 'Street Food', '🍔', 30, 'Medium', 100, 340, 8, 48, 12, 5],
      ['vada-pav', 'Vada Pav', 'Potato dumpling in fried bread', 'Street Food', '🍔', 45, 'Medium', 80, 380, 8, 52, 16, 4],
      ['mumbai-grilled-sandwich', 'Bombay Sandwich', 'Veg-stuffed, chutney, mint, grilled', 'Sandwiches', '🥪', 20, 'Easy', 140, 380, 12, 48, 14, 5],
      ['paneer-sandwich', 'Paneer Tikka Sandwich', 'Grilled paneer, peppers, mint', 'Sandwiches', '🥪', 25, 'Easy', 180, 420, 18, 44, 18, 4],
      ['club-sandwich', 'Club Sandwich', 'Layered chicken, bacon, lettuce', 'Sandwiches', '🥪', 30, 'Medium', 240, 540, 28, 42, 26, 4],
      ['veg-club-sandwich', 'Veg Club Sandwich', 'Triple-layer, cheese, tomato, cucumber', 'Sandwiches', '🥪', 25, 'Easy', 180, 460, 16, 48, 20, 5],
      ['grilled-cheese', 'Grilled Cheese', 'Buttered toast, melted cheddar', 'Sandwiches', '🧀', 10, 'Easy', 140, 420, 16, 32, 22, 2],
      ['french-fries', 'French Fries', 'Twice-fried golden potato sticks', 'Fried', '🍟', 30, 'Easy', 120, 380, 4, 48, 18, 4],
      ['masala-fries', 'Masala Fries', 'Chaat-spiced french fries', 'Fried', '🍟', 30, 'Easy', 140, 400, 4, 48, 20, 4],
      ['onion-rings', 'Onion Rings', 'Crispy battered onion circles', 'Fried', '🧅', 25, 'Easy', 140, 340, 4, 38, 18, 3],
      ['chicken-nuggets', 'Chicken Nuggets', 'Crispy breaded chicken bites', 'Fried', '🍗', 35, 'Easy', 220, 380, 22, 28, 18, 1],
      ['mozzarella-sticks', 'Mozzarella Sticks', 'Battered string cheese', 'Fried', '🧀', 30, 'Medium', 220, 420, 16, 32, 24, 2],
      ['cheese-balls', 'Cheese Balls', 'Mashed potato, cheese center, fried', 'Fried', '🧀', 30, 'Easy', 160, 360, 12, 36, 18, 3],
      ['corn-cheese-toast', 'Corn Cheese Toast', 'Open-grilled corn-cheese topping', 'Bites', '🌽', 20, 'Easy', 140, 320, 12, 38, 14, 3],
      ['bruschetta', 'Bruschetta', 'Toasted bread, tomato-basil', 'Bites', '🥖', 15, 'Easy', 180, 240, 6, 32, 8, 3],
      ['nachos-cheese', 'Loaded Nachos', 'Chips, cheese sauce, jalapeños', 'Bites', '🧀', 20, 'Easy', 240, 480, 14, 48, 24, 5],
      ['potato-wedges', 'Spicy Potato Wedges', 'Oven-baked, paprika-rubbed', 'Fried', '🥔', 45, 'Easy', 120, 280, 4, 44, 10, 5],
      ['spring-roll-wrap', 'Spring Roll Wrap', 'Crispy roll, sweet chili dip', 'Wraps', '🌯', 30, 'Medium', 160, 280, 6, 38, 12, 4],
      ['paneer-wrap', 'Paneer Kathi Roll', 'Paneer tikka in egg paratha', 'Wraps', '🌯', 30, 'Easy', 160, 420, 18, 44, 18, 4],
      ['chicken-wrap', 'Chicken Kathi Roll', 'Chicken tikka in paratha', 'Wraps', '🌯', 35, 'Medium', 200, 460, 26, 42, 18, 3],
      ['veg-frankie', 'Veg Frankie', 'Spiced veg, chutney, paratha roll', 'Wraps', '🌯', 25, 'Easy', 140, 360, 10, 48, 14, 5],
      ['egg-roll', 'Egg Kathi Roll', 'Egg-coated paratha with masala', 'Wraps', '🌯', 20, 'Easy', 120, 380, 14, 38, 18, 3],
      ['chilli-cheese-toast', 'Chilli Cheese Toast', 'Open-faced cheese-chili melt', 'Bites', '🧀', 15, 'Easy', 140, 340, 12, 32, 18, 2],
      ['pizza-toast', 'Pizza Toast', 'Bread base with pizza toppings', 'Bites', '🍕', 20, 'Easy', 160, 380, 14, 42, 18, 3],
      ['cutlet', 'Vegetable Cutlet', 'Mashed-veg patty, breadcrumb-fried', 'Fried', '🥬', 40, 'Easy', 120, 280, 6, 36, 12, 4],
      ['chicken-cutlet', 'Chicken Cutlet', 'Minced chicken patty, panko-crusted', 'Fried', '🍗', 45, 'Medium', 180, 360, 22, 28, 18, 2],
      ['egg-puff', 'Egg Puff', 'Boiled egg in flaky puff pastry', 'Bites', '🥚', 45, 'Medium', 100, 320, 10, 28, 20, 1],
      ['paneer-puff', 'Paneer Puff', 'Spiced paneer in puff pastry', 'Bites', '🥧', 50, 'Medium', 120, 380, 14, 32, 22, 2],
      ['masala-popcorn', 'Masala Popcorn', 'Chaat-spiced popped corn', 'Bites', '🍿', 10, 'Easy', 60, 180, 4, 28, 6, 4],
      ['chana-jor-garam', 'Chana Jor Garam', 'Spiced flattened chickpeas', 'Bites', '🫘', 20, 'Easy', 80, 220, 10, 32, 4, 6],
      ['peanut-chaat', 'Peanut Chaat', 'Boiled peanuts with onion, lemon, chili', 'Bites', '🥜', 15, 'Easy', 80, 280, 12, 18, 18, 5],
    ],

    // ---------- DRINKS (35) ----------
    dri: [
      ['mango-lassi', 'Mango Lassi', 'Yogurt-mango blended cooler', 'Shakes', '🥭', 5, 'Easy', 80, 220, 6, 38, 4, 2],
      ['sweet-lassi', 'Sweet Lassi', 'Yogurt, sugar, cardamom', 'Shakes', '🥛', 5, 'Easy', 60, 180, 6, 32, 4, 0],
      ['salty-lassi', 'Salty Lassi', 'Yogurt, cumin, salt cooler', 'Shakes', '🥛', 5, 'Easy', 50, 100, 6, 8, 4, 0],
      ['masala-chai', 'Masala Chai', 'Spiced milk tea with ginger-cardamom', 'Hot Drinks', '🍵', 15, 'Easy', 40, 80, 2, 12, 2, 0],
      ['filter-coffee', 'South Indian Filter Coffee', 'Decoction-brewed, frothy milk', 'Hot Drinks', '☕', 20, 'Medium', 50, 90, 3, 14, 2, 0],
      ['hot-chocolate', 'Hot Chocolate', 'Dark chocolate, milk, whipped cream', 'Hot Drinks', '🍫', 10, 'Easy', 120, 320, 8, 36, 16, 2],
      ['cold-coffee', 'Cold Coffee', 'Blended coffee, milk, ice cream', 'Shakes', '☕', 5, 'Easy', 120, 280, 6, 32, 12, 0],
      ['chocolate-shake', 'Chocolate Shake', 'Chocolate ice cream, milk, syrup', 'Shakes', '🍫', 5, 'Easy', 140, 380, 8, 48, 16, 1],
      ['strawberry-shake', 'Strawberry Shake', 'Fresh strawberry, vanilla ice cream', 'Shakes', '🍓', 5, 'Easy', 160, 320, 6, 42, 12, 2],
      ['banana-shake', 'Banana Shake', 'Banana, milk, honey, cinnamon', 'Shakes', '🍌', 5, 'Easy', 100, 280, 8, 48, 6, 3],
      ['vanilla-shake', 'Vanilla Shake', 'Vanilla ice cream, milk, cream', 'Shakes', '🍦', 5, 'Easy', 140, 340, 6, 38, 16, 0],
      ['oreo-shake', 'Oreo Cookie Shake', 'Crushed oreos, vanilla ice cream', 'Shakes', '🍪', 5, 'Easy', 160, 420, 8, 52, 18, 1],
      ['nutella-shake', 'Nutella Shake', 'Hazelnut spread, milk, ice cream', 'Shakes', '🍫', 5, 'Easy', 180, 480, 10, 52, 24, 2],
      ['mango-smoothie', 'Mango Smoothie', 'Mango, yogurt, honey, ice', 'Smoothies', '🥭', 10, 'Easy', 120, 240, 6, 42, 4, 3],
      ['berry-smoothie', 'Mixed Berry Smoothie', 'Berries, yogurt, honey', 'Smoothies', '🫐', 10, 'Easy', 160, 220, 6, 38, 4, 5],
      ['green-smoothie', 'Green Smoothie', 'Spinach, banana, apple, ginger', 'Smoothies', '🥬', 10, 'Easy', 140, 180, 4, 38, 2, 6],
      ['orange-juice', 'Fresh Orange Juice', 'Hand-squeezed sweet orange', 'Juices', '🍊', 5, 'Easy', 80, 110, 2, 26, 0, 1],
      ['watermelon-juice', 'Watermelon Juice', 'Chilled blended watermelon', 'Juices', '🍉', 5, 'Easy', 60, 80, 1, 20, 0, 1],
      ['pomegranate-juice', 'Pomegranate Juice', 'Hand-pressed fresh pomegranate', 'Juices', '🍇', 10, 'Easy', 100, 130, 1, 32, 0, 1],
      ['carrot-juice', 'Carrot-Beetroot-Apple', 'Cold-pressed root juice', 'Juices', '🥕', 10, 'Easy', 80, 100, 2, 24, 0, 3],
      ['amla-juice', 'Amla Juice', 'Indian gooseberry, lemon, honey', 'Juices', '🟢', 10, 'Easy', 80, 60, 0, 16, 0, 2],
      ['sugarcane-juice', 'Sugarcane Juice', 'Pressed cane with lemon-mint', 'Juices', '🎋', 5, 'Easy', 40, 180, 0, 44, 0, 0],
      ['nimbu-pani', 'Nimbu Pani', 'Lemon, mint, salt, sugar refresher', 'Coolers', '🍋', 5, 'Easy', 30, 80, 0, 22, 0, 0],
      ['jal-jeera', 'Jal Jeera', 'Cumin-mint tangy cooler', 'Coolers', '🌿', 10, 'Easy', 40, 40, 0, 10, 0, 0],
      ['aam-panna', 'Aam Panna', 'Raw mango with mint cooler', 'Coolers', '🥭', 30, 'Medium', 60, 120, 1, 30, 0, 1],
      ['virgin-mojito', 'Virgin Mojito', 'Mint-lime fizz', 'Mocktails', '🍃', 5, 'Easy', 100, 80, 0, 22, 0, 0],
      ['blue-lagoon', 'Blue Lagoon', 'Blue curaçao-flavored citrus mocktail', 'Mocktails', '💙', 5, 'Easy', 120, 140, 0, 36, 0, 0],
      ['shirley-temple', 'Shirley Temple', 'Ginger ale, grenadine, cherry', 'Mocktails', '🍒', 5, 'Easy', 100, 160, 0, 42, 0, 0],
      ['pina-colada-virgin', 'Virgin Piña Colada', 'Pineapple-coconut blended', 'Mocktails', '🍍', 5, 'Easy', 140, 220, 2, 38, 8, 2],
      ['fruit-punch', 'Fruit Punch', 'Multi-fruit fizz with orange-pineapple', 'Mocktails', '🍹', 10, 'Easy', 120, 140, 0, 36, 0, 1],
      ['rose-milk', 'Rose Milk', 'Cold milk with rose syrup, basil seeds', 'Coolers', '🌹', 5, 'Easy', 60, 160, 4, 28, 4, 0],
      ['cucumber-lemonade', 'Cucumber Lemonade', 'Cucumber, mint, lemon, fizz', 'Coolers', '🥒', 10, 'Easy', 60, 80, 0, 22, 0, 1],
      ['iced-tea', 'Lemon Iced Tea', 'Brewed black tea, lemon, mint, ice', 'Coolers', '🧊', 15, 'Easy', 60, 60, 0, 16, 0, 0],
      ['masala-buttermilk', 'Masala Chaas', 'Spiced buttermilk, ginger, curry leaf', 'Coolers', '🥛', 10, 'Easy', 40, 80, 4, 8, 4, 0],
      ['kokum-sherbet', 'Kokum Sherbet', 'Tangy Konkan cooler', 'Coolers', '🟣', 15, 'Easy', 50, 100, 0, 26, 0, 0],
    ],
  };

  // Flatten all category stubs into RECIPES map
  Object.entries(STUBS_BY_CAT).forEach(([cat, list]) => {
    list.forEach(([id, title, sub, subcat, emoji, totalMin, difficulty, baseCost, cal, prot, carb, fat, fib]) => {
      RECIPES[id] = {
        id,
        title,
        sub,
        cuisine: CAT_CUISINE[cat],
        emoji,
        category: cat,
        subcat,
        heroGradient: CAT_HERO[cat],
        baseServings: 4,
        totalMin,
        difficulty,
        baseCost,
        nutrition: { calories: cal, protein: prot, carbs: carb, fats: fat, fiber: fib },
        isStub: true,
        youtube: yt(title),
      };
    });
  });

  // Expose globally
  window.GG_RECIPES = RECIPES;

  // Helper for the recipe screen
  window.GG_GET_RECIPE = function (id) {
    return RECIPES[id] || null;
  };

  // Helper for category screen — get all recipes in a category
  window.GG_GET_BY_CATEGORY = function (cat) {
    return Object.values(RECIPES).filter(r => (r.category || 'non') === cat);
  };

})();
