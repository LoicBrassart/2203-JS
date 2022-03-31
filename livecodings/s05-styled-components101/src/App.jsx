import Header from './components/Header';
import Gallery from './components/Gallery';
import Aside from './components/Aside';
import Footer from './components/Footer';
import SGlobal from './style';

function App() {
  return (
    <>
      <SGlobal>
        <Header />
        <Gallery />
        <Aside />
        <Footer />
      </SGlobal>
    </>
  );
}

export default App;
