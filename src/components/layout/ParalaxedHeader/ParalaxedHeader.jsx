import React, { useEffect } from 'react';
import styles from './ParalaxedHeader.module.css';
import classNames from 'classnames';
import { gsap } from '../../../utils/gsap/gsap.min';
import { ScrollTrigger } from '../../../utils/gsap/ScrollTrigger.min';
import { ScrollSmoother } from '../../../utils/gsap/ScrollSmoother.min';
import NavbarCompact from '../navbarCompact/NavbarCompact';

import pic1 from '../../../data/img/Экотропа2.jpeg';
import pic2 from '../../../data/img/Грандмакет.jpeg';
import pic3 from '../../../data/img/pic3.jpeg';
import pic4 from '../../../data/img/Двор.jpeg';
// Регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const ParalaxedHeader = () => {
    useEffect(() => {
        function onEntry(entry) {
            entry.forEach((change) => {
                if (change.isIntersecting) {
                    change.target.classList.remove(styles.picture);
                    change.target.classList.add(styles.pictureShow);
                }
                // else{
                //     change.target.classList.remove(styles.pictureShow);
                //     change.target.classList.add(styles.picture);
                // }
            });
        }


        const handleScroll = () => {
            document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
        };
        window.addEventListener('scroll', handleScroll);

        // Инициализация ScrollSmoother
        const smoother = ScrollSmoother.create({
            wrapper: '#wrapper', // селектор обертки, внутри которой будут работать анимации
            content: '#content', // селектор контента
            smooth: 1.5, // скорость сглаживания
            effects: true, // позволяет включать эффекты параллакса и другие
        });

        // Настройка ScrollTrigger для каждой секции
        const sections = gsap.utils.toArray('.section'); // Обращаемся к классу 'section'
        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                snap: {
                    snapTo: 1 / (sections.length - 1), // Привязываемся к каждой секции
                    duration: 0.7, // Длительность анимации перехода
                    ease: 'power1.inOut',
                },
                markers: true,
            });
        });

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
            smoother.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            window.removeEventListener('scroll', handleScroll);

            observer.disconnect();
        };
    }, []);

    return (
        <div id="wrapper">
            <div id="content">
                <div className={`${styles.mainHeader} section`}> {/* Добавляем класс 'section' */}
                    <div className={styles.layers}>
                        <NavbarCompact />
                        <div className={styles.header}>
                            <div className={styles.title}>Санкт-Петербург</div>
                        </div>
                        <div className={classNames(styles.layer, styles.layer_base)} />
                        <div className={classNames(styles.layer, styles.layer_front)} />
                    </div>
                </div>

                <div className={`${styles.second_container} section`}> {/* Добавляем класс 'section' */}
                    <div className={styles.second_container__content}>
                        <h2 className={styles.second_container__header}>Начни путешествие с нами</h2>
                        <div className={styles.second_container__pictures}>
                            <img className={`${styles.picture} picture`} src={pic1}/>
                            <img className={`${styles.picture} picture`} src={pic3}/>
                            <img className={`${styles.picture} picture`} src={pic4}/>
                            <img className={`${styles.picture} picture`} src={pic2}/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.third_container} section`}> {/* Добавляем класс 'section' */}
                    <div className={styles.third_container__content}>
                        <h2 className={styles.third_container__header}>To be continued</h2>
                        <p className={styles.third_container__paragraph}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!
                        </p>
                    </div>
                    <div className={styles.copy}>© WebDesign Master</div>
                </div>
            </div>
        </div>
    );
};

export default ParalaxedHeader;
