import type { Dog } from '../../features/dogs/dog-slice';
import './DogListItem.css';

interface DogListItemProps {
  dog: Dog;
  onSelectDog: (id: number) => void;
}

const DogListItem: React.FC<DogListItemProps> = ({ dog, onSelectDog }) => {
  return (
    <>
      <div
        className="dog-list-item"
        onClick={() => onSelectDog(dog.id)}
      >
        <div className="header-container">
          <img
            src={dog.image.url}
            alt={dog.name}
            height={75}
          />
          <span>{dog.name}</span>
        </div>
        <p>{dog.temperament}</p>
      </div>
    </>
  );
};

export default DogListItem;
