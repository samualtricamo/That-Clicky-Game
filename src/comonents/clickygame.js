import React, { Component } from 'react';
import Navbar from './navbar';
import Container from './container';
import Footer from './footer';
import Banner from './banner';
import images from '../images';

class clickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,

        navMsgColor: ' ',

        navMessage: "Click and image to begin!",

        allCharacters: this.shuffleArray(),

    wasClicked: [],
    shake: false
    };

    clickEvent = this.checkClicked.bind(this);

    shuffleArray() {

        const newArr = image.slice();

        const shuffleArr = [];

        while (newArr.length > 0) {
            shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
          }
      
          return shuffleArr;
    }

    checkClicked(clickedElem) {

        const prevState = this.state.wasClicked.slice();

        const shuffled = this.shuffleArray();

        let score = this.state.score;
        let highScore = this.state.highScore;

        if (!this.state.wasClicked.includes(clickedElem)) {
if (score === highScore) {
    score++;
    highScore++;

} else {
    score++;
}

prevState.push(clickedElem);
    }
    if (this.state.wasClicked.includes(clickedElem)) {
        let score = 0;
        return this.setState({
          score: score,
          highScore: highScore,
          navMsgColor: 'incorrect',
          navMessage: 'Incorrect guess!',
          allCharacters: shuffled,
          wasClicked: [],
          shake: true
        });
    }
    this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: 'correct',
        navMessage: 'Correct!',
        allCharacters: shuffled,
        wasClicked: prevState,
        shake: false
    });

    return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
}

render() {
    const state = this.state;
    return (
        <div>
            <Navbar
            score={state.score}
            highScore={state.highScore}
            navMessage={state.navMessage}
            navMsgColor={state.navMsgColor}
        />
            <Banner />
                <Container
                shake={state.shake}
                characters={state.allCharacters}
                clickEvent={this.clickEvent}
        />
        <Footer />        
        </div>
    );
}
}

export default clickyGame;