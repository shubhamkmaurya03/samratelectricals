/* ==========================================================
   Samrat Electricals — site script
   Edit the CONFIG block below to update contact details
   everywhere on the website at once.
   ========================================================== */
const CONFIG = {
  name: "Samrat Electricals",
  hindiName: "सम्राट इलेक्ट्रिकल्स",
  phone: "7905664929",
  whatsapp: "7905664929",
  email: "samratelectricalstore@gmail.com",
  addressLine1: "Gopalpur, Korauta",
  addressLine2: "Varanasi, Uttar Pradesh",
  mapQuery: "Gopalpur, Korauta, Varanasi, Uttar Pradesh",
  hours: [
    // [day label, timing]  — index 0 = Monday
    ["Monday", "9:30 AM – 9:00 PM"],
    ["Tuesday", "9:30 AM – 9:00 PM"],
    ["Wednesday", "9:30 AM – 9:00 PM"],
    ["Thursday", "9:30 AM – 9:00 PM"],
    ["Friday", "9:30 AM – 9:00 PM"],
    ["Saturday", "9:30 AM – 9:00 PM"],
    ["Sunday", "10:00 AM – 8:00 PM"],
  ],
  // Add links to show social icons in the footer (leave "" to hide)
  social: { facebook: "", instagram: "", youtube: "" },
};

const phoneHref = () => `tel:+91${CONFIG.phone}`;
const phoneLabel = () => `+91 ${CONFIG.phone.slice(0, 5)} ${CONFIG.phone.slice(5)}`;
const waHref = (text = "Hello Samrat Electricals! I would like to know more about your products.") =>
  `https://wa.me/91${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const mapHref = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapQuery)}`;

