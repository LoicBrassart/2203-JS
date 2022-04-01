import SCard from './style.jsx';

export default function Card(props) {
  function cleanName() {
    let fileName = null;
    if (props.name.includes('^')) {
      fileName = 'l';
    } else {
      fileName = '1';
    }
    const name = props.name
      .toLowerCase()
      .replace("'", '')
      .replace('^', '')
      .replace(' ', '');
    return `/img/${name}/${fileName}.png`;
  }

  return (
    <SCard bg={cleanName()}>
      <div></div>
      <section>
        <h2>{props.name}</h2>
        <ul>
          <li>{props.species}</li>
          <li>{props.weapon}</li>
          <li>{props.attribute}</li>
        </ul>
      </section>
    </SCard>
  );
}
