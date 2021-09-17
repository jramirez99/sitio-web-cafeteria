import React from 'react';

export const MenuCafe = () => {
    return (
        <section className="menu cafe">
            <h3> Café </h3>

            <ul>
                <li>
                    <p> 
                        Café Latte 
                        <span> Café Espresso con leche caliente evaporada </span> 
                    </p>
                    <p className="precio"> $25 </p>
                </li>
                <li>
                    <p> 
                        Café Mocha 
                        <span> Espresso con crema batida </span> 
                    </p>
                    <p className="precio"> $30 </p>
                </li>
                <li>
                    <p> 
                        Café Americano 
                        <span>Café Negro </span> 
                    </p>
                    <p className="precio"> $30 </p>
                </li>
                <li>
                    <p> 
                        Capuccino 
                        <span> Espresso con una capa suave de espuma </span> 
                    </p>
                    <p className="precio"> $25 </p>
                </li>
                <li>
                    <p> 
                        Café Mocha Frio 
                        <span>Espresso, dulce con mocha y leche </span> 
                    </p>
                    <p className="precio"> $29 </p>
                </li>
                <li>
                    <p> 
                        Mocha Frio Quemado 
                        <span> Espresso, hielo, con azucar quemada y mantequilla </span> 
                    </p>
                    <p className="precio"> $35 </p>
                </li>
                <li>
                    <p> 
                        Latte con Caramelo 
                        <span> Espresso, leche y caramelo </span> 
                    </p>
                    <p className="precio"> $39 </p>
                </li>
            </ul>
        </section>
    )
};
