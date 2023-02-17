import React, { useState } from 'react';

import Header from '@/components/Header';
import TodoList from '@/components/TodoList';
import FilterBar from '@/components/FilterBar';

let DUMMY_DATA = [
    {
        id: 1,
        content: 'Complete online JavaScript course',
        complete: false,
    },
    {
        id: 2,
        content: 'Jog around the park 3x',
        complete: false,
    },
    {
        id: 3,
        content: '10 minutes meditation',
        complete: false,
    },
    {
        id: 4,
        content: 'Read for 1 hour',
        complete: false,
    },
    {
        id: 5,
        content: 'Pick up groceries',
        complete: false,
    },
    {
        id: 6,
        content: 'Complete Todo App on Frontend Mentor',
        complete: false,
    },
];

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState(DUMMY_DATA);

    const getSelectedHandler = (idOfSelected) => {
        setData((prevData) => {
            prevData = prevData.map((el) => {
                if (el.id === idOfSelected) {
                    return {
                        id: el.id,
                        content: el.content,
                        complete: !el.complete,
                    };
                } else {
                    return el;
                }
            });
            return prevData;
        });
    };

    const getDeletedHandler = (idOfDeleted) => {
        setData((prevData) => [
            ...prevData.filter((el) => parseInt(el.id) !== parseInt(idOfDeleted)),
        ]);
    };

    const getThemeHandler = () => {
        setDarkMode((prevState) => !prevState);
    };

    return (
        <div
            className={
                darkMode
                    ? 'w-full h-full flex flex-col items-center -z-10 bg-[#161722]'
                    : 'w-full h-full flex flex-col items-center bg-[#fafafa] -z-10'
            }
        >
            <Header darkMode={darkMode} getTheme={getThemeHandler} />
            <TodoList
                darkMode={darkMode}
                data={data}
                getSelected={getSelectedHandler}
                getDeleted={getDeletedHandler}
            />
            {darkMode ? (
                <div className='absolute top-0 w-full h-[25vh] bg-mobile-dark bg-no-repeat bg-cover lg:bg-desktop-dark'></div>
            ) : (
                <div className='absolute top-0 w-full h-[25vh] bg-mobile-light bg-no-repeat bg-cover lg:bg-desktop-light'></div>
            )}
            <FilterBar darkMode={darkMode} />
        </div>
    );
};

export default Home;
