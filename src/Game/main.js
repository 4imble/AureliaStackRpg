import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GameLoop from "./gameLoop";
import MonsterStack from "./monsterStack";
 
@inject(EventAggregator)
export class Main {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.gameLoop = new GameLoop(this.eventAggregator);
        this.monsterStack = new MonsterStack(this.eventAggregator);
        
        this.timer = 0;
        
        this.eventAggregator.subscribe('gameLoop', _ => {
            this.timer++;
        });
    }
    
    activate() {
        this.gameLoop.start();
        
        this.monsterStack.addMonster("Grumble");
        this.monsterStack.addMonster("Scrammo");
    }
}