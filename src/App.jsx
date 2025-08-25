// src/App.jsx
import { useState, useEffect } from "react";

function App() {
  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hello! How can I help you with your travel plans?" },
  ]);
  const [userInput, setUserInput] = useState("");

  // Handle sending message
  const sendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;
    setMessages([...messages, { from: "user", text: userInput }]);
    setUserInput("");
    // Bot response (simple example)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "🤖 Thanks for your message! We will assist you shortly." },
      ]);
    }, 1000);
  };

  // Toggle chatbot
  const toggleChat = () => setChatOpen(!chatOpen);

  // Map effect placeholder
  useEffect(() => {
    // Here you can initialize Google Maps if you want
  }, []);

  return (
    <div className="App">

      {/* Hero Section */}
      <header className="relative bg-gray-900 text-white">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold">Destinova</div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Tours</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full">Login</button>
        </nav>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-8">Enjoy the holidays with Destinova</h1>
          <form className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center items-center">
            <input type="text" placeholder="Location" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="date" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>People</option>
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">Explore Now</button>
          </form>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img src="/images/travel.png" alt="About Travel" className="w-full h-auto rounded-lg shadow-lg" />
              <h2 className="text-4xl font-bold">Investigate All Corners Of The World With Us</h2>
              <p className="text-lg text-gray-600">Travel with us to the greatest destinations around the world. Discover new cultures, foods, and landscapes.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">Explore More</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src="/images/beautiful-beach.png" alt="Beautiful Beach" className="w-full h-48 object-cover rounded-lg" />
              <img src="/images/mountain.png" alt="Mountain View" className="w-full h-48 object-cover rounded-lg" />
              <img src="/images/cityscape.png" alt="Cityscape" className="w-full h-48 object-cover rounded-lg" />
              <img src="/images/building.png" alt="Building" className="w-full h-48 object-cover rounded-lg" />
              <img src="/images/landscape.png" alt="Landscape" className="w-full h-48 object-cover rounded-lg" />
              <img src="/images/green.png" alt="Green" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Best Features For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Best Tour Guide</h3>
              <p className="text-gray-600">Expert guides with experience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Available Tour</h3>
              <p className="text-gray-600">All around the world.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Friendly Price</h3>
              <p className="text-gray-600">Affordable packages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { img: "desert.png", name: "Desert Safari" },
              { img: "tajmahal.png", name: "Taj Mahal" },
              { img: "japan.png", name: "Temple Japan" },
              { img: "bali.png", name: "Bali Beach" },
              { img: "tower.png", name: "Eiffel Tower" },
              { img: "santorini.png", name: "Santorini" },
              { img: "maldives.png", name: "Maldives" },
              { img: "phuket.png", name: "Phuket" },
              { img: "hawaii.png", name: "Hawaii" },
              { img: "banff.png", name: "Banff" }
            ].map((dest, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={`/images/${dest.img}`} 
                    alt={dest.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity">
                    <p className="absolute bottom-4 left-4 text-white font-semibold">{dest.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Suggestions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">🏖️ Best Places to Stay</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/hotel-taj.png" alt="Taj Mahal Palace, Mumbai" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Taj Mahal Palace</h3>
                <p className="text-gray-600 mb-4">Mumbai – Luxury stay ⭐⭐⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/hotel-zostel.png" alt="Zostel Hostel, Jaipur" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Zostel Hostel</h3>
                <p className="text-gray-600 mb-4">Jaipur – Budget-friendly hostel ⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/hotel-agra.png" alt="Agra Homestay" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agra Homestay</h3>
                <p className="text-gray-600 mb-4">Cozy family-run option ⭐⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/hotel-radisson.png" alt="Radisson Blu, Goa" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Radisson Blu</h3>
                <p className="text-gray-600 mb-4">Goa – Beachside resort ⭐⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Restaurants & Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Local Dining & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/restruant-indian.png" alt="Indian Spice Restaurant" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Indian Spice</h3>
                <p className="text-gray-600 mb-4">Delhi – Authentic North Indian Cuisine ⭐⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">View Details</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/restruant-cafe.png" alt="Goa Beach Café" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Goa Beach Café</h3>
                <p className="text-gray-600 mb-4">Goa – Seaside coffee & snacks ⭐⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">View Details</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/restruant-fast-food.png" alt="Burger Hub" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Burger Hub</h3>
                <p className="text-gray-600 mb-4">Mumbai – Fast food & drinks ⭐⭐⭐</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">View Details</a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/images/restruant-service.png" alt="City Cab Service" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">City Cab Service</h3>
                <p className="text-gray-600 mb-4">24/7 cab service available in major cities 🚕</p>
                <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Book Cab</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h4 className="font-semibold">Destinova Chatbot</h4>
            <button onClick={toggleChat} className="text-2xl hover:text-gray-200">×</button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} 
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.from === "bot" 
                    ? "bg-gray-100 mr-auto" 
                    : "bg-blue-500 text-white ml-auto"
                }`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="p-4 border-t" onSubmit={sendMessage}>
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      <button 
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-600 transition-colors"
        onClick={toggleChat}
      >
        💬
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Destinova</h3>
              <p className="text-gray-400">Explore the world with ease.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-400">Social media links</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2025 Destinova. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
