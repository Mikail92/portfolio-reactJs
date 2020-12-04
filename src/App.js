import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Preloader from './components/preloader';
import Hero from './components/hero';


function App() {
  return (
    <div className="page-wrapper">
        {/* start preloader */}
        <Preloader />
        {/* end preloader */}
        {/* start header */}
        <Header />
        {/* end header */}
        {/* start Hero Section */}
        <Hero />
        {/* end Hero Section */}
    </div>
  );
}

export default App;
