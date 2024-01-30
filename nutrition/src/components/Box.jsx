import React, { useState } from 'react';
import './Box.css';
import Calorie from './Calorie';

const Box = ({ food }) => {
  const [box, count] = useState(0);
  const [calorie, setCal] = useState(0);

  const diff = (e) => count(e.target.value);
  const submit = (e) => {
    e.def();
    setCal(food.cal * box);
  };
  const res = () => {
    count(0);
    setCal(0);
  };

  return (
  <div className="container">
    <div className="paper">
     <article className="important">
       <div className="important-l">
         <figure className="click">
            <img src={food.img} alt="Food" />
          </figure>
          </div>
          <div className="important-c">
            <div className="imp">
              <p>
                <b>{food.name}</b> <br />
                <small>{food.cal}</small>
              </p>
            </div>
          </div>
          <div className="important-r">
            <div className="increment">
              <div className="mast">
                <input
                  className="input"
                  type="number"
                  placeholder="Write number here"
                  onChange={diff}
                />
              </div>
              <div className="mast">
                <button onClick={submit} className="inf">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Calorie name={food.name} calorie={calorie} count={box} />
      <button className="res" onClick={res}>reset</button>
    </div>
  );
};

export default Box;