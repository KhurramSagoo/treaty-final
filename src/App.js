import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import  Header  from './Header';
import Top from './components/Top';
import Icons from './components/Icons';
import Left from './components/Left';
import Footer from './components/Footer';
import SlickReact from './components/SlickReact'
import Carousel from './components/Carousel';
import Owl from './components/Owl';
import Cat from './components/Cat';
function App() {
  return (
    <>
    <Top />
<Cat />
    <SlickReact />
<Icons />
<Header />
<Left />
{/* <Carousel /> */}
<Footer />
{/* <Owl /> */}
    </>
  );
}

export default App;
