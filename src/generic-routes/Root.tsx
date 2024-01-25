import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setDogList, selectDog } from '../features/dogs/dog-slice';
import { Link } from 'react-router-dom';
import './Root.css';
import { useFetchBreedsQuery } from '../features/dogs/api-slice';
import DogList from '../components/DogList/DogList';
import type { Dog } from '../features/dogs/dog-slice';
import camelCaseKeys from 'camelcase-keys'; // TODO: probably a better way to do this. hmmm

function Root() {
  const [numDogs, setNumDogs] = useState(5);
  // TODO
  // const [currentPage, setCurrentPage] = useState(1);
  const selectedDog = useAppSelector((state) => state.dog.selectedDog);
  const dispatch = useAppDispatch();

  const { data = [] } = useFetchBreedsQuery(numDogs); // isFetching in response for loading spinners
  const dogList: Dog[] = camelCaseKeys(data, { deep: true });
  dispatch(setDogList(dogList));

  function handleSelectDog(dogId: number) {
    dispatch(selectDog(dogId));
  }

  return (
    <>
      <div className="container">
        <h1>
          {selectedDog ? `Selected dog: ${selectedDog.name}` : 'Select a dog!'}
        </h1>
        {selectedDog && (
          <Link to={`/dogs/${selectedDog.id}`}>View Doggy Details</Link>
        )}
        <DogList
          dogs={dogList}
          onSelectDog={handleSelectDog}
        />
        <div>
          Dogs to fetch &nbsp;
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Root;
