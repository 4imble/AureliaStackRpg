import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import Monster from "../Entities/monster";

@customElement('battle-stack')
@inject(EventAggregator)
export class BattleStack {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;

        this.stack = [new Monster("Grumble")];

        this.eventAggregator.subscribe('monsterAdded', monster => {
            this.stack.push(monster);
        });

        this.eventAggregator.subscribe('gameLoop', _ => {
            if (this.stack.length) {
                this.fightMonster();
            }
        });
    }

    fightMonster() {
        let monster = this.stack.shift();
        this.eventAggregator.publish('monsterKilled', monster);
    }
}