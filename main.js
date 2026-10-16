/**
 * MAISON FORME — Luxury Furniture Product Showcase & Exhibition Platform
 * Interactive JavaScript Engine
 */

'use strict';

/* ================================================================
   1. Curated Exhibition Catalog Data
   ================================================================ */

const STANDARD_DOOR_HOTSPOTS = [
  {
    x: 36,
    y: 32,
    badge: '01 · Acoustic Insulation',
    title: 'Soundproof',
    desc: 'Sustainable sound insulation using recycled materials for peaceful spaces.'
  },
  {
    x: 64,
    y: 52,
    badge: '02 · Fire Safety',
    title: 'Fire Retardant',
    desc: 'Natural fire-resistant treatments for safety without toxic additives.'
  },
  {
    x: 44,
    y: 74,
    badge: '03 · Core Durability',
    title: 'No Cracking',
    desc: 'Sustainable composite materials prevent cracking and warping'
  }
];

const CHAROT_ECO_STORY_HTML = `
<div class="dossier-story-content">
  <h4 class="dossier-story-title">Sustainable Innovation Without Compromise</h4>
  <p class="dossier-story-intro">At Charot Eco Doors, we believe exceptional doors should deliver more than beautiful design. They should provide lasting durability, everyday comfort, and responsible performance. Our eco-door solutions combine innovative materials with practical features designed to meet the demands of modern living.</p>
  
  <div class="dossier-eco-features">
    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">01</span>
        <h5 class="eco-item-title">Soundproof</h5>
      </div>
      <p class="eco-item-tagline">Peace and privacy in every space.</p>
      <p class="eco-item-desc">Designed to help minimize unwanted noise, Charot Eco Doors focus on sound-insulating construction that creates quieter, more comfortable indoor environments. Ideal for homes, offices, and private spaces where peace and privacy matter.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">02</span>
        <h5 class="eco-item-title">Fire Retardant</h5>
      </div>
      <p class="eco-item-tagline">An added layer of protection.</p>
      <p class="eco-item-desc">With fire-conscious material choices and appropriate protective treatments, our doors are designed to support improved fire safety while maintaining a refined appearance. We believe responsible design should consider both aesthetics and protection.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">03</span>
        <h5 class="eco-item-title">Antibacterial</h5>
      </div>
      <p class="eco-item-tagline">A cleaner approach to modern living.</p>
      <p class="eco-item-desc">Our focus on hygienic surfaces and antimicrobial protection helps support cleaner indoor environments. Designed for everyday spaces, this feature combines practical surface care with a commitment to comfort and well-being.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">04</span>
        <h5 class="eco-item-title">Termite Resistant</h5>
      </div>
      <p class="eco-item-tagline">Protection against hidden damage.</p>
      <p class="eco-item-desc">Designed with durability in mind, our doors can incorporate resistant composite materials and appropriate protective treatments to help guard against termite damage. The result is a dependable solution for environments where long-term material protection matters.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">05</span>
        <h5 class="eco-item-title">Crack and Warp Resistant</h5>
      </div>
      <p class="eco-item-tagline">Built to maintain their form.</p>
      <p class="eco-item-desc">Our focus on durable composite construction helps improve dimensional stability and reduce the risk of cracking, swelling, and warping under suitable conditions. This supports a consistent appearance and reliable performance over time.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">06</span>
        <h5 class="eco-item-title">Formaldehyde-Free and Low-Emission</h5>
      </div>
      <p class="eco-item-tagline">A healthier approach to indoor spaces.</p>
      <p class="eco-item-desc">We prioritize responsible material selection to support better indoor environments. Products verified as formaldehyde-free and low-emission can help reduce exposure to certain indoor pollutants, bringing greater confidence to modern living.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">07</span>
        <h5 class="eco-item-title">Mold Resistant</h5>
      </div>
      <p class="eco-item-tagline">Designed for moisture-conscious living.</p>
      <p class="eco-item-desc">Our moisture-conscious design approach helps protect door surfaces against conditions that encourage mold growth. This feature is particularly valuable in humid environments, helping maintain a cleaner appearance and dependable performance with proper care.</p>
    </div>

    <div class="dossier-eco-item">
      <div class="eco-item-header">
        <span class="eco-item-num">08</span>
        <h5 class="eco-item-title">Eco-Friendly Materials</h5>
      </div>
      <p class="eco-item-tagline">Better choices for a more sustainable future.</p>
      <p class="eco-item-desc">Sustainability is an important part of our design philosophy. By prioritizing eco-conscious materials, resource efficiency, and durable construction where possible, Charot Eco Doors aims to balance environmental responsibility with strength, functionality, and contemporary style.</p>
    </div>
  </div>

  <div class="dossier-story-footer">
    <h5 class="dossier-brand-title">Charot Eco Doors</h5>
    <p class="dossier-brand-tagline">Designed for Living. Built for the Future.</p>
    <p class="dossier-brand-desc">We bring together durability, thoughtful design, and sustainability to create door solutions that meet the needs of modern spaces without losing sight of what matters most: quality, comfort, and lasting value.</p>
  </div>
</div>
`;

