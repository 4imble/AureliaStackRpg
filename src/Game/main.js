import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GameLoop from "./gameLoop";
import BattleStack from "./battleStack";
import MonsterBag from "./monsterBag";
 
@inject(EventAggregator)
export class Main {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.gameLoop = new GameLoop(this.eventAggregator);
        this.battleStack = new BattleStack(this.eventAggregator);
        this.monsterBag = new MonsterBag(this.eventAggregator);
        
        this.timer = 0;
        
        this.eventAggregator.subscribe('gameLoop', _ => {
            this.timer++;
        });
    }
    
    activate() {
        this.gameLoop.start();
    }
}