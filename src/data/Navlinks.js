const navLinks = [
  {
    id: 1,
    label: 'Home',
    href: '#home',
  },
  {
    id: 2,
    label: 'Shop',
    href: '#shop',
    megaMenu: {
      categories: [
        {
          title: 'Fruits & Vegetables',
          items: ['Fresh Fruits', 'Organic Vegetables', 'Exotic Fruits', 'Leafy Greens', 'Root Vegetables']
        },
        {
          title: 'Dairy & Eggs',
          items: ['Milk & Cream', 'Cheese', 'Yogurt', 'Fresh Eggs', 'Butter']
        },
        {
          title: 'Bakery',
          items: ['Fresh Bread', 'Cakes & Pastries', 'Cookies', 'Donuts', 'Organic Bakery']
        },
        {
          title: 'Beverages',
          items: ['Fruit Juices', 'Coffee & Tea', 'Soft Drinks', 'Energy Drinks', 'Water']
        }
      ]
    }
  },
  {
    id: 3,
    label: 'Products',
    href: '#products',
    megaMenu: {
      categories: [
        {
          title: 'Featured Products',
          items: ['Best Sellers', 'New Arrivals', 'Special Offers', 'Trending Now', 'Top Rated']
        },
        {
          title: 'Organic Food',
          items: ['Organic Fruits', 'Organic Vegetables', 'Organic Grains', 'Organic Dairy', 'Organic Snacks']
        },
        {
          title: 'Healthy Options',
          items: ['Gluten Free', 'Low Carb', 'Vegan Products', 'Sugar Free', 'Protein Rich']
        },
     
      ]
    }
  },
  {
    id: 4,
    label: 'Blog',
    href: '#blog',
    megaMenu: {
      categories: [
        {
          title: 'Health & Nutrition',
          items: ['Healthy Eating Tips', 'Nutrition Facts', 'Diet Plans', 'Vitamins Guide', 'Meal Prep Ideas']
        },
        {
          title: 'Recipes',
          items: ['Quick Recipes', 'Vegan Recipes', 'Desserts', 'Smoothies', 'Salads']
        },
        {
          title: 'Lifestyle',
          items: ['Fitness Tips', 'Wellness', 'Sustainable Living', 'Shopping Tips', 'Food Storage']
        },
        {
          title: 'Seasonal',
          items: ['Summer Picks', 'Winter Warmers', 'Spring Fresh', 'Autumn Harvest', 'Holiday Specials']
        },
        {
          title: 'Community',
          items: ['Customer Stories', 'Farm Partners', 'Local Events', 'Cooking Classes', 'Newsletter']
        }
      ]
    }
  },
  {
    id: 5,
    label: 'About us',
    href: '#about',
  },
  {
    id: 6,
    label: 'Contact us',
    href: '#contact',
  },
];

export default navLinks;
