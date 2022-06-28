import { useState } from "react";
import { useDispatch } from "react-redux";

const mockUnicorns = [
  "Cherry Treats",
  "Lucky Star",
  "Love Melody",
  "Daisy Sweet",
  "Sunshine Blue",
];

export default function Writer() {
  const [tmpFavUnicorn, setTmpFavUnicorn] = useState("");
  const dispatch = useDispatch();

  const hLoad = () => {
    dispatch({
      type: "UNICORN_SETAVAILABLES",
      payload: mockUnicorns,
    });
  };
  const hReset = () => {
    dispatch({
      type: "UNICORN_RESET",
    });
  };
  const hFluke = () => {
    dispatch({
      type: "UNICORN_HACK",
      payload: [...mockUnicorns, "Blue Berry", "Rasp Berry", "Huckle Berry"],
    });
  };
  const hChange = (evt) => {
    setTmpFavUnicorn(evt.target.value);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "UNICORN_SETFAV",
      payload: tmpFavUnicorn,
    });
  };

  return (
    <>
      <button type="button" onClick={hLoad}>
        Load some unicorns
      </button>
      <br />
      <button type="button" onClick={hReset}>
        Reset everything
      </button>
      <br />
      <button type="button" onClick={hFluke}>
        Try to sneak in some corrupted data ☠️
      </button>
      <br />
      <form onSubmit={hSubmit}>
        <input type="text" value={tmpFavUnicorn} onChange={hChange} />
        <input type="submit" value="THIS IS MY FAV!!!" />
      </form>
    </>
  );
}
