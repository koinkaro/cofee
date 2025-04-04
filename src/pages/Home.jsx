import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaUtensils, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/coffee-shop-1.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Chai Chowk</h1>
            <p className="text-xl md:text-2xl mb-8">Experience the finest coffee and authentic Indian flavors in Rajkot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                Explore Our Menu
              </Link>
              <Link to="/contact" className="bg-transparent hover:bg-white hover:text-amber-800 text-white border-2 border-white px-6 py-3 rounded-md font-medium transition duration-300">
                Find Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Chai Chowk, we pride ourselves in serving the best coffee in Rajkot, complemented by our delicious Indian snacks and desserts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCoffee className="text-amber-700 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Premium Coffee</h3>
              <p className="text-gray-600">
                We source our beans from the finest estates across India, ensuring rich and aromatic flavors in every cup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-amber-700 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients in our food, sourced locally whenever possible to support our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-amber-700 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Authentic Flavors</h3>
              <p className="text-gray-600">
                Experience authentic Gujarati and Indian flavors in our specially curated menu of snacks and desserts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Featured Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular items loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="https://www.thecaffeinebaar.com/cdn/shop/articles/Filter_1500x.jpg?v=1636717220" alt="South Indian Filter Coffee" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">South Indian Filter Coffee</h3>
                <p className="text-gray-600 mb-4">
                  Traditional South Indian coffee brewed with freshly roasted beans.
                </p>
                <p className="text-amber-700 font-bold">₹120</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="https://i.pinimg.com/736x/10/8a/65/108a658e8dec5c7ce548498ba244705d.jpg" alt="Masala Chai" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Masala Chai</h3>
                <p className="text-gray-600 mb-4">
                  Spiced tea with ginger, cardamom, cloves and cinnamon.
                </p>
                <p className="text-amber-700 font-bold">₹80</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="/images/coffee-beans.jpg" alt="Specialty Coffee Beans" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Specialty Coffee Beans</h3>
                <p className="text-gray-600 mb-4">
                  Premium coffee beans from various regions of India, available for purchase.
                </p>
                <p className="text-amber-700 font-bold">₹450 / 250g</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium transition duration-300">
              View Full Menu <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto opacity-80">
              Don't just take our word for it, hear what our customers have to say about their experience at Chai Chowk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-900 p-6 rounded-lg"
            >
              <p className="mb-4">
                "Absolutely the best coffee in Rajkot! Their South Indian Filter Coffee is unmatched. The ambiance is perfect for work or catching up with friends."
              </p>
              <div className="font-medium">- Priya Sharma</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-900 p-6 rounded-lg"
            >
              <p className="mb-4">
                "I visit Chai Chowk every morning before work. Their coffee and samosas start my day perfectly. Highly recommend trying their specialty brews!"
              </p>
              <div className="font-medium">- Rajesh Patel</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-900 p-6 rounded-lg"
            >
              <p className="mb-4">
                "The desserts here are to die for! I love their Gulab Jamun with coffee combination. The staff is extremely friendly and the place has a warm atmosphere."
              </p>
              <div className="font-medium">- Ananya Desai</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Visit Us Today</h2>
            <p className="text-gray-600 mb-8">
              We're located in the heart of Rajkot. Stop by for a cup of premium coffee and experience our warm hospitality.
            </p>
            <Link to="/contact" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Find Our Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
