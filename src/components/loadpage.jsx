import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import axios from 'axios';

const FoodRecipe = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({ hits: [] });

  const YOUR_APP_ID = '33790bbe';
  const YOUR_APP_KEY = '5cca26f9c89620baabc03705d2aab2d0';

  const ButtonClick = async (e) => {
    e.preventDefault();
    await axios(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(function (response) {
        // Axios automatically parses JSON response, no need to call response.json()
        return response.data; // Return the parsed data
      })
      .then(function (data) {
        setData(data); 
      setSearch("")
        // Update state with the fetched data
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className='form' id='form1'>
      <div className='form12'>
        <form>
          <h1>Gourmet Gallery</h1>
          <input
            type='text'
            className=' box'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Enter your fav food..'
          />
          <br />
          <button className='btn btn-danger button1' onClick={ButtonClick}>
            Find
          </button>
        </form>
      </div>
      <div className='component'>
        <div className='row'>
          {data.hits.map((item) => (
            <div className='col-md-4' key={item.recipe.uri}>
              <div className='card p-2 m-2'>
                <img src={item.recipe.image} className='card-img-top ' height='300' br="10px" alt='Recipe' />
                <div className='card-body'>
                  <dl>
                    <dd className='card-title' style={{"font-weight":"bold"}}>{item.recipe.label}</dd>
                    <dd style={{"color":"yellow"}}>Total calories: {Math.round(item.recipe.calories)} </dd>
                    <button className='card-footer btn btn-success mt-4 '>Buy</button>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;
