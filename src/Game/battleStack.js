import Monster from "./monster";

export default class BattleStack {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        
        this.stack = [];
    }
    
    addMonster(name) 
    {
        let monsterToAdd = new Monster(name)
        this.stack.push(monsterToAdd);
        this.eventAggregator.publish('monsterAdded', monsterToAdd);
    }
}