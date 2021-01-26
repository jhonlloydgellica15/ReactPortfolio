import "./App.css";
import MyCarousel from "./components/Carousel/MyCarousel";
import MyNavbar from "./components/NavBar/Navbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";

function App() {
  return (
    <div className="App">
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />
    </div>
  );
}

export default App;
