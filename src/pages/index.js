import React, { useState } from 'react';

import TodoList from '@/components/TodoList';

let DUMMY_DATA = [
    {
        id: 1,
        content: 'Complete online JavaScript course',
        complete: true,
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

    const getSelectedHandler = (idOfSelected) => {
        console.log('from index.js', idOfSelected);

        DUMMY_DATA = DUMMY_DATA.map((el) => {
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

        console.log(DUMMY_DATA);
    };

    return (
        <div className={darkMode ? 'w-full h-full -z-10' : 'w-full h-full bg-[#fafafa] -z-10'}>
            <TodoList darkMode={darkMode} data={DUMMY_DATA} getSelected={getSelectedHandler} />
            {darkMode ? (
                <div className='absolute top-0 w-full h-[25vh] bg-mobile-dark bg-no-repeat bg-cover lg:bg-desktop-dark'></div>
            ) : (
                <div className='absolute top-0 w-full h-[25vh] bg-mobile-light bg-no-repeat bg-cover lg:bg-desktop-light'></div>
            )}
        </div>
    );
};

export default Home;
