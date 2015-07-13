export default class Dice {
    constructor() {
        
    }
    
    d6()
    {
        return this.rollNumber(1, 6);
    }
    
    d20()
    {
        return this.rollNumber(1, 20);
    }
    
    rollNumber(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}