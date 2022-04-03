
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ServiceStore from './store/ServiceStore';
import InterStore from './store/InterStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        service: new ServiceStore(),
        inter: new InterStore()
    }}>
        <App />
    </Context.Provider>,
   document.getElementById('root')
);

 