/* ---------------- Icons ---------------- */
const s = (body, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${body}</svg>`;

const ICONS = {
  tv: s('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8l3-2" opacity=".5"/>'),
  fridge: s('<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14M9 5v2.5M9 13v3.5"/>'),
  washer: s('<rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 7h18"/><circle cx="12" cy="14.5" r="4.5"/><path d="M9.5 15.5c1.2-.9 3.8.9 5 0"/><path d="M6.5 4.5h.01M9 4.5h.01M14 4.5h4"/>'),
  ac: s('<rect x="2" y="4" width="20" height="9" rx="2"/><path d="M6 10h12"/><path d="M7 16.5v2M12 16v4M17 16.5v2"/>'),
  cooler: s('<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M8 6h8M8 9h8M8 12h8"/><circle cx="12" cy="17" r="2"/>'),
  fan: s('<circle cx="12" cy="9" r="7"/><circle cx="12" cy="9" r="1.5"/><path d="M12 7.5c-.6-2.6 1.2-3.8 2.6-2.6M13.3 9.8c2.4.9 2.3 3.1.5 3.4M10.7 9.6c-2.1 1.4-3.8-.2-2.8-1.9"/><path d="M12 16v4M8 21h8"/>'),
  induction: s('<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="11" r="4.5"/><circle cx="12" cy="11" r="2"/><path d="M7 16.5h2M11 16.5h2M15 16.5h2"/>'),
  kettle: s('<path d="M7 9h8l1.5 11h-11z"/><path d="M8.5 6h5M11 4v2"/><path d="M16 11h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1.2"/><path d="M7.3 11.5L4 9"/><path d="M5 21h12"/>'),
  blower: s('<rect x="3" y="3" width="18" height="15" rx="3"/><circle cx="12" cy="10.5" r="4.5"/><path d="M9.8 8.3l4.4 4.4M14.2 8.3l-4.4 4.4"/><path d="M8.5 18v3M15.5 18v3M6.5 21h4M13.5 21h4"/>'),
  cable: s('<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3.5"/><path d="M10 6.5V3"/><path d="M17 10v6a3 3 0 0 0 3 3h2"/>'),
  pipe: s('<path d="M3 6h10a8 8 0 0 1 8 8v7"/><path d="M3 12h10a2 2 0 0 1 2 2v7"/><path d="M3 6v6M15 21h6"/><path d="M8 6v6" opacity=".5"/>'),
  fanbox: s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><path d="M12 8.5v3.5a1.5 1.5 0 0 0 3 0"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>'),
  lightbox: s('<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M5.5 5.5h.01M18.5 5.5h.01M5.5 18.5h.01M18.5 18.5h.01"/><path d="M12 9.5v5M9.5 12h5" opacity=".5"/>'),
  meter: s('<rect x="4" y="2" width="16" height="20" rx="2"/><rect x="7" y="5" width="10" height="5" rx="1"/><path d="M9 7.5h.01M12 7.5h.01M15 7.5h.01"/><circle cx="12" cy="15.5" r="3"/><path d="M12 15.5l1.6-1.6"/>'),
  lighting: s('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/><path d="M12 7l-1.5 3h3L12 13"/>'),
  electrical: s('<rect x="4" y="4" width="16" height="16" rx="3"/><rect x="9" y="7" width="6" height="10" rx="1.5"/><path d="M12 9v2.5"/>'),
  power: s('<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V5h3v2M14 7V5h3v2M7 13h3M14 13h3M15.5 11.5v3"/>'),
  water: s('<rect x="6" y="2" width="12" height="16" rx="6"/><path d="M9 21v-3M15 21v-3"/><path d="M12 6.5c-1.5 1.8-2 2.7-2 3.5a2 2 0 0 0 4 0c0-.8-.5-1.7-2-3.5z"/>'),
  iron: s('<path d="M3 18h17a1 1 0 0 0 1-1v-1a6 6 0 0 0-6-6H9"/><path d="M9 10V7a1 1 0 0 1 1-1h7"/><path d="M3 18l2.5-6H9"/><path d="M8 15h.01M11 15h.01"/>'),
  // UI icons
  phone: s('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
  pin: s('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'),
  clock: s('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  menu: s('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  close: s('<path d="M18 6L6 18M6 6l12 12"/>'),
  check: s('<circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16 9.5"/>'),
  shield: s('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>'),
  truck: s('<path d="M1 4h14v12H1zM15 9h4l3 3v4h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>'),
  tag: s('<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><path d="M7 7h.01"/>'),
  tools: s('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>'),
  headset: s('<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'),
  bolt: s('<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>'),
  award: s('<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9L7 22l5-3 5 3-1.2-8.1"/>'),
  users: s('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
  heart: s('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>'),
  search: s('<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>'),
  rupee: s('<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>'),
  plug: s('<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>'),
  arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>',
  instagram: s('<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1z"/></svg>',
};

/* ---------------- Catalogue ---------------- */
const CATEGORIES = [
  { id: "tv", name: "Televisions", note: "LED · Smart · 4K" },
  { id: "fridge", name: "Refrigerators", note: "Single · Double door" },
  { id: "washer", name: "Washing Machines", note: "Semi · Fully automatic" },
  { id: "ac", name: "Air Conditioners", note: "Split · Window" },
  { id: "cooler", name: "Air Coolers", note: "Desert · Personal" },
  { id: "fan", name: "Fans", note: "Ceiling · Table · BLDC" },
  { id: "lighting", name: "Lighting", note: "LED · Decorative" },
  { id: "cable", name: "Wires & Cables", note: "House wire · Cable" },
  { id: "electrical", name: "Wiring Accessories", note: "Pipe · Fan box · Light box" },
  { id: "power", name: "Inverters & Batteries", note: "Inverter · Stabilizer" },
  { id: "water", name: "Geysers", note: "Instant · Storage" },
  { id: "iron", name: "Press, Induction & More", note: "Press · Kettle · Blower" },
];

const PRODUCTS = [
  { cat: "tv", icon: "tv", name: "LED & Smart TVs", desc: "32\" to 65\" HD, Full HD and 4K smart TVs with Android / Google TV, OTT apps and great sound.", brands: "LG · Samsung · Sony · Mi", tag: "Bestseller", featured: true },
  { cat: "fridge", icon: "fridge", name: "Single Door Refrigerators", desc: "Direct-cool fridges with stabilizer-free operation, perfect for small families.", brands: "Whirlpool · Godrej · LG · Haier", featured: true },
  { cat: "fridge", icon: "fridge", name: "Double Door & Frost-Free", desc: "Spacious frost-free refrigerators with inverter compressors and convertible modes.", brands: "Samsung · LG · Whirlpool" },
  { cat: "washer", icon: "washer", name: "Fully Automatic Washers", desc: "Top-load and front-load machines with multiple wash programs and inbuilt heaters.", brands: "LG · Samsung · IFB · Whirlpool", featured: true },
  { cat: "washer", icon: "washer", name: "Semi-Automatic Washers", desc: "Twin-tub machines — economical, water-efficient and easy to use.", brands: "Whirlpool · Godrej · LG" },
  { cat: "ac", icon: "ac", name: "Inverter Split ACs", desc: "1 to 2 ton energy-saving inverter ACs with copper condenser and fast cooling.", brands: "Voltas · LG · Daikin · Lloyd", tag: "Summer Pick" },
  { cat: "ac", icon: "ac", name: "Window ACs", desc: "Reliable window ACs for rooms and shops, easy to install and maintain.", brands: "Voltas · Lloyd · Blue Star" },
  { cat: "cooler", icon: "cooler", name: "Desert & Personal Coolers", desc: "Powerful air throw, honeycomb pads and large tanks for Varanasi summers.", brands: "Bajaj · Symphony · Crompton" },
  { cat: "fan", icon: "fan", name: "Ceiling Fans & BLDC Fans", desc: "Decorative and high-speed ceiling fans, plus energy-saving BLDC models with remote.", brands: "Havells · Crompton · Orient · Usha", tag: "Energy Saver", featured: true },
  { cat: "fan", icon: "fan", name: "Table, Pedestal & Wall Fans", desc: "Portable fans and exhaust fans for every room, kitchen and bathroom.", brands: "Bajaj · Usha · Orient" },
  { cat: "lighting", icon: "lighting", name: "LED Bulbs, Tubes & Panels", desc: "Bright, long-life LED lighting for homes, shops and offices at the best price.", brands: "Philips · Syska · Havells · Wipro" },
  { cat: "lighting", icon: "lighting", name: "Decorative & Festive Lights", desc: "Strip lights, jhalars, wall lamps and fancy lights for every occasion.", brands: "Philips · Havells · Local brands" },
  { cat: "cable", icon: "cable", name: "House Wires (FR / FRLS)", desc: "ISI-marked copper house wires from 0.75 to 6 sq mm — full coils or by the metre.", brands: "Polycab · Havells · Finolex · KEI", featured: true },
  { cat: "cable", icon: "plug", name: "Cables", desc: "Multi-core flexible cables, main/service cables, submersible cables and TV & LAN cables.", brands: "Polycab · Havells · Finolex · RR Kabel" },
  { cat: "electrical", icon: "pipe", name: "Wiring Pipes & Fittings", desc: "PVC conduit pipes in medium and heavy gauge with bends, junction boxes and saddles for concealed and surface wiring.", brands: "ISI-marked brands", featured: true },
  { cat: "electrical", icon: "fanbox", name: "Fan Boxes", desc: "Concealed ceiling fan boxes with strong hooks for safe fan fitting in new roof slabs.", brands: "ISI-marked brands" },
  { cat: "electrical", icon: "lightbox", name: "Light Boxes & Concealed Boxes", desc: "Ceiling light boxes and modular concealed boxes for switches and sockets — all module sizes.", brands: "Anchor · Havells · GM" },
  { cat: "electrical", icon: "electrical", name: "Modular Switches & Sockets", desc: "Stylish modular switches, sockets, plates and boards for new and old homes.", brands: "Anchor · Havells · Legrand · GM" },
  { cat: "electrical", icon: "bolt", name: "MCBs & Distribution Boards", desc: "MCBs, RCCBs, isolators and DB boxes to keep your home wiring safe.", brands: "Havells · Legrand · Schneider · Polycab" },
  { cat: "electrical", icon: "meter", name: "Electric Meters", desc: "Single-phase and three-phase energy meters and sub-meters for homes, shops and tenants.", brands: "Single & three phase models" },
  { cat: "power", icon: "power", name: "Inverter & Battery Combos", desc: "Home UPS with tubular batteries to keep fans and lights running during power cuts.", brands: "Luminous · Microtek · Exide · Amaron", tag: "Power Backup" },
  { cat: "power", icon: "bolt", name: "Voltage Stabilizers", desc: "Stabilizers for ACs, refrigerators and TVs to protect them from voltage fluctuation.", brands: "V-Guard · Microtek · Luminous" },
  { cat: "water", icon: "water", name: "Geysers (Instant & Storage)", desc: "3L to 25L water heaters with safety valves and rust-proof tanks — hot water all winter.", brands: "Havells · Bajaj · Crompton · AO Smith", tag: "Winter Pick", featured: true },
  { cat: "iron", icon: "iron", name: "Electric Press (Iron)", desc: "Dry and steam presses with non-stick soleplates — light, safe and quick for daily ironing.", brands: "Philips · Bajaj · Usha · Orpat" },
  { cat: "iron", icon: "induction", name: "Induction Cooktops", desc: "Energy-saving induction chulhas with auto-cut, Indian cooking presets and touch controls.", brands: "Prestige · Philips · Pigeon · Bajaj" },
  { cat: "iron", icon: "kettle", name: "Electric Kettles", desc: "1L to 1.8L stainless-steel kettles — tea, coffee and hot water in minutes.", brands: "Prestige · Pigeon · Philips · Bajaj" },
  { cat: "iron", icon: "blower", name: "Room Heater Blowers", desc: "Fan heaters / blowers for quick warmth in winter, with thermostat and overheat protection.", brands: "Bajaj · Usha · Orpat · Havells", tag: "Winter Pick", featured: true },
];

const BRANDS = ["LG", "Samsung", "Sony", "Whirlpool", "Godrej", "Haier", "Voltas", "Daikin", "Bajaj", "Havells", "Crompton", "Orient", "Usha", "Philips", "Syska", "Prestige", "Polycab", "Anchor", "Luminous", "Exide", "V-Guard", "Symphony"];

const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || "";

/* ---------------- Layout (header / footer) ---------------- */
const NAV = [
  ["index.html", "Home", "home"],
  ["products.html", "Products", "products"],
  ["services.html", "Services", "services"],
  ["about.html", "About Us", "about"],
  ["contact.html", "Contact", "contact"],
];

function renderHeader(page) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar__group">
          <a class="topbar__item" href="${mapHref()}" target="_blank" rel="noopener">${ICONS.pin}${CONFIG.addressLine1}, ${CONFIG.addressLine2}</a>
          <span class="topbar__item">${ICONS.clock}Open all 7 days</span>
        </div>
        <div class="topbar__group topbar__group--right">
          <a class="topbar__item" href="${phoneHref()}">${ICONS.phone}${phoneLabel()}</a>
          <a class="topbar__item" href="${waHref()}" target="_blank" rel="noopener">${ICONS.whatsapp}WhatsApp us</a>
        </div>
      </div>
    </div>
    <header class="header" id="header">
      <div class="container">
        <a href="index.html" class="brand" aria-label="${CONFIG.name} — Home">
          <img src="assets/img/logo-mark.svg" alt="" width="52" height="52">
          <span class="brand__text"><span class="brand__name">SAMRAT</span><span class="brand__sub">ELECTRICALS</span></span>
        </a>
        <nav class="nav" id="nav" aria-label="Main">
          ${NAV.map(([href, label, key]) => `<a class="nav__link${key === page ? " is-active" : ""}" href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          <a class="btn btn--gold btn--sm nav__cta" href="${phoneHref()}">${ICONS.phone}Call Now</a>
        </nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav">${ICONS.menu}</button>
      </div>
    </header>`;

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  });
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const socials = Object.entries(CONFIG.social).filter(([, url]) => url);
  el.innerHTML = `
    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <a href="index.html" class="brand">
            <img src="assets/img/logo-mark.svg" alt="" width="52" height="52">
            <span class="brand__text"><span class="brand__name">SAMRAT</span><span class="brand__sub">ELECTRICALS</span></span>
          </a>
          <p class="footer__about">Your trusted neighbourhood shop for home appliances, electricals and lighting in Korauta, Varanasi. Genuine brands, honest prices, reliable service.</p>
          ${socials.length ? `<div class="socials">${socials.map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`).join("")}</div>` : ""}
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>${CATEGORIES.slice(0, 8).map((c) => `<li><a href="products.html?cat=${c.id}#catalog">${c.name}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Visit Our Shop</h4>
          <ul class="footer__contact">
            <li>${ICONS.pin}<a href="${mapHref()}" target="_blank" rel="noopener">${CONFIG.name}<br>${CONFIG.addressLine1},<br>${CONFIG.addressLine2}</a></li>
            <li>${ICONS.phone}<a href="${phoneHref()}">${phoneLabel()}</a></li>
            ${CONFIG.email ? `<li>${ICONS.mail}<a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>` : ""}
            <li>${ICONS.clock}<span>Mon–Sat: ${CONFIG.hours[0][1]}<br>Sun: ${CONFIG.hours[6][1]}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <span>© ${new Date().getFullYear()} ${CONFIG.name}, Varanasi. All rights reserved.</span>
          <span>${CONFIG.hindiName} — विश्वास का दूसरा नाम</span>
        </div>
      </div>
    </footer>
    <div class="fab">
      <a class="fab__wa" href="${waHref()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.whatsapp}</a>
      <a class="fab__call" href="${phoneHref()}" aria-label="Call ${CONFIG.name}">${ICONS.phone}</a>
    </div>`;
}

/* ---------------- Components ---------------- */
function categoryCard(c) {
  return `<a class="cat reveal" href="products.html?cat=${c.id}#catalog">
    <span class="cat__ico">${ICONS[c.id]}</span>
    <h3>${c.name}</h3><span>${c.note}</span></a>`;
}

function productCard(p) {
  const msg = `Hello Samrat Electricals! I'm interested in "${p.name}". Please share the price and available models.`;
  return `<article class="product reveal" data-cat="${p.cat}">
    <div class="product__media">${p.tag ? `<span class="product__tag">${p.tag}</span>` : ""}${ICONS[p.icon]}</div>
    <div class="product__body">
      <span class="product__cat">${catName(p.cat)}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="product__brands"><strong>Brands:</strong> ${p.brands}</div>
      <div class="product__actions">
        <a class="btn btn--whatsapp" href="${waHref(msg)}" target="_blank" rel="noopener">${ICONS.whatsapp}Enquire</a>
        <a class="btn btn--outline" href="${phoneHref()}" aria-label="Call about ${p.name}">${ICONS.phone}Call</a>
      </div>
    </div></article>`;
}

