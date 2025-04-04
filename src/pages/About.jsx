import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaUsers } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    {
      icon: <FaLeaf className="text-3xl text-amber-700" />,
      title: 'Quality',
      description: 'We source the finest coffee beans and ingredients to ensure exceptional quality in every cup and plate.'
    },
    {
      icon: <FaHeart className="text-3xl text-amber-700" />,
      title: 'Passion',
      description: 'Our team is passionate about coffee and food, constantly innovating and perfecting our craft.'
    },
    {
      icon: <FaUsers className="text-3xl text-amber-700" />,
      title: 'Community',
      description: 'We are committed to supporting local producers and creating a welcoming space for our community.'
    }
  ];

  const team = [
    {
      name: 'Siddh Shah',
      role: 'Founder & Head Barista',
      bio: 'With over 15 years of experience in the coffee industry, Arjun brings his passion for traditional Indian coffee preparation methods to Chai Chowk.'
    },
    {
      name: 'Meera Patel',
      role: 'Head Chef',
      bio: 'Meera specializes in authentic Gujarati cuisine and has perfected the art of creating delicious snacks that pair perfectly with our coffee selection.'
    },
    {
      name: 'Raj Desai',
      role: 'Operations Manager',
      bio: 'Raj ensures that every visit to Chai Chowk is a delightful experience, overseeing our team and maintaining our high standards of service.'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-amber-800 mb-4"
          >
            About Chai Chowk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Serving the finest coffee and authentic Indian flavors in the heart of Rajkot since 2018.
          </motion.p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Chai Chowk was born from a simple passion for coffee and a desire to create a warm, welcoming space in Rajkot where people could enjoy premium coffee and authentic Indian snacks.
                </p>
                <p>
                  Founded in 2018 by Arjun Patel, a coffee enthusiast with roots in South India, Chai Chowk started as a small kiosk near the Race Course. As word spread about our exceptional filter coffee and delicious snacks, we quickly outgrew our original space.
                </p>
                <p>
                  In 2020, we moved to our current location in central Rajkot, expanding our menu and staff. Today, Chai Chowk is a beloved part of the community, where people gather to enjoy good food, great coffee, and warm conversation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/images/coffee-shop-interior.jpg"
                alt="Chai Chowk Interior"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Chai Chowk, we are guided by our core values that define who we are and how we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Coffee */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-xl md:order-2"
            >
              <img
                src="/images/coffee-beans.jpg"
                alt="Coffee Beans"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:order-1"
            >
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Our Coffee</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We take immense pride in our coffee selection. Our beans are sourced from the finest estates across India, including regions like Coorg, Chikmagalur, and the Nilgiris.
                </p>
                <p>
                  Each batch is carefully roasted to bring out the unique flavors and aromas that make Indian coffee special. Our signature South Indian Filter Coffee is prepared using traditional methods that have been perfected over generations.
                </p>
                <p>
                  Beyond our filter coffee, we offer a wide range of coffee preparations - from espresso-based drinks to cold brews, ensuring there's something for every coffee lover who walks through our doors.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Chai Chowk who make your experience special every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-4">
                  <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-1 text-center">{member.name}</h3>
                <p className="text-amber-600 mb-4 text-center">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
