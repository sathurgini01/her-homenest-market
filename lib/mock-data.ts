import { Homemaker, Category, Inquiry } from "./types";
import { CATEGORY_DETAILS } from "./category-data";

export const CATEGORIES: Category[] = CATEGORY_DETAILS.map((category) => category.name);

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
    ownerEmail: "fatheema@homenest.lk",
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
    id: "hm_12",
    businessName: "Sanjana's Street Food Studio",
    ownerFirstName: "Sanjana",
    category: "Home-cooked Meals",
    area: "Nugegoda",
    bio: "Expert in Sri Lankan short eats and kottu roti. Handmade kottu from scratch daily with tender chicken, vegetables, and roasted curry powder. Also doing devilled dishes and cutlets for office lunch boxes.",
    photos: [
      "https://images.unsplash.com/photo-1604482827473-30ac08a91e27?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603046891726-36bfd957e2af?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 9,
    priceFrom: 350,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94771234568",
    listings: [
      {
        id: "l_12_1",
        name: "Chicken Kottu Roti (Single)",
        description: "Handmade roti chopped and mixed with tender chicken, cabbage, carrots, and roasted curry powder. Served with light curry sauce.",
        price: 580,
        photo: "https://images.unsplash.com/photo-1604482827473-30ac08a91e27?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_12_2",
        name: "Box of 6 Chicken Cutlets",
        description: "Crispy fried chicken cutlets with spiced potato filling. Perfect with a cup of tea.",
        price: 980,
        photo: "https://images.unsplash.com/photo-1603046891726-36bfd957e2af?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_12_3",
        name: "Devilled Dishes Lunch Pack (Veg or Non-Veg)",
        description: "Rice with your choice of devilled chicken, prawns, or vegetables cooked in a fiery sauce with capsicum and onion.",
        price: 650,
        photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: [
      {
        id: "r_12_1",
        customerName: "Roshan Kular",
        rating: 4.8,
        comment: "Sanjana's kottu is insanely good. The roti texture is perfect and the curry powder flavor is just right. Better than most restaurant kottu!",
        date: "2026-06-13"
      }
    ]
  },
  {
    id: "hm_13",
    businessName: "Lakshmi's Pickle & Preserve Kitchen",
    ownerFirstName: "Lakshmi",
    category: "Home-cooked Meals",
    area: "Bambalapitiya",
    bio: "Traditional Sri Lankan preserves and pickles made using authentic grandmother recipes. Lunu miris (chili paste), achaar (mixed pickles), and homemade coconut sambol - all without any preservatives.",
    photos: [
      "https://images.unsplash.com/photo-1604080168296-30c3ce1c8d05?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585092918356-41fac85c5320?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 6,
    priceFrom: 400,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234569",
    listings: [
      {
        id: "l_13_1",
        name: "Homemade Lunu Miris (500g jar)",
        description: "Traditional chili paste with fresh curry leaves, onions, and lime juice. Pairs perfectly with rice and curry.",
        price: 580,
        photo: "https://images.unsplash.com/photo-1604080168296-30c3ce1c8d05?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_13_2",
        name: "Mixed Fruit Achcharu (600g jar)",
        description: "Tangy pickled mix of green mango, pineapple, and lime with aromatic spices.",
        price: 680,
        photo: "https://images.unsplash.com/photo-1585092918356-41fac85c5320?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_14",
    businessName: "Priya's String Hoppers & Puttu Corner",
    ownerFirstName: "Priya",
    category: "Home-cooked Meals",
    area: "Dehiwala",
    bio: "Specialized in making fresh string hoppers (idiyappam) and puttu every morning. Served with rich coconut curry, chickpea curry, or jaggery-palm sugar sauce. Perfect breakfast delivery!",
    photos: [
      "https://images.unsplash.com/photo-1585521537684-38d840651ef7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 11,
    priceFrom: 250,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94771234570",
    listings: [
      {
        id: "l_14_1",
        name: "Fresh String Hoppers with Chickpea Curry",
        description: "Steamed rice and wheat string hoppers served with aromatic chickpea curry and spiced onions.",
        price: 350,
        photo: "https://images.unsplash.com/photo-1585521537684-38d840651ef7?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_14_2",
        name: "Sweet Puttu with Jaggery Sauce",
        description: "Steamed cylindrical puttu (rice and jaggery cake) served warm with melted palm jaggery syrup.",
        price: 280,
        photo: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    id: "hm_15",
    businessName: "Anjana's Quick Stitch",
    ownerFirstName: "Anjana",
    category: "Tailoring & Alterations",
    area: "Kollupitiya",
    bio: "Fast turnaround for school uniform adjustments, trouser hemming, and basic alterations. Walk-in friendly on weekends. Quality stitching at affordable prices.",
    photos: [
      "https://images.unsplash.com/photo-1590080876-e4cd35b62fc0?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.6,
    reviewCount: 7,
    priceFrom: 400,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94772345679",
    listings: [
      {
        id: "l_15_1",
        name: "School Uniform Trouser Hemming",
        description: "Quick hemming service for school trousers. Completed within 1-2 days.",
        price: 400,
        photo: "https://images.unsplash.com/photo-1590080876-e4cd35b62fc0?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_15_2",
        name: "Shirt Button Replacement & Quick Repairs",
        description: "Buttonhole adjustments, loose seam repairs, and zipper replacements.",
        price: 300,
        photo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    id: "hm_16",
    businessName: "Deepa's Love Cake & Sri Lankan Classics",
    ownerFirstName: "Deepa",
    category: "Baking & Desserts",
    area: "Mount Lavinia",
    bio: "Traditional Sri Lankan bakery items. Freshly baked love cakes, kokis, kavum, and festive shortbreads. Handmade using pure ghee and local spices.",
    photos: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585343675557-20a82fbaa267?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 16,
    priceFrom: 600,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94773456790",
    listings: [
      {
        id: "l_16_1",
        name: "Traditional Sri Lankan Love Cake (1 kg)",
        description: "Moist spiced cake layered with fruit preserve and fondant icing. Perfect for celebrations!",
        price: 2200,
        photo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_16_2",
        name: "Box of Kokis (12 pieces)",
        description: "Crispy, thin coconut and jaggery oil cakes - a festive favorite from Sri Lanka.",
        price: 900,
        photo: "https://images.unsplash.com/photo-1585343675557-20a82fbaa267?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_16_3",
        name: "Box of Assorted Biscuits",
        description: "Mix of peanut biscuits, chocolate chip, and cardamom-spiced shortbread. Homemade butter goodness.",
        price: 1200,
        photo: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e12?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_17",
    businessName: "Nina's Cupcake Studio",
    ownerFirstName: "Nina",
    category: "Baking & Desserts",
    area: "Rajagiriya",
    bio: "Fluffy, moist custom cupcakes and mini cakes. Every flavor imaginable - vanilla bean, chocolate fudge, lemon citrus, strawberry cheesecake. Perfect for small parties and office meetings!",
    photos: [
      "https://images.unsplash.com/photo-1587080192892-8b1ba0e8e98f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 8,
    priceFrom: 280,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94773456791",
    listings: [
      {
        id: "l_17_1",
        name: "Box of 6 Premium Cupcakes",
        description: "Assorted flavors - vanilla, chocolate, strawberry, or lemon. Beautifully frosted with buttercream swirls.",
        price: 1680,
        photo: "https://images.unsplash.com/photo-1587080192892-8b1ba0e8e98f?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_17_2",
        name: "Single Premium Cupcake",
        description: "Pick your flavor and topping. Fresh baked to order.",
        price: 320,
        photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    id: "hm_18",
    businessName: "Chandni's Batik Boutique",
    ownerFirstName: "Chandni",
    category: "Handicrafts",
    area: "Wellawatte",
    bio: "Handmade batik sarongs, wall hangings, and fabric items using traditional wax-resist dyeing techniques. Each piece is unique and eco-friendly.",
    photos: [
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585435557529-14ccbf8c51f5?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 10,
    priceFrom: 1200,
    verified: true,
    featured: true,
    availableToday: true,
    whatsappNumber: "94774567891",
    listings: [
      {
        id: "l_18_1",
        name: "Hand-batik Sarong (Traditional Design)",
        description: "Authentic wax-batik sarong using traditional methods. Lightweight cotton blend, perfect for tropical weather.",
        price: 2800,
        photo: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_18_2",
        name: "Batik Wall Hanging (60x90cm)",
        description: "Decorative fabric wall art featuring geometric and floral batik patterns.",
        price: 2200,
        photo: "https://images.unsplash.com/photo-1585435557529-14ccbf8c51f5?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_19",
    businessName: "Meera's Beaded Jewelry",
    ownerFirstName: "Meera",
    category: "Handicrafts",
    area: "Nugegoda",
    bio: "Handmade jewelry using colorful beads, brass components, and semi-precious stones. Each piece is crafted with meticulous attention to detail.",
    photos: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dca89f169d1?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 12,
    priceFrom: 800,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94774567892",
    listings: [
      {
        id: "l_19_1",
        name: "Colorful Beaded Necklace Set",
        description: "Handmade with glass and wooden beads, brass spacers, and adjustable nylon cord. Multiple color combinations available.",
        price: 1200,
        photo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_19_2",
        name: "Semi-precious Stone Bracelet",
        description: "Amethyst, rose quartz, or jasper beads strung on elastic cord with brass accents.",
        price: 980,
        photo: "https://images.unsplash.com/photo-1515562141207-5dca89f169d1?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_20",
    businessName: "Priyanka's Crochet Haven",
    ownerFirstName: "Priyanka",
    category: "Handicrafts",
    area: "Mount Lavinia",
    bio: "Beautifully designed hand-crocheted items - doilies, table mats, cushion covers, and decorative items. Using quality yarn in natural and vibrant colors.",
    photos: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609270103543-b1f1e5a72f0f?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 8,
    priceFrom: 600,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94774567893",
    listings: [
      {
        id: "l_20_1",
        name: "Hand-crocheted Table Mat Set (4 pieces)",
        description: "Square coasters and larger mats in colorful cotton yarn. Adds a homey touch to any dining table.",
        price: 1400,
        photo: "https://images.unsplash.com/photo-1609270103543-b1f1e5a72f0f?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_20_2",
        name: "Crochet Doily (30cm diameter)",
        description: "Delicate circular doily with intricate patterns. Perfect as table centerpiece or wall decoration.",
        price: 850,
        photo: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    id: "hm_21",
    businessName: "Sangeeta's Hair & Threading Studio",
    ownerFirstName: "Sangeeta",
    category: "Beauty at Home",
    area: "Kollupitiya",
    bio: "Specialized in bridal hair styling, hair oil therapy, and threading services. Using premium hair products and natural threading methods.",
    photos: [
      "https://images.unsplash.com/photo-1560066620-7c20f1ce247c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 9,
    priceFrom: 400,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94775678902",
    listings: [
      {
        id: "l_21_1",
        name: "Bridal Hair & Makeup Styling (Full Package)",
        description: "Complete bridal styling with hair setting, makeup application, and touch-up support on the wedding day.",
        price: 8500,
        photo: "https://images.unsplash.com/photo-1560066620-7c20f1ce247c?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_21_2",
        name: "Eyebrow Threading + Upper Lip",
        description: "Professional threading service with soothing after-care.",
        price: 450,
        photo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    id: "hm_22",
    businessName: "Ravi's Sinha-English Tuition",
    ownerFirstName: "Ravi",
    category: "Tuition & Classes",
    area: "Battaramulla",
    bio: "Specializing in Sinhala language and English literature tutoring for school students. Personalized one-on-one sessions available.",
    photos: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.6,
    reviewCount: 5,
    priceFrom: 1200,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94776789013",
    listings: [
      {
        id: "l_22_1",
        name: "Sinhala Language Coaching (Grade 6-10)",
        description: "Grammar, composition writing, and literature analysis. One-on-one sessions tailored to student level.",
        price: 3500,
        photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_23",
    businessName: "Lakshmi's Cooking Classes",
    ownerFirstName: "Lakshmi",
    category: "Tuition & Classes",
    area: "Mount Lavinia",
    bio: "Hands-on cooking class sessions for adults and teenagers. Learn Sri Lankan home cooking, baking, and fusion cuisine in a friendly, interactive home kitchen.",
    photos: [
      "https://images.unsplash.com/photo-1507238691854-564bafe89f3b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 13,
    priceFrom: 2500,
    verified: true,
    featured: true,
    availableToday: false,
    whatsappNumber: "94776789014",
    listings: [
      {
        id: "l_23_1",
        name: "2-Hour Sri Lankan Home Cooking Class",
        description: "Learn to make 2-3 traditional Sri Lankan dishes. Includes ingredients, tips, and take-home recipes.",
        price: 3500,
        photo: "https://images.unsplash.com/photo-1507238691854-564bafe89f3b?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_23_2",
        name: "Weekend Baking Workshop (3 hours)",
        description: "Learn bread making, pastries, and Sri Lankan sweets in a fun, hands-on environment.",
        price: 4200,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
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
    category: "Bags & Pouches",
    area: "Wellawatte",
    bio: "Beautifully designed hand-crocheted bags, macramé clutches, and customized fabric accessories. Each piece is hand-looped and stitched using local organic cotton thread and natural coconut shells for buttons. Perfect for tropical days and sustainable lifestyle lovers.",
    photos: [
      "/marketplace/animal-mini-bags.png",
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
        id: "l_11_4",
        name: "Animal Mini Crossbody Bag",
        description: "Playful hand-stitched mini bag with a zip closure, slim shoulder strap, and a choice of owl, bear, or panda-inspired colorways.",
        price: 2400,
        photo: "/marketplace/animal-mini-bags.png"
      },
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
  },
  {
    id: "hm_24",
    businessName: "Yasmin's Woven Baskets",
    ownerFirstName: "Yasmin",
    category: "Bags & Pouches",
    area: "Dehiwala",
    bio: "Hand-woven wicker and palm baskets for storage, decoration, and gifting. Eco-friendly and sturdy designs perfect for Colombo homes.",
    photos: [
      "https://images.unsplash.com/photo-1595179218994-63aaec9aef29?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 6,
    priceFrom: 1000,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94770234568",
    listings: [
      {
        id: "l_24_1",
        name: "Hand-woven Storage Basket (Large)",
        description: "Spacious wicker basket with sturdy handles. Perfect for organizing home items or as a decorative piece.",
        price: 2200,
        photo: "https://images.unsplash.com/photo-1595179218994-63aaec9aef29?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_24_2",
        name: "Small Decorative Woven Basket",
        description: "Cute small basket for decorating shelves or gifting. Available in natural and dyed colors.",
        price: 1200,
        photo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  }
  ,
  {
    id: "hm_25",
    businessName: "Anu's Resin & Thread Jewelry",
    ownerFirstName: "Anu",
    category: "Jewelry",
    area: "Bambalapitiya",
    bio: "Resin pendants, thread-wrapped hoops and delicate macrame necklaces made locally. Custom colors and small-batch bridal sets available.",
    photos: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975913237-3f8b9d6e3f8a?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 7,
    priceFrom: 650,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234999",
    listings: [
      {
        id: "l_25_1",
        name: "Hand-poured Resin Pendant (Custom Color)",
        description: "Lightweight resin pendant with embedded dried flower. Choice of cord or silver chain.",
        price: 950,
        photo: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80"
      },
      {
        id: "l_25_2",
        name: "Macrame Thread Earrings",
        description: "Hand-knotted thread earrings with brass studs. Multiple colorways available.",
        price: 650,
        photo: "https://images.unsplash.com/photo-1520975913237-3f8b9d6e3f8a?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_26",
    businessName: "Roshini's Flower Clips",
    ownerFirstName: "Roshini",
    category: "Hair Accessories",
    area: "Wellawatte",
    bio: "Handcrafted fabric flower clips and bridal hairpins. Lightweight, durable, and available in fresh-look fabric or satin finishes.",
    photos: [
      "/marketplace/flower-hair-clips.png",
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 10,
    priceFrom: 250,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234001",
    listings: [
      {
        id: "l_26_1",
        name: "Set of 3 Fabric Flower Clips",
        description: "Soft fabric flowers sewn onto metal alligator clips. Great for everyday wear or festive looks.",
        price: 450,
        photo: "/marketplace/flower-hair-clips.png"
      },
      {
        id: "l_26_2",
        name: "Bridal Jeweled Hairpin",
        description: "Hand-embedded crystals and pearls on a comb base for bridal hair styling.",
        price: 2200,
        photo: "/marketplace/flower-hair-clips.png"
      }
    ],
    reviews: []
  },
  {
    id: "hm_27",
    businessName: "Nisha's Crochet Bags",
    ownerFirstName: "Nisha",
    category: "Bags & Pouches",
    area: "Mount Lavinia",
    bio: "Colorful hand-crocheted bags and clutches made with durable cotton yarn. Custom sizes and pastel palettes available.",
    photos: [
      "/marketplace/crochet-handbags.png",
      "https://images.unsplash.com/photo-1519472354638-2f6e6c6f87a3?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.7,
    reviewCount: 5,
    priceFrom: 1400,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234002",
    listings: [
      {
        id: "l_27_1",
        name: "Crochet Sling Bag (Medium)",
        description: "Hand-crocheted sling bag with inner lining and button closure. Durable everyday companion.",
        price: 1800,
        photo: "/marketplace/crochet-handbags.png"
      },
      {
        id: "l_27_2",
        name: "Crochet Tote & Clutch Collection",
        description: "Choose a roomy granny-square tote or a compact lined clutch in warm terracotta, mustard, cream, and plum shades.",
        price: 2600,
        photo: "/marketplace/crochet-handbags.png"
      }
    ],
    reviews: []
  },
  {
    id: "hm_28",
    businessName: "Tharani's Embroidered Patches",
    ownerFirstName: "Tharani",
    category: "Fashion Add-ons",
    area: "Borella",
    bio: "Custom embroidered patches, handmade buttons, and unique brooches to personalize garments and bags.",
    photos: [
      "/marketplace/floral-embroidery-hoop.png",
      "https://images.unsplash.com/photo-1549213783-8284d0336cbe?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.8,
    reviewCount: 4,
    priceFrom: 250,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234003",
    listings: [
      {
        id: "l_28_1",
        name: "Custom Embroidered Patch (Small)",
        description: "Personalized patch for jackets, backpacks, or denim. Provide a name or small motif.",
        price: 450,
        photo: "/marketplace/floral-embroidery-hoop.png"
      },
      {
        id: "l_28_2",
        name: "Wildflower Embroidery Hoop",
        description: "Hand-stitched floral hoop artwork on ivory linen, personalized in your preferred coral, plum, mustard, and sage palette.",
        price: 2800,
        photo: "/marketplace/floral-embroidery-hoop.png"
      }
    ],
    reviews: []
  },
  {
    id: "hm_29",
    businessName: "TinyHands Crochet Baby",
    ownerFirstName: "Siri",
    category: "Home-to-Wear Crossover",
    area: "Rajagiriya",
    bio: "Handmade baby booties, headbands, and tiny mittens created with soft cotton and attention to newborn safety.",
    photos: [
      "https://images.unsplash.com/photo-1542332213-6e7b5a4b2f7a?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.9,
    reviewCount: 9,
    priceFrom: 350,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234004",
    listings: [
      {
        id: "l_29_1",
        name: "Set: Baby Booties + Headband",
        description: "Soft cotton booties and matching headband set for newborns. Washable and cozy.",
        price: 850,
        photo: "https://images.unsplash.com/photo-1542332213-6e7b5a4b2f7a?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  },
  {
    id: "hm_30",
    businessName: "Sowmya's Mask Studio",
    ownerFirstName: "Sowmya",
    category: "Home-to-Wear Crossover",
    area: "Kollupitiya",
    bio: "Stylish reusable fabric masks with embroidery and embellishments designed for fashion-forward wearers.",
    photos: [
      "https://images.unsplash.com/photo-1584036561584-b03c19da874c?w=600&auto=format&fit=crop&q=80"
    ],
    rating: 4.6,
    reviewCount: 6,
    priceFrom: 300,
    verified: true,
    featured: false,
    availableToday: true,
    whatsappNumber: "94771234005",
    listings: [
      {
        id: "l_30_1",
        name: "Embroidered Fashion Mask",
        description: "Three-layer cotton mask with embroidered front and adjustable ear loops. Available in sets of 3.",
        price: 900,
        photo: "https://images.unsplash.com/photo-1584036561584-b03c19da874c?w=600&auto=format&fit=crop&q=80"
      }
    ],
    reviews: []
  }
];

const CATALOG_IMAGE_REFRESH_IDS = new Set(["hm_11", "hm_26", "hm_27", "hm_28"]);

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
    const parsed = JSON.parse(stored) as Homemaker[];
    return parsed.map((homemaker) => ({
      ...homemaker,
      ...(CATALOG_IMAGE_REFRESH_IDS.has(homemaker.id)
        ? (() => {
            const refreshed = INITIAL_HOMEMAKERS.find((item) => item.id === homemaker.id);
            return refreshed
              ? { photos: refreshed.photos, listings: refreshed.listings }
              : {};
          })()
        : {}),
      ownerEmail:
        homemaker.ownerEmail || (homemaker.id === "hm_1" ? "fatheema@homenest.lk" : undefined),
      category:
        homemaker.category === ("Accessories & Bags" as Category)
          ? "Bags & Pouches"
          : homemaker.category,
    }));
  } catch (e) {
    return INITIAL_HOMEMAKERS;
  }
};

export const saveHomemakers = (homemakers: Homemaker[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("her_homenest_homemakers", JSON.stringify(homemakers));
  }
};

export const getPublicHomemakers = (): Homemaker[] =>
  getStoredHomemakers()
    .filter((homemaker) => homemaker.verified)
    .map((homemaker) => ({
      ...homemaker,
      reviews: homemaker.reviews.filter((review) => review.status !== "pending"),
    }));

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
    return { role: null, email: null };
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
