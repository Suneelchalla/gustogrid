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
  // STUB RECIPES (12)
  // Render with hero + metadata + "Detailed recipe in development"
  // ============================================================

  const STUBS = [
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

  // Flatten stubs into the recipes map
  STUBS.forEach(s => {
    RECIPES[s.id] = {
      ...s,
      isStub: true,
      youtube: yt(s.title),
    };
  });

  // Expose globally
  window.GG_RECIPES = RECIPES;

  // Helper for the recipe screen
  window.GG_GET_RECIPE = function (id) {
    return RECIPES[id] || null;
  };

})();