const PRODUCTS = {
  'door-main-1': {
    id: 'door-main-1',
    name: 'Verona Double Grand Entrance Door',
    tag: 'Villa Edition',
    series: 'Heritage Entrance Series · 2024',
    category: 'main-entrance-door',
    material: 'Alpine White Hardwood · Satin Brass Hardware',
    shortDesc: 'Architectural double entrance doors with dual vertical tempered glass viewports and handcrafted brass trim.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_1.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Grand Double Leaf Swing',
      weight: '145 kg'
    },
    materialsDetail: 'Kiln-dried alpine hardwood, dual-glazed 12mm laminated acoustic glass, weather-resistant micro-elastomer seals, solid forged brass hardware.',
    provenance: 'Artisan Architectural Joinery Studio, Florence',
    edition: 'Custom Commissioned Entryway · Individually Serialized',
    finishes: [
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Alpine White (Palermo)', color: '#F7F6F3', img: 'images/door_main_white_modern.jpg', filter: 'none' },
      { name: 'Alpine White (Bellagio)', color: '#FFFFFF', img: 'images/door_main_white_lattice.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-7': {
    id: 'door-main-7',
    name: 'Palermo Modern Flush Reveal Entrance Door',
    tag: 'Architectural Flush',
    series: 'Modern Minimalist Series · 2024',
    category: 'main-entrance-door',
    material: 'Alpine White Hardwood · Satin Brass Hardware',
    shortDesc: 'Contemporary flush entrance door with clean horizontal shadowline reveals and satin brass designer hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_white_modern.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Single Pivot Leaf Swing',
      weight: '138 kg'
    },
    materialsDetail: 'Multi-layer kiln-dried alpine hardwood core, CNC precision reveal channels, acoustically insulated barrier (Rw 43dB), solid forged satin brass handle.',
    provenance: 'Palermo Architectural Joinery Workshop, Italy',
    edition: 'Architectural Atelier Commission · Individually Calibrated',
    finishes: [
      { name: 'Alpine White (Palermo)', color: '#F7F6F3', img: 'images/door_main_white_modern.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Alpine White (Bellagio)', color: '#FFFFFF', img: 'images/door_main_white_lattice.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-8': {
    id: 'door-main-8',
    name: 'Bellagio Diamond Relief Double Grand Entrance Door',
    tag: 'Grand Double Portal',
    series: 'Artisanal Relief Series · 2024',
    category: 'main-entrance-door',
    material: 'Alpine White Hardwood · Matte Black Hardware',
    shortDesc: 'Handcrafted double grand entrance doors with diamond lattice relief panels and architectural matte black pull handle.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_white_lattice.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Grand Double Leaf Swing',
      weight: '162 kg'
    },
    materialsDetail: 'Kiln-dried solid alpine white hardwood, CNC dimensional relief carving, acoustic core insulation (Rw 45dB), forged carbon-steel hardware with matte black PVD coating.',
    provenance: 'Lombardy Master Joinery & Woodcraft Studio, Italy',
    edition: 'Villa Signature Commission · Numbered Series',
    finishes: [
      { name: 'Alpine White (Bellagio)', color: '#FFFFFF', img: 'images/door_main_white_lattice.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Alpine White (Palermo)', color: '#F7F6F3', img: 'images/door_main_white_modern.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-2': {
    id: 'door-main-2',
    name: 'Tuscany Arch Double Door with Transom',
    tag: 'Villa Masterpiece',
    series: 'Classic Villa Series · 2024',
    category: 'main-entrance-door',
    material: 'Warm Honey Teak · Architectural Transom Glass',
    shortDesc: 'Handcrafted double arched timber entrance door topped with an ambient daylight transom glass panel.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_2.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Arch Double Leaf + Transom',
      weight: '168 kg'
    },
    materialsDetail: 'FSC-Certified Solid Teak Timber, triple-glazed laminated transom glass, insulated core with acoustic rating Rw 44dB, oil-rubbed bronze architectural trim.',
    provenance: 'Tuscan Timbercraft & Joinery Guild, Italy',
    edition: 'Numbered Master Series with Solid Bronze Sill Plaque',
    finishes: [
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Amber Mahogany (Sienna)', color: '#8B3A22', img: 'images/door_main_amber_arch.jpg', filter: 'none' },
      { name: 'Terracotta Matte (Craftsman)', color: '#D66252', img: 'images/door_main_terracotta_craftsman.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-9': {
    id: 'door-main-9',
    name: 'Sienna Amber Arch Entrance Door with Transom',
    tag: 'Villa Arch Portal',
    series: 'Tuscan Timbercraft Series · 2024',
    category: 'main-entrance-door',
    material: 'Amber Mahogany Hardwood · Arch Daylight Transom',
    shortDesc: 'Architectural timber entrance door featuring a handcrafted arched relief panel, asymmetrical stile, and insulated daylight transom window.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_amber_arch.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Arch Single Leaf + Daylight Transom',
      weight: '155 kg'
    },
    materialsDetail: 'Solid kiln-dried African mahogany, double-glazed laminated low-E transom panel, multi-point euro cylinder security system, weather-sealed perimeter gaskets.',
    provenance: 'Sienna Master Woodworking Guild, Tuscany',
    edition: 'Artisanal Heritage Commission · Serialized',
    finishes: [
      { name: 'Amber Mahogany (Sienna)', color: '#8B3A22', img: 'images/door_main_amber_arch.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Terracotta Matte (Craftsman)', color: '#D66252', img: 'images/door_main_terracotta_craftsman.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-10': {
    id: 'door-main-10',
    name: 'Terracotta Multi-Pane Craftsman Entrance Door',
    tag: 'Smart Craftsman',
    series: 'Modern Atelier Color Series · 2024',
    category: 'main-entrance-door',
    material: 'Terracotta Matte Lacquer · Architectural Smart Lock',
    shortDesc: 'Vibrant craftsman entrance door with five-lite vertical frosted sidelights, upper viewing ports, and integrated smart security hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_terracotta_craftsman.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Craftsman Active Leaf Swing',
      weight: '142 kg'
    },
    materialsDetail: 'High-density moisture-resistant composite timber core, 8-lite frosted acoustic safety glass, baked terracotta polyurethane finish, biometric architectural digital lockset.',
    provenance: 'Nordic Color Atelier & Joinery Labs, Copenhagen',
    edition: 'Contemporary Designer Series · Individually Numbered',
    finishes: [
      { name: 'Terracotta Matte (Craftsman)', color: '#D66252', img: 'images/door_main_terracotta_craftsman.jpg', filter: 'none' },
      { name: 'Amber Mahogany (Sienna)', color: '#8B3A22', img: 'images/door_main_amber_arch.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Alpine White (Palermo)', color: '#F7F6F3', img: 'images/door_main_white_modern.jpg', filter: 'none' },
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-3': {
    id: 'door-main-3',
    name: 'Nordic Slate Contemporary Entrance Door',
    tag: 'Architectural Pivot',
    series: 'Metropolitan Pivot Series · 2024',
    category: 'main-entrance-door',
    material: 'Slate Composite · Brushed Steel · Geometric Sidelights',
    shortDesc: 'Precision-engineered entrance door with stainless steel reveal bands and dual patterned sidelights.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_3.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Contemporary Pivot + Twin Sidelights',
      weight: '185 kg'
    },
    materialsDetail: 'High-density composite core, 316 marine-grade brushed stainless steel inlays, ceramic fritted double-glazed sidelights, concealed pivot floor spring.',
    provenance: 'Milan Precision Metalworks & Architectural Atelier',
    edition: 'Metropolitan Architectural Edition · Custom Width Commission',
    finishes: [
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Graphite Composite (Stockholm)', color: '#32353A', img: 'images/door_main_graphite_reveal.jpg', filter: 'none' },
      { name: 'Nordic Blue (Oslo)', color: '#3E4D5E', img: 'images/door_main_nordic_blue_grill.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-11': {
    id: 'door-main-11',
    name: 'Stockholm Graphite Linear Reveal Entrance Door',
    tag: 'Linear Inlay',
    series: 'Metropolitan Modern Series · 2024',
    category: 'main-entrance-door',
    material: 'Graphite Composite · Hairline Stainless Inlays',
    shortDesc: 'Modern precision entrance door featuring four hairline stainless steel reveal bands and dual narrow glass sidelights.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_graphite_reveal.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Active Leaf + Dual Viewing Slits',
      weight: '152 kg'
    },
    materialsDetail: 'High-density graphite composite core, 316 marine-grade brushed stainless steel inlays, acoustic laminated security viewports (Rw 44dB), unlacquered nickel-bronze plate handle.',
    provenance: 'Stockholm Architectural Joinery Labs, Sweden',
    edition: 'Metropolitan Studio Series · Numbered Production',
    finishes: [
      { name: 'Graphite Composite (Stockholm)', color: '#32353A', img: 'images/door_main_graphite_reveal.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Nordic Blue (Oslo)', color: '#3E4D5E', img: 'images/door_main_nordic_blue_grill.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-12': {
    id: 'door-main-12',
    name: 'Oslo Fretwork Double Grand Entrance Door',
    tag: 'Geometric Fretwork',
    series: 'Nordic Heritage Series · 2024',
    category: 'main-entrance-door',
    material: 'Nordic Blue Hardwood · Geometric Fretwork Grills',
    shortDesc: 'Architectural double entrance doors with dual geometric laser-cut fretwork viewports and handcrafted antique brass hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_nordic_blue_grill.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Grand Double Leaf Swing',
      weight: '165 kg'
    },
    materialsDetail: 'Multi-ply FSC Nordic hardwood, laser-cut architectural steel fretwork inserts, dual-glazed acoustic frosted glass, solid forged antique brass hardware.',
    provenance: 'Oslo Master Woodcraft & Architectural Guild, Norway',
    edition: 'Nordic Villa Commission · Individually Certified',
    finishes: [
      { name: 'Nordic Blue (Oslo)', color: '#3E4D5E', img: 'images/door_main_nordic_blue_grill.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Graphite Composite (Stockholm)', color: '#32353A', img: 'images/door_main_graphite_reveal.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-4': {
    id: 'door-main-4',
    name: 'Anthracite Architectural Entrance Door',
    tag: 'Monolith Design',
    series: 'Monolith Architectural Series · 2024',
    category: 'main-entrance-door',
    material: 'Anthracite Steel Core · Smoked Glass Sidelight · Chrome Bar Pull',
    shortDesc: 'Minimalist flush entrance system featuring a floor-to-ceiling glass sidelight and linear inlays.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_4.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Asymmetric Sidelight Entry System',
      weight: '160 kg'
    },
    materialsDetail: 'Thermal-break steel chassis, low-E argon-filled smoked safety glass, multi-layer polyurethane insulation (Ud: 0.78 W/m²K), satin chrome architectural bar.',
    provenance: 'Zurich & Milan Architectural Engineering Guild',
    edition: 'Limited Architectural Series · Individually Certified',
    finishes: [
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-5': {
    id: 'door-main-5',
    name: 'Obsidian Dual-Sidelight Grand Entrance Door',
    tag: 'Executive Signature',
    series: 'Executive Signature Series · 2024',
    category: 'main-entrance-door',
    material: 'Matte Obsidian Steel · Dual Acoustic Glass Sidelights · Tubular Pull',
    shortDesc: 'Symmetrical high-security entrance door with twin frosted viewing lights and horizontal shadowlines.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_5.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Symmetrical Triple Portal System',
      weight: '198 kg'
    },
    materialsDetail: 'Reinforced dual-sheet galvanized steel leaf, RC3 certified anti-intrusion locking system, acoustic gaskets rated to 46dB, solid stainless steel push bar.',
    provenance: 'Berlin & Florence High-Security Architectural Works',
    edition: 'Executive Custom Edition · Heavy Security Certified',
    finishes: [
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' },
      { name: 'Onyx & Antique Brass (Ravenna)', color: '#161719', img: 'images/door_main_6.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-main-6': {
    id: 'door-main-6',
    name: 'Ravenna Textured Sidelight Entrance Door',
    tag: 'Imperial Masterwork',
    series: 'Imperial Villa Series · 2024',
    category: 'main-entrance-door',
    material: 'Matte Onyx Steel · Textured Glass Sidelights · Antique Forged Brass',
    shortDesc: 'Architectural entrance door featuring handcrafted dual pebble-textured glass sidelights and an ornate cast brass lever set.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_main_6.jpg',
    dimensions: {
      wCm: 120,
      hCm: 250,
      dCm: null,
      width: 'W: 120 cm (1.20 m)',
      depth: '',
      height: 'H: 250 cm (2.50 m)',
      seatHeight: 'Symmetrical Double Sidelight Swing',
      weight: '190 kg'
    },
    materialsDetail: 'Heavy-gauge galvanized steel shell, artisan cast pebble glass double-glazed panels, unlacquered antiqued forged brass hardware, perimeter acoustic compression seals.',
    provenance: 'Ravenna Architectural Foundry & Joinery Guild',
    edition: 'Imperial Commission · Numbered Series',
    finishes: [
      { name: 'Onyx & Antique Brass (Ravenna)', color: '#161719', img: 'images/door_main_6.jpg', filter: 'none' },
      { name: 'Alpine White (Verona)', color: '#F4F2EE', img: 'images/door_main_1.jpg', filter: 'none' },
      { name: 'Warm Honey Teak (Tuscany)', color: '#C4813D', img: 'images/door_main_2.jpg', filter: 'none' },
      { name: 'Slate Gray Composite (Nordic)', color: '#6A7482', img: 'images/door_main_3.jpg', filter: 'none' },
      { name: 'Anthracite Steel (Monolith)', color: '#3A3D44', img: 'images/door_main_4.jpg', filter: 'none' },
      { name: 'Obsidian Matte (Executive)', color: '#1B1C1E', img: 'images/door_main_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-1': {
    id: 'door-internal-1',
    name: 'Milano Two-Panel Shaker Internal Door',
    tag: 'Modern Shaker',
    series: 'Architectural Shaker Series · 2024',
    category: 'internal-door',
    material: 'Matte Ivory Lacquer · Satin Nickel Hardware',
    shortDesc: 'Refined dual-panel architectural shaker internal door with smooth ivory finish and ergonomic lever handle.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_1.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '44 kg'
    },
    materialsDetail: 'Solid engineered acoustic timber composite core, high-density polyurethane matte ivory lacquer, precision silent magnetic latch, satin nickel architectural handle.',
    provenance: 'Milano Master Architectural Joinery Atelier, Italy',
    edition: 'Interior Living Collection · Calibrated 220 × 85 cm',
    finishes: [
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-2': {
    id: 'door-internal-2',
    name: 'Venezia Diamond Relief Internal Door',
    tag: 'Diamond Relief',
    series: 'Artisanal Geometric Series · 2024',
    category: 'internal-door',
    material: 'Ebonized Espresso Lacquer · Brushed Chrome Hardware',
    shortDesc: 'Architectural dark internal door featuring precision-milled diamond lattice relief panels and minimalist chrome hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_2.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '46 kg'
    },
    materialsDetail: 'Acoustic composite WPC core, CNC geometric diamond relief routing, multi-coat ebonized espresso finish, concealed ball-bearing hinges, brushed chrome leverset.',
    provenance: 'Venetian Woodcraft & Lacquer Workshop, Italy',
    edition: 'Architectural Geometric Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-3': {
    id: 'door-internal-3',
    name: 'Firenze Classic Arched Timber Internal Door',
    tag: 'Heritage Arched',
    series: 'Tuscan Woodcraft Series · 2024',
    category: 'internal-door',
    material: 'Warm American Walnut Timber · Satin Bronze Hardware',
    shortDesc: 'Timeless interior solid timber door with traditional arched dual panels, rich natural grain, and champagne bronze lever.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_3.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '48 kg'
    },
    materialsDetail: 'Select kiln-dried American walnut timber, arched raised profile rails, acoustic composite stabilization core, hand-rubbed organic oil and protective wax, solid forged bronze hardware.',
    provenance: 'Tuscan Timbercraft & Joinery Guild, Florence',
    edition: 'Villa Heritage Collection · Calibrated 220 × 85 cm',
    finishes: [
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-4': {
    id: 'door-internal-4',
    name: 'Como Powder Mist Diamond Relief Internal Door',
    tag: 'Pastel Relief',
    series: 'Lombardy Pastel Atelier · 2024',
    category: 'internal-door',
    material: 'Powder Mist Blue Lacquer · Antique Burnished Brass',
    shortDesc: 'Distinctive interior door finished in delicate powder mist blue with carved diamond lattice relief panels and antique scroll brass hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_4.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '45 kg'
    },
    materialsDetail: 'Multi-ply moisture-resistant WPC composite core, dimensional diamond lattice CNC carving, ultra-smooth powder mist lacquer, antique patinated solid brass leverset.',
    provenance: 'Lake Como Atelier of Architectural Finishes, Italy',
    edition: 'Pastel Atelier Edition · Calibrated 220 × 85 cm',
    finishes: [
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-5': {
    id: 'door-internal-5',
    name: 'Lugano Smoked Ash Linear Reveal Internal Door',
    tag: 'Linear Reveal',
    series: 'Metropolitan Horizon Series · 2024',
    category: 'internal-door',
    material: 'Smoked Ash Textured Woodgrain · Satin Nickel Hardware',
    shortDesc: 'Contemporary architectural internal door showcasing tactile smoked ash woodgrain with five horizontal CNC shadowline reveals.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_5.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '47 kg'
    },
    materialsDetail: 'Acoustic multi-layer engineered core, textured architectural smoked ash veneer, precision 6mm shadowline routings, magnetic silent drop seal, satin nickel architectural handle.',
    provenance: 'Lugano Architectural Joinery Labs, Switzerland',
    edition: 'Metropolitan Modern Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-6': {
    id: 'door-internal-6',
    name: 'Aria Curved Archway Internal Door',
    tag: 'Curved Arc',
    series: 'Modern Arc Series · 2024',
    category: 'internal-door',
    material: 'Soft Mist Gray Lacquer · Matte Black Hardware',
    shortDesc: 'Contemporary internal door featuring graceful branching archway CNC grooving and contrasting matte black hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_6.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '44 kg'
    },
    materialsDetail: 'Engineered high-density composite WPC core, CNC geometric branching arc routings, durable polyurethane mist gray lacquer, precision matte black leverset.',
    provenance: 'Venice Atelier of Architectural Millwork, Italy',
    edition: 'Modern Arc Collection · Standard 220 × 85 cm',
    finishes: [
      { name: 'Soft Mist Arc (Aria)', color: '#D4D8DC', img: 'images/door_internal_6.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Planetary Transom (Celeste)', color: '#A9B7C6', img: 'images/door_internal_7.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-7': {
    id: 'door-internal-7',
    name: 'Celeste Planetary Porthole Internal Door',
    tag: 'Triple Porthole',
    series: 'Celestial Architectural Series · 2024',
    category: 'internal-door',
    material: 'Steel Blue Lacquer · Frosted Acoustic Portholes · Satin Brass',
    shortDesc: 'Architectural internal door featuring an integrated daylight transom, triple circular acoustic viewing portholes, and a swept crescent reveal.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_7.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Swing + Transom Frame',
      weight: '51 kg'
    },
    materialsDetail: 'High-performance acoustic composite core, 8mm triple circular frosted safety glass inserts, integrated transom opening, two-tone satin brass and onyx architectural backplate handle.',
    provenance: 'Stockholm Contemporary Studio & Glazing Labs, Sweden',
    edition: 'Celestial Atelier Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Planetary Transom (Celeste)', color: '#A9B7C6', img: 'images/door_internal_7.jpg', filter: 'none' },
      { name: 'Soft Mist Arc (Aria)', color: '#D4D8DC', img: 'images/door_internal_6.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-8': {
    id: 'door-internal-8',
    name: 'Modena Asymmetric Linear Internal Door',
    tag: 'Minimalist Line',
    series: 'Pure Line Series · 2024',
    category: 'internal-door',
    material: 'Warm Alabaster Lacquer · Satin Chrome Plate Hardware',
    shortDesc: 'Ultra-minimalist internal door with subtle stepped corner shadowline routings and an elongated satin chrome backplate handle.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_8.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '43 kg'
    },
    materialsDetail: 'Kiln-dried stabilized core with acoustic insulation, precision 3mm stepped corner reveals, multi-coat alabaster satin enamel, forged satin chrome architectural plate handle.',
    provenance: 'Modena Joinery Workshop & Atelier, Italy',
    edition: 'Pure Line Modern Edition · Standard 220 × 85 cm',
    finishes: [
      { name: 'Warm Alabaster (Modena)', color: '#EAE7E1', img: 'images/door_internal_8.jpg', filter: 'none' },
      { name: 'Starburst Relief (Stella)', color: '#ECE8DF', img: 'images/door_internal_9.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Mahogany Horizon (Ravello)', color: '#5B1E13', img: 'images/door_internal_10.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-9': {
    id: 'door-internal-9',
    name: 'Stella Starburst Relief Internal Door',
    tag: 'Starburst Relief',
    series: 'Geometric Star Series · 2024',
    category: 'internal-door',
    material: 'Bone White Matte Lacquer · Satin Nickel Ergonomic Leverset',
    shortDesc: 'Elegant internal door showcasing a molded center frame with vertically aligned four-pointed star and diamond carved motifs.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_9.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '45 kg'
    },
    materialsDetail: 'Multi-ply engineered moisture-sealed composite, artisan relief molded center panel, CNC starburst geometric carvings, silent magnetic latch and satin nickel leverset.',
    provenance: 'Bologna Artisanal Woodcraft Guild, Italy',
    edition: 'Geometric Star Edition · Standard 220 × 85 cm',
    finishes: [
      { name: 'Starburst Relief (Stella)', color: '#ECE8DF', img: 'images/door_internal_9.jpg', filter: 'none' },
      { name: 'Warm Alabaster (Modena)', color: '#EAE7E1', img: 'images/door_internal_8.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-10': {
    id: 'door-internal-10',
    name: 'Ravello Mahogany Horizon Internal Door',
    tag: 'Copper Inlay',
    series: 'Rich Timber Horizon Series · 2024',
    category: 'internal-door',
    material: 'Polished Mahogany Veneer · Rose Copper Accent Inlays · Brushed Chrome',
    shortDesc: 'Luxurious interior door finished in rich dark mahogany natural grain with five horizontal metallic copper inlay reveals.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_10.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '49 kg'
    },
    materialsDetail: 'Select quarter-cut African mahogany veneer, solid composite acoustic stabilization core, 4mm flush copper-alloy metallic inlays, satin chrome ergonomic handle.',
    provenance: 'Amalfi Coast Architectural Joinery Guild, Italy',
    edition: 'Villa Signature Timber Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Mahogany Horizon (Ravello)', color: '#5B1E13', img: 'images/door_internal_10.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' },
      { name: 'Warm Alabaster (Modena)', color: '#EAE7E1', img: 'images/door_internal_8.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-11': {
    id: 'door-internal-11',
    name: 'Rotonda Concentric Relief Internal Door',
    tag: 'Circular Medallion',
    series: 'Architectural Medallion Series · 2024',
    category: 'internal-door',
    material: 'Crisp White Satin Enamel · Satin Nickel Hardware',
    shortDesc: 'Classic contemporary internal door featuring a central circular concentric ring relief medallion and elegant curved nickel lever.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_11.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '44 kg'
    },
    materialsDetail: 'High-density acoustic composite core, multi-stage CNC concentric circular routings, satin white polyurethane lacquer, silent magnetic latch, solid forged nickel handle.',
    provenance: 'Torino Architectural Joinery Guild, Italy',
    edition: 'Medallion Architectural Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Pure White Medallion (Rotonda)', color: '#F8F8F8', img: 'images/door_internal_11.jpg', filter: 'none' },
      { name: 'Silver Ash Horizon (Nordic)', color: '#8894A0', img: 'images/door_internal_12.jpg', filter: 'none' },
      { name: 'Eclipse White Porthole (Lumina)', color: '#F3F4F5', img: 'images/door_internal_13.jpg', filter: 'none' },
      { name: 'Honey Amber Fluted (Sienna)', color: '#DE8C46', img: 'images/door_internal_14.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-12': {
    id: 'door-internal-12',
    name: 'Nordic Silver Ash Reveal Internal Door',
    tag: 'Silver Ash Grain',
    series: 'Nordic Timbercraft Series · 2024',
    category: 'internal-door',
    material: 'Silver Ash Textured Woodgrain · Antique Burnished Bronze Hardware',
    shortDesc: 'Architectural timber door featuring tactile silver ash woodgrain, five precision horizontal reveal grooves, and handcrafted antique bronze hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_12.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '47 kg'
    },
    materialsDetail: 'Multi-layer acoustic timber composite core, textured tactile silver ash architectural veneer, precision CNC 5mm shadowline reveals, antique patinated solid brass hardware.',
    provenance: 'Bergen Woodcraft Atelier, Norway',
    edition: 'Nordic Atelier Edition · Standard 220 × 85 cm',
    finishes: [
      { name: 'Silver Ash Horizon (Nordic)', color: '#8894A0', img: 'images/door_internal_12.jpg', filter: 'none' },
      { name: 'Honey Amber Fluted (Sienna)', color: '#DE8C46', img: 'images/door_internal_14.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' },
      { name: 'Mahogany Horizon (Ravello)', color: '#5B1E13', img: 'images/door_internal_10.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-13': {
    id: 'door-internal-13',
    name: 'Lumina Eclipse Porthole Internal Door',
    tag: 'Triple Porthole',
    series: 'Celestial Architectural Series · 2024',
    category: 'internal-door',
    material: 'Alpine White Matte Lacquer · Triple Acoustic Portholes · Brass & Black Hardware',
    shortDesc: 'Contemporary flush white door featuring three celestial circular frosted viewports connected by an arced reveal and luxury two-tone hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_13.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '46 kg'
    },
    materialsDetail: 'Acoustically damped composite leaf, triple flush-mounted laminated circular acoustic frosted glass inserts, alpine white multi-coat lacquer, precision two-tone brass/black leverset.',
    provenance: 'Copenhagen Architectural Studio, Denmark',
    edition: 'Contemporary Celestial Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Eclipse White Porthole (Lumina)', color: '#F3F4F5', img: 'images/door_internal_13.jpg', filter: 'none' },
      { name: 'Planetary Transom (Celeste)', color: '#A9B7C6', img: 'images/door_internal_7.jpg', filter: 'none' },
      { name: 'Pure White Medallion (Rotonda)', color: '#F8F8F8', img: 'images/door_internal_11.jpg', filter: 'none' },
      { name: 'Soft Mist Arc (Aria)', color: '#D4D8DC', img: 'images/door_internal_6.jpg', filter: 'none' },
      { name: 'Nordic Mist (Como)', color: '#D2DBDD', img: 'images/door_internal_4.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-14': {
    id: 'door-internal-14',
    name: 'Sienna Honey Amber Fluted Internal Door',
    tag: 'Fluted Amber',
    series: 'Tuscan Timber Series · 2024',
    category: 'internal-door',
    material: 'Natural Honey Amber Timber · Antique Cast Bronze Hardware',
    shortDesc: 'Warm natural timber internal door featuring fine vertical fluted linear accents and handcrafted antique bronze scroll hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_14.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '48 kg'
    },
    materialsDetail: 'FSC-certified kiln-dried solid composite core with select honey amber timber veneer, precision vertical fluting grooves, organic satin oil finish, antique forged cast bronze hardware.',
    provenance: 'Sienna Traditional Joinery Guild, Tuscany',
    edition: 'Tuscan Heritage Collection · Standard 220 × 85 cm',
    finishes: [
      { name: 'Honey Amber Fluted (Sienna)', color: '#DE8C46', img: 'images/door_internal_14.jpg', filter: 'none' },
      { name: 'Silver Ash Horizon (Nordic)', color: '#8894A0', img: 'images/door_internal_12.jpg', filter: 'none' },
      { name: 'Mahogany Horizon (Ravello)', color: '#5B1E13', img: 'images/door_internal_10.jpg', filter: 'none' },
      { name: 'Tuscan Walnut (Firenze)', color: '#4E2C19', img: 'images/door_internal_3.jpg', filter: 'none' },
      { name: 'Smoked Ash Horizon (Lugano)', color: '#56504C', img: 'images/door_internal_5.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-15': {
    id: 'door-internal-15',
    name: 'Prisma Geometric Dual-Tone Internal Door',
    tag: 'Prisma Dual-Tone',
    series: 'Avant-Garde Architectural Series · 2024',
    category: 'internal-door',
    material: 'Matte Slate Blue & Cream Dual-Tone · Satin Nickel Hardware',
    shortDesc: 'Striking modern door featuring an asymmetrical faceted chevron colorblock design with hairline reveal channels and contemporary nickel hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_15.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '46 kg'
    },
    materialsDetail: 'Precision CNC-machined composite acoustic core, dual-tone matte polyurethane lacquer finish, 3mm contrast reveal grooves, architectural satin nickel leverset with square escutcheon.',
    provenance: 'Basel Modern Architectural Atelier, Switzerland',
    edition: 'Avant-Garde Geometric Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Prisma Dual-Tone (Basel)', color: '#4F6170', img: 'images/door_internal_15.jpg', filter: 'none' },
      { name: 'Capsule Minimalist (Aura)', color: '#F7F7F7', img: 'images/door_internal_16.jpg', filter: 'none' },
      { name: 'Pure White Medallion (Rotonda)', color: '#F8F8F8', img: 'images/door_internal_11.jpg', filter: 'none' },
      { name: 'Silver Ash Horizon (Nordic)', color: '#8894A0', img: 'images/door_internal_12.jpg', filter: 'none' },
      { name: 'Diamond Noir (Venezia)', color: '#1E1B18', img: 'images/door_internal_2.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  },
  'door-internal-16': {
    id: 'door-internal-16',
    name: 'Aura Capsule Minimalist Internal Door',
    tag: 'Capsule Stile',
    series: 'Minimalist Architectural Series · 2024',
    category: 'internal-door',
    material: 'Pure White Matte Lacquer · Brushed Satin Nickel Hardware',
    shortDesc: 'Refined minimalist architectural door featuring elongated rounded capsule shadowline routings and brushed satin nickel hardware.',
    story: CHAROT_ECO_STORY_HTML,
    primaryImg: 'images/door_internal_16.jpg',
    dimensions: {
      wCm: 85,
      hCm: 220,
      dCm: null,
      width: 'W: 85 cm (0.85 m)',
      depth: '',
      height: 'H: 220 cm (2.20 m)',
      seatHeight: 'Interior Single Leaf Swing',
      weight: '43 kg'
    },
    materialsDetail: 'High-density acoustic composite core, precision CNC pill-shaped capsule groove profiles, velvety multi-coat matte white lacquer, precision silent latch, solid forged nickel leverset.',
    provenance: 'Vienna Design Workshop & Joinery Labs, Austria',
    edition: 'Minimalist Studio Series · Standard 220 × 85 cm',
    finishes: [
      { name: 'Capsule Minimalist (Aura)', color: '#F7F7F7', img: 'images/door_internal_16.jpg', filter: 'none' },
      { name: 'Prisma Dual-Tone (Basel)', color: '#4F6170', img: 'images/door_internal_15.jpg', filter: 'none' },
      { name: 'Pure White Medallion (Rotonda)', color: '#F8F8F8', img: 'images/door_internal_11.jpg', filter: 'none' },
      { name: 'Warm Alabaster (Modena)', color: '#EAE7E1', img: 'images/door_internal_8.jpg', filter: 'none' },
      { name: 'Ivory Shaker (Milano)', color: '#E8E5DD', img: 'images/door_internal_1.jpg', filter: 'none' }
    ],
    hotspots: STANDARD_DOOR_HOTSPOTS
  }
};

// Backwards compatibility aliases
PRODUCTS['seraphine-chair'] = PRODUCTS['door-main-1'];
PRODUCTS['ondine-sofa'] = PRODUCTS['door-main-2'];
PRODUCTS['door-main-white-modern'] = PRODUCTS['door-main-7'];
PRODUCTS['door-main-white-lattice'] = PRODUCTS['door-main-8'];
PRODUCTS['door-main-amber-arch'] = PRODUCTS['door-main-9'];
PRODUCTS['door-main-terracotta'] = PRODUCTS['door-main-10'];
PRODUCTS['door-main-graphite-reveal'] = PRODUCTS['door-main-11'];
PRODUCTS['door-main-nordic-blue-grill'] = PRODUCTS['door-main-12'];
PRODUCTS['arco-table'] = PRODUCTS['door-internal-1'];
PRODUCTS['lumiere-lamp'] = PRODUCTS['door-internal-2'];
PRODUCTS['atelier-desk'] = PRODUCTS['door-internal-3'];
PRODUCTS['basalt-tables'] = PRODUCTS['door-internal-4'];

const PRODUCT_KEYS = [
  'door-main-1',
  'door-main-7',
  'door-main-8',
  'door-main-4',
  'door-main-5',
  'door-main-6',
  'door-main-2',
  'door-main-9',
  'door-main-10',
  'door-main-3',
  'door-main-11',
  'door-main-12',
  'door-internal-1',
  'door-internal-2',
  'door-internal-3',
  'door-internal-4',
  'door-internal-5',
  'door-internal-6',
  'door-internal-7',
  'door-internal-8',
  'door-internal-9',
  'door-internal-10',
  'door-internal-11',
  'door-internal-12',
  'door-internal-13',
  'door-internal-14',
  'door-internal-15',
  'door-internal-16'
];
let currentProductIndex = 0;


/* ================================================================
   2. Navigation — Frosted-glass on scroll
   ================================================================ */
const header = document.getElementById('site-header');

function handleNavScroll() {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  }
}

let navTick = false;
window.addEventListener('scroll', () => {
  if (!navTick) {
    requestAnimationFrame(() => { handleNavScroll(); navTick = false; });
    navTick = true;
  }
}, { passive: true });

handleNavScroll(); // run on load

/* ================================================================
   2B. Mobile Navigation Drawer Controller
   ================================================================ */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const drawer    = document.getElementById('mobile-nav-drawer');
  const backdrop  = document.getElementById('mobile-nav-backdrop');
  const closeBtn  = document.getElementById('mobile-nav-close');
  const links     = document.querySelectorAll('.mobile-nav-link');
  const consultBtn = document.getElementById('btn-mobile-consult');

  if (!toggleBtn || !drawer) return;

  function openMobileNav() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-drawer-locked');
  }

  function closeMobileNav() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-drawer-locked');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('is-open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  closeBtn?.addEventListener('click', closeMobileNav);
  backdrop?.addEventListener('click', closeMobileNav);

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      closeMobileNav();

      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          const navH = 64;
          const targetY = target.getBoundingClientRect().top + window.scrollY - navH;
          smoothLuxuryScrollTo(Math.max(0, targetY), 850);
        }, 150);
      }
    });
  });

  consultBtn?.addEventListener('click', () => {
    closeMobileNav();
    const inquiryDrawer = document.getElementById('inquiry-drawer');
    if (inquiryDrawer) {
      setTimeout(() => {
        inquiryDrawer.classList.add('is-open');
        inquiryDrawer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-locked');
      }, 350);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMobileNav();
    }
  });
}


/* ================================================================
   3. Scroll Reveal (IntersectionObserver)
   ================================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -15px 0px'
  });

  els.forEach(el => observer.observe(el));
}


/* ================================================================
   4. Infinite Horizontal Partners Carousel
   ================================================================ */
function initPartnersCarousel() {
  const wrap = document.querySelector('.partners-carousel-wrap');
  const track = document.querySelector('.partners-track');
  if (!wrap || !track) return;

  wrap.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  wrap.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });
}


/* ================================================================
   5. Product Category Filter & Dual-Column Gallery Representation
   ================================================================ */
function initProductFilters() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  const grid  = document.getElementById('product-grid');

  if (!btns.length || !cards.length || !grid) return;

  grid.classList.add('grid-2-cols');
  grid.classList.remove('grid-4-cols', 'grid-3-cols');
  grid.style.removeProperty('grid-template-columns');

  // Filter button interaction
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button active state
      btns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards instantly without lag, flash, or offscreen blanking
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('is-hidden');
          card.style.display = 'flex';
          card.classList.add('is-visible');
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';

          // If lazy image hasn't loaded yet, kickstart its loading
          const img = card.querySelector('img');
          if (img && img.loading === 'lazy' && !img.complete) {
            img.loading = 'eager';
          }
        } else {
          card.classList.add('is-hidden');
          card.style.display = 'none';
        }
      });
    });
  });

  // Connect footer category links to filter triggers
  const footerFilterMap = {
    'flink-main-entrance': 'filter-main-entrance',
    'flink-internal': 'filter-internal'
  };
  Object.entries(footerFilterMap).forEach(([flinkId, filterBtnId]) => {
    document.getElementById(flinkId)?.addEventListener('click', () => {
      document.getElementById(filterBtnId)?.click();
    });
  });
}


/* ================================================================
   6. Product Detail Exhibition Modal & Interactive Visualizer
   ================================================================ */
function initProductShowcaseModal() {
  const modal          = document.getElementById('product-modal');
  const backdrop       = document.getElementById('modal-backdrop');
  const closeBtn       = document.getElementById('modal-close-btn');
  const prevBtn        = document.getElementById('modal-prev-btn');
  const nextBtn        = document.getElementById('modal-next-btn');
  const counter        = document.getElementById('modal-counter');
  const seriesNav      = document.getElementById('modal-nav-series');

  // Dossier elements
  const modalTitle     = document.getElementById('modal-product-title');
  const modalMaterial  = document.getElementById('modal-material');
  const modalTag       = document.getElementById('modal-tag');
  const modalSeries    = document.getElementById('modal-series');
  const modalStory     = document.getElementById('modal-story');
  const swatchesWrap   = document.getElementById('finishes-swatches');
  const selectedFinish = document.getElementById('selected-finish-name');


  // Visualizer elements
  const stage          = document.getElementById('visualizer-stage');
  const product3dWrap  = document.getElementById('product-3d-wrap');
  const primaryImg     = document.getElementById('modal-img-primary');
  const sheen          = document.getElementById('product-sheen');
  const hotspotsLayer  = document.getElementById('hotspots-layer');
  const loupeLens      = document.getElementById('loupe-lens');
  const loupeInner     = document.getElementById('loupe-inner');
  const dimOverlay     = document.getElementById('dimension-overlay');
  const dimW           = document.getElementById('dim-label-w');
  const dimH           = document.getElementById('dim-label-h');
  const dimD           = document.getElementById('dim-label-d');

  function formatDimension(dimCm, prefix) {
    if (dimCm == null) return '';
    const mVal = (dimCm / 100).toFixed(2);
    return `${prefix}: ${dimCm} cm (${mVal} m)`;
  }

  function applyProductDimensions(p) {
    if (!p || !p.dimensions) return;
    const dimLineDepth = document.querySelector('.dim-line--depth');

    let widthStr = '';
    let heightStr = '';
    let depthStr = '';

    if (typeof p.dimensions.wCm === 'number') {
      widthStr = formatDimension(p.dimensions.wCm, 'W');
    } else {
      widthStr = p.dimensions.width || '';
    }

    if (typeof p.dimensions.hCm === 'number') {
      heightStr = formatDimension(p.dimensions.hCm, 'H');
    } else {
      heightStr = p.dimensions.height || '';
    }

    if (typeof p.dimensions.dCm === 'number' && p.dimensions.dCm > 0) {
      depthStr = formatDimension(p.dimensions.dCm, 'D');
    } else if (p.dimensions.depth && p.dimensions.depth.trim() !== '') {
      depthStr = p.dimensions.depth;
    } else {
      depthStr = '';
    }

    // Dimension labels
    if (dimW) dimW.textContent = widthStr;
    if (dimH) dimH.textContent = heightStr;

    // Depth line: hidden for all products with no depth (all main entrance doors)
    if (depthStr) {
      if (dimD) dimD.textContent = depthStr;
      if (dimLineDepth) dimLineDepth.style.display = 'flex';
    } else {
      if (dimD) dimD.textContent = '';
      if (dimLineDepth) dimLineDepth.style.display = 'none';
    }

  }

  // View tabs & quick controls
  const tabPrimary       = document.getElementById('tab-view-primary');
  const tabLoupe         = document.getElementById('tab-view-loupe');
  const mobileTabPrimary = document.getElementById('mobile-tab-primary');
  const mobileTabLoupe   = document.getElementById('mobile-tab-loupe');
  const btnToggleDims    = document.getElementById('btn-toggle-dimensions');
  const btnResetView     = document.getElementById('btn-reset-view');

  // Zoom & Detail Inspection elements
  const btnZoomIn        = document.getElementById('btn-zoom-in');
  const btnZoomOut       = document.getElementById('btn-zoom-out');
  const zoomIndicator    = document.getElementById('zoom-indicator-val');
  const btnInspectDetail = document.getElementById('btn-inspect-detail');
  const inspectBtnLabel  = document.getElementById('inspect-btn-label');
  const zoomHud          = document.getElementById('stage-zoom-hud');
  const zoomHudText      = document.getElementById('zoom-hud-text');
  const btnHudResetZoom  = document.getElementById('btn-hud-reset-zoom');
  const btnDockZoom      = document.getElementById('btn-dock-zoom') || document.getElementById('btn-inspect-detail');
  const dockZoomLabel    = document.getElementById('dock-zoom-label') || document.getElementById('inspect-btn-label');

  // Fullscreen controls
  const btnToggleFullscreen = document.getElementById('btn-toggle-fullscreen');
  const fullscreenLabel     = document.getElementById('fullscreen-label');
  const modalContainer      = document.getElementById('modal-container');
  const modalBody           = document.getElementById('modal-body');
  const floorShadow         = document.getElementById('stage-floor-shadow');

  // Atelier Dossier Drawer controls (Slide-Over Panel)
  const btnOpenDossier      = document.getElementById('btn-open-dossier');
  const btnDockDossier      = document.getElementById('btn-dock-dossier') || btnOpenDossier;
  const btnCloseDossier     = document.getElementById('btn-close-dossier');
  const btnDrawerReturn     = document.getElementById('btn-drawer-back-to-stage');
  const dossierDrawer       = document.getElementById('modal-dossier-drawer');
  const dossierBackdrop     = document.getElementById('dossier-drawer-backdrop');
  const dossierDrawerBody   = document.getElementById('dossier-drawer-body');
  const dossierTabPills     = document.querySelectorAll('.dossier-tab-pill');

  // Dedicated Craft Detail Banner elements
  const craftBanner    = document.getElementById('stage-craft-banner');
  const craftBadge     = document.getElementById('craft-banner-badge');
  const craftTitle     = document.getElementById('craft-banner-title');
  const craftDesc      = document.getElementById('craft-banner-desc');
  const btnCloseCraft  = document.getElementById('btn-close-craft-banner');

  // Secondary inquiry / samples triggers
  const btnInquireModal     = document.getElementById('btn-open-inquiry');
  const btnRequestSamples   = document.getElementById('btn-request-samples');
  const tearSheetBtn        = document.getElementById('btn-download-tear-sheet');

  if (!modal || !stage) return;

  let currentKey = PRODUCT_KEYS[0];
  let currentTiltX = 0, currentTiltY = 0;
  let targetTiltX = 0, targetTiltY = 0;
  let currentZoom = 1.0, targetZoom = 1.0;
  let currentPanX = 0, currentPanY = 0;
  let targetPanX = 0, targetPanY = 0;
  let isDragging = false;
  let dragStartX = 0, dragStartY = 0;
  let panStartX = 0, panStartY = 0;
  let isMouseOverStage = false;
  let currentViewMode = 'primary'; // 'primary', 'loupe'

  const isMobileView = () => window.matchMedia('(max-width: 768px)').matches || window.innerWidth <= 768;

  /* --- High-Detail Product Zoom & Pan System --- */
  function setZoom(level, panX, panY) {
    // Zoom and pan functionality does NOT exist on mobile phone view
    if (isMobileView()) {
      targetZoom = 1.0;
      targetPanX = 0;
      targetPanY = 0;
      currentZoom = 1.0;
      currentPanX = 0;
      currentPanY = 0;
      if (product3dWrap) {
        product3dWrap.classList.remove('is-zoomed');
        product3dWrap.style.transform = '';
      }
      if (zoomHud) {
        zoomHud.classList.remove('is-visible');
      }
      if (zoomIndicator) {
        zoomIndicator.textContent = '100%';
      }
      if (btnInspectDetail) {
        btnInspectDetail.classList.remove('is-active');
        if (inspectBtnLabel) inspectBtnLabel.innerHTML = 'Inspect Detail (2&times;)';
      }
      if (btnDockZoom) {
        btnDockZoom.classList.remove('active');
        if (dockZoomLabel) dockZoomLabel.innerHTML = 'Detail Zoom (2&times;)';
      }
      requestTiltUpdate();
      return;
    }

    const clamped = Math.min(Math.max(level, 1.0), 3.0);
    targetZoom = clamped;
    if (typeof panX === 'number') targetPanX = panX;
    if (typeof panY === 'number') targetPanY = panY;

    if (clamped <= 1.05) {
      targetPanX = 0;
      targetPanY = 0;
    }

    if (zoomIndicator) {
      zoomIndicator.textContent = `${Math.round(clamped * 100)}%`;
    }

    const isZoomed = clamped > 1.05;
    if (product3dWrap) {
      product3dWrap.classList.toggle('is-zoomed', isZoomed);
    }

    if (zoomHud) {
      zoomHud.classList.toggle('is-visible', isZoomed);
      if (zoomHudText) {
        zoomHudText.textContent = `${clamped.toFixed(1)}× Detail View • Drag to pan • Scroll to zoom`;
      }
    }

    if (btnInspectDetail) {
      btnInspectDetail.classList.toggle('is-active', isZoomed);
      if (inspectBtnLabel) {
        inspectBtnLabel.innerHTML = isZoomed ? 'Reset View (1&times;)' : 'Inspect Detail (2&times;)';
      }
    }

    if (btnDockZoom) {
      btnDockZoom.classList.toggle('active', isZoomed);
      if (dockZoomLabel) {
        dockZoomLabel.innerHTML = isZoomed ? 'Reset Zoom (1&times;)' : 'Detail Zoom (2&times;)';
      }
    }

    requestTiltUpdate();
  }

  /* --- Interactive 3D Parallax Tilt & Floor Shadow Loop (On-Demand Frame-Synced) --- */
  let tiltRafId = null;

  function requestTiltUpdate() {
    if (!modal || !modal.classList.contains('is-open')) return;
    if (!tiltRafId) {
      tiltRafId = requestAnimationFrame(animateTilt);
    }
  }

  function animateTilt() {
    if (!modal || !modal.classList.contains('is-open')) {
      tiltRafId = null;
      return;
    }

    const diffTiltX = Math.abs(targetTiltX - currentTiltX);
    const diffTiltY = Math.abs(targetTiltY - currentTiltY);
    const diffZoom  = Math.abs(targetZoom  - currentZoom);
    const diffPanX  = Math.abs(targetPanX  - currentPanX);
    const diffPanY  = Math.abs(targetPanY  - currentPanY);

    if (diffTiltX > 0.01 || diffTiltY > 0.01 || diffZoom > 0.001 || diffPanX > 0.05 || diffPanY > 0.05) {
      currentTiltX += (targetTiltX - currentTiltX) * 0.16;
      currentTiltY += (targetTiltY - currentTiltY) * 0.16;
      currentZoom  += (targetZoom  - currentZoom)  * 0.14;
      currentPanX  += (targetPanX  - currentPanX)  * 0.16;
      currentPanY  += (targetPanY  - currentPanY)  * 0.16;

      if (product3dWrap) {
        product3dWrap.style.transform = `translate3d(${currentPanX.toFixed(1)}px, ${currentPanY.toFixed(1)}px, 0px) scale(${currentZoom.toFixed(3)}) rotateX(${currentTiltX.toFixed(1)}deg) rotateY(${currentTiltY.toFixed(1)}deg)`;
      }

      if (floorShadow) {
        const shadowShiftX = (currentPanX * 0.45 - currentTiltY * 1.6).toFixed(1);
        const shadowShiftY = (currentPanY * 0.25 + currentTiltX * 0.9).toFixed(1);
        const shadowScale = (1 + (currentZoom - 1) * 0.35).toFixed(2);
        floorShadow.style.transform = `translateX(-50%) translate3d(${shadowShiftX}px, ${shadowShiftY}px, 0) scale(${shadowScale})`;
      }

      tiltRafId = requestAnimationFrame(animateTilt);
    } else {
      currentTiltX = targetTiltX;
      currentTiltY = targetTiltY;
      currentZoom  = targetZoom;
      currentPanX  = targetPanX;
      currentPanY  = targetPanY;
      if (product3dWrap) {
        product3dWrap.style.transform = `translate3d(${currentPanX.toFixed(1)}px, ${currentPanY.toFixed(1)}px, 0px) scale(${currentZoom.toFixed(3)}) rotateX(${currentTiltX.toFixed(1)}deg) rotateY(${currentTiltY.toFixed(1)}deg)`;
      }
      tiltRafId = null;
    }
  }

  /* --- High-Precision Optical Loupe Lens (Supports Desktop Mouse & Mobile Touchscreen) --- */
  function updateLoupeLensAtClient(clientX, clientY, stageRect, isTouch = false) {
    if (!loupeLens || !loupeInner) return;

    const activeImg = primaryImg;
    if (!activeImg) return;

    const imgRect = activeImg.getBoundingClientRect();
    const lensRadius = loupeLens.offsetWidth ? loupeLens.offsetWidth / 2 : (isTouch ? 77 : 95);
    const zoomFactor = 3.2;

    const imgX = clientX - imgRect.left;
    const imgY = clientY - imgRect.top;

    if (clientX < stageRect.left - 40 || clientX > stageRect.right + 40 ||
        clientY < stageRect.top - 40 || clientY > stageRect.bottom + 40) {
      if (!isTouch) loupeLens.style.opacity = '0';
      return;
    }

    let lensX = clientX - stageRect.left;
    let lensY = clientY - stageRect.top;

    if (isTouch) {
      // Ergonomic offset: place lens above finger so user's finger never obscures the magnified detail
      if (lensY > 135) {
        lensY = lensY - 82;
      } else {
        lensY = lensY + 82;
      }
      // Keep lens cleanly within stage bounds
      lensX = Math.max(lensRadius + 6, Math.min(stageRect.width - lensRadius - 6, lensX));
      lensY = Math.max(lensRadius + 40, Math.min(stageRect.height - lensRadius - 6, lensY));
    }

    loupeLens.style.left = `${lensX.toFixed(1)}px`;
    loupeLens.style.top  = `${lensY.toFixed(1)}px`;
    loupeLens.style.opacity = '1';

    loupeInner.style.backgroundImage = `url('${activeImg.src}')`;
    loupeInner.style.backgroundSize = `${(imgRect.width * zoomFactor).toFixed(1)}px ${(imgRect.height * zoomFactor).toFixed(1)}px`;

    const bgX = -(imgX * zoomFactor - lensRadius);
    const bgY = -(imgY * zoomFactor - lensRadius);
    loupeInner.style.backgroundPosition = `${bgX.toFixed(1)}px ${bgY.toFixed(1)}px`;

    if (activeImg.style.filter && activeImg.style.filter !== 'none') {
      loupeInner.style.filter = activeImg.style.filter;
    } else {
      loupeInner.style.filter = 'none';
    }
  }

  function updateLoupeLens(e, stageRect) {
    updateLoupeLensAtClient(e.clientX, e.clientY, stageRect, false);
  }

  function positionLoupeAtImageRel(relX, relY) {
    if (!primaryImg || !stage) return;
    const stageRect = stage.getBoundingClientRect();
    const imgRect = primaryImg.getBoundingClientRect();
    const clientX = imgRect.left + imgRect.width * relX;
    const clientY = imgRect.top + imgRect.height * relY;
    updateLoupeLensAtClient(clientX, clientY, stageRect, true);
  }

  /* --- Interactive Stage Mouse & Drag Controls --- */
  stage.addEventListener('mousedown', (e) => {
    if (isMobileView()) return;
    if (e.target.closest('.hotspot-pin') || e.target.closest('.floating-stage-dock') || e.target.closest('.stage-dock-btn') || e.target.closest('.stage-craft-banner')) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = targetPanX;
    panStartY = targetPanY;
    stage.classList.add('is-panning');
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    stage.classList.remove('is-panning');
  });

  stage.addEventListener('mousemove', (e) => {
    if (isMobileView()) return;
    isMouseOverStage = true;
    const rect = stage.getBoundingClientRect();

    if (isDragging && targetZoom > 1.05) {
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      const maxPan = 240 * (targetZoom - 0.7);
      targetPanX = Math.min(Math.max(panStartX + dx, -maxPan), maxPan);
      targetPanY = Math.min(Math.max(panStartY + dy, -maxPan), maxPan);
      requestTiltUpdate();
      return;
    }

    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    const normX = (relX - 0.5) * 2;
    const normY = (relY - 0.5) * 2;

    targetTiltX = -normY * (targetZoom > 1.2 ? 5 : 12);
    targetTiltY = normX * (targetZoom > 1.2 ? 6 : 14);
    requestTiltUpdate();

    if (sheen) {
      sheen.style.background = `radial-gradient(circle at ${(relX * 100).toFixed(1)}% ${(relY * 100).toFixed(1)}%, rgba(255, 255, 255, 0.42) 0%, transparent 60%)`;
    }

    if (currentViewMode === 'loupe') {
      updateLoupeLens(e, rect);
    }
  });

  stage.addEventListener('mouseleave', () => {
    isMouseOverStage = false;
    if (targetZoom <= 1.05) {
      targetTiltX = 0;
      targetTiltY = 0;
      requestTiltUpdate();
    }
    if (loupeLens) loupeLens.style.opacity = '0';
  });

  // Mouse wheel zoom on stage
  stage.addEventListener('wheel', (e) => {
    if (isMobileView()) return;
    e.preventDefault();
    const zoomStep = e.deltaY < 0 ? 0.25 : -0.25;
    setZoom(targetZoom + zoomStep);
  }, { passive: false });

  // Double click to toggle inspection zoom at clicked point
  stage.addEventListener('dblclick', (e) => {
    if (isMobileView()) return;
    if (e.target.closest('.hotspot-pin') || e.target.closest('.floating-stage-dock') || e.target.closest('.stage-dock-btn') || e.target.closest('.stage-craft-banner')) return;
    if (targetZoom > 1.2) {
      setZoom(1.0);
    } else {
      const rect = product3dWrap ? product3dWrap.getBoundingClientRect() : stage.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) / rect.width;
      const clickY = (e.clientY - rect.top) / rect.height;
      const panX = (0.5 - clickX) * 220;
      const panY = (0.5 - clickY) * 220;
      setZoom(2.2, panX, panY);
    }
  });

  // Toolbar zoom buttons
  btnZoomIn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMobileView()) return;
    setZoom(targetZoom + 0.35);
  });
  btnZoomOut?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMobileView()) return;
    setZoom(targetZoom - 0.35);
  });

  // Detail Inspection toggle buttons
  btnInspectDetail?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMobileView()) return;
    if (targetZoom > 1.2) {
      setZoom(1.0);
    } else {
      setZoom(2.0, 0, 0);
    }
  });

  if (btnDockZoom && btnDockZoom !== btnInspectDetail) {
    btnDockZoom.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isMobileView()) return;
      if (targetZoom > 1.2) {
        setZoom(1.0);
      } else {
        setZoom(2.0, 0, 0);
      }
    });
  }

  btnHudResetZoom?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMobileView()) return;
    setZoom(1.0);
  });

  /* --- Render Hotspots on Product --- */
  function renderHotspots(hotspots) {
    hotspotsLayer.innerHTML = '';
    if (!hotspots) return;

    hotspots.forEach((hs, idx) => {
      const pin = document.createElement('div');
      pin.className = 'hotspot-pin';
      pin.style.left = `${hs.x}%`;
      pin.style.top  = `${hs.y}%`;
      pin.setAttribute('role', 'button');
      pin.setAttribute('tabindex', '0');
      pin.setAttribute('aria-label', `${hs.title}: ${hs.desc}`);

      const isDown = hs.y < 46;
      const isAlignLeft = hs.x < 30;
      const isAlignRight = hs.x > 70;

      let cardClasses = 'hotspot-card';
      if (isDown) cardClasses += ' card-down';
      if (isAlignLeft) cardClasses += ' card-align-left';
      else if (isAlignRight) cardClasses += ' card-align-right';

      const badgeText = hs.badge || `Performance 0${idx + 1}`;

      pin.innerHTML = `
        <div class="hotspot-core"></div>
        <div class="hotspot-ripple" aria-hidden="true"></div>
        <div class="${cardClasses}" role="tooltip">
          <span class="hotspot-badge">${badgeText}</span>
          <h4 class="hotspot-title">${hs.title}</h4>
          <p class="hotspot-desc">${hs.desc}</p>
        </div>
      `;

      pin.addEventListener('click', (e) => {
        if (currentViewMode === 'loupe' || stage?.classList.contains('is-loupe-mode')) return;
        e.stopPropagation();
        const wasActive = pin.classList.contains('is-active');
        document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));

        if (!wasActive) {
          pin.classList.add('is-active');

          if (!isMobileView()) {
            const panX = (0.5 - hs.x / 100) * 220;
            const panY = (0.5 - hs.y / 100) * 220;
            setZoom(2.0, panX, panY);
          }

          if (craftBanner && craftTitle && craftDesc && craftBadge) {
            craftBadge.textContent = badgeText;
            craftTitle.textContent = hs.title;
            craftDesc.textContent = hs.desc;
            craftBanner.classList.add('is-visible');
          }

          const card = pin.querySelector('.hotspot-card');
          if (card && stage) {
            const cardRect = card.getBoundingClientRect();
            const stageRect = stage.getBoundingClientRect();
            if (cardRect.top < stageRect.top + 16) {
              card.classList.add('card-down');
            }
            if (cardRect.bottom > stageRect.bottom - 16) {
              card.classList.remove('card-down');
            }
          }
        } else {
          if (!isMobileView()) {
            setZoom(1.0);
          }
          craftBanner?.classList.remove('is-visible');
        }
      });

      hotspotsLayer.appendChild(pin);
    });
  }

  // Stage background interaction / dismiss tooltip / tap to place loupe
  stage.addEventListener('click', (e) => {
    if (e.target.closest('.hotspot-pin') || e.target.closest('.stage-craft-banner') || e.target.closest('.floating-stage-dock') || e.target.closest('.stage-dock-btn') || e.target.closest('.mobile-stage-mode-pill')) return;

    if (currentViewMode === 'loupe') {
      const rect = stage.getBoundingClientRect();
      updateLoupeLensAtClient(e.clientX, e.clientY, rect, isMobileView());
      return;
    }

    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));
    craftBanner?.classList.remove('is-visible');
  });

  // Close Craft Banner button
  btnCloseCraft?.addEventListener('click', (e) => {
    e.stopPropagation();
    craftBanner?.classList.remove('is-visible');
    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));
    if (!isMobileView()) {
      setZoom(1.0);
    }
  });

  /* --- Render Material Swatches --- */
  function renderSwatches(finishes, product) {
    swatchesWrap.innerHTML = '';
    if (!finishes || !finishes.length) return;

    finishes.forEach((fin, idx) => {
      const btn = document.createElement('button');
      btn.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
      btn.setAttribute('title', fin.name);
      btn.setAttribute('aria-label', `Finish option: ${fin.name}`);
      btn.innerHTML = `<span class="swatch-fill" style="background-color: ${fin.color}"></span>`;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedFinish.textContent = fin.name;

        if (fin.img && primaryImg) {
          primaryImg.src = fin.img;
          if (loupeInner) loupeInner.style.backgroundImage = `url('${fin.img}')`;
        }

        if (primaryImg) {
          primaryImg.style.filter = fin.filter === 'none'
            ? 'drop-shadow(0 25px 35px rgba(35, 30, 24, 0.22))'
            : `${fin.filter} drop-shadow(0 25px 35px rgba(35, 30, 24, 0.22))`;
        }
      });

      swatchesWrap.appendChild(btn);
    });

    selectedFinish.textContent = finishes[0].name;
  }

  /* --- Switch View Mode (Studio Photo vs 3× Optical Macro Loupe) --- */
  function setViewMode(mode) {
    currentViewMode = mode;
    [tabPrimary, tabLoupe].forEach(t => {
      if (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    [mobileTabPrimary, mobileTabLoupe].forEach(t => {
      if (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    stage.classList.remove('is-loupe-mode');

    if (mode === 'primary') {
      tabPrimary?.classList.add('active');
      tabPrimary?.setAttribute('aria-selected', 'true');
      mobileTabPrimary?.classList.add('is-active');
      mobileTabPrimary?.setAttribute('aria-selected', 'true');
      if (loupeLens) loupeLens.style.opacity = '0';
    } else if (mode === 'loupe') {
      tabLoupe?.classList.add('active');
      tabLoupe?.setAttribute('aria-selected', 'true');
      mobileTabLoupe?.classList.add('is-active');
      mobileTabLoupe?.setAttribute('aria-selected', 'true');
      stage.classList.add('is-loupe-mode');
      craftBanner?.classList.remove('is-visible');
      document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));

      // If on mobile view, immediately place the loupe lens over the door handle/lock area cleanly
      if (isMobileView()) {
        setTimeout(() => {
          positionLoupeAtImageRel(0.55, 0.48);
        }, 60);
      }
    }
  }

  tabPrimary?.addEventListener('click', () => setViewMode('primary'));
  tabLoupe?.addEventListener('click', () => setViewMode('loupe'));
  mobileTabPrimary?.addEventListener('click', (e) => {
    e.stopPropagation();
    setViewMode('primary');
  });
  mobileTabLoupe?.addEventListener('click', (e) => {
    e.stopPropagation();
    setViewMode('loupe');
  });

  /* --- Architectural Dimensions Toggle --- */
  btnToggleDims?.addEventListener('click', () => {
    const isVis = dimOverlay.classList.toggle('is-visible');
    btnToggleDims.classList.toggle('active', isVis);
  });


  /* --- Reset View --- */
  btnResetView?.addEventListener('click', () => {
    targetTiltX = 0;
    targetTiltY = 0;
    setZoom(1.0);
    craftBanner?.classList.remove('is-visible');
    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));
  });

  /* --- Atelier Dossier Slide-Over Drawer Controller --- */
  function openDossierDrawer() {
    if (!dossierDrawer) return;
    dossierDrawer.classList.add('is-open');
    dossierDrawer.setAttribute('aria-hidden', 'false');
    dossierBackdrop?.classList.add('is-open');
    btnOpenDossier?.classList.add('active');
    btnDockDossier?.classList.add('active');
  }

  function closeDossierDrawer() {
    if (!dossierDrawer) return;
    dossierDrawer.classList.remove('is-open');
    dossierDrawer.setAttribute('aria-hidden', 'true');
    dossierBackdrop?.classList.remove('is-open');
    btnOpenDossier?.classList.remove('active');
    btnDockDossier?.classList.remove('active');
  }

  function toggleDossierDrawer() {
    if (dossierDrawer?.classList.contains('is-open')) {
      closeDossierDrawer();
    } else {
      openDossierDrawer();
    }
  }

  btnOpenDossier?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDossierDrawer();
  });

  if (btnDockDossier && btnDockDossier !== btnOpenDossier) {
    btnDockDossier.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDossierDrawer();
    });
  }

  btnCloseDossier?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDossierDrawer();
  });

  btnDrawerReturn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDossierDrawer();
  });

  dossierBackdrop?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeDossierDrawer();
  });

  // Drawer section tabs jumping
  dossierTabPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dossierTabPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      const targetTab = pill.getAttribute('data-drawer-tab');
      const targetSec = document.getElementById(`section-dossier-${targetTab}`);
      if (targetSec && dossierDrawerBody) {
        targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- True Fullscreen API Toggle --- */
  function syncFullscreenUI() {
    const isFull = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
    modal?.classList.toggle('is-fullscreen', isFull);
    document.body.classList.toggle('is-fullscreen', isFull);
    btnToggleFullscreen?.classList.toggle('active', isFull);
    if (fullscreenLabel) fullscreenLabel.textContent = isFull ? 'Exit Full' : 'Fullscreen';
    if (isFull) {
      craftBanner?.classList.remove('is-visible');
      document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));
    }
  }

  btnToggleFullscreen?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || modal?.classList.contains('is-fullscreen'));
    if (!isFull) {
      craftBanner?.classList.remove('is-visible');
      document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('is-active'));
      if (modal?.requestFullscreen) {
        modal.requestFullscreen().catch(() => {
          modal.classList.add('is-fullscreen');
          document.body.classList.add('is-fullscreen');
          btnToggleFullscreen.classList.add('active');
          if (fullscreenLabel) fullscreenLabel.textContent = 'Exit Full';
        });
      } else if (modal?.webkitRequestFullscreen) {
        modal.webkitRequestFullscreen();
      } else {
        modal?.classList.add('is-fullscreen');
        document.body.classList.add('is-fullscreen');
        btnToggleFullscreen.classList.add('active');
        if (fullscreenLabel) fullscreenLabel.textContent = 'Exit Full';
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      modal?.classList.remove('is-fullscreen');
      document.body.classList.remove('is-fullscreen');
      btnToggleFullscreen.classList.remove('active');
      if (fullscreenLabel) fullscreenLabel.textContent = 'Fullscreen';
    }
  });

  document.addEventListener('fullscreenchange', syncFullscreenUI);
  document.addEventListener('webkitfullscreenchange', syncFullscreenUI);
  document.addEventListener('mozfullscreenchange', syncFullscreenUI);
  document.addEventListener('MSFullscreenChange', syncFullscreenUI);

  /* --- Populate & Open Product Exhibition --- */
  function openProduct(key) {
    const p = PRODUCTS[key];
    if (!p) return;

    currentKey = key;
    currentProductIndex = PRODUCT_KEYS.indexOf(key);

    // Meta & Title
    if (modalTitle) modalTitle.textContent = p.name;
    if (modalMaterial) modalMaterial.textContent = p.material;
    if (modalTag) modalTag.textContent = p.tag;
    if (modalSeries) modalSeries.textContent = p.series;
    if (seriesNav) {
      seriesNav.textContent = p.series;
      seriesNav.title = p.series;
    }
    const visibleCards = Array.from(document.querySelectorAll('.product-card:not(.is-hidden)'));
    const visibleKeys = visibleCards.map(c => c.getAttribute('data-product-id')).filter(id => id && PRODUCTS[id]);
    const keysToUse = visibleKeys.length > 0 ? visibleKeys : PRODUCT_KEYS;
    const curSubIdx = keysToUse.indexOf(key);
    if (counter) {
      if (curSubIdx >= 0) {
        counter.textContent = `${curSubIdx + 1} / ${keysToUse.length}`;
      } else {
        counter.textContent = `${currentProductIndex + 1} / ${PRODUCT_KEYS.length}`;
      }
    }

    // Stage Dimensions
    applyProductDimensions(p);

    // Images
    if (primaryImg) {
      primaryImg.src = p.primaryImg;
      primaryImg.alt = `${p.name} — Full Silhouette View`;
      primaryImg.style.filter = 'drop-shadow(0 25px 35px rgba(35, 30, 24, 0.22))';
    }
    if (loupeInner) {
      loupeInner.style.backgroundImage = `url('${p.primaryImg}')`;
    }

    // Hotspots & Swatches
    renderHotspots(p.hotspots && p.hotspots.length ? p.hotspots : STANDARD_DOOR_HOTSPOTS);
    renderSwatches(p.finishes, p);

    // Reset visualizer zoom, pan, and mode
    targetTiltX = 0;
    targetTiltY = 0;
    setZoom(1.0);
    setViewMode('primary');
    modalBody?.scrollTo({ top: 0, behavior: 'auto' });
    dossierDrawerBody?.scrollTo({ top: 0, behavior: 'auto' });

    // Open Modal
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-locked');
    requestTiltUpdate();

    // Accessibility focus
    closeBtn?.focus();
  }

  function closeModal() {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    modal.classList.remove('is-fullscreen');
    document.body.classList.remove('is-fullscreen');
    btnToggleFullscreen?.classList.remove('active');
    if (fullscreenLabel) fullscreenLabel.textContent = 'Fullscreen';
    closeDossierDrawer();
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-locked');
    dimOverlay?.classList.remove('is-visible');
    btnToggleDims?.classList.remove('active');
    craftBanner?.classList.remove('is-visible');
    setZoom(1.0);
    if (tiltRafId) {
      cancelAnimationFrame(tiltRafId);
      tiltRafId = null;
    }
  }

  /* --- Next / Previous Navigation --- */
  function navigateProduct(delta) {
    const visibleCards = Array.from(document.querySelectorAll('.product-card:not(.is-hidden)'));
    const visibleKeys = visibleCards.map(c => c.getAttribute('data-product-id')).filter(id => id && PRODUCTS[id]);
    const keysToUse = visibleKeys.length > 0 ? visibleKeys : PRODUCT_KEYS;
    const curIdx = keysToUse.indexOf(currentKey);
    let nextIdx = curIdx >= 0 ? (curIdx + delta + keysToUse.length) % keysToUse.length : 0;
    openProduct(keysToUse[nextIdx]);
  }

  prevBtn?.addEventListener('click', () => navigateProduct(-1));
  nextBtn?.addEventListener('click', () => navigateProduct(1));
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      const inquiryDrawer = document.getElementById('inquiry-drawer');
      if (inquiryDrawer && inquiryDrawer.classList.contains('is-open')) {
        inquiryDrawer.classList.remove('is-open');
      } else if (dossierDrawer && dossierDrawer.classList.contains('is-open')) {
        closeDossierDrawer();
      } else {
        closeModal();
      }
    } else if (e.key === 'ArrowLeft') {
      navigateProduct(-1);
    } else if (e.key === 'ArrowRight') {
      navigateProduct(1);
    }
  });

  /* --- Mobile Cell Phone Touch Gestures on Modal Stage --- */
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let touchLastTapTime = 0;
  let touchInitialDist = 0;
  let touchInitialZoom = 1.0;
  let isTouchPanning = false;

  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      if (e.target.closest('.hotspot-pin') || e.target.closest('.floating-stage-dock') || e.target.closest('.stage-dock-btn') || e.target.closest('.stage-craft-banner') || e.target.closest('.mobile-stage-mode-pill')) return;

      if (e.touches.length === 1) {
        const now = performance.now();
        const t = e.touches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
        touchStartTime = now;
        dragStartX = touchStartX;
        dragStartY = touchStartY;
        panStartX = targetPanX;
        panStartY = targetPanY;

        // In Loupe mode: immediately activate and position the optical loupe lens on the touched point
        if (currentViewMode === 'loupe') {
          const rect = stage.getBoundingClientRect();
          updateLoupeLensAtClient(t.clientX, t.clientY, rect, true);
          return;
        }

        // On mobile view: double-tap zoom and touch panning are completely disabled
        if (isMobileView()) {
          isTouchPanning = false;
          return;
        }

        // Double tap detection for quick mobile zoom toggle (desktop touchscreens only)
        if (now - touchLastTapTime < 320) {
          if (targetZoom > 1.2) {
            setZoom(1.0);
          } else {
            setZoom(2.0);
          }
          touchLastTapTime = 0;
          return;
        }
        touchLastTapTime = now;

        if (targetZoom > 1.05) {
          isTouchPanning = true;
        }
      } else if (e.touches.length === 2) {
        isTouchPanning = false;
        // On mobile view: pinch-to-zoom is completely disabled
        if (isMobileView()) return;
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        touchInitialDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        touchInitialZoom = targetZoom;
      }
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      if (e.target.closest('.hotspot-pin') || e.target.closest('.floating-stage-dock') || e.target.closest('.stage-dock-btn') || e.target.closest('.stage-craft-banner') || e.target.closest('.mobile-stage-mode-pill')) return;

      // In Loupe mode: smoothly track the touch finger across the door texture
      if (currentViewMode === 'loupe') {
        if (e.touches.length >= 1) {
          const t = e.touches[0];
          const rect = stage.getBoundingClientRect();
          updateLoupeLensAtClient(t.clientX, t.clientY, rect, true);
        }
        return;
      }

      // In Photo mode on mobile: dynamic tactile 3D motion, translation, and specular lighting
      if (isMobileView()) {
        if (e.touches.length === 1) {
          const t = e.touches[0];
          const rect = stage.getBoundingClientRect();
          const dx = t.clientX - touchStartX;
          const dy = t.clientY - touchStartY;

          // Rich tactile physical translation: photo follows and glides with touch
          const maxPanX = 110;
          const maxPanY = 85;
          targetPanX = Math.max(-maxPanX, Math.min(maxPanX, dx * 0.72));
          targetPanY = Math.max(-maxPanY, Math.min(maxPanY, dy * 0.58));

          // Expressive 3D perspective rotation (tilts horizontally up to 18deg, vertically up to 15deg)
          const normX = Math.max(-1, Math.min(1, dx / 110));
          const normY = Math.max(-1, Math.min(1, dy / 110));
          targetTiltY = normX * 18;
          targetTiltX = -normY * 15;

          // Interactive specular studio lighting moving across the door surface
          const relX = (t.clientX - rect.left) / rect.width;
          const relY = (t.clientY - rect.top) / rect.height;
          if (sheen) {
            sheen.style.background = `radial-gradient(circle at ${(relX * 100).toFixed(1)}% ${(relY * 100).toFixed(1)}%, rgba(255, 255, 255, 0.48) 0%, transparent 60%)`;
          }

          requestTiltUpdate();
        }
        return;
      }

      if (e.touches.length === 1 && isTouchPanning && targetZoom > 1.05) {
        const dx = e.touches[0].clientX - dragStartX;
        const dy = e.touches[0].clientY - dragStartY;
        const maxPan = 240 * (targetZoom - 0.7);
        targetPanX = Math.min(Math.max(panStartX + dx, -maxPan), maxPan);
        targetPanY = Math.min(Math.max(panStartY + dy, -maxPan), maxPan);
        requestTiltUpdate();
      } else if (e.touches.length === 2 && touchInitialDist > 10) {
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const scale = currentDist / touchInitialDist;
        setZoom(Math.min(Math.max(touchInitialZoom * scale, 1.0), 3.0));
      }
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      // In Loupe mode: loupe stays parked where released so mobile user can study the detail comfortably
      if (currentViewMode === 'loupe') {
        return;
      }

      // In Photo mode on mobile: smoothly spring photo and 3D tilt back to center
      if (isMobileView()) {
        targetPanX = 0;
        targetPanY = 0;
        targetTiltX = 0;
        targetTiltY = 0;
        requestTiltUpdate();
      }

      if (isTouchPanning) {
        isTouchPanning = false;
        return;
      }

      // On mobile view (and when not zoomed on desktop), horizontal swipe navigates between doors smoothly
      if (e.changedTouches.length === 1 && (isMobileView() || targetZoom <= 1.05)) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const elapsed = performance.now() - touchStartTime;

        // Detect horizontal swipe gesture: min 65px distance within 450ms, predominantly horizontal
        if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35 && elapsed < 450) {
          if (deltaX < 0) {
            // Swiped left -> Next piece
            navigateProduct(1);
          } else {
            // Swiped right -> Previous piece
            navigateProduct(-1);
          }
        }
      }
    }, { passive: true });

    // Device orientation gyroscope for interactive specular light sheen in Photo mode
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (!modal || !modal.classList.contains('is-open')) return;
        if (currentViewMode !== 'primary' || !isMobileView()) return;
        if (typeof e.gamma === 'number' && typeof e.beta === 'number') {
          const tiltY = Math.max(-6, Math.min(6, e.gamma * 0.2));
          const tiltX = Math.max(-5, Math.min(5, (e.beta - 45) * 0.15));
          targetTiltX = tiltX;
          targetTiltY = tiltY;
          requestTiltUpdate();
        }
      }, { passive: true });
    }

    // Handle viewport resize: lock zoom and pan to default on mobile
    window.addEventListener('resize', () => {
      if (isMobileView() && (targetZoom !== 1.0 || currentZoom !== 1.0 || targetPanX !== 0 || targetPanY !== 0)) {
        setZoom(1.0, 0, 0);
      }
    });
  }

  /* --- Product Card Clicks in Gallery --- */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.getAttribute('data-product-id');
      if (id && PRODUCTS[id]) {
        openProduct(id);
      }
    });
  });

  /* --- Tear Sheet (.PDF) Download Mock --- */
  tearSheetBtn?.addEventListener('click', () => {
    const p = PRODUCTS[currentKey];
    const originalText = tearSheetBtn.querySelector('span')?.textContent || '';
    const span = tearSheetBtn.querySelector('span');
    if (span) span.textContent = 'Generating Architectural PDF...';

    setTimeout(() => {
      if (span) span.textContent = '✓ Spec Sheet Downloaded';
      setTimeout(() => {
        if (span) span.textContent = originalText;
      }, 3000);
    }, 900);
  });

  // Expose for external calls
  window.openProductShowcase = openProduct;
}


