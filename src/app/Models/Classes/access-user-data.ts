export class AccessUserData {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
    constructor(){
        this.token_type = "";
        this.expires_in = 0;
        this.access_token = "";
        this.refresh_token = "";
    }
}
