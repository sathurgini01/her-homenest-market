import { Homemaker, Category, Listing, Review, Inquiry } from "./types";

export const CATEGORIES: Category[] = [
  "Home-cooked Meals",
  "Baking & Desserts",
  "Tailoring & Alterations",
  "Handicrafts",
  "Beauty at Home",
  "Tuition & Classes",
  "Accessories & Bags"
];

export const COLOMBO_AREAS = [
  "Wellawatte",
  "Bambalapitiya",
  "Kollupitiya",
  "Nugegoda",
  "Dehiwala",
  "Maharagama",
  "Rajagiriya",
  "Mount Lavinia",
  "Battaramulla",
  "Borella"
];

const INITIAL_HOMEMAKERS: Homemaker[] = [
  {
    id: "hm_1",
    businessName: "Aunty Fatheema's Biryani & Rice",
    ownerFirstName: "Fatheema",
    category: "Home-cooked Meals",
    area: "Wellawatte",
    bio: "Bringing the authentic flavors of Colombo Moorish cuisine directly to your dining table. I specialize in traditional wood-fired chicken biryani, ghee rice with beef curry, and handmade watalappam. Every single spice is hand-roasted and ground in my own kitchen.",
    photos: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 14,
    priceFrom: 1200,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94771234567",
    listings: [
      {
        id: "l_1_1",
        name: "Classic Chicken Biryani Sawawan (4-5 Pax)",
        description: "Layered basmati rice with marinated chicken, fried onions, boiled eggs, mint, and a touch of saffron. Served with raita and malay pickle.",
        price: 5200,
        photo: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_1_2",
        name: "Single Chicken Biryani Pack",
        description: "Perfect single-portion chicken biryani with gravy, mint sambol, and a boiled egg.",
        price: 1350,
        photo: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_1_3",
        name: "Premium Baked Watalappam Cup",
        description: "Rich Sri Lankan coconut custard sweetened with pure Kithul jaggery and spiced with fresh cardamom.",
        price: 350,
        photo: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_1_1",
        customerName: "Rienzie Silva",
        rating: 5,
        comment: "The sawawan was absolutely outstanding. Spiced beautifully and portion was more than enough for 5. Aunty Fatheema is so warm!",
        date: "2026-06-10"
      },
      {
        id: "r_1_2",
        customerName: "Dilini Perera",
        rating: 4.8,
        comment: "Watalappam is highly recommended! Not too sweet, just the right amount of cardamom. Warm delivery and quick communication over WhatsApp.",
        date: "2026-06-14"
      }
    ]
  },
  {
    id: "hm_2",
    businessName: "Kumari's Elegant Tailors",
    ownerFirstName: "Kumari",
    category: "Tailoring & Alterations",
    area: "Nugegoda",
    bio: "Over 15 years of stitching excellence. I specialize in custom saree jackets (patterned, padded, high-neck), frocks, linen pants, and school uniform alterations. I offer precise home-fittings in Nugegoda and surrounding areas.",
    photos: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 9,
    priceFrom: 1500,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94772345678",
    listings: [
      {
        id: "l_2_1",
        name: "Custom Designer Saree Jacket Stitching",
        description: "Perfect customized saree jacket stitched to your measurements. Includes lining and simple piping. Fabric provided by customer.",
        price: 2500,
        photo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_2_2",
        name: "Casual Frock/Day Dress Custom Stitch",
        description: "Custom lightweight day dresses, linens or cotton. Standard design or copy from an existing sample frock.",
        price: 3500,
        photo: "https://images.unsplash.com/photo-1549439602-43ebcb2327af?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_2_3",
        name: "Trouser & Skirt Alterations / Hemming",
        description: "Waist tightening, hem shortening, or zip replacement for school uniforms and office wear.",
        price: 800,
        photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_2_1",
        customerName: "Minoli Fernando",
        rating: 5,
        comment: "Excellent work! Kumari bespoke jacket fitting is flawless. She really knows how to style sarees beautifully.",
        date: "2026-06-02"
      }
    ]
  },
  {
    id: "hm_3",
    businessName: "Shreen's Cocoa Hype",
    ownerFirstName: "Shreen",
    category: "Baking & Desserts",
    area: "Kollupitiya",
    bio: "Home bakery specializing in fudge brownies, custom birthday cakes, and Sri Lanka's ultimate chocolate biscuit pudding (CBP). Made using rich premium Ceylon cocoa and fresh butter. No artificial preservatives.",
    photos: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 5.0,
    reviewCount: 22,
    priceFrom: 900,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94773456789",
    listings: [
      {
        id: "l_3_1",
        name: "Signature Double Chocolate Biscuit Pudding (Large)",
        description: "Layers of crisp Marie biscuits soaked in organic coffee, bound by silk chocolate cream and topped with cashew nut shards. (Feeds 6-8)",
        price: 2800,
        photo: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_3_2",
        name: "Box of 9 Decadent Fudge Brownies",
        description: "Crusty, dense, and deeply fudgy brownie squares loaded with custom milk chocolate chunks.",
        price: 1800,
        photo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_3_3",
        name: "Custom Tall Victoria Sponge Cake (1kg)",
        description: "Soft butter sponge filled with fresh strawberry conserve and rich vanilla bean buttercream. For pre-order only.",
        price: 4500,
        photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_3_1",
        customerName: "Kavin Wijesekera",
        rating: 5,
        comment: "This is easily the best Chocolate Biscuit Pudding in Colombo. Pure indulgence! Customer service over WhatsApp is extremely polite.",
        date: "2026-06-12"
      }
    ]
  },
  {
    id: "hm_4",
    businessName: "Srimathi's Tanjore Crafts & Handlooms",
    ownerFirstName: "Srimathi",
    category: "Handicrafts",
    area: "Bambalapitiya",
    bio: "Keeping ancient Sri Lankan and South Indian handicraft traditions alive. Hand-crafted terracotta wall plates, handwoven reed baskets, custom wedding envelopes, and terracotta oil lamps (diyas). Authentic and eco-friendly.",
    photos: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 6,
    priceFrom: 500,
    verified: true,
    featured: false,
    availableToday: false,
    whatsappNumber: "94774567890",
    listings: [
      {
        id: "l_4_1",
        name: "Handpainted Mandala Terracotta Wall Plate",
        description: "Sturdy clay plates sourced from local potters, hand-primed and painted with meticulous mandala designs. Hooks attached.",
        price: 1800,
        photo: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_4_2",
        name: "Embellished Wedding Shagun Envelopes (Set of 10)",
        description: "Hand-creased textured handmade paper with custom golden borders and silk tassels.",
        price: 1200,
        photo: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_4_1",
        customerName: "Anjali Ganeshan",
        rating: 4.5,
        comment: "Gorgeous terracotta plates! They look stunning on my living room wall. Srimathi did custom colors for me.",
        date: "2026-05-28"
      }
    ]
  },
  {
    id: "hm_5",
    businessName: "Nilu's Home Salon & Henna Art",
    ownerFirstName: "Nilusha",
    category: "Beauty at Home",
    area: "Dehiwala",
    bio: "Qualified aesthetician working from a dedicated, super-hygienic home salon annex in Dehiwala. Offering expert eyebrow threading, organic fruit facials, hair oil therapies, and beautiful intricate bridal Mehendi.",
    photos: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 11,
    priceFrom: 600,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94775678901",
    listings: [
      {
        id: "l_5_1",
        name: "Organic Glow Fruit Facial (60 mins)",
        description: "Deep cleanse, scrub, steam, blackhead removal, custom herbal organic fruit mask formulation, and gentle neck massage. Pure relaxation.",
        price: 3200,
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_5_2",
        name: "Intricate Bridal Mehendi (Both Hands)",
        description: "Traditional local designs with dense embroidery flow using purely local, skin-safe organic henna that yields deep mahogany stains.",
        price: 6500,
        photo: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_5_3",
        name: "Eyebrow & Upper Lip Threading Service",
        description: "Quick, painless precision threading with premium antibacterial cotton. Includes refreshing aloe cooling massage.",
        price: 500,
        photo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_5_1",
        customerName: "Sithara Wickrema",
        rating: 5,
        comment: "Nilu has magic hands. Her facial was incredibly refreshing, and her threading is extremely precise and clean. Highly sanitary too!",
        date: "2026-06-11"
      }
    ]
  },
  {
    id: "hm_6",
    businessName: "Aunty Geetha's Mathematics & English Classes",
    ownerFirstName: "Geetha",
    category: "Tuition & Classes",
    area: "Maharagama",
    bio: "Retired government school teacher with 25 years of experience. Providing small-group, high-attention coaching for Primary and Middle School (Grades 1-8) candidates. Special expertise in helping slow-learners grasp numeracy and spoken English.",
    photos: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 7,
    priceFrom: 1500,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94776789012",
    listings: [
      {
        id: "l_6_1",
        name: "Secondary Math Coaching (Grade 6-8) — Monthly",
        description: "Weekly 2-hour intensive session. Maximum of 5 pupils per cluster. Personalized attention, worksheets, and past papers workbook provided.",
        price: 4000,
        photo: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_6_2",
        name: "Primary Literacy & Spoken English Class (Grades 1-5)",
        description: "Engaging session utilizing phonetic cards, storytelling loops, and reading logs. Helps children speak and write courageously.",
        price: 3000,
        photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_6_1",
        customerName: "Harshini Cooray",
        rating: 5,
        comment: "Excellent teacher. My son was struggling with math fractions, but after joining Aunty Geetha's class, his term scores jumped from 45 to 78!",
        date: "2026-06-05"
      }
    ]
  },
  {
    id: "hm_7",
    businessName: "Sabeetha's Traditional Jaffna Flavours",
    ownerFirstName: "Sabeetha",
    category: "Home-cooked Meals",
    area: "Bambalapitiya",
    bio: "Sourcing rich spices directly from Jaffna to prepare Colombo's most authentic north-eastern cuisine, right from my home kitchen in Bambalapitiya. Known for our signature fiery Jaffna Crab Curry, Roasted Odiyal Kool, and crispy brinjal moju.",
    photos: [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 18,
    priceFrom: 1600,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94777890123",
    listings: [
      {
        id: "l_7_1",
        name: "Signature Fiery Jaffna Crab Curry (2-3 Pax)",
        description: "Fresh mud crabs stewed in a hand-crafted Jaffna curry powder with murunga leaves (moringa), ginger, tamarind, and coconut milk.",
        price: 4800,
        photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_7_2",
        name: "Jaffna Style Vegetarian Lunch Packet",
        description: "Red rice served with murunga paruppu (lentils with moringa), dry roasted brinjal curry, snake gourd stir-fry, and tomato rasam.",
        price: 850,
        photo: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_7_1",
        customerName: "Vishal Thamil",
        rating: 5,
        comment: "The crab curry tasted exactly like what my grandmother used to make in Nallur. Spicy, hearty, and full of authentic moringa aroma.",
        date: "2026-06-14"
      }
    ]
  },
  {
    id: "hm_8",
    businessName: "Roshana's Flour Power Desserts",
    ownerFirstName: "Roshana",
    category: "Baking & Desserts",
    area: "Mount Lavinia",
    bio: "Pristine home bakery creating exquisite eggless desserts, fudgy milk toffees, traditional high-tea savories, and slow-baked cheesecakes. We cater to custom event trays and birthday functions.",
    photos: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.6,
    reviewCount: 5,
    priceFrom: 1000,
    verified: true,
    featured: false,
    availableToday: false,
    whatsappNumber: "94778901234",
    listings: [
      {
        id: "l_8_1",
        name: "Aunty's Traditional Cardamom Milk Toffees (Box of 20)",
        description: "Rich, semi-soft condensed milk bites cooked with fresh butter and locally ground green cardamom. Packed carefully.",
        price: 1500,
        photo: "https://images.unsplash.com/photo-1582208993730-979bc5ed226e?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_8_2",
        name: "Eggless Cold Espresso Cheesecake (500g)",
        description: "Smooth cream cheese blended with hand-pressed local robusta espresso on an buttery biscuit base.",
        price: 2900,
        photo: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_8_1",
        customerName: "Sherine Jayawardene",
        rating: 4.8,
        comment: "The milk toffees literally dissolve in your mouth! Ordered for my daughter's birthday and everyone was singing Roshana's praises.",
        date: "2026-05-19"
      }
    ]
  },
  {
    id: "hm_9",
    businessName: "Sharmila's Thread & Needles",
    ownerFirstName: "Sharmila",
    category: "Tailoring & Alterations",
    area: "Kollupitiya",
    bio: "Specializing in traditional Muslim attire fitting (Abayas, Shalwars, Hijab custom hems) and elegant hand embroidery for silk wear and linen blouses. Highly regarded for delicate stitch precision and respectful home service.",
    photos: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 8,
    priceFrom: 1800,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94779012345",
    listings: [
      {
        id: "l_9_1",
        name: "Handmade Embroidery Silk Blouse Stitched",
        description: "Complete stitching of customer-provided silk fabric with custom hand-beaded lace and embroidery along neck and sleeves.",
        price: 4500,
        photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_10",
    businessName: "Kamla's Cane Crafts & Eco-Designs",
    ownerFirstName: "Kamla",
    category: "Handicrafts",
    area: "Rajagiriya",
    bio: "Using 100% biodegradable cane, wicker, and kithul fibers to craft sustainable everyday organizers, laundry hampers, table mats, and traditional woven covers. Support local women basket-weavers!",
    photos: [
      "https://images.unsplash.com/photo-1595179218994-63aaec9aef29?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 6,
    priceFrom: 750,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94770123456",
    listings: [
      {
        id: "l_10_1",
        name: "Handwoven Cane Bread Basket",
        description: "Meticulously woven robust bread serving basket with elegant braided rim. Treated naturally to prevent insects.",
        price: 1500,
        photo: "https://images.unsplash.com/photo-1595179218994-63aaec9aef29?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_11",
    businessName: "Dilhara's Hook & Loop Atelier",
    ownerFirstName: "Dilhara",
    category: "Accessories & Bags",
    area: "Wellawatte",
    bio: "Beautifully designed hand-crocheted bags, macramé clutches, and customized fabric accessories. Each piece is hand-looped and stitched using local organic cotton thread and natural coconut shells for buttons. Perfect for tropical days and sustainable lifestyle lovers.",
    photos: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 5.0,
    reviewCount: 4,
    priceFrom: 1800,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94770234567",
    listings: [
      {
        id: "l_11_1",
        name: "Tropical Coconut Shell Macramé Tote Bag",
        description: "Spacious hand-knotted macramé tote bag styled with polished coconut shell handles and robust hand-stitched inner calico lining.",
        price: 3800,
        photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_11_2",
        name: "Pastel Crochet Sling Bag",
        description: "Delicate shell-stitch crocheted sling bag in vintage dusty rose or forest sage. Excellent for summer days.",
        price: 1800,
        photo: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_11_3",
        name: "Quilted Cotton Cosmetic Pouch",
        description: "Soft hand-quilted block-print makeup pouch with a robust metallic zipper and silk inner pockets.",
        price: 1200,
        photo: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_11_1",
        customerName: "Minoli Jayasundera",
        rating: 5,
        comment: "I bought the coconut tote and I get so many compliments wherever I go! The knotting is so incredibly precise and strong. Highly recommend Dilhara's skills!",
        date: "2026-06-12"
      }
    ]
  }
];

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq_1",
    homemakerId: "hm_1",
    homemakerName: "Aunty Fatheema's Biryani",
    customerName: "Rienzie Silva",
    customerPhone: "0771122334",
    message: "Hello Aunty, would like to inquire if you do catering for a small family gathering of 15 pax on June 28th? Please let me know prices for chicken biryani.",
    date: "2026-06-15"
  },
  {
    id: "inq_2",
    homemakerId: "hm_3",
    homemakerName: "Shreen's Cocoa Hype",
    customerName: "Kavin Wijesekera",
    customerPhone: "0779988776",
    message: "Hi Shreen, I would like to order a customized 1kg Victoria Sponge Cake for next Friday. Do you have a slot available?",
    date: "2026-06-16"
  }
];

// Helper functions for reading/writing dynamic data using localStorage
export const getStoredHomemakers = (): Homemaker[] => {
  if (typeof window === "undefined") {
    return INITIAL_HOMEMAKERS;
  }
  const stored = localStorage.getItem("her_homenest_homemakers");
  if (!stored) {
    localStorage.setItem("her_homenest_homemakers", JSON.stringify(INITIAL_HOMEMAKERS));
    return INITIAL_HOMEMAKERS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_HOMEMAKERS;
  }
};

export const saveHomemakers = (homemakers: Homemaker[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("her_homenest_homemakers", JSON.stringify(homemakers));
  }
};

export const getStoredInquiries = (): Inquiry[] => {
  if (typeof window === "undefined") {
    return INITIAL_INQUIRIES;
  }
  const stored = localStorage.getItem("her_homenest_inquiries");
  if (!stored) {
    localStorage.setItem("her_homenest_inquiries", JSON.stringify(INITIAL_INQUIRIES));
    return INITIAL_INQUIRIES;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_INQUIRIES;
  }
};

export const saveInquiries = (inquiries: Inquiry[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("her_homenest_inquiries", JSON.stringify(inquiries));
  }
};

// Simple active user sessions for roles
export interface UserSession {
  role: "Customer" | "Homemaker" | "Admin" | null;
  email: string | null;
  homemakerId?: string; // If registered/logged in as Homemaker
}

export const getActiveSession = (): UserSession => {
  if (typeof window === "undefined") {
    return { role: null, email: null };
  }
  const stored = localStorage.getItem("her_homenest_session");
  if (!stored) {
    // Default mock, so it is easy to demonstrate
    const defaultSession: UserSession = { role: "Customer", email: "customer@homenest.lk" };
    localStorage.setItem("her_homenest_session", JSON.stringify(defaultSession));
    return defaultSession;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return { role: null, email: null };
  }
};

export const setActiveSession = (session: UserSession) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("her_homenest_session", JSON.stringify(session));
  }
};
