import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GameLoop from "./gameLoop";
import BattleStack from "./battleStack";
import MonsterBag from "./monsterBag";
import LootStack from "./lootStack";
 
@inject(EventAggregator)
export class Main {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.gameLoop = new GameLoop(this.eventAggregator);
        this.battleStack = new BattleStack(this.eventAggregator);
        this.monsterBag = new MonsterBag(this.eventAggregator);
        this.lootStack = new LootStack(this.eventAggregator);
        
        this.timer = 0;
        this.playerGold = 0;
        
        this.eventAggregator.subscribe('gameLoop', _ => {
            this.timer++;
        });
        
        this.eventAggregator.subscribe('itemTaken', lootItem => {
            this.playerGold += lootItem.Amount;
        });
    }
    
    activate() {
        this.gameLoop.start();
    }
}