import GoldItem from "./goldItem";
import Dice from "./dice";
import _ from "lodash";

export default class LootStack {
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