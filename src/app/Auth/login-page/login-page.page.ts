import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { User } from 'src/app/Models/Classes/user';
import { Utils } from 'src/app/Models/Classes/utils';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.page.html',
    styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
    constructor(
        private router: Router,
        private UserData: User,
        private authService: AuthService,
        private utils: Utils
    ) { }

    async ngOnInit() {

    }

    public async loginForm() {
        console.log('entrar login');
        await this.utils.loadingPresent();
        this.authService.login(this.UserData).subscribe(
            async (Response: (any)) => {
                console.log(Response);
                await this.utils.storeItem('AccessDataUser', JSON.stringify(this.utils.buildAccessData(Response))).then((data)=> {
                    this.utils.loadingDismiss();
                    this.router.navigate(['/social']);
                }).catch((error) => {
                    console.log(error);
                });
                this.utils.loadingDismiss();
            },
            (Errors: (any)) => {
                console.log(Errors);
                this.utils.loadingDismiss();
                this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
            },
            () => {
                this.utils.loadingDismiss();
            }
        );
    }

    public RegisterPage() {
        this.router.navigate(['/register'], { replaceUrl: true });
    }

}
