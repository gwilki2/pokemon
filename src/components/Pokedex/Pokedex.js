import React from 'react';
import Pokecard from '../Pokecard/Pokecard';
import classes from './Pokedex.module.scss'


class Pokedex extends React.Component{

    render() {
        
        return (
            <div className={classes.Pokedex} >
                <Pokecard />
                <Pokecard />
                <Pokecard />
                <Pokecard />
            </div>
        )

    }

}

export default Pokedex;