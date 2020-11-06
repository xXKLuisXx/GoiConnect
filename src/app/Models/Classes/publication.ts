import { Multimedia } from '../Classes/multimedia';
import { PublicationInt } from '../Interfaces/publication-int';

export class Publication implements PublicationInt {
    title: string;
    description: string;
    monetized: boolean;
    price: number;
    startDate: string;
    endDate: string;
    startHour: string;
    endHour: string;
    partakers: number;
    path: string;
    multimedia: Multimedia[];
    typeContent: number;
    id_detail: number;
    
    constructor(object?: any){
        if(object != null){
            this.title = object.title ?? "";
            this.description = object.description ?? "";
            this.monetized = object.monetized ?? "";
            this.price = object.price ?? null;
            this.startDate = object.start_date ?? "";
            this.endDate = object.end_date ?? "";
            this.startHour = object.start_hour ?? "";
            this.endHour = object.end_hour ?? "";
            this.partakers = object.count_assits ?? "";
            this.multimedia = object.multimedia ?? [];
            this.path = object.path ??  "";
            this.typeContent = object.content_type_id ?? null;
            this.id_detail = object.id ?? null;
        }else{
            this.title = "";
            this.description = "";
            this.monetized = false;
            this.price = null;
            this.startDate = "";
            this.endDate ="";
            this.startHour = "";
            this.endHour = "";
            this.partakers = null;
            this.multimedia = [];
            this.path = "";
            this.typeContent = null;
            this.id_detail = null;
        }
        
    }

    getTitle(): string{
        return this.title;
    }

    getDescription(): string{
        return this.description;
    }
}
