import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

export const Header = ( { texto } ) => {
    return (
        <header className="header">
            <div className="contenedor contenido-header">
                <div className="barra">
                    <div className="logo">
                        <img 
                            src={ logo } 
                            alt="logo cafeteria" 
                        />
                    </div>

                    <nav className="nav-principal">
                        <Link 
                            to="/"
                        > 
                            Inicio 
                        </Link>
                        <Link 
                            to="/nosotros"
                        > 
                            Nosotros 
                        </Link>
                        <Link 
                            to="/proceso"
                        > 
                            Proceso 
                        </Link>
                        <Link 
                            to="/menu"
                        > 
                            Menú 
                        </Link>
                        <Link 
                            to="/galeria"
                        > 
                            Galería 
                        </Link>
                        <Link 
                            to="/contacto"
                        > 
                            Contacto 
                        </Link>
                    </nav>
                </div>

                <div className="texto-header">
                    <h1> { texto } </h1>
                </div>
            </div>
        </header>
    )
}
