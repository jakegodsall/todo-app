import React from 'react';

import LightCard from './UI/LightCard';

const TodoInput = () => {
    return (
        <LightCard>
            <input
                type='text'
                className='w-full h-full mx-8 focus:outline-none'
                placeholder='Create a new todo...'
            ></input>
            <button type='submit'>Submit</button>
        </LightCard>
    );
};

export default TodoInput;
