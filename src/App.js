import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Preloader from './components/preloader';
import Hero from './components/hero';
import PortfolioItem from './components/portfolio-item';


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
        {/* start About Section */}

        {/* end About Section */}

        {/* start Portfolio Section */}
        <PortfolioItem 
          title="Minimalism"
          subtitle="Illustration . Art Direction"
          imgUrl="images/protfolio/img-1.jpg"
          url="http://google.com"
          alt="Illustration"
        />
        {/* end Portfolio Section */}
    </div>
  );
}

export default App;
