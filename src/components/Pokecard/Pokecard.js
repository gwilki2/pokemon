import React from 'react';
import classes from './Pokecard.module.scss';

class Pokecard extends React.Component {

    static defaultProps = {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        base_experience: 62
    }

    padZeros = id => {
        const numOfDigits = id.toString().length;
        for (let i = 3; i > numOfDigits ; i--){
            id = '0' + id;
        }
        return id;
    }
    
    render() {
        const {id, name, type, base_experience } = this.props
        return (
            <div className={classes.Pokecard}>
                <div className={classes.PokecardImg}>
                    <h4>{name}</h4>
                    <img className={classes.PokecardImg} src={` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.padZeros(id)}.png`} alt={name} />
                </div>
                <h5>{`Type: ${type}`}</h5>
                <h5>{`EXP: ${base_experience}`}</h5>
            </div>
        );

    }


}


export default Pokecard;