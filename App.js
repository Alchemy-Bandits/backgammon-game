/* exported App */
/* globals DiceRoller */

'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }

    render() {
        const dom = appTemplate.content;

        const diceRollerSection = dom.getElementById('dice-roller');
        const diceRollerComponent = new DiceRoller();
        diceRollerSection.appendChild(diceRollerComponent.render());

        return dom;
    }
}