/* ================================================================
   7. Private Consultation & Atelier Inquiry Drawer
   ================================================================ */
function initInquiryDrawer() {
  const drawer        = document.getElementById('inquiry-drawer');
  const backdrop      = document.getElementById('drawer-backdrop');
  const closeBtn      = document.getElementById('drawer-close-btn');
  const form          = document.getElementById('inquiry-form');
  const successBox    = document.getElementById('inquiry-success');
  const closeSuccess  = document.getElementById('btn-close-success');
  const thumb         = document.getElementById('inquiry-thumb');
  const pieceName     = document.getElementById('inquiry-piece-name');
  const pieceMat      = document.getElementById('inquiry-piece-material');

  // Trigger buttons
  const navInquireBtn = document.getElementById('btn-nav-inquire');
  const serviceBtn    = document.getElementById('btn-service-inquire');
  const modalInqBtn   = document.getElementById('btn-open-inquiry');
  const samplesBtn    = document.getElementById('btn-request-samples');

  if (!drawer) return;

  function openDrawer(preselectedKey = null) {
    const p = preselectedKey && PRODUCTS[preselectedKey]
      ? PRODUCTS[preselectedKey]
      : PRODUCTS['seraphine-chair'];

    if (thumb) thumb.src = p.primaryImg;
    if (pieceName) pieceName.textContent = p.name;
    if (pieceMat) pieceMat.textContent = p.material;

    // Reset form display
    if (form) form.style.display = 'flex';
    if (successBox) successBox.style.display = 'none';

    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-locked');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    // Only unlock body if product modal isn't also open
    const modal = document.getElementById('product-modal');
    if (!modal || !modal.classList.contains('is-open')) {
      document.body.classList.remove('modal-locked');
    }
  }

  navInquireBtn?.addEventListener('click', () => openDrawer('seraphine-chair'));
  serviceBtn?.addEventListener('click', () => openDrawer('door-internal-1'));
  modalInqBtn?.addEventListener('click', () => {
    const titleEl = document.getElementById('modal-product-title');
    const name = titleEl?.textContent || '';
    const key = Object.keys(PRODUCTS).find(k => PRODUCTS[k].name === name) || 'seraphine-chair';
    openDrawer(key);
  });
  samplesBtn?.addEventListener('click', () => {
    const titleEl = document.getElementById('modal-product-title');
    const name = titleEl?.textContent || '';
    const key = Object.keys(PRODUCTS).find(k => PRODUCTS[k].name === name) || 'seraphine-chair';
    openDrawer(key);
    const select = document.getElementById('inq-type');
    if (select) select.value = 'samples';
  });

  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
  closeSuccess?.addEventListener('click', closeDrawer);

  const footerConsultBtn = document.getElementById('footer-consult-trigger');
  footerConsultBtn?.addEventListener('click', () => {
    openDrawer('door-internal-1');
    const select = document.getElementById('inq-type');
    if (select) select.value = 'bespoke';
  });

  /* Form submission */
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('inq-name');
    const emailInput = document.getElementById('inq-email');

    if (!nameInput?.value.trim()) {
      nameInput.focus();
      return;
    }
    if (!emailInput?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailInput.focus();
      return;
    }

    // Submit success
    form.style.display = 'none';
    successBox.style.display = 'flex';
  });
}


