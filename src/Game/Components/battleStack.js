import Monster from "../Entities/monster";

export default class BattleStack {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;

        this.stack = [new Monster("Grumble")];

        this.eventAggregator.subscribe('monsterAdded', monster => {
            this.stack.push(monster);
        });

        this.eventAggregator.subscribe('gameLoop', _ => {
            if (this.stack.length) {
                fightMonster();
            }
        });
        
        fightMonster(){
            let monster = this.stack.shift();
            this.eventAggregator.publish('monsterKilled', monster);
        }
    }
}