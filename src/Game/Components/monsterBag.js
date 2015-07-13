import Monster from "../Entities/monster";

export default class MonsterBag {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        
        this.bag = [new Monster("Grumble"), new Monster("Scrammo")];
    }
    
    useMonster(monster) 
    {
        this.eventAggregator.publish('monsterAdded', monster);
    }
}