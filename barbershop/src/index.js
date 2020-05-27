import React  from "react";
import  ReactDOM from 'react-dom'
import{Provider} from 'react-redux'
import{BrowserRouter as Router} from "react-router-dom";

import App from './components/app';

import ErrorBoundry from "./components/error-boundry";

import BarbershopService from "./services/barbershop-service";
import {BarbershopServiceProvider} from "./components/barbershop-service-context/barbershop-service-context";

import store from './store';


const barbershopService = new BarbershopService();

ReactDOM.render(

    <Provider  store={store}>

        <ErrorBoundry>
<BarbershopServiceProvider value={barbershopService}>

        <Router>
             <App/>
        </Router>

</BarbershopServiceProvider>


</ErrorBoundry>
</ Provider>,
document.getElementById('root')

);

