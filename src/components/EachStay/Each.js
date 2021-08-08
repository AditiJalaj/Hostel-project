import { useContext, useState } from "react";
import {CartVal} from '../../context/context'

const Each = ({ id, title, price, description, image}) => {

const [total,setTotal]=useContext(CartVal)

const [selected, setSelected] = useState(false);
const [count, setCount] = useState(1);

  const selectUnit=()=>{
    setSelected(true); 
    setCount(1)
    setTotal(pv=>pv+price)
  }

  return (
    <>
      <div className="stay-card">
        <div>
          <img src={image} alt="room picture" />
        </div>

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <h4>₹{price}/night</h4>
        </div>

        <div>
          { ((!selected || count<1) && <button 
            onClick={selectUnit} 
            className="select">Select Unit</button>) 
          }  

          {(selected && count>=1) && (
            <>
              <button onClick={()=>{setCount(pv=>pv-1); setTotal(pv=>pv-price)}}
              className="select">-</button>
              {count}
              <button onClick={()=>{setCount(pv=>pv+1); setTotal(pv=>pv+price)}}
              className="select">+</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Each;