/* ================================================================
   8. Newsletter & Architectural Spec Form
   ================================================================ */
function initNewsletterForm() {
  const form      = document.getElementById('newsletter-form');
  const input     = document.getElementById('newsletter-email');
  const submit    = document.getElementById('newsletter-submit');
  const statusBox = document.getElementById('newsletter-status');

  if (!form || !input) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.style.color = '#e74c3c';
      if (statusBox) {
        statusBox.textContent = 'Please enter a valid work or project email.';
        statusBox.style.color = '#e74c3c';
      }
      setTimeout(() => {
        input.style.color = '';
        if (statusBox) statusBox.textContent = '';
      }, 2500);
      return;
    }

    // Success state
    if (submit) {
      submit.innerHTML = '<span style="color:#B8986A;font-weight:600;">✓</span>';
    }
    if (statusBox) {
      statusBox.textContent = '✓ 2024 WPC Architectural Catalog & Specs sent!';
      statusBox.style.color = 'var(--color-gold-light)';
    }
    input.value = '';
    input.placeholder = 'Catalog sent successfully!';

    setTimeout(() => {
      if (submit) submit.innerHTML = '<span class="submit-arrow">&#8594;</span>';
      input.placeholder = 'Enter email for catalog...';
      if (statusBox) statusBox.textContent = '';
    }, 4500);
  });
}


