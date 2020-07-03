import React from 'react';


import Pokegame from '../Pokegame/Pokegame';
import classes from './App.module.scss';

class App extends React.Component {

    render() {
        return (
            <div className={classes.App}>
                <h2>Pokegame!</h2>
                <Pokegame />
            </div>
        )
    }


}

export default App;