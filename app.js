const config = window.SAN_CRAFTS_CONFIG;

const products = [
  {
    id: "necklace-ostrich-eggshell-tassel",
    name: "Ostrich Eggshell Tassel Necklace",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 420,
    description: "A long handwoven ostrich eggshell necklace with earthy geometric accents and rich brown tassel ends.",
    palette: "sunset",
    badge: "Featured",
    images: [
      "assets/ostrich-eggshell-tassel-necklace-detail.jpg",
      "assets/ostrich-eggshell-tassel-necklace-styled.jpg",
    ],
  },
  {
    id: "choker-natural-roll",
    name: "Natural Rolled Ostrich Eggshell Choker",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 420,
    description: "A close-fitting handwoven choker with softly rolled ostrich eggshell beadwork and subtle natural accents.",
    palette: "earth",
    images: ["assets/rolled-ostrich-eggshell-choker-natural.jpg"],
  },
  {
    id: "choker-earth-stripe",
    name: "Earth-Stripe Rolled Ostrich Eggshell Choker",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 420,
    description: "A rolled ostrich eggshell choker patterned with warm earthy stripes for a bold, natural finish.",
    palette: "earth",
    images: ["assets/rolled-ostrich-eggshell-choker-earth-stripe.jpg"],
  },
  {
    id: "choker-spiral-stripe",
    name: "Spiral-Stripe Rolled Ostrich Eggshell Choker",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 420,
    description: "A handwoven rolled ostrich eggshell choker featuring a flowing spiral stripe pattern in natural earth tones.",
    palette: "earth",
    images: ["assets/rolled-ostrich-eggshell-choker-spiral-stripe.jpg"],
  },
  {
    id: "basket-earth",
    name: "Earth Weave Basket",
    category: "woven",
    categoryLabel: "Woven",
    price: 580,
    description: "A small decorative basket with a natural, structured weave.",
    palette: "earth",
  },
  {
    id: "wall-disc",
    name: "Desert Pattern Wall Disc",
    category: "decor",
    categoryLabel: "Home decor",
    price: 690,
    description: "Textured wall art designed to bring warmth to quiet spaces.",
    palette: "desert",
  },
  {
    id: "bracelet-stack",
    name: "Ostrich Eggshell Hand Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven bracelet crafted with ostrich eggshell beads, finished with earthy brown accents and a button-and-loop closure.",
    palette: "night",
    images: [
      "assets/ostrich-eggshell-bracelet-worn.jpg",
      "assets/ostrich-eggshell-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-chevron",
    name: "Ostrich Eggshell Chevron Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell bracelet with a textured chevron pattern, earthy brown details and a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-chevron-bracelet-worn.jpg",
      "assets/ostrich-eggshell-chevron-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-centre-band",
    name: "Ostrich Eggshell Centre-Band Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell bracelet featuring a bold earthy brown centre band and a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-centre-band-bracelet-worn.jpg",
      "assets/ostrich-eggshell-centre-band-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-earth-stripe",
    name: "Ostrich Eggshell Earth-Stripe Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell bracelet accented with warm brown stripes and finished with a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-earth-stripe-bracelet-worn.jpg",
      "assets/ostrich-eggshell-earth-stripe-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-natural-weave",
    name: "Ostrich Eggshell Natural Weave Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A naturally elegant handwoven ostrich eggshell bracelet with an uninterrupted cream-toned weave and a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-natural-weave-bracelet-worn.jpg",
      "assets/ostrich-eggshell-natural-weave-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-earth-block",
    name: "Ostrich Eggshell Earth-Block Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell bracelet patterned with alternating cream and earthy brown blocks, finished with a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-earth-block-bracelet-worn.jpg",
      "assets/ostrich-eggshell-earth-block-bracelet-detail.jpg",
    ],
  },
  {
    id: "bracelet-twin-accent",
    name: "Ostrich Eggshell Twin-Accent Bracelet",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell bracelet with two understated earthy brown accents and a button-and-loop closure.",
    palette: "earth",
    images: [
      "assets/ostrich-eggshell-twin-accent-bracelet-worn.jpg",
      "assets/ostrich-eggshell-twin-accent-bracelet-detail.jpg",
    ],
  },
  {
    id: "cuff-mosaic",
    name: "Ostrich Eggshell Mosaic Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A wide ostrich eggshell cuff with a softly varied mosaic of natural cream and sand tones.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-mosaic-cuff.jpg"],
  },
  {
    id: "cuff-natural",
    name: "Ostrich Eggshell Natural Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A wide handwoven ostrich eggshell cuff in clean natural tones, finished with a button-and-loop closure.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-natural-cuff.jpg"],
  },
  {
    id: "cuff-classic-grid",
    name: "Ostrich Eggshell Classic Grid Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A structured ostrich eggshell cuff with a precise grid weave and an understated natural finish.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-classic-grid-cuff.jpg"],
  },
  {
    id: "cuff-organic-weave",
    name: "Ostrich Eggshell Organic Weave Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell cuff celebrating subtle variations in natural bead colour and texture.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-organic-weave-cuff.jpg"],
  },
  {
    id: "cuff-crossroads",
    name: "Ostrich Eggshell Crossroads Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A wide ostrich eggshell cuff featuring an intersecting earthy brown geometric pattern.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-crossroads-cuff.jpg"],
  },
  {
    id: "cuff-four-block",
    name: "Ostrich Eggshell Four-Block Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell cuff detailed with four evenly spaced earthy brown blocks.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-four-block-cuff.jpg"],
  },
  {
    id: "cuff-earth-bar",
    name: "Ostrich Eggshell Earth-Bar Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A bold ostrich eggshell cuff patterned with layered earthy brown bars across a natural cream weave.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-earth-bar-cuff.jpg"],
  },
  {
    id: "cuff-earth-dash",
    name: "Ostrich Eggshell Earth-Dash Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A streamlined ostrich eggshell cuff with a sequence of understated earthy brown dash accents.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-earth-dash-cuff.jpg"],
  },
  {
    id: "cuff-leather-trim",
    name: "Leather-Trim Ostrich Eggshell Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell cuff with geometric earth-tone accents, finished with genuine leather end straps and a button closure.",
    palette: "earth",
    images: ["assets/leather-trim-ostrich-eggshell-cuff.jpg"],
  },
  {
    id: "cuff-triple-diamond",
    name: "Ostrich Eggshell Triple-Diamond Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A wide handwoven ostrich eggshell cuff featuring three warm earth-tone diamond motifs and a button-and-loop closure.",
    palette: "earth",
    images: ["assets/ostrich-eggshell-triple-diamond-cuff.jpg"],
  },
  {
    id: "cuff-leather-dotted",
    name: "Leather-Trim Ostrich Eggshell Dotted Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell cuff with subtle earth-tone dot accents, genuine leather end straps and a button closure.",
    palette: "earth",
    images: ["assets/leather-trim-ostrich-eggshell-dotted-cuff.jpg"],
  },
  {
    id: "cuff-leather-circle-motif",
    name: "Leather-Trim Ostrich Eggshell Circle-Motif Cuff",
    category: "beadwork",
    categoryLabel: "Beadwork",
    price: 240,
    description: "A handwoven ostrich eggshell cuff with repeating earth-tone circle motifs, genuine leather end straps and a button closure.",
    palette: "earth",
    images: ["assets/leather-trim-ostrich-eggshell-circle-motif-cuff.jpg"],
  },
  {
    id: "gift-keyrings",
    name: "Beaded Keyring Pair",
    category: "gifts",
    categoryLabel: "Gifts",
    price: 160,
    description: "A colourful pair of small handmade keepsakes.",
    palette: "berry",
  },
  {
    id: "woven-tray",
    name: "Ochre Woven Tray",
    category: "woven",
    categoryLabel: "Woven",
    price: 510,
    description: "A shallow display tray with a bold concentric pattern.",
    palette: "ochre",
  },
  {
    id: "decor-vessel",
    name: "Painted Decorative Vessel",
    category: "decor",
    categoryLabel: "Home decor",
    price: 760,
    description: "An expressive decorative vessel for a shelf or table.",
    palette: "clay",
    badge: "One of a kind",
  },
  {
    id: "gift-set",
    name: "Small Celebration Gift Set",
    category: "gifts",
    categoryLabel: "Gifts",
    price: 350,
    description: "A ready-to-gift combination of small handcrafted pieces.",
    palette: "sage",
  },
];

