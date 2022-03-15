import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
   const [category,setCategory] = useContext(CategoryContext)
    
     
    return (
        <div style={{border: '1px solid red',margin: '5px',padding: '5px'}}>
           <h1> this is Header: {category} </h1>
           <button onClick={() => setCategory(category +1 )  }>Increment</button>
        </div>
    );
};

export default Header;