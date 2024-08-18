import React from 'react';
import styles from "./infoSection.module.css";

const InfoSection = () => {
    return (
        <div>
            <div className={`${styles.container} section`}>
                <div className={styles.content}>
                    <h2 className={styles.header}>Продолжение следует</h2>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos
                        facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti
                        mollitia expedita sapiente cum rerum, ut dicta laboriosam!
                    </p>
                </div>
                <div className={styles.copy}>© WebDesign Master</div>
            </div>
        </div>
    );
};

export default InfoSection;