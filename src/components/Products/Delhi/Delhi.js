import './Delhi.css'
import { useState,useEffect } from 'react';
import Each from '../../EachStay/Each';
import Cart from './Cart';

const Delhi = () => {

    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(1);
  
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('/delhi.json')
        .then((res)=>{return res.json()})
        .then((d)=>setData(d))
    })
    
    return ( <>
        <div >
       <img src='https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg' alt='delhi'/>
       <h1>Delhi</h1>
       
       <section className="bio">
       BIO ABOUT ZOSTEL DELHI
       </section>

       <section className='amenities'>
       <h3>Amenities</h3> 
       <ul>
       <li>Hot water</li>
       <li>Wifi</li>
       <li>Complimentary breakfast</li>
       <li>Air-conditioned</li>
       </ul>
       </section>
       
       <section>
       <h1>Book your stay </h1>
       <h3>Select from a range of beautiful rooms</h3>
       </section>
       
       <section>
       {data!==undefined && data.length>0 &&
        data.map((i)=>{
            return(
                <Each key={i.id} {...i} 
                 selected={selected}
                 setSelected={setSelected}
                 count={count}
                 setCount={setCount}/>
            )
        })
    }
       </section>

       <Cart/>
       </div>
        </> );
}
 
export default Delhi;