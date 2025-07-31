class Time{
    #sec;#min;#hour;
    
    constructor(_sec = 0,_min = 0,_hour = 0){
        this.Sec = _sec;
        this.Min = _min;
        this.Hour = _hour;

    }

    set Sec(sec){
        if(sec <= 59 && sec >= 0)
        this.#sec = sec;
    }
    get Sec(){
        return this.#sec;
    }

    set Min(min){
        if(min <= 59 && min >= 0)
        this.#min = min;
    }
    get Min(){
        return this.#min;
    }
    set Hour(hour){

        if( hour <= 23 && hour >= 0)
        this.#hour = hour;
        
    }
    get Hour(){
        return this.#hour;
    }

    print(){
        console.log(`${this.#hour.toString().padStart(2, '0')}H:${this.#min.toString().padStart(2, '0')}M:${this.#sec.toString().padStart(2, '0')}S`)
    }
}


const myTime = new Time(50, 10, 1);

myTime.print();