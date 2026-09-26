import { Product } from '../types';

export interface RecipeCategoryGuide {
  id: string;
  title: string;
  categoryGroup: string;
  price: number;
  itemCount: number;
  recipes: string[];
  description: string;
  badge?: string;
  isBundle?: boolean;
}

export const BAKERY_RECIPE_COLLECTIONS: RecipeCategoryGuide[] = [
  // --- COMPLETE BUNDLES ---
  {
    id: "bundle-all-30-breads",
    title: "All 30 Breads Master Collection",
    categoryGroup: "Breads",
    price: 3499,
    itemCount: 30,
    isBundle: true,
    badge: "Save ₹1,598 • Complete Bread Bible",
    description: "The complete artisanal & commercial bread guide: Basic Breads, Artisan Sourdough/Ciabatta/Focaccia, and Gourmet Stuffed Breads with Chef Aqsa's live WhatsApp mentorship.",
    recipes: [
      "White Sandwich Bread", "Whole Wheat Bread", "Multigrain Bread", "Milk Bread", 
      "Japanese Shokupan", "Ragi Bread", "Soft Dinner Rolls", "Bread Rolls", "Burger Buns", 
      "Hot Dog Buns", "Pav Buns", "Ladi Pav", "Brioche", "Potato Bread", "Oats Bread",
      "Sourdough", "Ciabatta", "Focaccia", "Baguette", "Walnut Bread", "Seeded Bread", "Rye Bread", "Garlic Herb Bread",
      "Cheese Garlic Bread", "Pesto Bread", "Spinach Cheese Bread", "Jalapeño Cheese Bread", "Pizza Bread", "Stuffed Pull-apart Bread", "Babka (Chocolate/Cinnamon)"
    ]
  },
  {
    id: "bundle-all-27-french-pastries",
    title: "All 27 French Pastries Masterclass",
    categoryGroup: "French Pastries",
    price: 4999,
    itemCount: 27,
    isBundle: true,
    badge: "APCA Parisian Level • Best Value",
    description: "Complete French Pâtisserie curriculum: Laminated viennoiserie, Choux pastry, Macarons (Egg & Eggless), Opera, Mille Feuille, and classic desserts.",
    recipes: [
      "Classic Croissant", "Pain au Chocolat", "Almond Croissant", "Danish Pastries", "Cinnamon Danish", "Fruit Danish", "Cruffin", "Palmier",
      "Éclairs", "Paris-Brest", "St. Honore", "Choux au Craquelin", "Cream Puffs", "Profiteroles", "Croquembouche", "Religieuse",
      "Vanilla Macaron", "Chocolate Macaron", "Pistachio Macaron", "Coffee Macaron", "Salted Caramel Macaron", "Oreo Macaron", "Nutella Macaron", "Biscoff Macaron", "Mango Macaron", "Rose Pistachio Macaron",
      "Mille Feuille", "Opera Cake", "Fruit Tart", "Chocolate Tart", "Crème Brûlée", "Crème Caramel", "Chocolate Mousse", "Serradura", "Panna Cotta"
    ]
  },
  {
    id: "bundle-all-32-celebration-cakes",
    title: "All 32 Celebration Cakes Master Collection",
    categoryGroup: "Celebration Cakes",
    price: 5999,
    itemCount: 32,
    isBundle: true,
    badge: "Commercial Bakery Hit • 32 Gateaux",
    description: "Everything you need to launch a high-end designer cake business: Classic Cakes, Premium Gateaux, Baked/Chilled Cheesecakes, and Dessert Cakes.",
    recipes: [
      "Chocolate Truffle Cake", "Black Forest", "White Forest", "Red Velvet", "Vanilla Buttercream Cake", "Coffee Cake", "Lemon Cake", "Orange Cake", "Pineapple Cake",
      "Ferrero Rocher Cake", "Belgian Chocolate", "Triple Chocolate", "Nutella Cake", "Lotus Biscoff Cake", "Salted Caramel Cake", "Cookies & Cream Cake", "Mango Cake", "Pistachio Raspberry Cake", "Hazelnut Praline Cake",
      "Basque Cheesecake", "New York Cheesecake", "Blueberry Cheesecake", "Lotus Cheesecake", "Oreo Cheesecake", "Mango Cheesecake", "Chocolate Cheesecake", "Lemon Cheesecake",
      "Tres Leches", "Tiramisu", "Matilda Cake", "Ice Cream Cake", "Mousse Cake"
    ]
  },
  {
    id: "bundle-all-20-tea-cakes",
    title: "All 20 Tea Cakes & Loaf Cakes Collection",
    categoryGroup: "Tea Cakes",
    price: 2999,
    itemCount: 20,
    isBundle: true,
    badge: "Café Bestsellers • 20 Loaves",
    description: "Everyday luxury bakes: European tea cakes, banana breads, seasonal fruit loaves, marble cakes, and healthy spiced loaves with long shelf life.",
    recipes: [
      "Vanilla Tea Cake", "Marble Tea Cake", "Lemon Loaf", "Orange Loaf", "Banana Bread", "Chocolate Banana Bread", "Carrot Walnut Cake", "Fruit Cake", "Plum Cake", "Honey Cake", "Date Walnut Cake", "Coffee Crumble Cake", "Coconut Cake", "Almond Cake", "Pistachio Cake", "Chocolate Loaf", "Red Velvet Loaf", "Apple Cinnamon Loaf", "Blueberry Lemon Loaf", "Zucchini Bread"
    ]
  },
  {
    id: "bundle-all-27-cookies",
    title: "All 27 Cookies & Biscuits Master Collection",
    categoryGroup: "Cookies",
    price: 3599,
    itemCount: 27,
    isBundle: true,
    badge: "NYC Chunky & Traditional",
    description: "American chunky stuffed cookies, British shortbread, tea biscuits, Florentines, brookies, Linzer, and festive crinkles with commercial scaling ratios.",
    recipes: [
      "Chocolate Chunk", "Double Chocolate", "Triple Chocolate", "New York Chunky Cookies", "Nutella Stuffed", "Red Velvet", "Nankhatai", "Butter Cookies", "Custard Cookies", "Coconut Cookies", "Marble Cookies", "Oats Raisin", "Orange Chocolate", "Pecan Cookies",
      "Lotus Biscoff", "S'mores Cookies", "Peanut Butter Cookies", "Espresso Cookies", "Matcha Cookies", "Salted Caramel Cookies", "Brookies", "Crinkle Cookies", "Linzer Cookies", "Thumbprint Cookies", "Florentines", "Shortbread", "Viennese Whirls"
    ]
  },
  {
    id: "bundle-all-27-savoury",
    title: "All 27 Savoury Baked Items Collection",
    categoryGroup: "Savoury Bakes",
    price: 3499,
    itemCount: 27,
    isBundle: true,
    badge: "Bakery Café Classics",
    description: "High-margin hot bakery items: Artisanal hand-stretched pizzas, savoury rolls, flaky puff pastries, and golden quiches & pies.",
    recipes: [
      "Classic Pizza", "Margherita", "Veg Supreme", "Paneer Tikka", "Pepperoni", "BBQ Chicken", "Pesto Pizza", "White Sauce Pizza",
      "Pizza Rolls", "Cheese Rolls", "Garlic Rolls", "Cinnamon Rolls", "Pesto Rolls", "Spinach Cheese Rolls", "Stuffed Garlic Knots",
      "Veg Puff", "Paneer Puff", "Chicken Puff", "Mushroom Puff", "Corn Cheese Puff",
      "Chicken Pie", "Shepherd's Pie", "Quiche Lorraine", "Spinach Corn Quiche", "Mushroom Quiche", "Tomato Tart", "Onion Tart"
    ]
  },
  {
    id: "bundle-all-6-filled-fried",
    title: "All 6 Filled & Fried Bakery Items Collection",
    categoryGroup: "Fried & Filled",
    price: 2599,
    itemCount: 6,
    isBundle: true,
    badge: "Authentic Brioche Doughnuts",
    description: "The secret 24-hr cold ferment brioche formula behind Aqsa's signature Italian Bomboloni, filled doughnuts, cronuts, and crunchy churros.",
    recipes: [
      "Bomboloni (Signature Brioche)", "Classic Doughnuts", "Glazed Doughnuts", "Filled Doughnuts", "Cronuts (Laminated Doughnut)", "Churros with Spanish Chocolate"
    ]
  },
  {
    id: "bundle-all-14-cafe-desserts",
    title: "All 14 Café Desserts Collection",
    categoryGroup: "Café Desserts",
    price: 3499,
    itemCount: 14,
    isBundle: true,
    badge: "High-Margin Gourmet Jars & Bars",
    description: "Fudgy brownies, millionaire shortbread, cheesecake bars, banoffee cups, English trifles, sticky toffee pudding, and grab-and-go desserts.",
    recipes: [
      "Brownies", "Blondies", "Millionaire's Shortbread", "Cheesecake Bars", "Lemon Bars", "Chocolate Mousse", "Panna Cotta", "Serradura", "Banoffee Cups", "Trifle", "Fruit Parfaits", "Bread Pudding", "Sticky Toffee Pudding", "Rice Pudding"
    ]
  },

  // --- INDIVIDUAL CATEGORY MODULES ---
  {
    id: "module-basic-breads",
    title: "Basic Breads Recipe Guide",
    categoryGroup: "Breads",
    price: 1299,
    itemCount: 15,
    description: "Everyday sandwich loaves, fluffy burger buns, shokupan, and soft dinner rolls with commercial baker percentages.",
    recipes: [
      "White Sandwich Bread", "Whole Wheat Bread", "Multigrain Bread", "Milk Bread", "Japanese Shokupan", "Ragi Bread", "Soft Dinner Rolls", "Bread Rolls", "Burger Buns", "Hot Dog Buns", "Pav Buns", "Ladi Pav", "Brioche", "Potato Bread", "Oats Bread"
    ]
  },
  {
    id: "module-artisan-breads",
    title: "Artisan Breads Recipe Guide",
    categoryGroup: "Breads",
    price: 1499,
    itemCount: 8,
    description: "Wild yeast sourdough starter, blistered open-crumb focaccia, rustic ciabatta, baguettes, and seeded loaves.",
    recipes: [
      "Sourdough", "Ciabatta", "Focaccia", "Baguette", "Walnut Bread", "Seeded Bread", "Rye Bread", "Garlic Herb Bread"
    ]
  },
  {
    id: "module-stuffed-breads",
    title: "Stuffed Breads Recipe Guide",
    categoryGroup: "Breads",
    price: 1299,
    itemCount: 7,
    description: "Flavored cheese garlic breads, artisan babka with rich chocolate/cinnamon swirls, and pull-apart party loaves.",
    recipes: [
      "Cheese Garlic Bread", "Pesto Bread", "Spinach Cheese Bread", "Jalapeño Cheese Bread", "Pizza Bread", "Stuffed Pull-apart Bread", "Babka (Chocolate/Cinnamon)"
    ]
  },
  {
    id: "module-laminated-dough",
    title: "Laminated Viennoiserie Guide",
    categoryGroup: "French Pastries",
    price: 1599,
    itemCount: 8,
    description: "French butter lamination, temperature control, honeycomb crumb structure, cruffins, and crisp palmiers.",
    recipes: [
      "Classic Croissant", "Pain au Chocolat", "Almond Croissant", "Danish Pastries", "Cinnamon Danish", "Fruit Danish", "Cruffin", "Palmier"
    ]
  },
  {
    id: "module-choux-pastry",
    title: "Choux Pastry Master Guide",
    categoryGroup: "French Pastries",
    price: 1599,
    itemCount: 8,
    description: "Hollow, crisp choux puffs, crunchy craquelin shells, glossy éclairs, Paris-Brest, and celebratory croquembouche.",
    recipes: [
      "Éclairs", "Paris-Brest", "St. Honore", "Choux au Craquelin", "Cream Puffs", "Profiteroles", "Croquembouche", "Religieuse"
    ]
  },
  {
    id: "module-macarons",
    title: "French Macarons (Egg & Eggless) Guide",
    categoryGroup: "French Pastries",
    price: 1299,
    itemCount: 10,
    description: "No-fail ruffled feet, smooth Parisian macaron shells with egg and aquafaba formulas, and 10 gourmet ganache fillings.",
    recipes: [
      "Vanilla Macaron", "Chocolate Macaron", "Pistachio Macaron", "Coffee Macaron", "Salted Caramel Macaron", "Oreo Macaron", "Nutella Macaron", "Biscoff Macaron", "Mango Macaron", "Rose Pistachio Macaron"
    ]
  },
  {
    id: "module-french-desserts",
    title: "Classic French Desserts Guide",
    categoryGroup: "French Pastries",
    price: 1899,
    itemCount: 9,
    description: "Pâtisserie standards: Multi-layered Opera, Mille Feuille, glassy Crème Brûlée, Portuguese Serradura, and Panna Cotta.",
    recipes: [
      "Mille Feuille", "Opera Cake", "Fruit Tart", "Chocolate Tart", "Crème Brûlée", "Crème Caramel", "Chocolate Mousse", "Serradura", "Panna Cotta"
    ]
  },
  {
    id: "module-classic-cakes",
    title: "Classic Cakes Recipe Guide",
    categoryGroup: "Celebration Cakes",
    price: 1499,
    itemCount: 9,
    description: "Pillowy sponges, moist chocolate truffle, rich black forest, tender red velvet, and stable buttercream frosting.",
    recipes: [
      "Chocolate Truffle Cake", "Black Forest", "White Forest", "Red Velvet", "Vanilla Buttercream Cake", "Coffee Cake", "Lemon Cake", "Orange Cake", "Pineapple Cake"
    ]
  },
  {
    id: "module-premium-cakes",
    title: "Premium Celebration Gateaux Guide",
    categoryGroup: "Celebration Cakes",
    price: 2399,
    itemCount: 10,
    description: "Chef Aqsa's signature Ferrero Rocher cake, Belgian chocolate ganache, praline crunch, and artisanal fruit layerings.",
    recipes: [
      "Ferrero Rocher", "Belgian Chocolate", "Triple Chocolate", "Nutella Cake", "Lotus Biscoff Cake", "Salted Caramel Cake", "Cookies & Cream Cake", "Mango Cake", "Pistachio Raspberry Cake", "Hazelnut Praline Cake"
    ]
  },
  {
    id: "module-cheesecakes",
    title: "Cheesecakes Master Guide",
    categoryGroup: "Celebration Cakes",
    price: 1999,
    itemCount: 8,
    description: "Authentic San Sebastián Burnt Basque cheesecake, tall New York baked cheesecake, and chilled eggless set varieties.",
    recipes: [
      "Basque Cheesecake", "New York Cheesecake", "Blueberry Cheesecake", "Lotus Cheesecake", "Oreo Cheesecake", "Mango Cheesecake", "Chocolate Cheesecake", "Lemon Cheesecake"
    ]
  },
  {
    id: "module-dessert-cakes",
    title: "Dessert Cakes Master Guide",
    categoryGroup: "Celebration Cakes",
    price: 1999,
    itemCount: 5,
    description: "The viral London Matilda cake, 3-milk soaked Tres Leches, authentic Italian espresso Tiramisu, and ice cream cakes.",
    recipes: [
      "Tres Leches", "Tiramisu", "Matilda Cake", "Ice Cream Cake", "Mousse Cake"
    ]
  },
  {
    id: "module-classic-cookies",
    title: "Classic Cookies & Biscuits Guide",
    categoryGroup: "Cookies",
    price: 1699,
    itemCount: 14,
    description: "New York chunky cookies, molten Nutella stuffed cookies, melt-in-mouth nankhatai, and golden butter tea biscuits.",
    recipes: [
      "Chocolate Chunk", "Double Chocolate", "Triple Chocolate", "New York Chunky Cookies", "Nutella Stuffed", "Red Velvet", "Nankhatai", "Butter Cookies", "Custard Cookies", "Coconut Cookies", "Marble Cookies", "Oats Raisin", "Orange Chocolate", "Pecan Cookies"
    ]
  },
  {
    id: "module-premium-cookies",
    title: "Premium Specialty Cookies Guide",
    categoryGroup: "Cookies",
    price: 2199,
    itemCount: 13,
    description: "Lotus Biscoff stuffed cookies, S'mores, matcha, brookies, chocolate crinkle, Linzer, Florentines, and Viennese whirls.",
    recipes: [
      "Lotus Biscoff", "S'mores Cookies", "Peanut Butter Cookies", "Espresso Cookies", "Matcha Cookies", "Salted Caramel Cookies", "Brookies", "Crinkle Cookies", "Linzer Cookies", "Thumbprint Cookies", "Florentines", "Shortbread", "Viennese Whirls"
    ]
  },
  {
    id: "module-pizza",
    title: "Artisanal Pizza Baking Guide",
    categoryGroup: "Savoury Bakes",
    price: 999,
    itemCount: 8,
    description: "Commercial pizza dough fermentation, authentic marinara sauce, cheese stretch science, and 8 pizzeria styles.",
    recipes: [
      "Classic Pizza", "Margherita", "Veg Supreme", "Paneer Tikka", "Pepperoni", "BBQ Chicken", "Pesto Pizza", "White Sauce Pizza"
    ]
  },
  {
    id: "module-rolls-buns",
    title: "Savoury Rolls & Buns Guide",
    categoryGroup: "Savoury Bakes",
    price: 999,
    itemCount: 7,
    description: "Cheesy garlic knots, spinach cheese rolls, pesto swirls, and warm bakery rolls for breakfast or party platters.",
    recipes: [
      "Pizza Rolls", "Cheese Rolls", "Garlic Rolls", "Cinnamon Rolls", "Pesto Rolls", "Spinach Cheese Rolls", "Stuffed Garlic Knots"
    ]
  },
  {
    id: "module-puffs",
    title: "Bakery Puffs & Pastry Guide",
    categoryGroup: "Savoury Bakes",
    price: 999,
    itemCount: 5,
    description: "Golden flaky Indian bakery puffs with spiced potato/paneer/chicken fillings and butter lamination tips.",
    recipes: [
      "Veg Puff", "Paneer Puff", "Chicken Puff", "Mushroom Puff", "Corn Cheese Puff"
    ]
  },
  {
    id: "module-pies-tarts",
    title: "Gourmet Pies & Quiches Guide",
    categoryGroup: "Savoury Bakes",
    price: 1099,
    itemCount: 7,
    description: "Buttery shortcrust pastry, French Quiche Lorraine, rich shepherd's pie, and roasted tomato/onion tarts.",
    recipes: [
      "Chicken Pie", "Shepherd's Pie", "Quiche Lorraine", "Spinach Corn Quiche", "Mushroom Quiche", "Tomato Tart", "Onion Tart"
    ]
  }
];

