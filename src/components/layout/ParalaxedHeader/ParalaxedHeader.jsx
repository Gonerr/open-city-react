import React, { useEffect } from 'react';
import styles from './ParalaxedHeader.module.css';
import classNames from 'classnames';
import { gsap } from '../../../utils/gsap/gsap.min';
import { ScrollTrigger } from '../../../utils/gsap/ScrollTrigger.min';
import { ScrollSmoother } from '../../../utils/gsap/ScrollSmoother.min';
import NavbarCompact from '../navbarCompact/NavbarCompact';

import Slider from "../Slider/Slider";
// Регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const ParalaxedHeader = () => {
    useEffect(() => {
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

        return () => {
            smoother.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            window.removeEventListener('scroll', handleScroll);
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

                <Slider/>

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
