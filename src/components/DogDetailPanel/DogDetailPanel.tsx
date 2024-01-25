import type { Dog } from '../../features/dogs/dog-slice';
import './DogDetailPanel.css';

const DogDetailPanel: React.FC<{ dog: Dog }> = ({ dog }) => {
  console.log({ dog });
  return (
    <>
      <div className="dog-list-item dog-details-view">
        <div className="header-container">
          {dog.image && (
            <img
              src={dog.image.url}
              alt={dog.name}
              height={300}
            />
          )}

          <div className="dog-details-information">
            <h3>{dog.name}</h3>
            <p>
              <b>Bred for: </b>
              {dog.bredFor}
            </p>
            <p>
              <b>Temperament: </b>
              {dog.temperament}
            </p>
            <p>
              <b>Origin: </b>
              {dog.origin}
            </p>
            <p>
              <b>Life span: </b>
              {dog.lifeSpan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogDetailPanel;
