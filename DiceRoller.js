/* exported DiceRoller */
'use strict';

const diceRollerTemplate = document.getElementById('dice-roller-template');

class DiceRoller {
    constructor() {

    }

    render() {
        const dom = diceRollerTemplate.content;

        // const dieRollerSection = dom.getElementById('die-roller');
        // const dieRollerComponent = new DieRoller();
        // dieRollerSection.appendChild(dieRollerComponent.render());

        return dom;
    }
}