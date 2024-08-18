import React, {useEffect} from 'react';
import styles from "./Slider.module.css";
import pic1 from "../../../data/img/Экотропа2.jpeg";
import pic3 from "../../../data/img/pic3.jpeg";
import pic4 from "../../../data/img/Двор.jpeg";
import pic2 from "../../../data/img/Грандмакет.jpeg";

const Slider = () => {

    useEffect(() => {
        // Анимация картинок
        function onEntry(entry) {
            entry.forEach((change) => {
                if (change.isIntersecting) {
                    change.target.classList.remove(styles.picture);
                    change.target.classList.add(styles.pictureShow);
                }
                else{
                    change.target.classList.remove(styles.pictureShow);
                    change.target.classList.add(styles.picture);
                }
            });
        }

        // Настройка IntersectionObserver
        let options = {
            threshold: [0.5],
        };
        let observer = new IntersectionObserver(onEntry, options);

        const elements = document.querySelectorAll('.picture');
        if (elements.length > 0) {
            elements.forEach((elm) => observer.observe(elm));
        } else {
            console.warn('No elements found with class "picture"');
        }
        // Очистка анимаций при размонтировании компонента
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <div className={`${styles.container} section`}> {/* Добавляем класс 'section' */}
                <div className={styles.content}>
                    <h2 className={styles.header}>Начни путешествие с нами</h2>
                    <div className={styles.pictures}>
                        <img className={`${styles.picture} picture`} src={pic1}/>
                        <img className={`${styles.picture} picture`} src={pic3}/>
                        <img className={`${styles.picture} picture`} src={pic4}/>
                        <img className={`${styles.picture} picture`} src={pic2}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;