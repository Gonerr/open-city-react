import React, { useEffect } from 'react';

import { gsap } from '../../../utils/gsap/gsap.min';
import { ScrollTrigger } from '../../../utils/gsap/ScrollTrigger.min';
import { ScrollSmoother } from '../../../utils/gsap/ScrollSmoother.min';

import Slider from "../Slider/Slider";
import ParalaxedHero from "./ParalaxedHero/ParalaxedHero";
import InfoSection from "./InfoSection/infoSection";

// Регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const HomePage = () => {
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
                end: 'top top',
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
                <ParalaxedHero/>
                <Slider/>
                <InfoSection/>
            </div>
        </div>
    );
};

export default HomePage;
