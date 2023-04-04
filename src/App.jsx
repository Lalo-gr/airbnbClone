import "./App.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card
        img = "/src/assets/katie.png"
        rating = "5.0"
        reviewCount= {6}
        country = "USA"
        title = "Life Lessons with Katie"
        price = {136}
      />
    </div>
  );
}

export default App;
