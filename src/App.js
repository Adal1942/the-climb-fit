import Footer from './components/Footer';
import Hero from './components/Hero';
import Images from './components/Images';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Programs'
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Images />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
