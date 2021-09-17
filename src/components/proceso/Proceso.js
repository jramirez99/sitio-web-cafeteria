import React from 'react'
import { Header } from '../templates/Header'

// imagenes
import imagen1 from '../../img/proceso_1.jpg';
import imagen2 from '../../img/proceso_2.jpg';
import imagen3 from '../../img/proceso_3.jpg';
import imagen4 from '../../img/proceso_4.jpg';
import imagen5 from '../../img/proceso_5.jpg';
import { Footer } from '../templates/Footer';

export const Proceso = () => {
    return (
        <>
            <header className="header-proceso">

                <Header 
                    texto="Los verdaderos expertos del café"
                />

            </header>

            <main className="contenedor contenido-principal">
                <div className="proceso-cafe">
                    <div className="imagen">
                        <img 
                            src={ imagen1 } 
                            alt="proceso" 
                        />
                    </div>
                    <div className="texto">
                        <h3> Granos de café </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo, corrupti temporibus dolore sed cupiditate porro eius. Fugit dignissimos, modi iure assumenda asperiores aut minima! Modi iusto excepturi adipisci labore!
                        </p>
                    </div>
                </div>

                <div className="proceso-cafe">
                    <div className="imagen">
                        <img 
                            src={ imagen2 } 
                            alt="proceso" 
                        />
                    </div>
                    <div className="texto">
                        <h3> Tostar el café </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo, corrupti temporibus dolore sed cupiditate porro eius. Fugit dignissimos, modi iure assumenda asperiores aut minima! Modi iusto excepturi adipisci labore!
                        </p>
                    </div>
                </div>

                <div className="proceso-cafe">
                    <div className="imagen">
                        <img 
                            src={ imagen3 } 
                            alt="proceso" 
                        />
                    </div>
                    <div className="texto">
                        <h3> Empacar el café </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo, corrupti temporibus dolore sed cupiditate porro eius. Fugit dignissimos, modi iure assumenda asperiores aut minima! Modi iusto excepturi adipisci labore!
                        </p>
                    </div>
                </div>

                <div className="proceso-cafe">
                    <div className="imagen">
                        <img 
                            src={ imagen4 } 
                            alt="proceso" 
                        />
                    </div>
                    <div className="texto">
                        <h3> Moler granos de café </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo, corrupti temporibus dolore sed cupiditate porro eius. Fugit dignissimos, modi iure assumenda asperiores aut minima! Modi iusto excepturi adipisci labore!
                        </p>
                    </div>
                </div>

                <div className="proceso-cafe">
                    <div className="imagen">
                        <img 
                            src={ imagen5 } 
                            alt="proceso" 
                        />
                    </div>
                    <div className="texto">
                        <h3> Disfrutar una taza de café </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo, corrupti temporibus dolore sed cupiditate porro eius. Fugit dignissimos, modi iure assumenda asperiores aut minima! Modi iusto excepturi adipisci labore!
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
