import React from 'react';

const LightCard = (props) => {
    return (
        <div className='bg-[#fff] w-full m-4 py-4 flex justify-center shadow-lg'>
            {props.children}
        </div>
    );
};

export default LightCard;
