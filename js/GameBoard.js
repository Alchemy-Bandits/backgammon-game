/* exported GameBoard */
/* globals Point */
'use strict';

const gameBoardTemplate = document.getElementById('game-board-template');

class GameBoard {
    constructor() {

    }

    render() {
        const dom = gameBoardTemplate.content;

        const pointSection = dom.getElementById('point-section');
        for(let i = 0; i < 24; i++) {
            const pointComponent = new Point();
            pointSection.appendChild(pointComponent.render());
        }

        return dom;
    }
}