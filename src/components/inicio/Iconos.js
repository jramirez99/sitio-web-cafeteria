import React from 'react';

import cafe from '../../img/icono_cafe.svg';
import postre from '../../img/icono_postre.svg';
import te from '../../img/icono_te.svg';

export const Iconos = () => {
    return (
        <section className="iconos">
            <ul className="listado-iconos text-center">
                <li>
                    <img 
                        src={ cafe } 
                        alt="icono cafe" 
                    />
                    <p> café </p>
                </li>
                <li>
                    <img 
                        src={ postre } 
                        alt="icono cafe" 
                    />
                    <p> Postres </p>
                </li>
                <li>
                    <img 
                        src={ te } 
                        alt="icono cafe" 
                    />
                    <p> Té </p>
                </li>
            </ul>
        </section>
    )
};
