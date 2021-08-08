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

    const [showCalendar,setShowCalendar]=useState(false)
    const [startValue,onChangeStart] = useState(new Date());
    const [endValue,onChangeEnd]=useState(new Date());  //use next day here later

    //need differnce between start date and end date and then calculate total and send to cart
    //difference between start date and end date >=1  logic is startValue.getDate() //8 , endValue.getDate() //8 
    //but by default charge for 1 day if diff=0

    let range=endValue.getDate()-startValue.getDate();

    useEffect(()=>{
       if(range===0){
           range=1
       }
       setTotal(total*range)
       console.log('render')
       //need the updated total to render in cart also 
    },[range])
    
    
    const [data,setData]=useState([])

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

       <Cart/>
       </div>
        </> );
}
 
export default Delhi;