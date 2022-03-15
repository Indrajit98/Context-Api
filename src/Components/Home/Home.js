import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{border: '1px solid red',margin: '5px',padding: '5px'}}>     
            <h2>This is Home:{category} </h2>
        </div>
    );
};

export default Home;