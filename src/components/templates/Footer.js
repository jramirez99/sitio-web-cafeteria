import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor contenido-footer">
                <div className="footer-caja ubicacion">
                    <h3> Ubicación </h3>
                    <p> Francisco de montejo </p>
                    <p> Merida </p>
                </div>
                <div className="footer-caja reservacion">
                    <h3> Reservación </h3>
                    <p> Tel: 7593-8563 </p>
                    <a href="tel:+7593-8563 "> llamar </a>  
                </div>
                <div className="footer-caja horario">
                    <h3> Horario </h3>  
                    <p> Lun-jue: 12:00 - 22:00 </p>
                    <p> Vie-Sab: 09:00 - 20:00 </p>
                    <p> Domingo: Cerrado </p>
                </div>
            </div>

            <p className="copyright"> Todos los derechos reservados &copy; </p>
        </footer>
    )
};
