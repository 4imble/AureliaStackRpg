import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import GameLoop from "./Helpers/gameLoop";
import BattleStack from "./Components/battleStack";
import MonsterBag from "./Components/monsterBag";
import LootStack from "./Components/lootStack";
 
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