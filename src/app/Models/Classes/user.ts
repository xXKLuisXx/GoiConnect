export class User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string
    constructor() {
        this.name = "";
        this.email = "";
        this.password = "";
        this.password_confirmation = "";
    }
}
