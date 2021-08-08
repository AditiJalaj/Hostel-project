import './Delhi.css'
import { useState,useEffect } from 'react';
import Each from '../../EachStay/Each';
import Cart from './Cart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useContext } from "react";
import { CartVal } from "../../../context/context";


const Delhi = () => {

    //use total from context here
    const [total, setTotal] = useContext(CartVal);

    const [initial_total,setInitalTotal]=useState(total)
    const [showCalendar,setShowCalendar]=useState(false)
    const [startValue,onChangeStart] = useState(new Date());
    const [endValue,onChangeEnd]=useState(new Date());  //use next day here later

    const [data,setData]=useState([])

    let range=endValue.getDate()-startValue.getDate();
    //console.log(range*total)

    console.log('total ',total)
   
    useEffect(()=>{
       if(range===0){
           range=1
       }
       //there is issue with how total is being calculated here
       setTotal(initial_total*range) 
       console.log('render')

       //need the updated total to render in cart also , how to watch for total dependency
    },[range])
    

    
    useEffect(()=>{
        fetch('/delhi.json')
        .then((res)=>{return res.json()})
        .then((d)=>setData(d))
    },[])
 
    // console.log(`startValue is ${startValue} and endvalue is ${endValue}`)

    return ( <>
        <div >
       <img src='https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg' alt='delhi'/>
       <h1>Delhi</h1>
       
       <section className="bio">
       insert some bio about zostel delhi to be on right
       </section>

       <section className='amenities'>
       <h3>Amenities - this should go beside bio</h3> 
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

       {/* have calendar here, have dates between selected , range */}
       <button className="select" onClick={()=>{setShowCalendar(!showCalendar)}}>Select Date </button>
       
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
       
       {showCalendar && <Calendar 
        onChange={onChangeStart}
        value={startValue>=endValue?endValue:startValue}/>}
       
       {showCalendar && <Calendar onChange={onChangeEnd} value={endValue}/>}
        </div>
       
       <section>
       {data!==undefined && data.length>0 &&
        data.map((i)=>{
            return(
                <Each key={i.id} {...i} 
               />
            )
        })
    }
       </section>

       {/* pass range and startdate to cart as props*/}
       <Cart/>
       </div>
        </> );
}
 
export default Delhi;