/* ================================================================
   9. Cursor Spotlight (Performance Optimized)
   ================================================================ */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  // Do not run on touch screens or mobile
  if (window.matchMedia('(pointer: coarse), (hover: none)').matches) {
    spotlight.style.display = 'none';
    return;
  }

  let mouseX = -1000, mouseY = -1000;
  let currX   = -1000, currY = -1000;
  let isMoving = false;
  let rafId = null;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function updateSpotlight() {
    currX = lerp(currX, mouseX, 0.14);
    currY = lerp(currY, mouseY, 0.14);
    spotlight.style.transform = `translate3d(${Math.round(currX)}px, ${Math.round(currY)}px, 0) translate(-50%, -50%)`;

    if (Math.abs(currX - mouseX) > 0.5 || Math.abs(currY - mouseY) > 0.5) {
      rafId = requestAnimationFrame(updateSpotlight);
    } else {
      rafId = null;
      isMoving = false;
    }
  }

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    }
  }, { passive: true });

  const hoverEls = document.querySelectorAll(
    '.product-card-link, .btn-primary, .btn-outline, .nav-link, .filter-btn, .nav-inquire-pill'
  );
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      spotlight.style.width  = '560px';
      spotlight.style.height = '560px';
      spotlight.style.transition = 'width 0.3s ease, height 0.3s ease';
    });
    el.addEventListener('mouseleave', () => {
      spotlight.style.width  = '420px';
      spotlight.style.height = '420px';
    });
  });
}


