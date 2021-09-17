import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Inicio } from './components/inicio/Inicio';
import { Galeria } from './components/galeria/Galeria';
import { Nosotros } from './components/nosotros/Nosotros';
import { Proceso } from './components/proceso/Proceso';
import { Contacto } from './components/contacto/Contacto';

import './scss/app.scss';

export const App = () => {
    return (
        <AppRouter>

            <Inicio />

            <Nosotros />

            <Proceso />

            <Galeria />

            <Contacto />

        </AppRouter>
    )
};