function fillSlots() {
  // Generic data-bindings used in page HTML
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = ICONS[el.dataset.icon] || ""; });
  document.querySelectorAll("[data-phone-link]").forEach((el) => { el.href = phoneHref(); });
  document.querySelectorAll("[data-phone-text]").forEach((el) => { el.textContent = phoneLabel(); });
  document.querySelectorAll("[data-wa-link]").forEach((el) => { el.href = waHref(el.dataset.waLink || undefined); el.target = "_blank"; el.rel = "noopener"; });
  document.querySelectorAll("[data-map-link]").forEach((el) => { el.href = mapHref(); el.target = "_blank"; el.rel = "noopener"; });
  document.querySelectorAll("[data-email]").forEach((el) => {
    if (CONFIG.email) { el.querySelector("a").href = `mailto:${CONFIG.email}`; el.querySelector("a").textContent = CONFIG.email; }
    else el.remove();
  });
  document.querySelectorAll("[data-map]").forEach((el) => {
    el.innerHTML = `<iframe title="Map showing ${CONFIG.name}, ${CONFIG.addressLine1}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      src="https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&z=14&output=embed"></iframe>`;
  });
  const hours = document.getElementById("hours");
  if (hours) {
    const today = (new Date().getDay() + 6) % 7; // Monday = 0
    hours.innerHTML = CONFIG.hours.map(([d, t], i) => `<tr class="${i === today ? "is-today" : ""}"><td>${d}${i === today ? " (Today)" : ""}</td><td>${t}</td></tr>`).join("");
  }
}

