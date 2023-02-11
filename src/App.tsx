import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shades from "./components/Shades";

function App() {
  return (
    <div className='App bg-gray-900 min-h-screen pb-12'>
      <Header />
      <Hero />
      <Shades />
      <Footer />
    </div>
  );
}

export default App;
