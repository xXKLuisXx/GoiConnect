import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { AccessUserData } from './access-user-data';
import { RequestResponse } from './request-response';

export class Utils {
    private secureStorage: SecureStorage;
    private loadingController: LoadingController;
    private alertController: AlertController;
    private loading: HTMLIonLoadingElement;
    private alert: HTMLIonAlertElement;
    private requestResponse: RequestResponse;
    constructor() {
        this.secureStorage = new SecureStorage();
        this.loadingController = new LoadingController();
        this.alertController = new AlertController();
        this.requestResponse = new RequestResponse();
    }

    public buildErrors(Errors: any): string {
        let ErrorsHTML = '';
        this.requestResponse.status = Errors.status;
        this.requestResponse.statusText = Errors.statusText;
        if (this.requestResponse.status == 401) {
            ErrorsHTML = "Status: " + this.requestResponse.statusText;
        } else {
            if (Errors.error.error != null && Errors.error.error == "invalid_grant") {
                this.requestResponse.errors.dbErrors = Errors.error;
            } else {
                this.requestResponse.errors.formErrors = Errors.error;
            }
            console.log(this.requestResponse);

            if (Object.keys(this.requestResponse.errors.dbErrors).length > 0) {
                ErrorsHTML += '<li> User or Password wrong </li>';
            } else {
                if (Object.keys(this.requestResponse.errors.formErrors).length > 0) {
                    Object.keys(this.requestResponse.errors.formErrors).forEach(key => {
                        ErrorsHTML += key + ' <br>';
                        ErrorsHTML += '<ul> ';
                        this.requestResponse.errors.formErrors[key].forEach(element => {
                            ErrorsHTML += '<li> ' + element + '</li>';
                        });
                        ErrorsHTML += ' </ul>';
                    });
                }
            }
        }
        return ErrorsHTML;
    }

    public buildAccessData(Response: any): AccessUserData {
        let accessdata = JSON.parse(Response['accessdata'])
        let accessUserData = new AccessUserData();
        Object.keys(accessdata).forEach(keyR => {
            Object.keys(accessUserData).forEach(keyAD => {
                if (keyR == keyAD) {
                    accessUserData[keyAD] = Response[keyR];
                }
            })
        });
        return accessUserData;
    }

    public async createLoading(): Promise<HTMLIonLoadingElement> {
        let loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...'
        });
        return loading;
    }

    public getItem(key: string){
        this.secureStorage.create('private_storage')
            .then((storage) => {
                storage.get(key)
                    .then((data) => {
                        console.log(key + ": " + data)
                    })
                    .catch((error) => {
                        console.log("error" + error)
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public storeItem(key: string, data: any) {
        this.secureStorage.create('private_storage')
            .then((storage) => {
                storage.set(key, data)
                    .then((data) => {
                        console.log("set: " + data)
                    })
                    .catch((error) => {
                        console.log("error" + error)
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public async createAlert(header: string, messageAlert: string, text: string): Promise<HTMLIonAlertElement> {
        let alert = await this.alertController.create({
            header: header,
            message: messageAlert,
            buttons: [
                {
                    text: text,
                    handler: () => {
                    }
                }
            ]
        });
        return alert;
    }

    public async alertPresent(header: string, message: string, text: string) {
        await this.createAlert(header, message, text).then(async (Result) => {
            this.alert = await Result;
        });
        await this.alert.present();
    }

    public async alertDismiss() {
        await this.alert.dismiss();
    }

    public async loadingPresent() {
        await this.createLoading().then(async (Result) => {
            this.loading = await Result;
        });
        await this.loading.present();
    }

    public async loadingDismiss() {
        await this.loading.dismiss();
    }
}
