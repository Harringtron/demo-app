import type { Dog } from '../../features/dogs/dog-slice';
import DogListItem from './DogListItem';
import './DogList.css';

interface DogListProps {
  dogs: Dog[];
  onSelectDog: (id: number) => void;
}

const DogList: React.FC<DogListProps> = ({ dogs, onSelectDog }) => {
  const mappedDogs = dogs.map((dog) => {
    return (
      <DogListItem
        key={dog.id}
        dog={dog}
        onSelectDog={onSelectDog}
      />
    );
  });
  return (
    <>
      <div className="dog-list-container">{mappedDogs}</div>
    </>
  );
};

export default DogList;
