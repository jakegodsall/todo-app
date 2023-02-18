import React from 'react';

import TodoItem from './TodoItem';
import DarkCard from './UI/DarkCard';
import LightCard from './UI/LightCard';

const TodoList = (props) => {
    const getSelectedHandler = (idOfSelected) => {
        props.getSelected(idOfSelected);
    };

    const getDeletedHandler = (idOfDeleted) => {
        props.getDeleted(idOfDeleted);
    };

    return (
        <div className='flex flex-col relative z-10 mt-40 mx-5 rounded-md'>
            {props.darkMode ? (
                <DarkCard>
                    <ul>
                        {props.data.map((el, idx) => {
                            return (
                                <li className='' key={idx}>
                                    <TodoItem
                                        complete={el.complete}
                                        darkMode={props.darkMode}
                                        getSelected={getSelectedHandler}
                                        getDeleted={getDeletedHandler}
                                        id={el.id}
                                    >
                                        {el.content}
                                    </TodoItem>
                                </li>
                            );
                        })}
                    </ul>
                </DarkCard>
            ) : (
                <LightCard>
                    <ul>
                        {props.data.map((el, idx) => {
                            return (
                                <li className='' key={idx}>
                                    <TodoItem
                                        complete={el.complete}
                                        darkMode={props.darkMode}
                                        getSelected={getSelectedHandler}
                                        getDeleted={getDeletedHandler}
                                        id={el.id}
                                    >
                                        {el.content}
                                    </TodoItem>
                                </li>
                            );
                        })}
                    </ul>
                </LightCard>
            )}
        </div>
    );
};

export default TodoList;
