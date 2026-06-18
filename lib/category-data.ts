import { Category } from "./types";

export interface CategoryDetail {
  name: Category;
  icon: string;
  summary: string;
  offerings: string[];
  popular: boolean;
}

export const CATEGORY_DETAILS: CategoryDetail[] = [
  {
    name: "Home-cooked Meals",
    icon: "🍛",
    summary: "Lunch packets, short eats, string hoppers, pittu, preserves and everyday Colombo favourites.",
    offerings: [
      "Rice & curry lunch packets",
      "Kottu, fried rice and devilled dishes",
      "String hoppers and pittu",
      "Cutlets, patties, rolls and fish buns",
      "Achcharu and lunu miris",
      "Homemade yogurt and curd",
    ],
    popular: true,
  },
  {
    name: "Baking & Desserts",
    icon: "🧁",
    summary: "Celebration cakes, Sri Lankan sweets, breads, biscuits and desserts baked at home.",
    offerings: [
      "Sri Lankan love cake",
      "Kokis and kavum",
      "Cupcakes and custom cakes",
      "Cookies and biscuits",
      "Watalappan",
      "Bread, buns and rotti",
    ],
    popular: true,
  },
  {
    name: "Tailoring & Alterations",
    icon: "🪡",
    summary: "Practical alterations and made-to-measure clothing for school, work and special occasions.",
    offerings: [
      "School uniform stitching",
      "Saree blouse and frock stitching",
      "Resizing and hemming",
      "Custom event and wedding dresses",
      "Curtains and home textiles",
    ],
    popular: true,
  },
  {
    name: "Handicrafts",
    icon: "🧺",
    summary: "Batik, crochet, coir, cane and hand-painted gifts made by local women artisans.",
    offerings: [
      "Batik sarongs and wall hangings",
      "Handmade bead and brass work",
      "Crochet bags and table mats",
      "Coir and cane baskets and mats",
      "Hand-painted cards and gifts",
    ],
    popular: true,
  },
  {
    name: "Beauty at Home",
    icon: "💅",
    summary: "Personal beauty appointments offered from verified home studios around Colombo.",
    offerings: [
      "Bridal and party makeup",
      "Hair styling and threading",
      "Henna and mehndi art",
      "Home facials and waxing",
    ],
    popular: true,
  },
  {
    name: "Tuition & Classes",
    icon: "📚",
    summary: "Small-group learning, practical skills and school tuition led by experienced women.",
    offerings: [
      "Cooking and baking classes",
      "Sewing and tailoring classes",
      "Sinhala, Tamil, English and Maths tuition",
      "Music and dance classes",
    ],
    popular: true,
  },
  {
    name: "Jewelry",
    icon: "📿",
    summary: "Handmade everyday and occasion jewelry in bead, brass, resin, threadwork and bridal styles.",
    offerings: [
      "Beaded necklaces, bracelets and earrings",
      "Traditional brass and metal jewelry",
      "Resin pendants, rings and earrings",
      "Threadwork and macrame jewelry",
      "Polki and kundan-style party pieces",
    ],
    popular: false,
  },
  {
    name: "Hair Accessories",
    icon: "🎀",
    summary: "Hand-stitched and embellished accessories for everyday wear, children and celebrations.",
    offerings: [
      "Hair bands and scrunchies",
      "Fabric flower clips",
      "Bridal combs and hairpins",
    ],
    popular: false,
  },
  {
    name: "Bags & Pouches",
    icon: "👜",
    summary: "Useful handmade bags and small accessories in crochet, batik and printed fabric.",
    offerings: [
      "Crochet bags and clutches",
      "Block-printed and batik totes",
      "Coin pouches and wallets",
      "Handmade insulated lunch bags",
    ],
    popular: false,
  },
  {
    name: "Fashion Add-ons",
    icon: "🧷",
    summary: "Small custom details that make clothing, uniforms and gifts feel personal.",
    offerings: [
      "Fabric belts and sashes",
      "Handmade buttons and brooches",
      "Embroidered clothing patches",
      "Custom name tags and badges",
    ],
    popular: false,
  },
  {
    name: "Home-to-Wear Crossover",
    icon: "🧶",
    summary: "Soft handmade wearable pieces that bring traditional home craft into daily life.",
    offerings: [
      "Crochet baby booties and headbands",
      "Crochet mittens and baby accessories",
      "Embroidered and embellished fashion masks",
    ],
    popular: false,
  },
];

export const POPULAR_CATEGORIES = CATEGORY_DETAILS.filter((category) => category.popular);
export const MORE_CATEGORIES = CATEGORY_DETAILS.filter((category) => !category.popular);

export const categoryToSlug = (category: Category) =>
  category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const CATEGORY_BY_SLUG = Object.fromEntries(
  CATEGORY_DETAILS.map((category) => [categoryToSlug(category.name), category])
) as Record<string, CategoryDetail>;
