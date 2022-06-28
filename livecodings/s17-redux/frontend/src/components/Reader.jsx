import { useSelector } from "react-redux";

export default function Reader() {
  const { availables, favorite } = useSelector((state) => state.unicorn);

  return (
    <>
      <ul>
        {availables.map((oneUnicorn) => {
          return <li key={oneUnicorn}>{oneUnicorn}</li>;
        })}
      </ul>
      <p>Your favorite unicorn is {favorite || "not yet known to me"}</p>
    </>
  );
}
