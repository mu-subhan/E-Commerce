
import TopHeader from './components/Header/TopHeader';
import BottomHeader from './components/Header/BottomHeader';
import HeroSection from './components/Home/HeroSection';
import PopularProduct from './components/Home/PopularProduct';
import BestSellerProducts from './components/Home/BestSellerProducts';

function App() {
   
  return (
    <div className='w-full bg-[#1e28320d] h-[60px]'>
     <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProduct />
      <BestSellerProducts/>
    </div>
    
    
  );
}

export default App;