function renderCategories() {
  const el = document.getElementById("categories");
  if (el) el.innerHTML = CATEGORIES.map(categoryCard).join("");
}

function renderFeatured() {
  const el = document.getElementById("featured");
  if (el) el.innerHTML = PRODUCTS.filter((p) => p.featured).slice(0, 8).map(productCard).join("");
}

function renderBrands() {
  const el = document.getElementById("brands");
  if (!el) return;
  const pills = BRANDS.map((b) => `<span class="brand-pill">${b}</span>`).join("");
  el.innerHTML = `<div class="brands__track">${pills}${pills.replace(/<span/g, '<span aria-hidden="true"')}</div>`;
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  const filters = document.getElementById("filters");
  const search = document.getElementById("search");
  const empty = document.getElementById("empty");
  let active = new URLSearchParams(location.search).get("cat") || "all";
  if (active !== "all" && !CATEGORIES.some((c) => c.id === active)) active = "all";

  const cats = [{ id: "all", name: "All Products" }, ...CATEGORIES];
  filters.innerHTML = cats.map((c) => `<button class="filter" type="button" data-cat="${c.id}">${c.name}</button>`).join("");
  grid.innerHTML = PRODUCTS.map(productCard).join("");

  const apply = () => {
    const q = (search.value || "").trim().toLowerCase();
    let shown = 0;
    filters.querySelectorAll(".filter").forEach((b) => {
      const on = b.dataset.cat === active;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    });
    grid.querySelectorAll(".product").forEach((card, i) => {
      const p = PRODUCTS[i];
      const text = `${p.name} ${p.desc} ${p.brands} ${catName(p.cat)}`.toLowerCase();
      const ok = (active === "all" || p.cat === active) && (!q || text.includes(q));
      card.style.display = ok ? "" : "none";
      if (ok) { shown++; card.classList.add("is-visible"); }
    });
    empty.style.display = shown ? "none" : "block";
  };

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    active = btn.dataset.cat;
    const url = new URL(location.href);
    if (active === "all") url.searchParams.delete("cat"); else url.searchParams.set("cat", active);
    history.replaceState(null, "", url);
    apply();
  });
  search.addEventListener("input", apply);
  apply();
}

function initContactForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;
  const select = form.querySelector("#interest");
  select.innerHTML = `<option value="">Select a category</option>` +
    CATEGORIES.map((c) => `<option>${c.name}</option>`).join("") +
    `<option>Installation / Repair Service</option><option>Other</option>`;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    const text = [
      `Hello ${CONFIG.name}!`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      d.interest ? `Interested in: ${d.interest}` : "",
      d.message ? `Message: ${d.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(waHref(text), "_blank", "noopener");
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  renderHeader(page);
  renderFooter();
  renderCategories();
  renderFeatured();
  renderBrands();
  renderCatalog();
  fillSlots();
  initContactForm();
  initReveal();
});
