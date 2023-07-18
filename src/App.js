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
function App() {
  return (
    <>
    <Top />
    <SlickReact />
<Icons />
<Header />
<Left />
<Footer />
    </>
  );
}

export default App;
