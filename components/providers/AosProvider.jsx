'use client';
import AOS from 'aos';
    
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';
    
const AOSProvider = ({ children }) => {
   useEffect(() => {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });   }, []);

   return <Fragment>{children}</Fragment>;
};

 export default AOSProvider;
