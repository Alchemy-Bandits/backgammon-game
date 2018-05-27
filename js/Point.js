/* exported Point */
'use strict';

const pointTemplate = document.getElementById('point-template');

class Point {
    constructor() {

    }

    render() {
        const dom = pointTemplate.content.cloneNode(true);

        // const dieRollerSection = dom.getElementById('die-roller');
        // const dieRollerComponent = new DieRoller();
        // dieRollerSection.appendChild(dieRollerComponent.render());

        return dom;
    }
}