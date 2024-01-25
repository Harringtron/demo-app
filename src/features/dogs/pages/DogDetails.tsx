import { useAppSelector } from '../../../app/hooks'; // is there shorthand for root of project?
import { useFetchBreedQuery } from '../api-slice';
import DogDetailPanel from '../../../components/DogDetailPanel/DogDetailPanel';
import type { Dog } from '../dog-slice';
import camelCaseKeys from 'camelcase-keys';

const DogList: React.FC<object> = () => {
  // state lost on refresh (goodbye image), maybe loaders solve this issue?
  const selectedDog = useAppSelector((state) => state.dog.selectedDog) || {
    id: 1,
  };

  const { data = {} } = useFetchBreedQuery(selectedDog.id);
  // TODO: figure out correct way to handle "selectedDog may be undefined"
  const dog: Dog = { ...camelCaseKeys(data, { deep: true }), ...selectedDog };

  return (
    <>
      <DogDetailPanel dog={dog} />
    </>
  );
};

export default DogList;
