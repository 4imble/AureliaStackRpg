import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import TimerClass from "./timer";

@inject(EventAggregator)
export class Main {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.timer = new TimerClass(this.eventAggregator);
        
        this.eventAggregator.subscribe('gameLoop', currentTime => {
            this.timeLeft = currentTime
        });
    }
    activate() {
        this.timer.start();
    }
}