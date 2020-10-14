import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Utils } from '../Models/Classes/utils';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	private userAuthenticated = false;
	private utils: Utils;

	constructor(
		private router: Router,
	) { 
		this.utils = new Utils();
	}
	async canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean | UrlTree> {
		console.log("entra");
		let promise = await this.utils.getAccessData().then((data) => {
			console.log(data);
			return this.router.parseUrl('social');
		}).catch((error) => {
			console.log(error)
			return true;
		});

		return promise;
	}
}
