import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Elements = () => {
  const [charackers, setCharackters] = useState([]);

  const navigate = useNavigate();
  const goToElement = (charackter) => {
    if (charackter.species === 'Human') {
      navigate(`/${charackter.id}`);
    }else{
      navigate(`/modal`);
    }
  };

  useEffect(() => {
    const getZapros = async () => {
      const resolve = await fetch(`https://rickandmortyapi.com/api/character`);
      const result = await resolve.json();
      setCharackters(result.results);
    };
    getZapros()
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'gray' }}>
      {charackers?.map((charackter) => {
        return (
          <div
            onClick={() => goToElement(charackter)}
            key={charackter.id}
            style={
              charackter.species === 'Human'
                ? {
                    backgroundColor: 'orange',
                    width: '300px',
                    margin: '5px',
                    color: 'white',
                    border: '2px solid white',
                    overflow: 'hidden',
                  }
                : {
                    backgroundColor: 'black',
                    width: '300px',
                    margin: '5px',
                    color: 'white',
                    border: '2px solid white',
                    overflow: 'hidden',
                  }
            }
          >
            <img src={charackter.image} alt="" />
            <div>{charackter.name}</div>
            <div>{charackter.gender}</div>
            <div
              style={
                charackter.status === 'Dead'
                  ? { backgroundColor: 'red' }
                  : { backgroundColor: 'green' }
              }
            >
              {charackter.status}
            </div>
            <div>{charackter.species}</div>
          </div>
        );
      })}
    </div>
  );
};
