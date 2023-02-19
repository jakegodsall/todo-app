import React from 'react';

const LightCard = (props) => {
    return (
        <div className='bg-[#fff] w-[80%] m-4 py-4 flex justify-center shadow-md rounded-lg'>
            {props.children}
        </div>
    );
};

export default LightCard;
