/* exported Bar */
'use strict';

const barTemplate = document.getElementById('bar-template');

class Bar {
    constructor() {

    }

    render() {
        const dom = barTemplate.content.cloneNode(true);

        // const dieRollerSection = dom.getElementById('die-roller');
        // const dieRollerComponent = new DieRoller();
        // dieRollerSection.appendChild(dieRollerComponent.render());

        return dom;
    }
}