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
		this.authService.register(this.UserData).subscribe(
			(Response: (any)) => {
				this.utils.storeItem('AccessDataUser', this.utils.buildAccessData(Response));
				this.utils.loadingDismiss();
				this.router.navigate(['/home']);
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
