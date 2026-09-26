/**
 * Comprehensive biographical, accreditation, and media archive for Chef Aqsa Lakdawala
 * Derived directly from her press features, university roles, and culinary diplomas.
 */

export interface PressArticle {
  id: string;
  source: string;
  headline: string;
  subheadline: string;
  date: string;
  location: string;
  summary: string;
  fullExcerpt: string[];
  keyQuote: string;
  highlights: string[];
}

export interface SisterBrandMenuItem {
  name: string;
  price: number;
  description?: string;
  tag?: string;
}

export interface SisterBrandMenuSection {
  title: string;
  note?: string;
  items: SisterBrandMenuItem[];
}

export interface SisterBrand {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  fullStory: string;
  phone: string;
  popularItems: { name: string; tag: string }[];
  menuSections: SisterBrandMenuSection[];
  image: string;
  location: string;
}

export const CHEF_PROFILE = {
  fullName: "Aqsa Lakdawala Khimjibhai",
  title: "Head Pastry Chef, Culinary Educator & Founder",
  almaMater: [
    {
      institution: "Academy of Pastry & Culinary Arts (APCA) Bangalore",
      credential: "Advanced Diploma in French Pastry Arts (May 2022 Batch)",
      description: "Mastered European tempering, mirror glaze physics, viennoiserie, entremet layering, and sugarcraft under world pastry champions."
    },
    {
      institution: "University of Manchester (UK)",
      credential: "MSc in Business Psychology",
      description: "Studied human sensory perception and consumer experience, which now guides how her pastry flavor balances trigger happiness and comfort."
    },
    {
      institution: "Dhempe College, Miramar (Goa)",
      credential: "BSc in Psychology",
      description: "Graduated with honors while running early iterations of Cakes on Skates between college classes."
    },
    {
      institution: "KLE University Hotel Management College",
      credential: "Head of Bakery & Confectionery Department",
      description: "Leading curriculum, training aspiring professional chefs in food science, sanitation, and haute patisserie techniques across Belgaum."
    }
  ],
  stats: [
    { label: "Cakes Handcrafted", value: "12,000+" },
    { label: "Online & Offline Students", value: "850+" },
    { label: "Kitchen Hubs", value: "2 Cities" },
    { label: "Pure Dairy & Couverture", value: "100%" }
  ],
  philosophy: "Baking is not merely confection; it is the chemistry of joy and the art of turning celebration into an unforgettable sensory memory. When someone takes a bite of our crisp hazelnut praline enveloped in silky Belgian chocolate, it should bring immediate warmth."
};

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: "navhind-times-2020",
    source: "The Navhind Times (NT BUZZ)",
    headline: "Sweet Talking: Live Your Dream",
    subheadline: "Aqsa Lakdawala serves up slices of yum through her cloud kitchen in St. Inez with an exclusive Christmas menu",
    date: "Tuesday, December 22, 2020",
    location: "Panaji / St. Inez, Goa",
    keyQuote: "I have a supportive team of four dynamic women. Hospitality is male-dominated, and it was a proud coincidence to find all hardworking women who manage our ovens, daily inventory, and express baking with extreme passion.",
    summary: "From baking her first birthday cake for her mother at 11 years old to running an all-women cloud kitchen in St. Inez during the pandemic, and mentoring students worldwide.",
    highlights: [
      "Baked first cake at age 11 for mother's birthday; started commercial baking from home at age 16.",
      "Worked at a French patisserie in Bengaluru before returning to Goa during the 2020 pandemic lockdown.",
      "Launched St. Inez cloud kitchen with 4 dynamic women managing raw materials, baking, and rapid 2-hour dispatch.",
      "Shifted masterclasses online with eager students logging in from Dubai, London, Norway, and across India.",
      "Featured Christmas specialties: Snowman Macarons, Pumpkin Spice Santa Cake, Stollen, and Boozy Plum Cake.",
      "Vision to build an independent specialized pastry academy in India."
    ],
    fullExcerpt: [
      "When Aqsa Lakdawala was 11 years old, she baked her first cake for her mother's birthday. 'The cake wasn't great but my mum ate most of it with a huge smile on her face,' she remembers.",
      "At 16, her friend suggested she start home baking as a part-time business. She and her sister went door-to-door in their housing society with a cake menu and sample cake bites for everyone to taste.",
      "'I still remember the first order I got was for six red velvet cupcakes and I cannot express how happy I was,' she says. The whole idea behind this name is speed. 'I used to take same day urgent orders and bake cakes fresh for my clients within two to three hours and even today we are continuing to do so.'",
      "While Lakdawala had recently moved to Bengaluru to work in a French patisserie, the pandemic forced her to return to Goa. In August 2020, she launched her cloud kitchen in St. Inez with a dedicated all-women brigade.",
      "Practical classes were impossible during early pandemic lockdowns, so she moved them online. Students from Dubai, London, Norway, and across India enrolled to master the chemistry of eggless and French bakes."
    ]
  },
  {
    id: "apusa-herald-feature",
    source: "The Herald / Apusa Regional Spotlight",
    headline: "Cakes on Skates, Caranzalem",
    subheadline: "20-year-old psychology scholar turns rapid cake cravings into a thriving coastal confectionery sensation",
    date: "Goa Edition",
    location: "Caranzalem, Goa",
    keyQuote: "I take urgent orders if required. At times the customer orders it at noon and wants it by five in the evening. So you can get fresh cakes in no time. Hence the name Cakes on Skates!",
    summary: "How rapid turnarounds, YouTube self-learning, and an amusing cupcake mishap shaped the speed and perfection of Cakes on Skates.",
    highlights: [
      "Balancing third-year Psychology studies at Dhempe College Miramar with round-the-clock baking.",
      "Pioneered express same-day celebration deliveries in North Goa when other bakeries needed 48 hours notice.",
      "Evolved from basic sponge cakes to 2-tier architectural cakes and intricate fondant sculptures.",
      "The famous mishap: forgot sugar in 30 cupcakes, mum covered for her saying it's calorie-conscious — now sugar is the first ingredient measured!"
    ],
    fullExcerpt: [
      "Aqsa Lakdawala's Cakes on Skates is all about speed delivery. 'I take urgent orders if required. At times the customer orders at noon and wants it by five in the evening. So you get fresh cakes in no time. Hence the name Cakes on Skates,' says 20-year-old Aqsa Lakdawala, who is doing her third year in Psychology at Dhempe College, Miramar.",
      "'I have a huge sweet tooth, but as I was on the heavier side, my parents didn't allow me to eat cakes too often. So I started baking and eating!' she chuckles.",
      "With YouTube as her initial teacher, Lakdawala soon began experimenting further and creating her own recipes. 'I started with simple sponge cakes and cupcakes with a little cream. Now I make all sorts of cakes from minion cakes to 2-tier celebration tiers.'",
      "She shares a laugh about her early days: 'There was this one time that I had made 30 cupcakes for guests and forgot to add sugar! Luckily it didn't taste bad because it had lots of cream, and my mum covered it up by saying her daughter is calorie-conscious. Now sugar is the first thing I measure and keep aside!'"
    ]
  },
  {
    id: "itsgoa-spotlight",
    source: "ItsGoa Media & Culinary Feature",
    headline: "Crafting Sweetness Across Borders",
    subheadline: "Aqsa Lakdawala blends international pastry science, university lecturing, and coastal warmth",
    date: "Editorial Feature",
    location: "Goa & Belgaum",
    keyQuote: "Sweetening lives across borders between Goa and Belgaum with certified European pastry precision and warm hospitality.",
    summary: "A certified pastry chef running high-volume cloud kitchens in Goa and Belgaum while heading the bakery department at KLE University's Hotel Management College.",
    highlights: [
      "Oversees concurrent cloud operations in Goa and Belgaum with cold-chain temperature control.",
      "Heads bakery division at KLE University Hotel Management College, training aspiring hospitality graduates.",
      "Monthly visits to Goa to supervise bespoke celebrity gateaux, wedding dessert tables, and quality assurance."
    ],
    fullExcerpt: [
      "A certified pastry chef, Aqsa Lakdawala runs a cloud kitchen in Goa and Belgaum and heads the bakery department at KLE University's Hotel Management College.",
      "She balances teaching future hospitality leaders, conducting monthly masterclasses in Goa, and ensuring strict ingredient purity at private and celebrity events, sweetening lives across borders."
    ]
  },
  {
    id: "apca-spotlight",
    source: "Academy of Pastry & Culinary Arts (APCA)",
    headline: "Alumni Spotlight: Aqsa Lakdawalla",
    subheadline: "From Manchester Business Psychology to Master Pâtissière & Educator",
    date: "May 2022 Pastry Batch",
    location: "APCA Bangalore Campus",
    keyQuote: "After finishing my course I came back to Goa and expanded Cakes on Skates with all the French techniques I learned at APCA. We've made cakes for celebrity events and trained hundreds of passionate students.",
    summary: "How leaving the corporate desk behind to pursue elite French pastry education transformed Cakes on Skates into a premier multi-city brand.",
    highlights: [
      "Graduated with MSc in Business Psychology from University of Manchester.",
      "Resigned from corporate desk job to upgrade culinary craft at APCA Bangalore.",
      "Crafted bespoke centerpieces for luxury weddings and celebrity gatherings.",
      "Opened Belgaum operations following marriage, establishing dual-hub kitchen footprint."
    ],
    fullExcerpt: [
      "I have done my MSc in Business Psychology from the University of Manchester. I wasn't happy with a desk job and always missed baking. Hence, I started taking orders from home but felt stagnant and wanted to upgrade my skills — that's when I heard about APCA.",
      "After finishing my course I came back to Goa and expanded my cloud kitchen 'Cakes on Skates'. I applied all the methods and techniques I learned in the academy. We have also made cakes for celebrity events and I started conducting classes and realized how much I love teaching.",
      "After one year of successfully running the business, I got married and moved to Belgaum. The outlet in Goa is still running very well, and I started taking orders in Belgaum while lecturing in the bakery department at KLE Hotel Management Institute."
    ]
  }
];

