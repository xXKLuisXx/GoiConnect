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
    multimedia: Multimedia[];
    typeContent: number;
    
    constructor(object?: any){
        if(object != null){
            this.title = object.title ?? "";
            this.description = object.description ?? "";
            this.monetized = object.monetized ?? "";
            this.price = object.price ?? null;
            this.checkIn = object.check_in ?? "";
            this.checkOut = object.check_out ?? "";
            this.hour = object.hour ?? "";
            this.multimedia = object.multimedia ?? [];
            this.path = object.path ??  "";
            this.typeContent = object.content_type_id ?? null;
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
            this.typeContent = null;
        }
        
    }

    getTitle(): string{
        return this.title;
    }

    getDescription(): string{
        return this.description;
    }
}
