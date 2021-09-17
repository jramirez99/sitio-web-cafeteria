import React from 'react';

export const MenuComida = () => {
    return (
        <section className="menu comida">
            <h3> Comida </h3>

            <ul>
                <li>
                    <p> Baguette de Pollo 
                        <span> Delicioso Baguette con pollo a la plancha </span> 
                    </p>
                    <p className="precio"> $45 </p>
                </li>
                <li>
                    <p> Baguette Pollo y Queso 
                        <span> Baguette combinado con Pollo y Queso Manchego </span> 
                    </p>
                    <p className="precio"> $50 </p>
                </li>
                <li>
                    <p> Baguette con Tocino 
                        <span> Baguette con especias y verduras, además de tocino </span> 
                    </p>
                    <p className="precio"> $50 </p>
                </li>
                <li>
                    <p> Baguette de Jamón 
                        <span> Delicioso  Baguette con Jamón y Especias </span> 
                    </p>
                    <p className="precio"> $65 </p>
                </li>
                <li>
                    <p> Baguette con Jamón, Queso y Tocino 
                        <span> El especial de la casa </span> 
                    </p>
                    <p className="precio"> $69 </p>
                </li>
                <li>
                    <p> Sandwich de Pollo 
                        <span> Delicioso sandwich con Pollo y especies </span> 
                    </p>
                    <p className="precio"> $65 </p>
                </li>
                <li>
                    <p> Sandwich de Jamón y queso 
                        <span> Queso Amarillo con Jamón y Queso </span> 
                    </p>
                    <p className="precio"> $59 </p>
                </li>
            </ul>
        </section>
    )
};
