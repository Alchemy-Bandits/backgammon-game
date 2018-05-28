/* exported Home */
'use strict';

const homeTemplate = document.getElementById('home-template');

class Home {
    constructor() {

    }

    render() {
        const dom = homeTemplate.content.cloneNode(true);

        // const dieRollerSection = dom.getElementById('die-roller');
        // const dieRollerComponent = new DieRoller();
        // dieRollerSection.appendChild(dieRollerComponent.render());

        return dom;
    }
}