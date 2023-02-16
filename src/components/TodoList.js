import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {
    const getSelectedHandler = (idOfSelected) => {
        props.getSelected(idOfSelected);
    };

    return (
        <div className='flex flex-col relative z-10 bg-[#fff] mt-40 mx-5 rounded-md'>
            <ul>
                {props.data.map((el, idx) => {
                    return (
                        <li className='' key={idx}>
                            <TodoItem
                                complete={el.complete}
                                darkMode={props.darkMode}
                                getSelected={getSelectedHandler}
                                id={el.id}
                            >
                                {el.content}
                            </TodoItem>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
