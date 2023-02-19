import React from 'react';

import LightCard from './UI/LightCard';

const TodoInput = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enteredValue = e.currentTarget.elements.todo.value;
        props.newTodo(enteredValue);
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
