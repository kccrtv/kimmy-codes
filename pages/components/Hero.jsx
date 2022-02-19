import React from 'react';
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import avatar from '../../public/images/kim-cinco.jpeg'

const Hero = () => {
    return (
        <main className={styles.heroStyles}>
            <h1>Hi, I'm Kim.</h1>
            <p>I design and build software.</p>
            <br/>
            <Image src={avatar} alt="kim cinco" height={320} width={340}/>
            <br/>
            <div>
                <a className={styles.lite} href="https://www.linkedin.com/in/kimcinco/" target="_blank" >LinkedIn</a>
                <a className={styles.lite} href="mailto:hey@kimmy.codes"  >Email</a>
            </div>
        </main>
    );
};

export default Hero;