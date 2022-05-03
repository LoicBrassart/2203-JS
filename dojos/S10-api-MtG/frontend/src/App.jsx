import { Routes, Route } from "react-router-dom";
import Gallery from "@components/Gallery";
import Detail from "@components/Detail";

function App() {
  return (
    <div className="App">
      <header>Hey! =D</header>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/cards" element={<Gallery />} />
        <Route path="/cards/:cardId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
