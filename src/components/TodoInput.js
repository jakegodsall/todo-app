import React from 'react';

import LightCard from './UI/LightCard';

const TodoInput = (props) => {
    const onSubmitHandler = (e) => {
        // prevent default form behaviour
        e.preventDefault();
        // pass entered value to parent
        props.newTodo(e.currentTarget.elements.todo.value);
        // reset entered value
        e.currentTarget.elements.todo.value = '';
    };

    return (
        <LightCard>
            <form className='flex justify-between w-full mx-8' onSubmit={onSubmitHandler}>
                <input
                    name='todo'
                    type='text'
                    className='w-full h-full mx-8 focus:outline-none'
                    placeholder='Create a new todo...'
                />
                <input type='submit' />
            </form>
        </LightCard>
    );
};

export default TodoInput;
