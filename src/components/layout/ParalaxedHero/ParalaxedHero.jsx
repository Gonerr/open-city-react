import React from 'react';
import styles from './ParalaxedHero.module.css';
import classNames from 'classnames';
import NavbarCompact from '../navbarCompact/NavbarCompact';


const ParalaxedHero = () => {
    return (
        <div>
            <div className={`${styles.mainHeader} section`}>
                <div className={styles.layers}>
                    <NavbarCompact />
                    <div className={styles.header}>
                        <div className={styles.title}>Санкт-Петербург</div>
                    </div>
                    <div className={classNames(styles.layer, styles.layer_base)} />
                    <div className={classNames(styles.layer, styles.layer_front)} />
                </div>
            </div>
        </div>
    )
};

export default ParalaxedHero;
