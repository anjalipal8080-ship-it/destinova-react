// src/App.jsx
import { useState, useEffect } from "react";
import "./style.css";


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
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Destinova</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="login-btn">Login</button>
        </nav>
        <div className="hero-content">
          <h1>Enjoy the holidays with Destinova</h1>
          <form className="search-form">
            <input type="text" placeholder="Location" />
            <input type="date" />
            <select>
              <option>People</option>
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
            <button type="submit">Explore Now</button>
          </form>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <img src="travel.png" alt="About Travel" />
            <h2>Investigate All Corners Of The World With Us</h2>
            <p>Travel with us to the greatest destinations around the world. Discover new cultures, foods, and landscapes.</p>
            <button>Explore More</button>
          </div>
          <div className="about-gallery">
            <img src="beautiful beach.png" alt="Beautiful Beach" />
            <img src="mountain.png" alt="Mountain View" />
            <img src="cityscape.png" alt="Cityscape" />
            <img src="buiding.png" alt="buiding" />
            <img src="landescape.png" alt="landescape" />
            <img src="green.png" alt="green" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Best Features For You</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Best Tour Guide</h3>
            <p>Expert guides with experience.</p>
          </div>
          <div className="feature-item">
            <h3>Available Tour</h3>
            <p>All around the world.</p>
          </div>
          <div className="feature-item">
            <h3>Friendly Price</h3>
            <p>Affordable packages.</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <img src="desert.png" alt="Desert Safari" />
            <p>Desert Safari</p>
          </div>
          <div className="destination-card">
            <img src="tajmahal.png" alt="Taj Mahal" />
            <p>Taj Mahal</p>
          </div>
          <div className="destination-card">
            <img src="japan.png" alt="Temple Japan" />
            <p>Temple Japan</p>
          </div>
          <div className="destination-card">
            <img src="bali.png" alt="Bali Beach, Indonesia" />
            <p>Bali Beach</p>
          </div>
          <div className="destination-card">
            <img src="tower.png" alt="Eiffel Tower, Paris" />
            <p>Eiffel Tower</p>
          </div>
          <div className="destination-card">
            <img src="sentorini.png" alt="Santorini, Greece" />
            <p>Santorini</p>
          </div>
          <div className="destination-card">
            <img src="maldives.png" alt="Maldives Beach, Indian Ocean" />
            <p>Maldives</p>
          </div>
          <div className="destination-card">
            <img src="phuket.png" alt="Phuket Beach, Thailand" />
            <p>Phuket</p>
          </div>
          <div className="destination-card">
            <img src="hawaii.png" alt="Waikiki Beach, Hawaii" />
            <p>Hawaii</p>
          </div>
          <div className="destination-card">
            <img src="banff.png" alt="Banff National Park, Canada" />
            <p>Banff</p>
          </div>
        </div>
      </section>

      {/* Accommodation Suggestions */}
      <section className="accommodations">
        <h2>🏖️ Best Places to Stay</h2>
        <div className="accommodation-grid">
          <div className="accommodation-card luxury">
            <img src="hotel-taj.png" alt="Taj Mahal Palace, Mumbai" />
            <h3>Taj Mahal Palace</h3>
            <p>Mumbai – Luxury stay ⭐⭐⭐⭐⭐</p>
            <a href="#" className="book-btn">Book Now</a>
          </div>
          <div className="accommodation-card budget">
            <img src="hotel-zostel.png" alt="Zostel Hostel, Jaipur" />
            <h3>Zostel Hostel</h3>
            <p>Jaipur – Budget-friendly hostel ⭐⭐⭐</p>
            <a href="#" className="book-btn">Book Now</a>
          </div>
          <div className="accommodation-card homestay">
            <img src="hotel-agra.png" alt="Agra Homestay" />
            <h3>Agra Homestay</h3>
            <p>Cozy family-run option ⭐⭐⭐⭐</p>
            <a href="#" className="book-btn">Book Now</a>
          </div>
          <div className="accommodation-card resort">
            <img src="hotel-russu.png" alt="Radisson Blu, Goa" />
            <h3>Radisson Blu</h3>
            <p>Goa – Beachside resort ⭐⭐⭐⭐</p>
            <a href="#" className="book-btn">Book Now</a>
          </div>
        </div>
      </section>

      {/* Nearby Restaurants & Services */}
      <section className="restaurants">
        <h2>Local Dining & Services</h2>
        <div className="restaurant-grid">
          <div className="restaurant-card">
            <img src="restruant-indian.png" alt="Indian Spice Restaurant" />
            <h3>Indian Spice</h3>
            <p>Delhi – Authentic North Indian Cuisine ⭐⭐⭐⭐</p>
            <a href="#" className="book-btn">View Details</a>
          </div>
          <div className="restaurant-card">
            <img src="restruant-cafe.png" alt="Goa Beach Café" />
            <h3>Goa Beach Café</h3>
            <p>Goa – Seaside coffee & snacks ⭐⭐⭐⭐</p>
            <a href="#" className="book-btn">View Details</a>
          </div>
          <div className="restaurant-card">
            <img src="restruant-fast food.png" alt="Burger Hub" />
            <h3>Burger Hub</h3>
            <p>Mumbai – Fast food & drinks ⭐⭐⭐</p>
            <a href="#" className="book-btn">View Details</a>
          </div>
          <div className="restaurant-card">
            <img src="restruant-service.png" alt="City Cab Service" />
            <h3>City Cab Service</h3>
            <p>24/7 cab service available in major cities 🚕</p>
            <a href="#" className="book-btn">Book Cab</a>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      {chatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Destinova Chatbot</h4>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.from === "bot" ? "bot-message" : "user-message"}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChat}>💬</button>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Destinova</h3>
            <p>Explore the world with ease.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Social media links</p>
          </div>
        </div>
        <p className="copyright">© 2025 Destinova. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
