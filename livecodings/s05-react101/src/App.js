import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('Stranger');

  return (
    <>
      <Header user={userName} />
      <main>
        <input
          type='text'
          value={userName}
          onChange={(evt) => {
            setUserName(evt.target.value);
          }}
          onClick={() => {
            if (userName.toLowerCase() === 'stranger') {
              setUserName('');
            }
          }}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
