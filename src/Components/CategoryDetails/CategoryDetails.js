import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const [category,setCategory] = useContext(CategoryContext)

    return (
        <div  style={{padding: '5px'}}>
            <h4>This is CategoryDetails: {category}</h4>
            <button onClick={() => setCategory(category +1)}>Increment</button>
        </div>
    );
};

export default CategoryDetails;