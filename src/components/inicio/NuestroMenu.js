import React from 'react';
import { MenuCafe } from './MenuCafe';
import { MenuComida } from './MenuComida';

export const NuestroMenu = () => {
    return (
        <section className="nuestro-menu">
            <h2 className="heading-blanco"> 
                <span> Nuestro delicioso </span> 
                Menú 
            </h2>

            <div className="contenedor grid-menu">

                <MenuCafe />

                <MenuComida />
            </div>
        </section>
    )
};
