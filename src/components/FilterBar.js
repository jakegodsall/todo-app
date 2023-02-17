import React from 'react';

import LightCard from './UI/LightCard';
import DarkCard from './UI/DarkCard';

const FilterBar = (props) => {
    return (
        <React.Fragment>
            {props.darkMode ? (
                <DarkCard>
                    <div>
                        <ul className='flex w-full'>
                            <li>All</li>
                            <li>Active</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                </DarkCard>
            ) : (
                <LightCard>
                    <div>
                        <ul className='flex w-full'>
                            <li>All</li>
                            <li>Active</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                </LightCard>
            )}
        </React.Fragment>
    );
};

export default FilterBar;
