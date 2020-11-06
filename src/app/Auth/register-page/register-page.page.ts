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

	/* VARIABLES DEL FORMULARIO */
    get email(){   return this.RegisterForm.get("email"); }
	get pass(){     return this.RegisterForm.get('pass');   }
	get pass2(){   return this.RegisterForm.get('pass2');   }

    /* MENSAJES DE ERROR DURANTE LLENADO DE DATOS */
    public errorMessages = {
        email: [
            { type: 'required', message: 'Debes añadir un correo'},
            { type: 'pattern', message: 'El texto ingresado no parece ser un correo electrónico' }
            ],
        pass: [
            { type: 'required', message: 'Debes añadir una contraseña'},
            { type: 'maxlength', message: 'Tu contraseña no puede exceder los 50 carácteres' },
            { type: 'minlength', message: 'Debes de ingresar al menos 8 carácteres' },
			],
		pass2: [
			{ type: 'required', message: 'Debes añadir una contraseña'},
			{ type: 'maxlength', message: 'Tu contraseña no puede exceder los 50 carácteres' },
			{ type: 'minlength', message: 'Debes de ingresar al menos 8 carácteres' },
			],
	};

	/* REGLAS DEL FORMULARIO */
    RegisterForm = this.formBuilder.group({
        email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
		pass: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8),]],
		pass2: ['', [Validators.required, Validators.maxLength(50) ]],
	});

	/* CONSTRUCTOR */
	constructor(
		private router: Router,
		private authService: AuthService,
		private utils: Utils,
		private formBuilder: FormBuilder
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

		this.authService.register(this.UserData).then((subscriber) => {
			subscriber.subscribe(
				(response: (any)) => {
					let item = JSON.stringify(this.utils.buildAccessData(response));
					console.log(item);
					this.utils.storeItem('AccessDataUser',  item).then(() =>{
						this.router.navigate(['/home']);
					});
				},
				(errors: (any)) => {
					this.utils.loadingDismiss();
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
}
