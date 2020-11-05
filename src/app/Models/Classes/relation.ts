import { User } from './user';

export class Relation {
    // tslint:disable-next-line: variable-name
    user_id: number;
    // tslint:disable-next-line: variable-name
    user_friendship_id: number;
    // tslint:disable-next-line: variable-name
    profile_id: number;
    // tslint:disable-next-line: variable-name
    friendship_id: number;
    // tslint:disable-next-line: variable-name
    status_id: number;

    constructor(object?: any) {
        if (object != null){
            this.user_id = object.user_id ?? null;
            this.user_friendship_id = object.user_friendship_id ?? null;
            this.profile_id = object.profile_id ?? null;
            this.friendship_id = object.friendship_id ?? null;
            this.status_id = object.status_id ?? null;
        }else{
            this.user_id = null;
            this.user_friendship_id = null;
            this.profile_id = null;
            this.friendship_id = null;
            this.status_id = null;
        }
    }
}
