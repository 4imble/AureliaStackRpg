import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GoldItem from "../Entities/goldItem";
import Dice from "../Helpers/dice";
import _ from "lodash";

@customElement('loot-stack')
@inject(EventAggregator)
export class LootStack {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.dice = new Dice();

        this.stack = [];

        this.eventAggregator.subscribe('monsterKilled', monster => {
            this.stack.push(new GoldItem(this.dice.d20()));
        });
    }
    
    takeItem(event, lootItem){
        event.cancelBubble = true;
        this.eventAggregator.publish('itemTaken', lootItem);
        _.pull(this.stack, lootItem);
    }
}