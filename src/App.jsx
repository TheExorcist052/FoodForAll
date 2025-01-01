import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, HandHelping, Leaf, Target, MapPin, User, Sun, Moon } from "lucide-react";

// Mock Data for Ongoing Donations
const ongoingDonations = [
  { id: 1, donor: "Raghib", item: "10 Canned Foods", location: "Hare St. Wari" },
  { id: 2, donor: "Nafisa", item: "Fresh Vegetables", location: "Dhanmondi 19" },
  { id: 3, donor: "Protysha", item: "5 Bread Loaves", location: "789 Pine St" },
  { id: 4, donor: "Piku", item: "Tomatoes", location: "Khilgaon" },
];

// Home Page
const HomePage = ({ toggleTheme, currentTheme }) => (
  <div
    className={`w-screen min-h-screen flex items-center justify-center ${currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
  >
    <Helmet>
      <title>Home - Food For All</title>
    </Helmet>
    <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold transform hover:scale-105 transition duration-300">
        Welcome to Food For All
      </h1>
      <p className="text-lg sm:text-xl mx-auto max-w-2xl text-gray-700 hover:text-gray-400 transition duration-300">
        A community-driven platform to reduce food waste and eliminate hunger. Join us to make a difference!
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/donate"
          className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Donate Food
        </Link>
        <Link
          to="/volunteer"
          className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-full text-lg shadow-md transition"
        >
          Become A Volunteer
        </Link>
      </div>
    </div>
    {/* Dark/Light Mode Toggle */}
    <div
      onClick={toggleTheme}
      className="absolute bottom-8 right-8 p-3 bg-gray-200 rounded-full cursor-pointer shadow-lg hover:scale-105 transform transition duration-300"
    >
      {currentTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </div>
  </div>
);

// About Us Page
const AboutUsPage = () => (
  <div className="w-screen min-h-screen bg-gray-100 p-8">
    <Helmet>
      <title>About Us</title>
    </Helmet>
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-3xl font-extrabold text-black">About Us</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Food For All is a community-driven platform committed to reducing food waste and fighting hunger. We bring
        together individuals, businesses, and non-profits to make sure surplus food reaches those in need. Join us in
        creating a sustainable future.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AboutCard
          icon={<Leaf size={48} className="text-gray-600" />}
          title="Sustainability"
          description="Promoting food sustainability and environmental responsibility."
        />
        <AboutCard
          icon={<HandHelping size={48} className="text-gray-600" />}
          title="Community"
          description="Building strong communities through shared resources."
        />
        <AboutCard
          icon={<Target size={48} className="text-gray-600" />}
          title="Zero Hunger"
          description="Fighting to end hunger in every community we serve."
        />
      </div>
    </div>
  </div>
);

const AboutCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 hover:scale-105 transform transition-transform duration-300">
    <div>{icon}</div>
    <h3 className="text-xl font-semibold text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Donate Food Page
const DonateFoodPage = () => {
  const [foodType, setFoodType] = useState("");
  const [donationType, setDonationType] = useState("Fresh Produce");
  const [expiryDate, setExpiryDate] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleImageChange = (e) => {
    setFoodImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 p-6 md:p-12">
      <Helmet>
        <title>Donate Food</title>
      </Helmet>
      {submitted ? (
        <div className="text-center bg-white p-8 rounded-lg shadow-md mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-gray-600">Thank You!</h2>
          <p className="text-gray-700 mt-4">Your donation has been submitted successfully!</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-gray-200 hover:bg-gray-300 text-black px-6 py-3 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-black">Donate Food</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Donation Type</label>
            <select
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
            >
              <option value="Fresh Produce">Fresh Produce</option>
              <option value="Cooked Meals">Cooked Meals</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Food Type</label>
            <input
              type="text"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
              placeholder="e.g., Bread, Vegetables"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Expiry Date</label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Food Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
            />
            {foodImage && (
              <div className="mt-4">
                <img
                  src={foodImage}
                  alt="Food"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

// Nearby Donations Page
const NearbyDonationsPage = () => (
  <div className="w-screen min-h-screen bg-gray-100 p-8">
    <Helmet>
      <title>Nearby Donations</title>
    </Helmet>
    <h2 className="text-4xl font-bold text-center text-black mb-6">Nearby Donations</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ongoingDonations.map((donation) => (
        <div
          key={donation.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-black">{donation.donor}</h3>
          <p className="text-gray-600">Item: {donation.item}</p>
          <p className="text-gray-600">Location: {donation.location}</p>
        </div>
      ))}
    </div>
  </div>
);

// User Registration Page
const UserRegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered", { username, email, password });
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-8">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-6">User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

// Volunteer Registration Page
const VolunteerRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    availability: "",
    experience: "",
    interests: [],
    transportation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Registration:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for registering as a volunteer!");
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-8">
      <Helmet>
        <title>Become a Volunteer - Food For All</title>
      </Helmet>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black text-center mb-6">Become a Volunteer</h2>
        <p className="text-gray-600 mb-6 text-center">
          Join our community of volunteers and help make a difference in fighting food waste and hunger.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              rows="2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both Weekdays and Weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Areas of Interest</label>
            <div className="space-y-2">
              <div>
                <input
                  type="checkbox"
                  id="food-collection"
                  name="interests"
                  value="food-collection"
                  onChange={handleInterestChange}
                  className="mr-2"
                />
                <label htmlFor="food-collection">Food Collection</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="food-distribution"
                  name="interests"
                  value="food-distribution"
                  onChange={handleInterestChange}
                  className="mr-2"
                />
                <label htmlFor="food-distribution">Food Distribution</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="community-outreach"
                  name="interests"
                  value="community-outreach"
                  onChange={handleInterestChange}
                  className="mr-2"
                />
                <label htmlFor="community-outreach">Community Outreach</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Previous Volunteer Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              rows="3"
              placeholder="Please share any relevant volunteer experience..."
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Transportation</label>
            <select
              name="transportation"
              value={formData.transportation}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-gray-500"
              required
            >
              <option value="">Select transportation method</option>
              <option value="own-vehicle">Own Vehicle</option>
              <option value="public-transport">Public Transportation</option>
              <option value="bicycle">Bicycle</option>
              <option value="walking">Walking</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

// Update Navigation component to include Volunteer link
const Navigation = ({ toggleTheme, currentTheme }) => (
  <header className={`${currentTheme === "dark" ? "bg-gray-900" : "bg-black"} text-white p-4 shadow-lg`}>
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Home size={24} />
        <h1 className="text-xl font-semibold">Food For All</h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/donate" className="hover:text-gray-400">Donate</Link>
        </li>
        <li>
          <Link to="/nearby" className="hover:text-gray-400">Nearby</Link>
        </li>
        <li>
          <Link to="/volunteer" className="hover:text-gray-400">Volunteer</Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-400">Register</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
        </li>
      </ul>
    </nav>
  </header>
);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <Navigation toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route path="/" element={<HomePage toggleTheme={toggleTheme} currentTheme={theme} />} />
        <Route path="/donate" element={<DonateFoodPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/nearby" element={<NearbyDonationsPage />} />
        <Route path="/register" element={<UserRegistrationPage />} />
        <Route path="/volunteer" element={<VolunteerRegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