const state = {
  filter: "all",
  search: "",
  basket: loadBasket(),
};

const elements = {
  grid: document.querySelector("#productGrid"),
  catalogueCount: document.querySelector("#catalogueCount"),
  emptyState: document.querySelector("#emptyState"),
  filterList: document.querySelector("#filterList"),
  searchInput: document.querySelector("#searchInput"),
  basketButton: document.querySelector("#basketButton"),
  basketCount: document.querySelector("#basketCount"),
  basketDrawer: document.querySelector("#basketDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  closeBasketButton: document.querySelector("#closeBasketButton"),
  basketItems: document.querySelector("#basketItems"),
  basketEmpty: document.querySelector("#basketEmpty"),
  basketFooter: document.querySelector("#basketFooter"),
  basketTotal: document.querySelector("#basketTotal"),
  sendEnquiryButton: document.querySelector("#sendEnquiryButton"),
  clearBasketButton: document.querySelector("#clearBasketButton"),
  toast: document.querySelector("#toast"),
};

function loadBasket() {
  try {
    return JSON.parse(localStorage.getItem("san-crafts-basket")) || {};
  } catch {
    return {};
  }
}

function saveBasket() {
  localStorage.setItem("san-crafts-basket", JSON.stringify(state.basket));
}

function formatMoney(value) {
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function productArtwork(product) {
  if (product.images?.length) {
    return `
      <div class="product-art product-photo">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        ${
          product.images[1]
            ? `<img class="product-photo-alt" src="${product.images[1]}" alt="${product.name}, alternate view" loading="lazy">`
            : ""
        }
      </div>
    `;
  }

  return `
    <div class="product-art art-${product.palette}" aria-hidden="true">
      <span class="art-shape shape-a"></span>
      <span class="art-shape shape-b"></span>
      <span class="art-shape shape-c"></span>
      <span class="art-pattern"></span>
    </div>
  `;
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();
  return products.filter((product) => {
    const categoryMatches = state.filter === "all" || product.category === state.filter;
    const searchMatches =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query);
    return categoryMatches && searchMatches;
  });
}

function renderProducts() {
  const visibleProducts = filteredProducts();
  elements.catalogueCount.textContent = `${visibleProducts.length} ${
    visibleProducts.length === 1 ? "piece" : "pieces"
  }`;
  elements.emptyState.hidden = visibleProducts.length !== 0;

  elements.grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual">
            ${productArtwork(product)}
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
          </div>
          <div class="product-info">
            <p class="product-category">${product.categoryLabel}</p>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-bottom">
              <strong>${formatMoney(product.price)}</strong>
              <button class="add-button" type="button" data-add-product="${product.id}">
                Add to enquiry
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function basketEntries() {
  return Object.entries(state.basket)
    .map(([id, quantity]) => ({
      product: products.find((product) => product.id === id),
      quantity,
    }))
    .filter((entry) => entry.product && entry.quantity > 0);
}

function renderBasket() {
  const entries = basketEntries();
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = entries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  elements.basketCount.textContent = itemCount;
  elements.basketEmpty.hidden = entries.length !== 0;
  elements.basketFooter.hidden = entries.length === 0;
  elements.basketTotal.textContent = formatMoney(total);

  elements.basketItems.innerHTML = entries
    .map(
      ({ product, quantity }) => `
        <article class="basket-item">
          ${productArtwork(product)}
          <div>
            <p>${product.categoryLabel}</p>
            <h3>${product.name}</h3>
            <strong>${formatMoney(product.price)}</strong>
            <div class="quantity-controls" aria-label="Quantity for ${product.name}">
              <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${quantity}</span>
              <button type="button" data-increase="${product.id}" aria-label="Increase quantity">+</button>
              <button class="remove-button" type="button" data-remove="${product.id}">Remove</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function updateQuantity(productId, change) {
  const current = state.basket[productId] || 0;
  const next = current + change;
  if (next <= 0) {
    delete state.basket[productId];
  } else {
    state.basket[productId] = next;
  }
  saveBasket();
  renderBasket();
}

function addToBasket(productId) {
  state.basket[productId] = (state.basket[productId] || 0) + 1;
  saveBasket();
  renderBasket();
  showToast("Added to your enquiry basket");
}

function openBasket() {
  elements.drawerBackdrop.hidden = false;
  requestAnimationFrame(() => {
    elements.drawerBackdrop.classList.add("visible");
    elements.basketDrawer.classList.add("open");
  });
  elements.basketDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  elements.closeBasketButton.focus();
}

function closeBasket() {
  elements.drawerBackdrop.classList.remove("visible");
  elements.basketDrawer.classList.remove("open");
  elements.basketDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  setTimeout(() => {
    elements.drawerBackdrop.hidden = true;
  }, 250);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

function createWhatsAppUrl(message) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function sendEnquiry() {
  const entries = basketEntries();
  if (!entries.length) return;

  const lines = entries.map(
    ({ product, quantity }, index) =>
      `${index + 1}. ${product.name} x${quantity} — ${formatMoney(product.price * quantity)}`
  );
  const total = entries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );
  const message = [
    `Hello ${config.businessName},`,
    "",
    "I would like to enquire about these pieces:",
    ...lines,
    "",
    `Estimated item total: ${formatMoney(total)}`,
    "",
    "Please confirm availability, delivery or collection, and payment details. Thank you.",
  ].join("\n");

  window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

function applyBusinessConfig() {
  document.querySelectorAll("[data-business-name]").forEach((element) => {
    element.textContent = config.businessName;
  });
  document.querySelector("#footerEmail").textContent = config.email;
  document.querySelector("#footerEmail").href = `mailto:${config.email}`;
  document.querySelector("#footerPhone").textContent = config.phoneDisplay;
  document.querySelector("#footerPhone").href = `tel:${config.whatsappNumber}`;
  document.querySelector("#generalWhatsAppLink").href = createWhatsAppUrl(
    `Hello ${config.businessName}, I would like to ask about your arts and crafts catalogue.`
  );
  document.querySelector("#year").textContent = new Date().getFullYear();
}

elements.filterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });
  renderProducts();
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

elements.grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-product]");
  if (button) addToBasket(button.dataset.addProduct);
});

elements.basketItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) updateQuantity(increase.dataset.increase, 1);
  if (decrease) updateQuantity(decrease.dataset.decrease, -1);
  if (remove) {
    delete state.basket[remove.dataset.remove];
    saveBasket();
    renderBasket();
  }
});

elements.basketButton.addEventListener("click", openBasket);
elements.closeBasketButton.addEventListener("click", closeBasket);
elements.drawerBackdrop.addEventListener("click", closeBasket);
elements.sendEnquiryButton.addEventListener("click", sendEnquiry);
elements.clearBasketButton.addEventListener("click", () => {
  state.basket = {};
  saveBasket();
  renderBasket();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeBasket();
});

applyBusinessConfig();
renderProducts();
renderBasket();
