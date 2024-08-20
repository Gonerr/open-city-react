import React, {useEffect, useState} from 'react';
import styles from "./Slider.module.css";
import pic1 from "../../../data/img/Экотропа2.jpeg";
import pic3 from "../../../data/img/pic3.jpeg";
import pic4 from "../../../data/img/Двор.jpeg";
import pic2 from "../../../data/img/Грандмакет.jpeg";
import Image from "../../shared/Image/Image";

const Slider = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [pic1, pic3, pic4, pic2];
    // useEffect(() => {
    //     // Анимация картинок
    //     function onEntry(entry) {
    //         entry.forEach((change) => {
    //             if (change.isIntersecting) {
    //                 change.target.classList.remove(styles.picture);
    //                 change.target.classList.add(styles.pictureShow);
    //             }
    //             else{
    //                 change.target.classList.remove(styles.pictureShow);
    //                 change.target.classList.add(styles.picture);
    //             }
    //         });
    //     }
    //
    //     // Настройка IntersectionObserver
    //     let options = {
    //         threshold: [0.5],
    //     };
    //     let observer = new IntersectionObserver(onEntry, options);
    //
    //     const elements = document.querySelectorAll('.picture');
    //     if (elements.length > 0) {
    //         elements.forEach((elm) => observer.observe(elm));
    //     } else {
    //         console.warn('No elements found with class "picture"');
    //     }
    //     // Очистка анимаций при размонтировании компонента
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);

    return (
        <div>
            <div className={`${styles.container} section`}> {/* Добавляем класс 'section' */}
                <div className={styles.content}>
                    <h2 className={styles.header}>Начни своё путешествие</h2>
                    <h3 className={styles.capture}>Мы собрали информацию о всех лучших местах Санкт-Петербурга в одном
                        месте</h3>
                    <div className={styles.pictures}>
                        {images.map((src, index) => {
                            let position = '';
                            if (hoveredIndex === index) {
                                position = 'center';
                            } else if (hoveredIndex !== null) {
                                position = index < hoveredIndex ? 'left' : 'right';
                            }

                            return (
                                <Image
                                    key={index}
                                    src={src}
                                    index={index}
                                    position={position}
                                    setHoveredIndex={setHoveredIndex}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;