/* ================================================================
   10. Cinematic Luxury Scroll Engine & Full-View Collection Framing
   ================================================================ */

/**
 * Mathematically pure, frame-synchronous luxury scroll glide.
 * Temporarily isolates CSS scroll-behavior to prevent engine conflicts,
 * using Quartic easeInOut for an effortless momentum and velvet landing.
 */
function smoothLuxuryScrollTo(targetY, duration = 1050, onComplete) {
  const docEl = document.documentElement;
  const originalScrollBehavior = docEl.style.scrollBehavior;
  // Disable native CSS smooth scroll during animation so JS has frame-perfect, instantaneous control
  docEl.style.scrollBehavior = 'auto';

  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    docEl.style.scrollBehavior = originalScrollBehavior;
    if (onComplete) onComplete();
    return;
  }

  const startTime = performance.now();
  let isCancelled = false;

  const cleanup = () => {
    window.removeEventListener('wheel', onInterrupt);
    window.removeEventListener('touchmove', onInterrupt);
    docEl.style.scrollBehavior = originalScrollBehavior;
  };

  const onInterrupt = () => {
    isCancelled = true;
    cleanup();
  };

  window.addEventListener('wheel', onInterrupt, { passive: true, once: true });
  window.addEventListener('touchmove', onInterrupt, { passive: true, once: true });

  // Luxury Quartic easeInOut: velvety acceleration and silky soft deceleration
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(currentTime) {
    if (isCancelled) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, Math.round(startY + distance * ease));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      cleanup();
      if (onComplete) onComplete();
    }
  }

  requestAnimationFrame(step);
}

