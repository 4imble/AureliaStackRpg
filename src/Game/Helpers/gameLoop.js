export default class GameLoop {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    
    start(){        
        setInterval(() => {
            this.eventAggregator.publish('gameLoop');
        }, 1000);
    }
}