import React from 'react';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Jobs from './Components/Jobs';
import Value from './Components/Value';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;