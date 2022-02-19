import React from 'react';
import styles from '../../styles/Home.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footerStyles}>
            <p>© {new Date().getFullYear()} <a href="https://linktr.ee/kimcinco">KAC</a></p>
        </footer>
    );
};

export default Footer;