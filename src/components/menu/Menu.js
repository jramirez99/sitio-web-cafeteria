import React from 'react';
import { Header } from '../templates/Header';

import imagen from '../../img/cafe.jpg';
import { NuestroMenu } from '../inicio/NuestroMenu';
import { Footer } from '../templates/Footer';

export const Menu = () => {
    return (
        <>
            <header className="header-menu">

                <Header 
                    texto="Disfruta nuestro delicioso menú"
                />
            </header>

            <main className="contenedor contenido-principal separacion">
                <h2> 
                    <span> Utilizamos los </span> 
                    mejores ingredientes 
                </h2>

                <div className="contenido-menu">
                    <div className="texto">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate itaque ratione doloremque voluptatum similique nulla quibusdam non quaerat, necessitatibus eum nihil, accusamus consequuntur! Ducimus ea fugit obcaecati ab eos sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat facere, possimus, esse dignissimos consequuntur mollitia inventore exercitationem cupiditate, hic architecto reprehenderit perspiciatis ducimus eaque atque tenetur doloribus in animi porro.
                        </p>
                    </div>

                    <div className="imagen">
                        <img 
                            src={ imagen } 
                            alt="cafe"
                        />
                    </div>
                </div>
            </main>

            <NuestroMenu />

            <Footer />
        </>
    )
};
