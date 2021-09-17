import React from 'react';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { GaleriaImagenes } from './GaleriaImagenes';
import { Iconos } from './Iconos';
import { NuestroMenu } from './NuestroMenu';
import { SobreNosotros } from './SobreNosotros';
import { Testimoniales } from './Testimoniales';

export const Inicio = () => {
    return (
        <>
            <header className="header-inicio">

                <Header 
                    texto="Disfruta una deliciosa taza de café"
                />

            </header>
            
            <main 
                className="contenedor contenido-principal"
            >
                <SobreNosotros />

                <Iconos />

                <GaleriaImagenes />

            </main>

            <NuestroMenu />

            <Testimoniales />

            <Footer />
        </>
    )
};
