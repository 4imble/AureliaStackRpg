import Monster from "./monster";

export default class BattleStack {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        
        this.stack = [new Monster("Grumble")];
        
        this.eventAggregator.subscribe('monsterAdded', monster => {
            this.stack.push(monster);
        });
    }
}