import React, {useEffect} from 'react';
import styles from './ParalaxedHeader.module.css'

const ParalaxedHeader = () => {
        useEffect(() => {
            const handleScroll = () => {
                document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
            };
            window.addEventListener('scroll', handleScroll);

            // Cleanup function to remove event listener when component unmounts
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);


    return (
        <>
            <div className={styles.layers}>
                <div className={styles.header}>
                    <div className={styles.caption}>Открой</div>
                    <div className={styles.title}>Санкт-Петербург</div>
                </div>
                <div className={styles.layer_base}/>
                <div className={styles.layer_front}/>
            </div>
            <div className={styles.just}>

            </div>
        </>
    );
};

export default ParalaxedHeader;