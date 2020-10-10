import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { User } from 'src/app/Models/Classes/user';
import { Utils } from 'src/app/Models/Classes/utils';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.page.html',
	styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
	public UserData: User;
	private utils: Utils;
	constructor(
		private router: Router,
        private authService: AuthService,
	) { 
		this.UserData = new User();
        this.utils = new Utils();
	}

	ngOnInit() {

	}

	async registerForm() {
		await this.utils.loadingPresent();
		this.authService.register(this.UserData).subscribe(
			(Response: (any)) => {
				let navigationExtras: NavigationExtras = {
					queryParams: {
						accessdata: JSON.stringify(this.utils.buildAccessData(Response))
					},
					replaceUrl: true,
				};
				this.utils.setStoreItem('AccessDataUser', JSON.stringify(this.utils.buildAccessData(Response)));
				this.utils.loadingDismiss();
				this.router.navigate(['/home'], navigationExtras);
			},
			(Errors: (any)) => {
				this.utils.loadingDismiss();
				this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
			},
			() => {
				this.utils.loadingDismiss();
			}
		);
	}

	public LoginPage() {
		this.router.navigate(['/login'], { replaceUrl: true });
	}
}
