/* exported DiceRoller */
'use strict';

const diceRollerTemplate = document.getElementById('dice-roller-template');

class DiceRoller {
    constructor(onClick) {
        this.onClick = onClick;
        
    }

    render() {
        const dom = diceRollerTemplate.content;

        const rollDiceButton = dom.getElementById('roll-dice-button');
        const dieOneImage = dom.getElementById('die-one');
        const dieTwoImage = dom.getElementById('die-two');
        const doubleDieOneImage = dom.getElementById('double-die-one');
        const doubleDieTwoImage = dom.getElementById('double-die-two');

        rollDiceButton.addEventListener('click', () => {
            const dieOne = rollDie();
            const dieTwo = rollDie();
            
            dieOneImage.src = 'images/die-face-' + dieOne + '.png';
            dieTwoImage.src = 'images/die-face-' + dieTwo + '.png';
            
            doubleDieOneImage.src = '';
            doubleDieTwoImage.src = '';
            if(dieOne === dieTwo) {
                doubleDieOneImage.src = 'images/die-face-' + dieOne + '.png';
                doubleDieTwoImage.src = 'images/die-face-' + dieTwo + '.png';
            }
            
            this.onClick(dieOne, dieTwo);
        });

        return dom;
    }
}


function rollDie() {
    return (1 + Math.floor(Math.random() * 6));
}