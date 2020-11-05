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
	constructor(
		private router: Router,
		private authService: AuthService,
		private utils: Utils,
	) { 
		this.UserData = new User();
	}

	ngOnInit() {

	}

	async registerForm() {
		await this.utils.loadingPresent();
		this.authService.register(this.UserData).then((subscriber) => {
			subscriber.subscribe(
				(response: (any)) => {
					this.utils.storeItem('AccessDataUser', this.utils.buildAccessData(response));
					this.router.navigate(['/home']);
				},
				(errors: (any)) => {
					this.utils.alertPresent('Errors', this.utils.buildErrors(errors), 'OK');
				},
				() => {
					this.utils.loadingDismiss();
				}
			);
		}).catch((error)=>{
			console.log(error);
		});
	}

	public LoginPage() {
		this.router.navigate(['/login'], { replaceUrl: true });
	}
}
