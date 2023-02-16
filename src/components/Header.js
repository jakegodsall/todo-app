import React, { useState } from 'react';
import Image from 'next/image';

import MoonIcon from '../../public/images/icon-moon.svg';
import SunIcon from '../../public/images/icon-sun.svg';

const Header = (props) => {
    const onClickHandler = () => {
        props.getTheme();
    };

    return (
        <header className='relative z-10 w-full flex justify-between items-center'>
            <h1
                className={
                    props.darkMode
                        ? 'uppercase text-3xl tracking-widest font-bold'
                        : 'uppercase text-3xl tracking-[1rem] font-bold text-[#fff]'
                }
            >
                todo
            </h1>
            {props.darkMode && <Image src={SunIcon} onClick={onClickHandler} />}
            {!props.darkMode && <Image src={MoonIcon} onClick={onClickHandler} />}
        </header>
    );
};

export default Header;