/**
 * Calculates optimal scroll destination so the door collection is framed
 * in 100% full view on any device screen height.
 */
function getCollectionFullViewTargetY() {
  const collection = document.getElementById('collection');
  if (!collection) return 0;

  const productGrid = document.getElementById('product-grid');
  const filters = collection.querySelector('.filters');
  const navH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '80', 10
  );

  const collectionTop = collection.getBoundingClientRect().top + window.scrollY;
  const viewportH = window.innerHeight;

  if (productGrid) {
    const gridRect = productGrid.getBoundingClientRect();
    const gridBottom = gridRect.bottom + window.scrollY;
    const totalSectionH = gridBottom - collectionTop;

    // If section header + product cards all fit comfortably within current viewport
    if (totalSectionH <= viewportH - navH - 30) {
      return Math.max(0, collectionTop - navH);
    }

    // On standard screens (laptops & 1080p), frame so the filters dock cleanly beneath
    // the sticky navigation and the entire first row of door cards is in 100% full view
    if (filters) {
      const filtersTop = filters.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, filtersTop - navH - 10);
    }
  }

  return Math.max(0, collectionTop - navH);
}

function initHeroCtaAnimation() {
  const heroCta = document.getElementById('hero-cta');
  if (!heroCta) return;

  heroCta.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Subtle luxury tactile button compression
    heroCta.classList.add('is-pressed');
    setTimeout(() => {
      heroCta.classList.remove('is-pressed');
    }, 450);

    // 2. Pre-reveal all collection cards so they are already crisp and glowing on arrival
    document.querySelectorAll('.product-card').forEach(card => card.classList.add('is-visible'));

    // 3. Cinematic luxury glide with full view of the collection
    const targetY = getCollectionFullViewTargetY();
    smoothLuxuryScrollTo(targetY, 1100, () => {
      // Elegant gold glow pulse on section divider upon landing
      const divider = document.querySelector('.collection .section-divider');
      if (divider) {
        divider.style.transition = 'width 0.8s var(--ease-luxury), box-shadow 0.8s ease';
        divider.style.width = '75px';
        divider.style.boxShadow = '0 0 12px rgba(184, 152, 106, 0.5)';
        setTimeout(() => {
          divider.style.width = '';
          divider.style.boxShadow = '';
        }, 1200);
      }
    });
  });

  // Also enable smooth luxury scroll on the hero bottom scroll indicator
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  scrollIndicator?.addEventListener('click', () => {
    document.querySelectorAll('.product-card').forEach(card => card.classList.add('is-visible'));
    const targetY = getCollectionFullViewTargetY();
    smoothLuxuryScrollTo(targetY, 1100);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    // Skip hero-cta since it has dedicated full-view sequence
    if (link.id === 'hero-cta') return;

    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.length <= 1) return;
      const id = href.slice(1);

      // If it's a product ID anchor, open the modal instead of scrolling
      if (PRODUCTS[id]) {
        e.preventDefault();
        if (window.openProductShowcase) {
          window.openProductShowcase(id);
        }
        return;
      }

      // If it's the Collection navigation or footer links, use the full-view framing
      if (id === 'collection') {
        e.preventDefault();
        // If it's a footer collection category link, activate corresponding filter tab
        if (link.id === 'flink-main-entrance') {
          const filterBtn = document.getElementById('filter-main-entrance');
          if (filterBtn) filterBtn.click();
        } else if (link.id === 'flink-internal' || link.id === 'flink-bathroom') {
          const filterBtn = document.getElementById('filter-internal');
          if (filterBtn) filterBtn.click();
        }

        document.querySelectorAll('.product-card').forEach(card => card.classList.add('is-visible'));
        const targetY = getCollectionFullViewTargetY();
        smoothLuxuryScrollTo(targetY, 1050);
        return;
      }

      // If it's the Craftsmanship navigation link, provide generous atelier framing and pre-reveal elements
      if (id === 'craftsmanship') {
        e.preventDefault();
        const craftEl = document.getElementById('craftsmanship');
        if (craftEl) {
          const navH = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '80', 10
          );
          craftEl.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('is-visible'));
          const targetY = Math.max(0, craftEl.getBoundingClientRect().top + window.scrollY - navH);
          smoothLuxuryScrollTo(targetY, 1050);
        }
        return;
      }

      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '80', 10
        );
        const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navH);
        smoothLuxuryScrollTo(targetY, 900);
      }
    });
  });
}


/* ================================================================
   11. Image Lazy Load Fade-In
   ================================================================ */
function initImageFadeIn() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
      img.addEventListener('load',  () => { img.style.opacity = '1'; }, { once: true });
      img.addEventListener('error', () => { img.style.opacity = '1'; }, { once: true });
    }
  });
}


/* ================================================================
   12. Parallax on Hero Image (RAF Throttled & Hardware Accelerated)
   ================================================================ */
function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg-img');
  if (!heroBg) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled <= window.innerHeight) {
          heroBg.style.transform = `scale(1) translate3d(0, ${(scrolled * 0.22).toFixed(1)}px, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


/* ================================================================
   13. Initialize Everything on DOM Ready
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initPartnersCarousel();
  initProductFilters();
  initProductShowcaseModal();
  initInquiryDrawer();
  initNewsletterForm();
  initHeroCtaAnimation();
  initSmoothScroll();
  initImageFadeIn();
  initCursorSpotlight();
  initHeroParallax();
});
