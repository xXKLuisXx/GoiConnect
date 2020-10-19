import { Multimedia } from '../Classes/multimedia';
import { PublicationInt } from '../Interfaces/publication-int';

export class Publication implements PublicationInt {
    title: string;
    description: string;
    monetized: boolean;
    price: number;
    checkIn: string;
    checkOut: string;
    hour: string;
    path: string;
    multimedia: Multimedia[] 
    
    constructor(object?: any){
        if(object != null){
            this.title = object.title ?? "";
            this.description = object.description ?? "";
            this.monetized = object.monetized ?? "";
            this.price = object.price ?? null;
            this.checkIn = object.checkIn ?? "";
            this.checkOut = object.checkOut ?? "";
            this.hour = object.hour ?? "";
            this.multimedia = object.multimedia ?? [];
            this.path = object.path ??  "";
        }else{
            this.title = "";
            this.description = "";
            this.monetized = false;
            this.price = null;
            this.checkIn = "";
            this.checkOut ="";
            this.hour = "";
            this.multimedia = [];
            this.path = "";
        }
        
    }

    getTitle(): string{
        return this.title;
    }

    getDescription(): string{
        return this.description;
    }
}
