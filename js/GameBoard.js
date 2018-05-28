/* exported GameBoard */
/* globals Point, Home, Bar */
'use strict';

const gameBoardTemplate = document.getElementById('game-board-template');

class GameBoard {
    constructor() {

    }

    render() {
        const dom = gameBoardTemplate.content;

        const pointSection = dom.getElementById('point-section');
        for(let i = 0; i < 28; i++) {
            if(i === 6 || i === 20) {
                const barComponent = new Bar();
                pointSection.appendChild(barComponent.render());
            }
            else if(i === 13 || i === 27) {
                const homeComponent = new Home();
                pointSection.appendChild(homeComponent.render());
            }
            else {
                const pointComponent = new Point();
                pointSection.appendChild(pointComponent.render());
            }
        }

        return dom;
    }
}