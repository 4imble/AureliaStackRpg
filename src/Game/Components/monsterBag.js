import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import Monster from "../Entities/monster";

@customElement('monster-bag')
@inject(EventAggregator)
export class MonsterBag {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        
        this.bag = [new Monster("Grumble"), new Monster("Scrammo")];
    }
    
    useMonster(monster) 
    {
        this.eventAggregator.publish('monsterAdded', monster);
    }
}