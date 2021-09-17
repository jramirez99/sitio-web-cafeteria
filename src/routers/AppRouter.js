import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Contacto } from '../components/contacto/Contacto';
import { Galeria } from '../components/galeria/Galeria';

import { Inicio } from '../components/inicio/Inicio';
import { Menu } from '../components/menu/Menu';
import { Nosotros } from '../components/nosotros/Nosotros';
import { Proceso } from '../components/proceso/Proceso';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ Inicio }
                    />
                    <Route 
                        exact
                        path="/nosotros"
                        component={ Nosotros }
                    />
                    <Route 
                        exact
                        path="/proceso"
                        component={ Proceso }
                    />
                    <Route 
                        exact
                        path="/menu"
                        component={ Menu }
                    />
                    <Route 
                        exact
                        path="/galeria"
                        component={ Galeria }
                    />
                    <Route 
                        exact
                        path="/contacto"
                        component={ Contacto }
                    />
                </Switch>
            </div>
        </Router>
    )
};
