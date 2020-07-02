import React from 'react';


import Pokedex from '../Pokedex/Pokedex';
import classes from './App.module.scss';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <h2>Pokedex Game!</h2>
                <Pokedex />
                <Pokedex />
            </div>
        )
    }


}

export default App;