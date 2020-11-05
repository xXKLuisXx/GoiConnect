import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Classes/user';
import { Utils } from 'src/app/Models/Classes/utils';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

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

 	/* FUNCIÓN SUBMIT Se activa para enviar los datos en el formulario */
	public async submit() {
		await this.utils.loadingPresent();

		this.UserData.email =  this.RegisterForm.get('email').value;
		this.UserData.password =  this.RegisterForm.get('pass').value;
		this.UserData.password_confirmation =  this.RegisterForm.get('pass2').value;

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
