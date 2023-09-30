import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Element = () => {
  const params = useParams();
  const [ff, setFf] = useState({});

  useEffect(() => {
    try {
      const getElement = async () => {
        const resolve = await fetch(
          `https://rickandmortyapi.com/api/character/${params.Id}`
        );
        const result = await resolve.json();
        setFf(result);
      };
      getElement();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div style={{ backgroundColor: 'gray', padding: '50px', color: 'white' }}>
        <img src={ff.image} alt={ff.name}></img>
        <div>{ff.name}</div>
        <div>{ff.gender}</div>
        <div
          style={
            ff.status === 'Dead'
              ? { backgroundColor: 'red' }
              : { backgroundColor: 'green' }
          }
        >
          {ff.status}
        </div>
        <div>{ff.species}</div>
      </div>
      <Link to="/">
        <h2>Go to back</h2>
      </Link>
    </>
  );
};
