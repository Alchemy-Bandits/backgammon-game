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
        rollDiceButton.addEventListener('click', () => {
            const dieOne = rollDie();
            const dieTwo = rollDie();
            this.onClick(dieOne, dieTwo);
        });

        return dom;
    }
}


function rollDie() {
    return (1 + Math.floor(Math.random() * 6));
}