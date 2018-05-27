/* exported GameBoard */
'use strict';

const gameBoardTemplate = document.getElementById('game-board-template');

class GameBoard {
    constructor() {

    }

    render() {
        const dom = gameBoardTemplate.content;

        // const dieRollerSection = dom.getElementById('die-roller');
        // const dieRollerComponent = new DieRoller();
        // dieRollerSection.appendChild(dieRollerComponent.render());

        return dom;
    }
}