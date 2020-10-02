import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { User } from 'src/app/Models/Classes/user';
import { Utils } from 'src/app/Models/Classes/utils';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.page.html',
    styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
    private UserData: User;
    private utils: Utils;
    constructor(
        private router: Router,
        private authService: AuthService,
    ) {
        this.UserData = new User();
        this.utils = new Utils();
    }

    async ngOnInit() {
    }

    async ionViewDidEnter(){
        
    }

    public async loginForm() {
        await this.utils.loadingPresent();
        this.authService.login(this.UserData).subscribe(
            (Response: (any)) => {
                //console.log(Response);
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        accessdata: JSON.stringify(this.utils.buildAccessData(Response))
                    },
                    replaceUrl: true,
                };
                this.utils.storeItem('AccessDataUser', this.utils.buildAccessData(Response));
                this.utils.loadingDismiss();
                this.router.navigate(['/social'], navigationExtras);
            },
            (Errors: (any)) => {
                this.utils.loadingDismiss();
                this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
            },
            () => {
                this.utils.loadingDismiss();
                console.log("Terminó")
            }
        );
    }

    public RegisterPage() {
        this.router.navigate(['/register'], { replaceUrl: true });
    }

}