export const RECIPE_FEATURES = [
  "Detailed ingredient list with accurate measurements in grams",
  "Clear step-by-step master method with baker timings",
  "Professional bakery tips & tricks directly from Chef Aqsa",
  "Storage guidelines, freezing techniques & shelf life advice",
  "Troubleshooting tips for common amateur & commercial mistakes",
  "WhatsApp support for recipe-related queries directly with Chef Aqsa (+91 8277463778)",
  "Dedicated call support (by prior appointment) for personalized guidance",
  "Immediate PDF delivery + WhatsApp confirmation after UPI checkout"
];

// Convert recipe guides into Product items so they can be added to cart and purchased through checkout
export function convertRecipeGuideToProduct(guide: RecipeCategoryGuide): Product {
  return {
    id: `recipe-${guide.id}`,
    name: `[RECIPE GUIDE] ${guide.title}`,
    category: "recipes",
    dietary: "eggless",
    price: guide.price,
    description: `${guide.description} Includes ${guide.itemCount} complete recipes with step-by-step method, accurate measurements, troubleshooting, plus direct WhatsApp & call support with Chef Aqsa.`,
    image: "/assets/logo.svg",
    badge: guide.badge || "Official Recipe Guide",
    portionNote: `Instant Digital Download (PDF) • Includes ${guide.itemCount} Recipes + WhatsApp Mentorship`,
    isChefSpecial: guide.isBundle,
  };
}