export const SISTER_BRANDS: SisterBrand[] = [
  {
    id: "the-crave-co",
    name: "Crave & Co.",
    category: "Burgers • Fries • Desserts",
    badge: "Fresh Made • Open Late • Phone: 8277463778",
    phone: "8277463778",
    description: "Gourmet smash burgers on artisan brioche buns, loaded seasoned fries, and decadent desserts. All burgers contain onion, lettuce & a slice of cheese, served with fries & in house dip.",
    fullStory: "Chef Aqsa brought pastry-level dough science to smash burgers — fermenting golden butter-rich brioche buns daily and pairing them with high-heat smash patties, proprietary seasoning, and chef's cheesy sauces.",
    popularItems: [
      { name: "Double Chicken Smash Burger", tag: "₹340 • Bestseller" },
      { name: "Korean Chicken Burger", tag: "₹320 • Chef Special" },
      { name: "Chipotle Chicken Fries", tag: "₹190 • Crowd Favorite" },
      { name: "Crunchy Matilda Pastry", tag: "₹200 • Signature Dessert" }
    ],
    menuSections: [
      {
        title: "Burgers",
        note: "All burgers contain onion, lettuce & a slice of cheese, served with fries & in house dip",
        items: [
          { name: "Double Chicken Smash Burger", price: 340, tag: "Signature Smash" },
          { name: "Crunchy Bbq Chicken Burger", price: 320, tag: "Crispy BBQ" },
          { name: "Korean Chicken Burger", price: 320, tag: "Gochujang Glazed" },
          { name: "Hot Honey Chicken Burger", price: 320, tag: "Sweet & Spicy" },
          { name: "High Protein Grilled Chicken Burger", price: 350, tag: "Health & Protein" },
          { name: "Veg Double Patty Burger", price: 299, tag: "Vegetarian" },
          { name: "Mushroom Chick Pea Burger", price: 310, tag: "Gourmet Veg" },
        ]
      },
      {
        title: "Extra Patty",
        items: [
          { name: "Extra Chicken Patty", price: 100 },
          { name: "Extra Veg Patty", price: 80 },
        ]
      },
      {
        title: "Loaded Fries",
        items: [
          { name: "Classic Fries", price: 110, description: "Seasoned With In House Spices" },
          { name: "Cheesy Fries", price: 160, description: "Served With Chefs Special Cheesy Sauce" },
          { name: "Korean Fries", price: 160, description: "Tossed In Gochujang Sauce And Topped With Sesame Seeds" },
          { name: "Chipotle Chicken Fries", price: 190, description: "Chipotle Mayo And Grilled Chicken" },
          { name: "Buffalo Chicken Fries", price: 190, description: "Spicy Buffalo Sauce And Chunks Of Spicy Chicken" },
        ]
      },
      {
        title: "Desserts",
        items: [
          { name: "Crunchy Matilda Pastry", price: 200, description: "Decadent multi-layer dark chocolate fudge pastry with chocolate pearls" },
          { name: "Classic Tres Leches", price: 300, description: "Sponge soaked in three rich milks with chantilly cream peaks" },
          { name: "Nutella Brownie", price: 180, description: "Dense fudgy dark chocolate brownie swirled with warm Nutella" },
          { name: "Serradura", price: 150, description: "Traditional Goan sawdust pudding with sweetened cream & tea biscuit crumbles" },
        ]
      },
      {
        title: "Soda & Drinks",
        items: [
          { name: "Cherry Lime Soda", price: 190, description: "Refreshing fizzy cherry syrup with fresh squeezed lime" },
          { name: "Diet Coke", price: 60, description: "Chilled can" },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    location: "Belgaum & Goa"
  },
  {
    id: "the-cream-room",
    name: "The Cream Room",
    category: "Small Batch Ice Cream Studio",
    badge: "No Chemicals • Real Ingredients • Phone: 8277463778",
    phone: "8277463778",
    description: "Per cup is 125ml. No churn soft serve ice creams made with real ingredients, no chemicals, stabilisers or preservatives added.",
    fullStory: "Crafted as a pure small-batch ice cream studio, each 125ml cup is made from scratch with genuine dairy cream, real vanilla beans, fresh fruit, and zero artificial stabilizers.",
    popularItems: [
      { name: "Tiramisu Dream", tag: "₹130 • Mascarpone & Coffee" },
      { name: "Biscoff Cheesecake", tag: "₹130 • Speculoos Swirl" },
      { name: "London Viral Ice Cream", tag: "₹130 • Cake Swirl" },
      { name: "TCR Special Brownie Milkshake", tag: "₹290 • Rich Shake" }
    ],
    menuSections: [
      {
        title: "Flavours (125ml Cups)",
        note: "Per cup is 125ml. Pure ingredients, zero chemicals or preservatives.",
        items: [
          { name: "Tiramisu Dream", price: 130, description: "Coffee dipped lady finger, mascarpone ice cream, served with coffee chocolate sauce" },
          { name: "Serradura", price: 110, description: "Creamy milky vanilla ice cream, biscuit chunks" },
          { name: "Biscoff Cheesecake", price: 130, description: "Cream cheese base swirled with biscoff spread and chunks of biscoff biscuits" },
          { name: "Vanilla Brown Butter Cookie", price: 125, description: "Classic vanilla ice cream with buttery cookie bits" },
          { name: "Chocolate Brownie Fudge", price: 130, description: "Dark chocolate ice cream with chunks of brownies. Served with chocolate fudge sauce" },
          { name: "Hazelnut Nutella Crunch", price: 130, description: "Milk chocolate ice cream with tiny pieces of hazelnut and Nutella crunch swirled" },
          { name: "Salted Caramel Crunch", price: 135, description: "Salted caramel creamy ice cream topped with pieces of honey comb for that crunch" },
          { name: "London Viral Ice Cream", price: 130, description: "Chocolate cake swirled with whipped salted caramel and bits of rich chocolate cake" },
          { name: "Sugar Free Vanilla Ice Cream", price: 130, description: "Zero refined sugar, made with natural sweetener and pure vanilla" },
        ]
      },
      {
        title: "Milkshakes",
        items: [
          { name: "Salted Caramel Biscoff", price: 290, description: "Thick hand-spun shake with salted caramel gelato and Biscoff crumble" },
          { name: "Cookie & Cream", price: 290, description: "Rich vanilla cream blended with crushed dark cookies" },
          { name: "Belgian Chocolate Truffle", price: 290, description: "Pure Callebaut chocolate ganache spun with chocolate ice cream" },
          { name: "TCR Special Brownie Milkshake", price: 290, description: "Topped with warm chocolate brownie chunks and fudge drizzle" },
        ]
      },
      {
        title: "Desserts",
        items: [
          { name: "Chocolate Mousse Bombolone", price: 140, description: "Soft brioche doughnut overflowing with rich whipped chocolate mousse" },
          { name: "Biscoff Brownie", price: 160, description: "Fudge brownie with swirls of caramelized Lotus Biscoff butter" },
          { name: "Brownie with Hot Chocolate Fudge", price: 160, description: "Warm dark cocoa brownie served with molten chocolate fudge sauce" },
          { name: "Nutella Cheesecake", price: 180, description: "Creamy slow-set cheesecake slice layered with Italian Nutella" },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    location: "Belgaum & Goa"
  }
];
