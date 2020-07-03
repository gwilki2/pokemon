import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import classes from './Pokegame.module.scss';


class Pokegame extends React.Component {

    constructor() {
        super();
        this.allCardVals = [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ];
        this.splitIntoTwoHands = allCardVals => {
            const arrayLength = allCardVals.length;

            const getPlaceHolderArray = aLength => {
                
                const tArray = []
                for (let i = 0; i < aLength; i++){
                    tArray.push('');
                }

                return tArray;

            }

            let orderedArryIndexes = (getPlaceHolderArray(arrayLength)).map((item, index) => index);
            let randomized = (getPlaceHolderArray(arrayLength)).map(() => orderedArryIndexes.splice(Math.floor(Math.random() * orderedArryIndexes.length), 1))
            const handSize = Math.floor(arrayLength / 2);

            const tempArray = [[],[]]

            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < handSize; j++) {
                    tempArray[i].push(allCardVals[randomized[(i * handSize) + j]]);
                }
            }
            return tempArray;
        };


        this.twoHands = this.splitIntoTwoHands(this.allCardVals);
        this.twoHandsTotals = this.twoHands.map(hand => hand.reduce((total, card) => total + card.base_experience, 0));
    }


    

    render() {
    
        const {twoHands, twoHandsTotals} = this;

        return (
            <div className={classes.Pokegame}>
                <Pokedex pCardValues={twoHands[0]} isWinner={twoHandsTotals[0]>twoHandsTotals[1]} />
                <Pokedex pCardValues={twoHands[1]} isWinner={twoHandsTotals[1]>twoHandsTotals[0]} />
            </div>


        )

    }

}

export default Pokegame;