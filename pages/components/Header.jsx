import styles from '../../styles/Home.module.scss'
import React from 'react';
import { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import scorpion from '../../public/images/scorpion.svg'
import Image from 'next/image'

const Header = () => {
	const darkmode = useDarkMode(true);

    return (
        <div id='navbar' className={styles.headerStyles}>
            <figure>
                <Image src={scorpion} alt="scorpion emoji" width="50" height="50"/>
            </figure>
            <button className='button' onClick={darkmode.toggle}>
				☀️ 🌒
			</button>
        </div>
    );
};

export default Header;