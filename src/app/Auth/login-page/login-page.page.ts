import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { User } from 'src/app/Models/Classes/user';
import { Utils } from 'src/app/Models/Classes/utils';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.page.html',
    styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
    private UserData: User;
    private utils: Utils;

    /* VARIABLES DEL FORMULARIO */
    get email(){   return this.LoginForm.get("email"); }
    get pass(){     return this.LoginForm.get('pass');   }

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
            ]
    };

    /* REGLAS DEL FORMULARIO */
    LoginForm = this.formBuilder.group({
        email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
        pass: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8),]],
    });
    
    /* CONSTRUCTOR */
    constructor(
        private router: Router,
        private authService: AuthService,
        private formBuilder: FormBuilder,
    ) {
        this.UserData = new User();
        this.utils = new Utils();
    }

    ngOnInit() {

    }

    /* FUNCIÓN SUBMIT Se activa para enviar los datos en el formulario */
    public async submit() {

        /* Loading Mensaje */
        await this.utils.loadingPresent();

        this.UserData.email =  this.LoginForm.get('email').value;
        this.UserData.password =  this.LoginForm.get('pass').value;

        this.authService.login(this.UserData).subscribe(
            async (Response: (any)) => {
                await this.utils.storeItem('AccessDataUser', JSON.stringify(this.utils.buildAccessData(Response))).then((data)=> {
                    this.utils.loadingDismiss();
                    this.router.navigate(['/social']);
                }).catch((error) => {
                    console.log(error);
                });
                this.utils.loadingDismiss();
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

}
