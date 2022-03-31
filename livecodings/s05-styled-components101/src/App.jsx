import Test01 from './components/Test01';
import SGlobal from './style';

function App() {
  return (
    <SGlobal>
      <h1>I'm an unstyled (... Or am I ?) main title</h1>
      <Test01 />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet
        reiciendis obcaecati enim doloremque voluptas magni quos reprehenderit.
        Nisi necessitatibus sit quasi velit est excepturi cum repellat qui,
        iusto tempora?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet
        reiciendis obcaecati enim doloremque voluptas magni quos reprehenderit.
        Nisi necessitatibus sit quasi velit est excepturi cum repellat qui,
        iusto tempora?
      </p>
      <Test01 />
      <Test01 />
    </SGlobal>
  );
}

export default App;
