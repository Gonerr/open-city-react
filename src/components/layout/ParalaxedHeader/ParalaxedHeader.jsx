import React from 'react';
import styles from './ParalaxedHeader.module.css'

const ParalaxedHeader = () => {
    window.addEventListener('scroll', e=>{
        document.body.style.cssText = '--scrollTop: ${this.scrollY} px'
    })

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

        </>
    );
};

export default ParalaxedHeader;