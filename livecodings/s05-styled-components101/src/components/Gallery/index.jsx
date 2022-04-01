import SGallery from './style';
import Card from '../Card';
import characters from '../../data';

export default function Gallery() {
  return (
    <SGallery>
      {characters.map((character) => {
        return (
          <Card
            key={character.name}
            name={character.name}
            species={character.species}
            weapon={character.weapon}
            attribute={character.attribute}
          />
        );
      })}
    </SGallery>
  );
}
