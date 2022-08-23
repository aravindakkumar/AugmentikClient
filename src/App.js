import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import About from './components/About';
import Chart from './components/Chart';
import Wireframe from './components/wireframe';
import Cards from './components/Cards';
import Users from './components/Users';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>   
      <Video/>
      <About/>
      <Chart/>
      <Wireframe/>
      <Cards/>
      <Users/>
      <Footer/>
    </div>
  );
}

export default App;
