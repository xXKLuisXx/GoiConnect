export class RequestResponse {
    status: number;
    statusText: string;
    errors: {
        formErrors : any,
        dbErrors :  any,
    }
    constructor(){
        this.statusText = "";
        this.status = 0;
        this.errors = {
            formErrors : new Object(),
            dbErrors : new Object(),
        };
    }
}
