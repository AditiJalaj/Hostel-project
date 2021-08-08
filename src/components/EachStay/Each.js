import { useState } from "react";

const Each = ({ id, title, price, description, image ,selected,
  setSelected,
  count,
  setCount}) => {
  //pass count and selected from delhi.js and from delhi component also to Cart

  const [selectedBtn,setSelectedBtn]=useState(null)

  const selectUnit=()=>{
    setSelectedBtn(id)
    console.log('id is',id);
    setSelected(true); 
    setCount(1)
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
              <button onClick={()=>{setCount(pv=>pv-1)}}
              className="select">-</button>
              {count}
              <button onClick={()=>{setCount(pv=>pv+1)}}
              className="select">+</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Each;
