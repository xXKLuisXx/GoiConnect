import { Multimedia } from '../Classes/multimedia';
import { PublicationInt } from '../Interfaces/publication-int';

export class Publication implements PublicationInt {
    title: string;
    description: string;
    monetized:boolean;
    checkIn: string;
    checkOut: string;
    path: string;
    multimedia: Multimedia[] 
    
    constructor(object?: any){
        if(object != null){
            this.title = object.title ?? "";
            this.description = object.description ?? "";
            this.monetized = object.monetized ?? "";
            this.checkIn = object.checkIn ?? "";
            this.checkOut = object.checkOut ?? "";
            this.multimedia = object.multimedia ?? [];
            this.path = object.path ??  "";
        }else{
            this.title = "";
            this.description = "";
            this.monetized = false;
            this.checkIn = "";
            this.checkOut ="";
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
