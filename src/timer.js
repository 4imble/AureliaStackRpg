export default class Timer {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }
    
    start(){
        var initalTime = 5;
        var currentTime = initalTime;
        
        setInterval(() => {
            if (--currentTime < 0) {
                currentTime = initalTime;
            }
            this.eventAggregator.publish('gameLoop', currentTime);
        }, 500);
    }
}