import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaCookie } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee & Beverages', icon: <FaCoffee /> },
    // { id: 'food', name: 'Food & Snacks', icon: <FaUtensils /> }, // Removed
    // { id: 'desserts', name: 'Desserts', icon: <FaCookie /> }, // Removed
  ];

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: 'South Indian Filter Coffee',
        description: 'Traditional South Indian coffee brewed with freshly roasted beans',
        price: 120,
        image: 'https://www.thecaffeinebaar.com/cdn/shop/articles/Filter_1500x.jpg?v=1636717220',
        bestSeller: true
      },
      {
        id: 2,
        name: 'Masala Chai',
        description: 'Spiced tea with ginger, cardamom, cloves and cinnamon',
        price: 80,
        image: 'https://i.pinimg.com/736x/10/8a/65/108a658e8dec5c7ce548498ba244705d.jpg',
      },
      {
        id: 3,
        name: 'Espresso',
        description: 'Rich and intense coffee served in a small cup',
        price: 100,
        image: 'https://cdn.shopify.com/s/files/1/0104/9211/7092/files/Module-2a.jpg?v=1641819059',
      },
      {
        id: 4,
        name: 'Cappuccino',
        description: 'Espresso topped with steamed milk and milk foam',
        price: 150,
        image: 'https://www.coffeebeancorral.com/blog/image.axd?picture=/pexels-tyler-nix-2396220.jpg',
      },
      {
        id: 5,
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam',
        price: 160,
        image: 'https://skydecklounge.in/wp-content/uploads/2022/01/Cafe-Latte-Coffee.jpg',
      },
      {
        id: 6,
        name: 'Mocha',
        description: 'Espresso with chocolate and steamed milk, topped with whipped cream',
        price: 180,
        image: 'https://fandbrecipes.com/wp-content/uploads/2022/07/Espresso-Macchiato_Step-By-Step-Recipe-500x375.png',
      },
    ],
    /* // Removed food section
    food: [
      {
        id: 11,
        name: 'Samosa',
        description: 'Crispy pastry filled with spiced potatoes and peas (2 pieces)',
        price: 60,
        image: '/images/samosa.jpg',
        bestSeller: true
      },
      {
        id: 12,
        name: 'Vada Pav',
        description: 'Spicy potato fritter in a bun with chutney',
        price: 80,
        image: '/images/vada-pav.jpg',
      },
      {
        id: 13,
        name: 'Poha',
        description: 'Flattened rice with peanuts, onions and spices',
        price: 90,
        image: '/images/samosa.jpg',
      },
      {
        id: 14,
        name: 'Dhokla',
        description: 'Steamed savory cake made from rice and chickpea flour',
        price: 70,
        image: '/images/samosa.jpg',
      },
      {
        id: 15,
        name: 'Masala Dosa',
        description: 'Crispy rice crepe filled with spiced potatoes, served with sambar and chutney',
        price: 140,
        image: '/images/masala-dosa.jpg',
      },
      {
        id: 16,
        name: 'Pav Bhaji',
        description: 'Spicy mixed vegetable curry served with buttered bread rolls',
        price: 120,
        image: '/images/samosa.jpg',
      },
      {
        id: 17,
        name: 'Vegetable Sandwich',
        description: 'Grilled sandwich with vegetables and cheese',
        price: 100,
        image: '/images/samosa.jpg',
      },
      {
        id: 18,
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese marinated in spices',
        price: 160,
        image: '/images/samosa.jpg',
      },
      {
        id: 19,
        name: 'Cheese Chilly Toast',
        description: 'Toasted bread with cheese and green chilies',
        price: 110,
        image: '/images/samosa.jpg',
      },
      {
        id: 20,
        name: 'Bombay Sandwich',
        description: 'Multi-layered sandwich with potatoes, cucumber, and chutney',
        price: 110,
        image: '/images/samosa.jpg',
      },
    ],
    */
    /* // Removed desserts section
    desserts: [
      {
        id: 21,
        name: 'Gulab Jamun',
        description: 'Sweet, spongy milk solids soaked in rose-flavored syrup (2 pieces)',
        price: 80,
        image: '/images/gulab-jamun.jpg',
        bestSeller: true
      },
      {
        id: 22,
        name: 'Rasmalai',
        description: 'Soft cottage cheese dumplings soaked in sweetened, thickened milk',
        price: 100,
        image: '/images/rasmalai.jpg',
      },
      {
        id: 23,
        name: 'Jalebi',
        description: 'Sweet, pretzel-shaped dessert soaked in sugar syrup',
        price: 70,
        image: '/images/jalebi.jpg',
      },
      {
        id: 24,
        name: 'Gajar Ka Halwa',
        description: 'Carrot pudding made with ghee, milk, and nuts',
        price: 120,
        image: '/images/dessert-1.jpg',
      },
      {
        id: 25,
        name: 'Kesar Pista Kulfi',
        description: 'Saffron and pistachio flavored traditional Indian ice cream',
        price: 90,
        image: '/images/gulab-jamun.jpg',
      },
      {
        id: 26,
        name: 'Shrikhand',
        description: 'Strained yogurt dessert with saffron, cardamom, and nuts',
        price: 110,
        image: '/images/rasmalai.jpg',
      },
      {
        id: 27,
        name: 'Mysore Pak',
        description: 'Traditional sweet from Karnataka made with gram flour, ghee, and sugar',
        price: 90,
        image: '/images/jalebi.jpg',
      },
      {
        id: 28,
        name: 'Malpua',
        description: 'Sweet pancake dipped in sugar syrup, topped with rabri',
        price: 100,
        image: '/images/dessert-1.jpg',
      },
    ],
    */
  };

  const filteredItems = menuItems[activeCategory] || [];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a wide range of premium coffees, authentic Indian snacks, and delicious desserts.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-md transition duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-700 text-white'
                    : 'text-amber-800 hover:bg-amber-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory].map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-amber-100 flex items-center justify-center">
                    {activeCategory === 'coffee' && <FaCoffee className="text-amber-700 text-5xl" />}
                    {activeCategory === 'food' && <FaUtensils className="text-amber-700 text-5xl" />}
                    {activeCategory === 'desserts' && <FaCookie className="text-amber-700 text-5xl" />}
                  </div>
                )}
                {item.bestSeller && (
                  <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                    BEST SELLER
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                  <span className="text-amber-700 font-bold">₹{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Notes */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-amber-800 mb-4">Special Notes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• All prices are inclusive of taxes.</li>
            <li>• We can customize the spice level for most items.</li>
            <li>• Please inform our staff about any allergies or dietary restrictions.</li>
            <li>• We offer special discounts for bulk orders and events.</li>
            <li>• Ask our barista for the seasonal specials not listed on the menu!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
