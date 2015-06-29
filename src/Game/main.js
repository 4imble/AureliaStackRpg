import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GameLoop from "./gameLoop";
import BattleStack from "./battleStack";
 
@inject(EventAggregator)
export class Main {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.gameLoop = new GameLoop(this.eventAggregator);
        this.battleStack = new BattleStack(this.eventAggregator);
        
        this.timer = 0;
        
        this.eventAggregator.subscribe('gameLoop', _ => {
            this.timer++;
        });
    }
    
    activate() {
        this.gameLoop.start();
        
        this.battleStack.addMonster("Grumble");
        this.battleStack.addMonster("Scrammo");
    }
}