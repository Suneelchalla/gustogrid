# GustoGrid — Mobile Cooking Guide PWA

A dark-mode, neon-accented Progressive Web App that turns recipes into operational kitchen briefs. Browse 280+ dishes, tap ingredients you have on hand to find dishes you can cook right now, scale portions live (1/2/4/6 servings), follow stove-heat-coded steps with real countdown timers, and watch demo videos.

**Brand**: obsidian dark (`#0A0A0B`) + sunset orange (`#FF6B35`) + amber (`#FFC233`) + mint (`#3DDC97`) + crimson (`#FF3D5A`)
**Type**: Multi-page PWA (4 standalone HTML files sharing a service worker)
**Tech**: React 18 UMD + Babel standalone, custom CSS, localStorage persistence

---

## 📦 What's inside

```
gustogrid-pwa/
├── index.html          # Home Dashboard — 7 category cards + fridge hero + My Creations
├── fridge.html         # What's in My Fridge? — 28-ingredient tappable grid, persists selection
├── category.html       # Non-Vegetarian browse — 18 recipes, sort/filter, fridge-match mode
├── recipe.html         # Butter Chicken — portion scaler, heat badges, live timers, Watch Demo
├── manifest.json       # PWA manifest with shortcuts to Fridge & Browse
├── sw.js               # Service worker (network-first HTML, cache-first assets)
├── theme.css           # Shared design tokens
├── icons/              # 192/512 + maskable + favicon + apple-touch
└── _generate_icons.py  # PIL script to regenerate icons (optional)
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to <https://github.com/new>
2. Name the repo something like `gustogrid` (this becomes part of your URL)
3. Set it to **Public** (Pages on private repos requires a paid plan)
4. **Don't** initialize with a README, .gitignore, or license — we'll push our own

### Step 2 — Push these files

Open a terminal in the folder containing all the files (`index.html`, `manifest.json`, etc.) and run:

```bash
git init
git add .
git commit -m "Initial GustoGrid PWA"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

Replace `<YOUR-USERNAME>` and `<REPO-NAME>` with your values.

### Step 3 — Enable GitHub Pages

1. On your repo page, click **Settings** → **Pages** (in the left sidebar)
2. Under **Source**, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

Wait ~30 seconds. The page will show your live URL:

```
https://<YOUR-USERNAME>.github.io/<REPO-NAME>/
```

### Step 4 — Verify it works

- Open the URL in Chrome/Edge desktop
- You should see the Home Dashboard with category cards and the fridge hero
- Open DevTools → **Application** tab → **Service Workers** to confirm `sw.js` is registered
- Open **Application** → **Manifest** to verify the install metadata

### Step 5 — Install as PWA

**Desktop (Chrome/Edge):**
- Look for the install icon in the address bar (a tiny download arrow / monitor icon)
- Click it → **Install**
- The app opens in its own window

**iOS Safari:**
- Open the URL in Safari (not Chrome — iOS PWA install only works through Safari)
- Tap the **Share** button → **Add to Home Screen**
- The app launches full-screen, no Safari chrome

**Android Chrome:**
- Open the URL → tap the **⋮** menu → **Install app** (or **Add to Home screen**)
- It'll install with the GustoGrid icon and launch in standalone mode

---

## 🔧 Local testing

Service workers require HTTPS or `localhost`. To test locally:

```bash
# Python 3 — simplest, no installs needed
python3 -m http.server 8000

# OR Node.js
npx serve .
```

Then open <http://localhost:8000>. Service workers and manifest work on `localhost` even without HTTPS.

---

## ✨ Features built so far

| Screen | What works |
|---|---|
| **Home** | 7 category cards (Vegetarian, Non-Veg, Continental, Chinese, Desserts, Snacks, Drinks) + My Creations + Fridge hero. Time-aware greeting. Install prompt when browser allows it. |
| **Fridge** | 28 ingredients across 5 categories. Tap to select — persists to localStorage. Category filter chips. Reset button. Live match counter. CTA navigates to category with fridge-mode on. |
| **Category** | 18 Non-Veg recipes. Sub-category chips (Poultry / Seafood / Meat / Starters). Sort dropdown (Popular / Fastest / Cheapest / Easiest / Match). List ↔ Grid view toggle. Fridge-match mode with % badges. Bookmarks persist. |
| **Recipe** | Butter Chicken with 12 ingredients & 8 steps. Portion multiplier 1/2/4/6 — every quantity, total cost, and per-serving cost reflows live. 5 nutrient rings (SVG dasharray, RDA %). Cost segments by category. Grocery checklist with strike-through. **Real countdown timers** per step (running → done state, card border glows orange→mint). Heat badges (off/low/med/high color-coded). Watch Demo FAB → YouTube. |

---

## 🐛 Why the artifact preview showed a black screen

The Claude.ai artifact iframe sandboxes external scripts aggressively, which breaks runtime React+Babel loading. On a real web server (GitHub Pages, Netlify, your own host), all files render correctly. The PWA conversion also dropped the Tailwind CDN, which was unused dead weight and added a misleading console warning.

---

## 🛠 Tech notes for future development

- **State persistence** uses plain `localStorage` with these keys:
  - `gg-fridge` → JSON array of selected ingredient names
  - `gg-bookmarks` → JSON array of saved recipe IDs
  - `gg-install-dismissed` → "1" if user dismissed install prompt
- **Routing** is multi-page (each screen = own `.html`). Query params drive variants: `category.html?cat=non&fridge=1` opens Non-Veg in fridge-match mode.
- **Cache strategy**: HTML pages network-first (so updates land fast when online), all other assets cache-first.
- To bump cache version (force users to re-fetch on next visit), edit `CACHE_VERSION` in `sw.js`.

### Regenerating icons

If you want to tweak the brand mark:

```bash
pip install Pillow
python3 _generate_icons.py
```

Edit colors and shapes in the script.

---

## ➡️ Next development steps

Suggested in order:
1. **My Creations** authoring flow (the last unbuilt screen from the original 8-card spec) — ingredient counter, step entry with stove heat dropdown, save to localStorage.
2. **Recipe data layer** — extract the embedded `RECIPE` constant into a JSON file, build a lookup so `recipe.html?id=<slug>` works for all 18+ dishes (not just butter chicken).
3. **Search screen** with global ingredient/recipe search across the catalog.
4. **Profile / Bookmarks screen** showing saved recipes in a grid.
5. **Real photo CDN integration** (Unsplash, your own bucket) to replace emoji placeholders on cards.
6. **Migration to a real build step** (Vite + React) once the design is locked — drops Babel-standalone runtime cost.

---

Built with ☕ and stove-heat-coded timers.
