import React from 'react';
import { Header } from '../templates/Header';

import imagen from '../../img/nosotros_sidebar.jpg';
import { Footer } from '../templates/Footer';

export const Nosotros = () => {
    return (
        <>
            <header className="header-nosotros">

                <Header 
                    texto="Descrubre quienes somos"
                />

            </header>

            <main className="contenedor contenido-principal">
                <h2> 
                    <span> Conoce mas </span> 
                    sobre nosotros 
                </h2>

                <div className="contenido-nosotros">
                    <div className="imagen">
                        <img 
                            src={ imagen } 
                            alt="imagen cafeteria"
                        />
                    </div>

                    <div className="texto">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis repellendus provident consequatur et sequi totam cupiditate quia! Delectus nam omnis perspiciatis incidunt possimus dolores suscipit blanditiis, dolorem quidem. Asperiores, nisi! 
                        </p>

                        <p className="excelente-sabor"> Excelente Sabor! </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptas. Molestias aut at facilis adipisci temporibus atque provident consectetur quod vitae alias dolor dicta a neque voluptate debitis, id unde?
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
};
