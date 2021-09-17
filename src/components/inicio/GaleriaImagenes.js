import React from 'react';

// imagenes
import galeria1 from '../../img/galeria/galeria_01.jpg';
import galeria2 from '../../img/galeria/galeria_02.jpg';
import galeria3 from '../../img/galeria/galeria_03.jpg';
import galeria4 from '../../img/galeria/galeria_04.jpg';
import galeria5 from '../../img/galeria/galeria_05.jpg';
import galeria6 from '../../img/galeria/galeria_06.jpg';
import galeria7 from '../../img/galeria/galeria_07.jpg';
import galeria8 from '../../img/galeria/galeria_08.jpg';
import galeria9 from '../../img/galeria/galeria_09.jpg';
import galeria10 from '../../img/galeria/galeria_10.jpg';

export const GaleriaImagenes = () => {
    return (
        <section className="experiencia">
            <h2> 
                <span> Vive la </span> 
                experiencia 
            </h2>

            <div className="galeria">
                <div className="imagen-galeria">
                    <img 
                        src={ galeria1 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria2 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria3 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria4 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria5 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria6 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria7 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria8 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria9 } 
                        alt="galeria" 
                    />
                </div>
                <div className="imagen-galeria">
                    <img 
                        src={ galeria10 } 
                        alt="galeria" 
                    />
                </div>
            </div>
        </section>
    )
};
