# 🛒 NovaBuy — E-Commerce Frontend Challenge

A fully functional multi-page e-commerce storefront built with **HTML, CSS, and vanilla JavaScript**. This project is designed as a **debugging challenge** — it contains **20 intentional bugs** hidden throughout the codebase for you to find and fix.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- No build tools, frameworks, or package managers needed!

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-dev-challenge-1
   ```

2. **Open in browser**
   
   Simply open `index.html` in your browser:
   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```

   Or use a local dev server for a better experience:
   ```bash
   # Using Python
   python3 -m http.server 8080

   # Using Node.js
   npx serve .
   ```
   Then navigate to `http://localhost:8080`

---

## 📁 Project Structure

```
web-dev-challenge-1/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # All styles (dark theme, glassmorphism)
├── js/
│   ├── data.js         # Product data (16 items)
│   ├── app.js          # UI rendering, filters, modal
│   └── cart.js         # Cart state & calculations
└── README.md           # You are here
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Product Listing** | Grid of product cards with images, prices, ratings, and sale badges |
| **Category Filters** | Filter by Electronics, Fashion, Home, Sports, or view All |
| **Search** | Real-time product search by name |
| **Product Detail Modal** | Click any product to see full details, description, and quantity selector |
| **Add to Cart** | Add products from the grid or modal with quantity control |
| **Cart Sidebar** | Slide-in cart panel with item list, quantity controls, and total |
| **Responsive Design** | Adapts from desktop (4-col) to tablet (2-col) to mobile (1-col) |
| **Toast Notifications** | Visual feedback when items are added to cart |
| **Dark Theme** | Premium dark UI with purple-cyan gradient accents and glassmorphism |

---

## 🐛 The Bug Challenge

This project contains **several intentional bugs** across the HTML, CSS, and JavaScript files. The bugs cover a range of categories:

- 🧮 **Calculation errors** — Cart totals that don't add up correctly
- 🔄 **State management issues** — Items not updating or persisting properly
- 📱 **Layout/CSS bugs** — Responsive design breaking on certain screens
- 🔍 **Search/filter logic** — Filters not behaving as expected
- ♿ **Accessibility issues** — Missing or incorrect attributes
- 🎨 **Display bugs** — UI elements not rendering correctly

### How to Participate

1. Clone the repo and open the project
2. Explore the application — interact with every feature
3. Read through the source code carefully
4. Document each bug you find with:
   - **File & line number** where the bug exists
   - **Description** of the incorrect behavior
   - **Fix** — the corrected code
5. Submit your findings!

### Hints

- Pay attention to **data types** — JavaScript can be sneaky with type coercion
- Test **edge cases** — what happens with zero quantities? Empty carts?
- **Resize your browser** — do all layouts work correctly?
- Try **different search terms** — is the search robust?
- **Refresh the page** — does your cart persist?
- Look at the **product detail modal** — are prices displayed correctly?
- Check the **star ratings** — do they match the data?
- Watch the **cart badge** — does it show the right count?

---

## 📌 Special Notes

- **"Proceed to Checkout" button** — This button in the cart sidebar is non-functional. It does not navigate anywhere or trigger any action. This is a frontend-only debugging challenge, not a full e-commerce application, so checkout flow is intentionally omitted.
- **Navigation links** — The header links (Home, Deals, New Arrivals, About) and footer links are placeholder `<a href="#">` tags. They do not navigate to separate pages. The entire app lives on a single `index.html` page.
- **Product images** — All product images are served via Unsplash hotlinks. An active internet connection is required for images to load. If an image fails to load, you'll see a broken image icon — this is not a bug.
- **No backend** — There is no server, database, or API. All data is hardcoded in `js/data.js`. Cart state exists only in-memory (localStorage persistence is one of the bugs to fix).
- **Code style** — The JavaScript is intentionally dense, minified-looking, and uses cryptic variable names. This is by design to make the debugging challenge harder — it is not a bug.

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, backdrop-filter, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter typeface
- **Unsplash** — Product images via hotlink

---

## 📝 License

This project was built for the **GDG Web Dev Challenge**. Feel free to use it for learning and practice.
