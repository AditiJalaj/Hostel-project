import { createContext,useState } from "react";

const CartVal=createContext()


const Context = (props) => {

   
    const [total,setTotal]=useState(0)
   //LATER - have number of rooms state here to be going to each and cart
    
    return ( 
        <CartVal.Provider
        value={[total,setTotal]}>
        {props.children}
        </CartVal.Provider>

     );
}
 
export default Context;
export {CartVal}