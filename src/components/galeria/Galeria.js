import React from 'react';
import { GaleriaImagenes } from '../inicio/GaleriaImagenes';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';


export const Galeria = () => {
    return (
        <>
            <header className="header-galeria">
                <Header 
                    texto="Dale un vistazo a nuestro trabajo"
                />
            </header>

            <main className="contenedor contenido-principal text-center">

                <GaleriaImagenes />
            </main>

            <Footer />
        </>
    )
};
