import React from 'react';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';

export const Contacto = () => {
    return (
        <>
            <header className="header-contacto">

                <Header 
                    texto="contactanos para satisfacerte"
                />
            </header>

            <main className="contenedor contenido-principal">
                <h2> 
                    <span> Reserva tu </span> 
                    mesa 
                </h2>

                <div className="contenido-contacto">
                    <form className="formulario">
                        <div className="campo">
                            <label 
                                htmlFor="nombre"> Nombre: </label>
                            <input 
                                type="text" 
                                id="nombre" 
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="campo">
                            <label 
                                htmlFor="email"> Email: </label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Tu Email"
                            />
                        </div>
                        <div className="campo">
                            <label> Numero de personas: </label>
                            <select>
                                <option defaultValue="1"> 1 </option>
                                <option defaultValue="2"> 2 </option>
                                <option defaultValue="3"> 3 </option>
                                <option defaultValue="4"> 4 </option>
                                <option defaultValue="mas"> +4 </option>
                            </select>
                        </div>
                        <div className="campo">
                            <label 
                                htmlFor="hora"> Hora: </label>
                            <input 
                                type="time" 
                                id="hora" 
                                min="09:00" 
                                max="18:00" 
                            />
                        </div>
                        <div className="campo">
                            <label 
                                htmlFor="fecha"> Fecha: </label>
                            <input 
                                type="date" 
                                id="fecha" 
                            />
                        </div>
                        <div className="campo">
                            <input 
                                type="submit" 
                                value="Enviar" 
                            />
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    )
};
