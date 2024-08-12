import React, {useEffect} from 'react';
import styles from './ParalaxedHeader.module.css'
import classNames from "classnames";
import { gsap } from '../../../utils/gsap/gsap.min';
import { ScrollTrigger } from '../../../utils/gsap/ScrollTrigger.min';
import { ScrollSmoother } from '../../../utils/gsap/ScrollSmoother.min';
import NavbarCompact from "../navbarCompact/NavbarCompact";

// Регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


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

            // // Инициализация других анимаций
            // gsap.to('.some-element', {
            //     scrollTrigger: {
            //         trigger: '.some-element',
            //         start: 'top center',
            //         end: 'bottom center',
            //         scrub: true,
            //     },
            //     x: 100,
            //     opacity: 0,
            // });


            // Cleanup function to remove event listener when component unmounts
            return () => {
                // Очистка анимаций при размонтировании компонента
                smoother.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                window.removeEventListener('scroll', handleScroll);
            };



        }, []);


    return (
        <div id={"wrapper"}>
            <div id={"content"}>

                <div className={styles.mainHeader}>
                    <div className={styles.layers}>

                        <NavbarCompact/>

                        <div className={styles.header}>
                            {/*<div className={styles.caption}>Открой</div>*/}
                            <div className={styles.title}>Санкт-Петербург</div>
                        </div>
                        <div className={classNames(styles.layer, styles.layer_base)}/>
                        <div className={classNames(styles.layer, styles.layer_front)}/>
                    </div>
                </div>

                <div className={styles.second_container}>
                    <div className={styles.second_container__content}>
                        <h2 className={styles.second_container__header}>To be continued</h2>
                        <p className={styles.second_container__paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora
                            esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta
                            laboriosam!</p>
                    </div>
                    <div className={styles.copy}>© WebDesign Master</div>
                </div>

            </div>
        </div>
    );
};

export default ParalaxedHeader;